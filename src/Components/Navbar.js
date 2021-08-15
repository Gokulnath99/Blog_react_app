import React from 'react'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/userSlice'

const Navbar = () => {

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog Logo</h1>
            {isSignedIn ? }
        </div>
    )
}

export default Navbar
