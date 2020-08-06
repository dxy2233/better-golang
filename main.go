package main

import (
	"fmt"
	"strings"
)

const (
	gitPath = "d:/engin-three/yys"
	svnPath = "d:/three/yys/code"
)

func main() {
	// 验证路径
	err := testPath(gitPath, svnPath)
	if err != nil {
		return
	}

	// 输入commit
	commit := inputText("请输入commit")

	// 清除旧文件
	clearErr := clearPath(svnPath)
	if clearErr != nil {
		return
	}
	fmt.Println("--------------------clear over--------------------")

	// 拷贝新文件
	cpErr := cpFile(gitPath, svnPath)
	if cpErr != nil {
		return
	}
	fmt.Println("--------------------copy over--------------------")

	// build
	_, buildErr := npm("npm run build", svnPath)
	if buildErr != nil {
		return
	}
	fmt.Println("--------------------build over--------------------")

	svnCommitPath := svnPath[:strings.LastIndex(svnPath, "/")]

	// svn add
	_, svnAddErr := npm("svn add * --force", svnCommitPath)
	if svnAddErr != nil {
		return
	}
	fmt.Println("--------------------add over--------------------")

	// svn delete
	statusInfo, err := npm("svn status", svnCommitPath)
	if err != nil {
		return
	}
	outArray := strings.Split(statusInfo, "\r\n")
	resArray := make([]string, 0)
	for _, v := range outArray {
		if len(v) > 0 && string(v[0]) == "!" {
			resArray = append(resArray, v)
		}
	}
	for _, v := range resArray {
		target := strings.TrimSpace(v[1:])
		fmt.Println(target)
		_, err := npm("svn delete "+target, svnCommitPath)
		if err != nil {
			return
		}
	}
	fmt.Println("--------------------delete over--------------------")

	// svn提交
	_, svnUploadErr := npm("svn commit -m "+commit, svnCommitPath)
	if svnUploadErr != nil {
		return
	}
	fmt.Println("--------------------commite over--------------------")

	// 阻塞，输入退出
	wq := inputText("输入任意字符退出")
	fmt.Println(wq)
}
