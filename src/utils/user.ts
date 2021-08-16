import { User } from '../screens/project-list/search-panel'
import { useAsync } from './use-async'
import { useHttp } from './http'
import { cleanObject, useMount } from './index'

export const useUsers = (param: Partial<User>) => {
    const {run, ...result} = useAsync<User[]>()
    const client = useHttp()

    useMount(() => {
        run(client('/users', {data: cleanObject(param || {})}))
    })

    return result
}