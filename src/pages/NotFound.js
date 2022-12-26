import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {

    const navigate = useNavigate()

    React.useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])


    return (
        <>
            <h1>404</h1>
            <h2>Page not found</h2>











        </>
    )
}
