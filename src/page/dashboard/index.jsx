import React from 'react'
import { Row, Col, Card } from 'antd'

class Dashboard extends React.Component {
    render() {
        console.log(this.setState.loginData)
        return (
            <Row gutter={16}>
                <Col className="gutter-row" md={12}>
                    <Card title="标题1" bordered={false}>内容1</Card>
                </Col>
                <Col className="gutter-row" md={12}>
                    <Card title="标题2" bordered={false}>内容2</Card>
                </Col>
                <Col className="gutter-row" md={12}>
                    <Card title="标题3" bordered={false}>内容3</Card>
                </Col>
            </Row>
        )
    }
}

export default Dashboard