import React from 'react'
import Jokes from "../components/Jokes";

function HomePage() {
    return (
        <div className="container">
            <div className="title">
                <h1>
                <strong>Our Products</strong>
                </h1>
            </div>
            <hr />
            <Jokes />
        </div>
    )
}

export default HomePage
