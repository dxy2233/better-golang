package main

import (
	"fmt"
	"strings"
)

// push
func push(gitPath, svnPath, projectName string) {
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
		_, err := npm("svn delete "+target, svnCommitPath)
		if err != nil {
			return
		}
	}
	fmt.Println("--------------------delete over--------------------")

	// svn提交
	svnCommitInfo, err := npm("svn commit -m '"+commit+"'", svnCommitPath)
	if err != nil {
		return
	}
	if svnCommitInfo == "" {
		fmt.Println("--------------------none commit--------------------")
		return
	}
	fmt.Println("--------------------commit over--------------------")

	// email
	// user pwd host to配置在本地文件
	subject := "svn更新-三同步-" + projectName
	body := "<div>" + commit + "</div>"
	emailErr := sendEmail(user, pwd, host, to, subject, body, "html")
	if emailErr != nil {
		fmt.Println("发送邮件错误！")
	} else {
		fmt.Println("--------------------email over--------------------")
	}
}

func pull(gitPath, svnPath string) {
	// 清除旧文件
	clearErr := clearPath(gitPath)
	if clearErr != nil {
		return
	}
	fmt.Println("--------------------clear over--------------------")

	// 拷贝新文件
	cpErr := cpFile(svnPath, gitPath)
	if cpErr != nil {
		return
	}
	fmt.Println("--------------------copy over--------------------")
}
