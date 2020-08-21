package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"sort"
	"strconv"
	"strings"
	"text/template"

	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
)

// Quote 文件模板的引用值
type Quote struct {
	APIName string
	Summary string
	URL     string
	Method  string
	Params  []interface{}
}

func getDocs(url string) (string, error) {
	// 获取文档
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	data := string(body)
	// map保持原有排序
	strSlice := []string{}
	for k := range gjson.Get(data, "paths").Map() {
		strSlice = append(strSlice, k)
	}
	sort.Sort(sort.StringSlice(strSlice))
	// 组合数据以文件为块
	for _, url := range strSlice {
		info := gjson.Get(data, "paths."+url)
		apiObj, _ := sjson.Set("", "obj.url", url)
		if info.Map()["get"].Exists() {
			apiObj, _ = sjson.Set(apiObj, "obj.method", "get")
			apiObj, _ = sjson.Set(apiObj, "obj.content", info.Map()["get"].Value())
		}
		if info.Map()["post"].Exists() {
			apiObj, _ = sjson.Set(apiObj, "obj.method", "post")
			apiObj, _ = sjson.Set(apiObj, "obj.content", info.Map()["post"].Value())
		}
		for index, item := range gjson.Get(data, "tags").Array() {
			if !gjson.Get(item.String(), "api").Exists() {
				data, _ = sjson.Set(data, "tags."+strconv.Itoa(index)+".api", []interface{}{})
			}
			if item.Map()["name"].String() == gjson.Get(apiObj, "obj.content.tags.0").String() {
				data, _ = sjson.Set(data, "tags."+strconv.Itoa(index)+".api.-1", gjson.Get(apiObj, "obj").Value())
				break
			}
		}
	}
	return data, nil
}

func createFile(data string) error {
	for _, item := range gjson.Get(data, "tags").Array() {
		// 生成文件名
		nameSlice := strings.Split(item.Map()["description"].String(), " ")
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
		_, writeErr := f.WriteString(textTemplate(item.Map()["api"], gjson.Get(data, "definitions")))
		if writeErr != nil {
			fmt.Println(writeErr)
			return err
		}
	}
	return nil
}

// 文件模板
func textTemplate(apis, definitions gjson.Result) string {
	res := `import request from '@/utils/request'
`
	for _, item := range apis.Array() {
		apiObj := item.Map()
		url := apiObj["url"].String()
		apiName := url[strings.LastIndex(url, "/")+1:]
		// 注释信息params
		var params []interface{}
		if apiObj["content"].Map()["parameters"].Exists() {
			parameters := apiObj["content"].Map()["parameters"]
			if apiObj["method"].String() == "get" {
				params = parameters.Value().([]interface{})
			}
			if apiObj["method"].String() == "post" {
				schema := parameters.Array()[0].Map()["schema"]
				if schema.String() != "" {
					adress := schema
					if _, ok := schema.Map()["items"]; ok {
						adress = schema.Map()["items"]
					}
					str := adress.Map()["$ref"].String()
					BOName := str[strings.LastIndex(str, "/")+1:]
					BO := definitions.Map()[BOName].Map()["properties"]
					for k, v := range BO.Map() {
						param := map[string]string{
							"name":        k,
							"description": v.Map()["description"].String(),
						}
						params = append(params, param)
					}
				} else {
					params = parameters.Value().([]interface{})
				}
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
			Summary: apiObj["content"].Map()["summary"].String(),
			URL:     apiObj["url"].String(),
			Method:  apiObj["method"].String(),
			Params:  params}
		t.Execute(buf, valus)
		res = buf.String()
	}
	return res
}

func main() {
	// 获取 && 整理api文档
	data, err := getDocs("http://192.168.0.105:8088/v2/api-docs")
	if err != nil {
		return
	}
	// 生成文件
	createFile(data)
}
