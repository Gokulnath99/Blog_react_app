import React from 'react'
import Hompage from './Components/Loginpage'
import Navbar from './Components/Navbar'
import "./Styling/app.css"

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hompage />
            <div className="footer">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default App
