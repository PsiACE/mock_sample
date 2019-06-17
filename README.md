# Mock Sample

> 创建该示例仅仅是因为需要更新到 gulp4

本地 Mock 服务构建示例，使用 json-server 作为 mock 服务器，mock.js 生成随机数据，gulp + nodemon + browser-sync 监听 mock 文件的更改实现动态更新。

## 体验

在测试本示例前，执行 `npm install -g gulp-cli` 安装 gulp 命令行工具。

```
git clone git@github.com:PsiACE/mock_sample.git
or
git clone https://github.com/PsiACE/mock_sample.git

cd mock_sample
npm install

npm run mock
or
gulp dev
```

## 问题

Linux 下，如果执行时遇到

> Fatal error: ENOSPC: System limit for number of file watchers reached

执行下述命令即可

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
sudo sysctl --system
```

## 致谢

本示例参考 [纯手工打造前端后端分离项目中的 mock-server](https://yanm1ng.github.io/2017/06/12/纯手工搭建本地-mock-服务打造前端后端分离项目中的mock-server/) 和 [taro-library : 搭建本地-mock-服务](https://github.com/imageslr/taro-library#) 创建。
