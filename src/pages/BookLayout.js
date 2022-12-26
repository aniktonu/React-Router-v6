import React from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function BookLayout() {


    const [number, setNumber] = React.useState(0);


    return (
        <>
            <h1>Book Layout</h1>
            <ul>
                <li>
                    <Link to='/booklist/1'>Book 1</Link>
                </li>
                <li>
                    <Link to='/booklist/2'>Book 2</Link>
                </li>
                <li>
                    <Link to={`/booklist/${number}`}>Book {number}</Link>
                </li>

                <li>
                    <Link to='/booklist/new'>Book New</Link>
                </li>
            </ul>
            <Outlet context={{ hello: "world" }} />

            <input type="number"
                value={number}
                onChange={e => { setNumber(e.target.value) }} />

        </>
    )
}
