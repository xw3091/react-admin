import React, { Component } from 'react'
import { Layout } from 'antd'
import Routes from '../routes'
import { getToken, getData } from '../utils'
const { Header, Sider, Content, Footer } = Layout

class AppLayout extends Component {
  constructor(props) {
    super(props)
    // 公共数据
    this.state = {
      loginData: ''
    }
  }
  componentWillMount() {
    // 获取当前浏览器宽度并设置responsive管理响应式
    //   console.log(window.innerWidth < 992 ? 'mobile' : 'PC')
    window.onresize = () => {
      // console.log(window.innerWidth < 992 ? 'mobile' : 'PC')
    }
    // 用户登录信息
    const data = {
      userId: Number(getData('userId')),
      roleId: Number(getData('roleId')),
      token: getToken(),
      userName: getData('userName')
    }
    this.setState.loginData = data
  }
  render() {
    return (
      <Layout props={this.setState.loginData}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Routes/>
          </Content>
          <Footer>
            React-Admin ©{new Date().getFullYear()} Created by XU
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AppLayout