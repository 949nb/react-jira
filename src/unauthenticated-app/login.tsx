import { useAuth } from '../context/auth-context'
import { Button, Form, Input } from 'antd'
import { LongButton } from './index'

export const LoginScreen = () => {
    const { login } = useAuth()

    const handleSubmit = (values: {username: string, password: string}) => {
        login(values)
    }


    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder={'请输入用户名'} type="text" id="username"/>
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
            <Input placeholder={'请输入密码'} type="password" id='password'/>
        </Form.Item>
        <LongButton htmlType={'submit'} type={"primary"}>登陆</LongButton>
    </Form>
}