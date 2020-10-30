import {useCallback, useState} from 'react'
import axios from 'axios'

export const useHttp = (callback, deps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await axios({
                url,
                method,
                data: body,
                headers
            })

            const data = await response.json()

            if (response.statusText !== 'OK') {
                throw new Error(data.message || 'Something went wrong')
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            console.log('Catch: ', e.response.data);
            setError(e.message)
            throw e
        }
    }, deps)

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}