#基于 vue2 element-ui 升级 为 vue3 + vite 构建的财务后台管理系统(`vue3`+`vuex`+`axios`+`vue-router`+`element-plus`+`echarts`+`websocket`+`vue-i18n`)

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

---

### 本项目可以学到:

    1、学会使用vue2升级vue3构建项目.
    2、vue+vite构建，移除webpack。
    3、基于(pomise)封装axios的get、post等http请求.
    4、学会使用vue-router实现页面跳转带参.
    5、学会使用vuex状态管理.
    6、配套element-plus(主要对table的操作多)
    7、对element plus进行二次封装组件,提高复用性
    8、略微涉及echarts作图标分析
    9、使用websocket监听ele进度条状态
    10、使用vue-i18n实现国际化--中英文切换
    11、使用Ngprogress做加载,类似github loading bar

#### 安装

#### 项目地址：

（`git clone`）

```shell
git clone https://github.com/hzlshen/vue3-admin-plus.git
```

#### 通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
yarn
```

#### 启动服务(http://localhost:8080)

```
yarn dev
```

#### 发布代码

```
yarn build
```

#### 开发

#### 目录结构

<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── api            // ajax url 放置
│   ├── components     // 各种组件
│   ├── images         // 图片文件夹
│   ├── locales        // 国际化文件夹
│   ├── mock           // mock数据
│   ├── utils          // 通用方法封装
│   ├── views          // view页面
│   ├── router         // 页面路由
│   ├── store          // vuex状态管理器
│   ├── vite           // vite插件配置
│   ├── style          // 样式文件
│   └── main.js        // Webpack 预编译入口
</pre>

###项目截图
<br/>
![](https://github.com/hzlshen/Imgage_box/blob/master/vue-project1.png)

![](https://github.com/hzlshen/Imgage_box/blob/master/vue-project2.png)
