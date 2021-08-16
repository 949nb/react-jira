import { useAuth } from '../context/auth-context'
import { Button, Form, Input } from 'antd'
import { LongButton } from './index'

export const RegisterScreen = () => {
    const { register, user } = useAuth()

    const handleSubmit = (values: {username: string, password: string}) => {
        register(values)
    }


    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder={'username please!'} type="text" id="username"/>
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
            <Input placeholder={'password please!!'} type="password" id='password'/>
        </Form.Item>
        <LongButton htmlType={"submit"} type={'primary'}>register</LongButton>
    </Form>
}