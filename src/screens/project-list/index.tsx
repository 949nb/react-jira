import { SearchPanel } from './search-panel'
import { List } from './list'
import { useEffect, useState } from 'react'
import { cleanObject, useDebounce, useMount } from '../../utils'
import { useHttp } from '../../utils/http'
import styled from '@emotion/styled'


export const ProjectListScreen = () => {

    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const client = useHttp()

    let DebounceParam = useDebounce(param, 1000)

    useEffect(() => {
        client('/projects', {data: cleanObject(DebounceParam)}).then(setList)
    }, [DebounceParam])
    useMount(() =>
        client('/users').then(setUsers)
    )

    return <Container>
        <h1>Project List</h1>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </Container>
}

const Container = styled.div`padding: 3.2rem`

