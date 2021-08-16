import { useAsync } from './use-async'
import { Project } from '../screens/project-list/list'
import { useHttp } from './http'
import { cleanObject } from './index'
import { useEffect } from 'react'

export const useProjects = (param?: Partial<Project>) => {
    const {run, ...result} = useAsync<Project[]>()
    const client = useHttp()

    useEffect(() => {
        run(client('/projects', {data: cleanObject(param || {})}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param])
    return result
}