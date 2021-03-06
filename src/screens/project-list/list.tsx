import { User } from './search-panel'
import { Table } from 'antd'
import dayjs from 'dayjs'
import { TableProps } from 'antd/es'

export interface Project {
    id: string;
    name: string
    personId: string
    pin: string;
    organization: string
    created: number
}

interface ListProps extends TableProps<any> {
    users: User[]
}

export const List = ({users, ...props}: ListProps) => {
    return <Table
        rowKey={"id"}
        pagination={ false }
        columns={ [
            {
                title: '名称',
                dataIndex: 'name',
                sorter: (a, b) => a.name.localeCompare(b.name),
            },
            {
                title: '负责人',
                render(value, project) {
                    return users.find(user => user.id === project.personId)?.name || "未知"
                },
            },
            {
                title: '部门',
                dataIndex: 'organization',
            },
            {
                title: '创建时间',
                render(value, project) {
                    return <span>
                    { project.created ? dayjs(project.created).format('YYYY-MM-DD') : "无" }
                </span>
                }
            }
        ] }
        {...props}
    />
}