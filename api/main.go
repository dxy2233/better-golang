package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"sort"

	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

// Docs api文档数据最外层
type Docs struct {
	Definitions map[string]interface{} `json:"definitions "`
	Paths       map[string]interface{} `json:"paths"`
	Tags        []interface{}          `json:"tags"`
}

// Quote 文件模板的引用值
type Quote struct {
	APIName string
	Summary string
	URL     string
	Method  string
	Params  []interface{}
}

func getDocs(url string) (Docs, error) {
	// 获取文档
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
		return Docs{}, err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return Docs{}, err
	}
	data := new(Docs)
	json.Unmarshal(body, data)
	// 组合数据以文件为块
	strSlice := []string{}
	for k := range data.Paths {
		strSlice = append(strSlice, k)
	}
	sort.Sort(sort.StringSlice(strSlice))
	for _, item := range strSlice {
		val := data.Paths[item].(map[string]interface{})
		apiObj := make(map[string]interface{})
		apiObj["url"] = item
		if _, ok := val["get"]; ok {
			apiObj["method"] = "get"
			apiObj["content"] = val["get"]
		}
		if _, ok := val["post"]; ok {
			apiObj["method"] = "post"
			apiObj["content"] = val["post"]
		}
		for _, item := range data.Tags {
			item := item.(map[string]interface{})
			if _, ok := item["api"]; !ok {
				item["api"] = []interface{}{}
			}
			tag := apiObj["content"].(map[string]interface{})["tags"].([]interface{})[0]
			if item["name"] == tag {
				api := item["api"].([]interface{})
				item["api"] = append(api, apiObj)
				break
			}
		}
	}
	return *data, nil
}

func createFile(data Docs) error {
	for _, item := range data.Tags {
		// 生成文件名
		item := item.(map[string]interface{})
		nameSlice := strings.Split(item["description"].(string), " ")
		nameSlice = nameSlice[0 : len(nameSlice)-1]
		nameSlice[0] = strings.ToLower(nameSlice[0])
		fileName := strings.Join(nameSlice, "")
		// 写入文件
		f, err := os.Create("./api/" + fileName + ".js")
		defer f.Close()
		if err != nil {
			fmt.Println(err)
			return err
		}
		_, writeErr := f.WriteString(textTemplate(item["api"]))
		if writeErr != nil {
			fmt.Println(writeErr)
			return err
		}
	}
	return nil
}

// 文件模板
func textTemplate(input interface{}) string {
	data := input.([]interface{})
	res := `import request from '@/utils/request'
`
	for _, item := range data {
		item := item.(map[string]interface{})
		url := item["url"].(string)
		apiName := url[strings.LastIndex(url, "/")+1:]
		params := []interface{}{}
		if item["method"] == "get" && item["content"].(map[string]interface{})["parameters"] != nil {
			params = item["content"].(map[string]interface{})["parameters"].([]interface{})
		}
		if item["method"] == "post" && item["content"].(map[string]interface{})["parameters"] != nil {
			adress := item["content"].(map[string]interface{})["parameters"].([]interface{})[0].(map[string]interface{})["schema"]
			if adress != nil {
				fmt.Println(item)
				fmt.Println(adress)
				str := adress.(map[string]interface{})["$ref"].(string)
				fmt.Println(str)
				BOName := str[strings.LastIndex(str, "/")+1:]
				fmt.Println(BOName)
			}
		}
		res = res + `
/**
 * @description {{.Summary}}{{range $index, $item := .Params}}
 * @param {{$item.name}} {{$item.description}}{{end}}
 */
export function {{.APIName}}(data) {
  return request({
	url: '{{.URL}}',
	method: '{{.Method}}',
	{{if eq .Method "get"}}prams: {{end}}data,
  })
}
`
		// 解析模板语法
		t, _ := template.New("tem").Parse(res)
		buf := new(bytes.Buffer)
		valus := Quote{
			APIName: apiName,
			Summary: item["content"].(map[string]interface{})["summary"].(string),
			URL:     item["url"].(string),
			Method:  item["method"].(string),
			Params:  params}
		t.Execute(buf, valus)
		res = buf.String()
	}
	return res
}

func main() {
	// 获取 && 整理api文档
	data, err := getDocs("http://192.168.0.105:8090/v2/api-docs")
	if err != nil {
		return
	}
	// 生成文件
	createFile(data)
}
