import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AllPage from '../page'
import routesConfig from './config'
const queryString = require('querystring')

// console.log(AllPage)
// console.log(routesConfig)
export default class CRouter extends React.Component {
    render() {
        // 根据用户roleId, 给予不同的页面权限
        let permissions = this.setState.loginData.roleId
        const arrary = ['普通用户', '管理员', '超级管理员']
        console.log('欢迎 ~ ' + arrary[permissions])
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key =>
                        routesConfig[key].map(result => {
                            const Component = AllPage[result.component]
                            return (
                                <Route
                                    key={result.key}
                                    exact
                                    path={result.key}
                                    render={props => {
                                        const reg = /\?\S*/g
                                        // 匹配?及其以后字符串
                                        const queryParams = window.location.hash.match(reg)
                                        // 去除?的参数
                                        const { params } = props.match
                                        Object.keys(params).forEach(key => {
                                            params[key] = params[key] && params[key].replace(reg, '')
                                        })
                                        props.match.params = { ...params }
                                        const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} }
                                        // 动态改变title
                                        document.title = result.title
                                        // 重新包装组件
                                        const wrappedComponent = (
                                            <Component {...merge} />
                                        )
                                        return wrappedComponent
                                    }}
                                />
                            )
                        })
                    )
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}