import { useEffect, useState } from 'react'

// export const isFalsy = (value: unknown) => value === 0 ? false : !value;

export const isVoid = (value: unknown) => value === undefined || value === null || value === false

export const cleanObject = (object: {[key: string]: unknown}) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isVoid(value)) {
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
export const useDebounce = <O>(value: O, delay?: number): O => {
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
        // TODO 一来想离家上callback会造成无限循环，这里和useCallback以及useMemo有关系
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
