package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
)

// testPath 验证路径不为空
func testPath(path1, path2 string) error {
	_, err1 := os.Stat(path1)
	if err1 != nil {
		fmt.Println(err1)
		return err1
	}
	_, err2 := os.Stat(path2)
	if err2 != nil {
		fmt.Println(err2)
		return err2
	}
	return nil
}

// clearPath 清除目录
func clearPath(path string) error {
	fs, _ := ioutil.ReadDir(path)
	for _, v := range fs {
		if v.Name() != "node_modules" {
			err := exec.Command("powershell", "rm"+" "+"-r"+" "+path+"/"+v.Name()).Run()
			if err != nil {
				fmt.Println(err)
				return err
			}
		}
	}
	return nil
}

// cpFile 拷贝新文件
func cpFile(gitPath, svnPath string) error {
	fs, _ := ioutil.ReadDir(gitPath)
	for _, v := range fs {
		if v.Name() != "node_modules" && v.Name() != ".git" {
			err := exec.Command("powershell", "cp"+" "+"-r"+" "+gitPath+"/"+v.Name()+" "+svnPath).Run()
			if err != nil {
				fmt.Println(err)
				return err
			}
		}
	}
	return nil
}

// inputText 命令行输入
func inputText(prompt string) string {
	text := ""
	input := bufio.NewScanner(os.Stdin)
	fmt.Printf("%s\n", prompt)
	for input.Scan() {
		if input.Text() != "" {
			text = input.Text()
			break
		}
	}
	return text
}

// npm npm命令
func npm(order, path string) (string, error) {
	cmd := exec.Command("powershell", order)
	cmd.Dir = path
	out, err := cmd.Output()
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	fmt.Println(string(out))
	return string(out), nil
}
