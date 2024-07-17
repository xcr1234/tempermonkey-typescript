# 油猴脚本脚手架

特性
- TypeScript完全支持
- 最新版本放弃旧webpack编译，用vite编译
- 热更新部署 每次更新会自动同步到油猴中，不需要手动复制粘贴！


## 使用方式

clone本项目，然后执行

```
npm install -g yarn
yarn
```

## 开发

一个完整的油猴脚本格式如下

```javascript
// ==UserScript==

// 这部分是头部区域，一般来说不会经常修改

// ==/UserScript==

// 这里是正文，也就是脚本的执行部分，是需要经常修改的
console.log('hello world')
```

## 头部区域

头部区域的开发是在`header/index.ts`，使用了typescript，这样会有IDE完全支持，而不是单纯的写几个注释

![img](https://pic.imgdb.cn/item/6506d2f7661c6c8e5458afce.png)

开发完毕后不需要手动编译

## 正文

正文开发是在`src/index.ts`，在开发时，如果使用到`GM_`相关函数，有完整的声明支持：

![img](https://pic.imgdb.cn/item/6506d31d661c6c8e5458b3b2.png)

## 热部署

1.先执行 `yarn build` 编译一次，编译结果为 `dist/main.js`

2.执行 `yarn start:server` 启动 `http://localhost:7000`服务

默认用户名/密码为`derjanb / secret`

在油猴中设置

![img](https://pic.imgdb.cn/item/6506d353661c6c8e5458beb1.png)


3.点 + ，把第1步编译的结果`dist/main.js`粘贴进去 保存

![img](https://pic.imgdb.cn/item/6506d37a661c6c8e5458c3a0.png)

![img](https://pic.imgdb.cn/item/6506d37a661c6c8e5458c389.png)

![img](https://pic.imgdb.cn/item/6506d37a661c6c8e5458c393.png)

4.执行 `yarn build:sync`进行编译，就会自动同步到油猴中了，不需要手动粘贴！

## 发布

执行 `yarn build` 编译最新的文件

## 备注

本项目中引用以下资源

[tempermonkey.d.ts](https://www.cnblogs.com/stumpx/p/15211436.html)

[server.cjs](https://github.com/Tampermonkey/tamperdav/blob/master/server.js)  （有修改）