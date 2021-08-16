import { Form, Input, Select } from 'antd'

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string
}

interface SearchPanelProps {
    users: User[],
    param: {
        name: string;
        personId: string;
    },
    setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {

    return <Form style={ {marginBottom: '2rem'} } layout={ "inline" }>
        <Form.Item>
            <Input
                placeholder={ '项目名' }
                type="text"
                value={ param.name }
                onChange={ evt => setParam({
                    ...param,
                    name: evt.target.value
                }) }/>
        </Form.Item>
        <Form.Item className="item">
            <Select
                placeholder={"请选择负责人"}
                value={ param.personId } onChange={ value => setParam({
                ...param,
                personId: value
            }) }>
                {
                    users.map(user => <Select.Option key={ user.id } value={ user.id }>{ user.name }</Select.Option>)
                }
            </Select>
        </Form.Item>
    </Form>

}