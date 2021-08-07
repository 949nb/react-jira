import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => value === 0 ? false : !value;


export const cleanObject = (object: object) => {
    const result = {...object}

    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const debounce = (func: () => void, delay?: number) => {
    let timeout: number | NodeJS.Timeout
    return () => {
        if (timeout && timeout instanceof NodeJS.Timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func()
        }, delay)
    }
}

// 后面用泛型来规范类型
export const useDebounce = (value: any, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay)

        // 每次在上一个useEffect处理完再运行，清理上一次定时器
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}
