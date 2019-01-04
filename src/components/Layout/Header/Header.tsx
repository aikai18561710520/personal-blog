import {Col, Layout, Row} from 'antd'
import * as React from 'react'
import {HeaderBox, Title} from './style'

const {Header} = Layout
const HeaderDom = () => {
    return (
        <HeaderBox>
            <Header>
                <Row>
                    <Col md={0} lg={1} xl={3} xxl={5}/>
                    <Col md={22} lg={20} xl={18} xxl={14}>
                        <Title>Irving</Title>
                    </Col>
                </Row>
            </Header>
        </HeaderBox>
    )
}

export default HeaderDom
