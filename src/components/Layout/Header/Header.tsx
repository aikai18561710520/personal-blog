import {Col, Icon, Layout, Row} from 'antd'
import * as React from 'react'
import {Link} from 'react-router-dom'
import {HeaderBox, NavBar, PersonInfo, Signature, Title} from './style'
const {Header} = Layout
const IconStyle : object = {
    color: '#fff',
    fontSize: '14px'
}
const HeaderDom = () => {
    return (
        <HeaderBox>
            <Header className="ant_header">
                <Row>
                    <Col md={0} lg={1} xl={3} xxl={5}/>
                    <Col md={22} lg={20} xl={18} xxl={14}>
                        <Row>
                            <Col sm={24} md={20} lg={18} xl={16}>
                                <Title>Irving</Title>
                                <Signature>Just Do It</Signature>
                                <PersonInfo>
                                    <span className="item">
                                        <Icon style={IconStyle} type="environment"/>
                                        <span className="label">ShangHai, China</span>
                                    </span>
                                    <span className="item">
                                        <Icon style={IconStyle} type="github"/>
                                        <a className="label">aikai18561710520</a>
                                    </span>
                                </PersonInfo>
                            </Col>
                            <Col sm={0} md={4} lg={6} xl={8}>
                                <NavBar>
                                    <Link to={'/articles'} className="nav_item">首页</Link>
                                    <Link to={'/categories'} className="nav_item">分类</Link>
                                </NavBar>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Header>
        </HeaderBox>
    )
}

export default HeaderDom
