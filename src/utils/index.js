import { useEffect, useState } from 'react'

export const isFalsy = value => value === 0 ? false : !value;
export const cleanObject = object => {
    const result = {...object}

    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const debounce = (func, delay) => {
    let timeout
    return () => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func()
        }, delay)
    }
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const time = setTimeout(() => setDebouncedValue(value), delay)

        // 每次在上一个useEffect处理完再运行，清理上一次定时器
        return () => clearTimeout(time)
    }, [value, delay])

    return debouncedValue
}
