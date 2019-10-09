```js
// 1.依赖包加载
    yarn
// 2.启动项目
    yarn start
// 3.项目打包
    yarn build
// 暴露配置文件
    yarn eject
```

```js
// create-react-app 脚手架搭建
    yarn add create-react-app
    create-react-app react-demo
    cd react-demo
    yarn starty
```

```js
// 技术选型
    antd // UI库
    less // 样式
    less-loader // less转换css
    axios // 接口请求
    rap2 // 接口模拟
    react-router-dom // 路由操作
    redux // 状态管理
    redux-thunk // redux中间键
```

```js
// redux方法
    import store from './store'
    import { saveData } from './store/actions'
    store.dispatch(saveData) // 使用方法,改变值
    store.getState() // 获取数据
```