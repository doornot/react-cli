### A simple react-cli powered by React16、Webpack4 and Babel 7

### 一、Getting Started

1. Clone this repo

2. Install dependencies

```sh
npm install
```

3. 本地启动开发环境

```sh
npm run dev
```

4. 打包线上文件

```sh
npm run build
```

### 二、webpack4、babel7、scss

1、webpack4零配置的概念适用于：

* entry point(入口点) 默认为 ./src/index.js
* output(输出) 默认为 ./dist/main.js
* production(生产) 和 development(开发) 模式 （无需为生产和开发环境创建2个单独的配置）。

2、babel7

* babel-loader：使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器
* @babel/core：即 babel-core，将 ES6 代码转换为 ES5
* @babel/preset-env：即 babel-preset-env，根据您要支持的浏览器，决定使用哪些 transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性
* @babel/preset-react：即 babel-preset-react，针对所有 React 插件的 Babel 预设，例如将 JSX 转换为函数
* 注：babel 7 使用了 @babel 命名空间来区分官方包，因此以前的官方包 babel-xxx 改成了 @babel/xxx

3、css/scss

参考：webpack -> loaders

* style-loader：将 JS 字符串生成为 style 节点再插入 html 的 head 标签中
* css-loader：将 CSS 转化成 CommonJS 模块
* node-sass：node-sass 和 webpack 是 sass-loader 的 peerDependency
* sass-loader：将 Sass 编译成 CSS
* postcss-loader：处理css(最常见：autoprefixer)
* autoprefixer：浏览器兼容补全
* mini-css-extract-plugin：提取样式表
* optimize-css-assets-webpack-plugin：CSS压缩
* cssnano：CSS compression Processor

### 三、TODOS

* 添加react-router、redux
* Typescript
* server(koa) | client(react)

### 四、参考

* 使用 Webpack 4 和 Babel 7 从头开始创建 React 应用程序 - IMWeb社区
* [译]Webpack 4 教程:从零配置到生产发布(2018) - css88
* [原]Webpack 4 Tutorial: from 0 Conf to Production Mode - valentinog
* 一口（很长的）气了解 babel - 知乎
