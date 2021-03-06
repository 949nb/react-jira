import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState } from 'react'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useProjects } from '../../utils/project'
import { useUsers } from '../../utils/user'


export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const {isLoading, error, data: list} = useProjects(param)
    const {data: users} = useUsers(param)

    return <Container>
        <h1>Project List</h1>
        <SearchPanel param={ param } setParam={ setParam } users={ users || [] }/>
        { error ? <Typography.Text type={ 'danger' }>{ error.message }</Typography.Text> : null }
        <List loading={ isLoading } dataSource={ list || [] } users={ users || [] }/>
    </Container>

}

const Container = styled.div`padding: 3.2rem`

