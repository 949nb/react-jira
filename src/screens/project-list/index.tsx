import { SearchPanel } from './search-panel'
import { List } from './list'
import { useEffect, useState } from 'react'
import * as qs from 'qs'
import { cleanObject, useDebounce, useMount } from '../../utils'


const ApiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {

    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])

    let DebounceParam = useDebounce(param, 1000)

    useEffect(() => {
        fetch(ApiUrl + `/projects?${qs.stringify(cleanObject(DebounceParam))}`)
            .then(async res => {
                if (res.ok) {
                    setList(await res.json())
                }
            })
    }, [DebounceParam])
    useMount(() =>
        fetch(ApiUrl + '/users')
            .then(async res => {
                if (res.ok) {
                    setUsers(await res.json())
                }
            })
    )

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}
