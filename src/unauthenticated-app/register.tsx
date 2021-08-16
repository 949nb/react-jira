import { useAuth } from '../context/auth-context'
import { Form, Input } from 'antd'
import { LongButton } from './index'
import { useAsync } from '../utils/use-async'

export const RegisterScreen = ({onError}: { onError: (error: Error) => void }) => {
    const {register} = useAuth()
    const {run, isLoading} = useAsync()

    const handleSubmit = (values: { username: string, password: string, ConfirmPassword: string }) => {
        if (values.ConfirmPassword !== values.password) {
            onError(new Error('请确认两次输入的密码相同'))
            return
        }
        run(register(values).catch(e => onError(e)))
    }


    return <Form onFinish={ handleSubmit }>
        <Form.Item name={ 'username' } rules={ [{required: true, message: '请输入用户名'}] }>
            <Input placeholder={ 'username please!' } type="text" id="username"/>
        </Form.Item>
        <Form.Item name={ 'password' } rules={ [{required: true, message: '请输入密码'}] }>
            <Input placeholder={ 'password please!' } type="password" id='password'/>
        </Form.Item>
        <Form.Item name={ 'ConfirmPassword' } rules={ [{required: true, message: '请确认密码'}] }>
            <Input placeholder={ 'Rewrite Password!' } type="password" id='ConfirmPassword'/>
        </Form.Item>
        <LongButton loading={isLoading} htmlType={ "submit" } type={ 'primary' }>register</LongButton>
    </Form>
}