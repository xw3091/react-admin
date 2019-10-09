import React from 'react'
import { Form, Icon, Input, Button, Card, Alert } from 'antd'
import { saveLogin, setData, getData } from '../../utils'
import logo from '../../style/imgs/logo.png'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 接口请求路径
            url: 'user_login',
            visible: false
        }
    }
    componentDidMount() {
        // setFieldsValue方法动态设置input值
        this.props.form.setFieldsValue({ userName: getData('userName') })
        this.props.form.setFieldsValue({ password: getData('password') })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 是否包含空格
                let test = /[A-Za-z0-9]{3,18}/
                if (test.test(values.userName) && test.test(values.password)) {
                    // 错误提示消失
                    this.setState({ visible: false })
                    let url = this.state.url
                    // 请求参数
                    let params = { userName: values.userName, password: values.password }
                    saveLogin(url, params)
                    // 登录成功,跳转主页
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 500)
                    setData('userName', values.userName)
                    setData('password', values.password)
                } else {
                    // 账号密码包含空格,显示提示信息
                    this.setState({ visible: true })
                }
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login'>
                <div className='login_style'>
                    <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
                        <Form.Item>
                            <Card
                                hoverable
                                className='card_style'
                                cover={<img alt="logo" src={logo} />}
                            >
                            </Card>
                            <Card className='card_title_style'>
                                <p>React Admin</p>
                            </Card>
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please enter userName!' }]
                            })(
                                <Input className='input_style' prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="userName" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please enter password!' }]
                            })(
                                <Input.Password className='input_style' prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {this.state.visible ? (
                                <Alert message="用户名或密码格式不正确,(3~18位字母或数字)" type="warning" showIcon />
                            ) : null}
                        </Form.Item>
                        <Form.Item>
                            <Button className='button_style' htmlType="submit">Go Login</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)