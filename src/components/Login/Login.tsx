import * as React from 'react'

import {Button, Form, Icon, Input} from 'antd'
const FormItem = Form.Item
import {LoginBox} from './style'
class Login extends React.Component {
    public render() {
        return (
            <LoginBox>
                <Form className="login_form login_form">
                    <FormItem>
                        <Input prefix={< Icon type = "user" />} type="text" placeholder="请输入用户名"/>
                    </FormItem>
                    <FormItem>
                        <Input prefix={< Icon type = "lock" />} type="password" placeholder="请输入密码"/>
                    </FormItem>
                    <FormItem>
                        <Button icon="login">登录</Button>
                    </FormItem>
                </Form>
            </LoginBox>
        )
    }
}

export default Login
