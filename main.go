package main

import (
	"errors"
	"fmt"
	"strings"
)

var (
	gitPath     = "d:/engin-three/name"
	svnPath     = "d:/three/name/code"
	projectList = [...]string{"yys"}
)

func main() {
	// 输入项目与type
	config := inputText("输入项目和类型(yys push)")
	configArray := strings.Split(config, " ")
	projectName := configArray[0]
	projectType := configArray[1]
	nameErr := errors.New("error------项目名错误")
	for _, v := range projectList {
		if v == projectName {
			nameErr = nil
		}
	}
	if nameErr != nil {
		fmt.Println(nameErr)
		return
	}
	if projectType != "push" && projectType != "pull" {
		err := fmt.Errorf("error------类型错误")
		fmt.Printf("%v", err)
		return
	}
	gitPath = strings.Replace(gitPath, "name", projectName, -1)
	svnPath = strings.Replace(svnPath, "name", projectName, -1)

	// 验证路径
	err := testPath(gitPath, svnPath)
	if err != nil {
		return
	}

	// push || pull
	if projectType == "push" {
		push(gitPath, svnPath, projectName)
	} else {
		pull(gitPath, svnPath)
	}

	// 阻塞，输入退出
	wq := inputText("输入任意字符退出")
	fmt.Println(wq)
}
