import {useCallback, useState} from 'react'
import axios from 'axios'

export const useHttp = (callback) => {
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
            }
            )

            const data = await response.json()
            if (response.status !== 201) {
                throw new Error(response.data.message || 'Something went wrong')
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            console.log('Catch: ', e.response)
            setError(e.response.data.message)
            console.log('Err 1 : ', error)
            throw e
        }

        // await axios({url, method, data: body, headers})
        //     .then(res => {
        //         setLoading(false)
        //     })
        //     .catch(err => {
        //         const errMsg = err.response.data.message
        //         console.log(errMsg)
        //         setLoading(false)
        //         setStateError(errMsg)
        //         setStateError(state => {
        //             console.log('State in ErrorState: ', state)
        //             return state
        //         })
        //         console.log('Updated state: ', stateError)
        //     })
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}