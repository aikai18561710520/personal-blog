import {BackTop, Col, Layout, Row} from 'antd'
import * as React from 'react'
import {ReactHTML} from 'react'
import Header from '../Layout/Header/Header'
import SideBar from '../Layout/SideBar/sideBar'
import {LayoutWrapper} from './style'
interface IProps {
    children : ReactHTML,
    searchArticles : (content : string) => void,
    home : IHome
}

interface IHome {
    list : object[],
    searchContent : string
}
const {Content} = Layout

class App extends React.Component < IProps > {
    public render() {
        const {children, searchArticles} = this.props
        console.log(this.props);
        return (
            <LayoutWrapper>
                <BackTop/>
                <Header/>
                <Layout>
                    <Content>
                        <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5}/>
                        <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                                    {children}
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={24}
                                    lg={{
                                    offset: 1,
                                    span: 6
                                }}
                                    xl={{
                                    offset: 1,
                                    span: 6
                                }}
                                    xxl={{
                                    offset: 1,
                                    span: 6
                                }}>
                                    <SideBar
                                        searchContent={this.props.home.searchContent}
                                        list={this.props.home.list}
                                        searchArticles={searchArticles}/>
                                </Col>
                            </Row>
                        </Col>
                    </Content>
                </Layout>
            </LayoutWrapper>
        )
    }
}

export default App
