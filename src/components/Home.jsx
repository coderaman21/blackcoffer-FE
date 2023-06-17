import React from 'react'
import '../css/home.css'
import Table from './Table'

const Home = () => {
    
    let apiHost = process.env.REACT_APP_BACKEND_URL

    return (
        <div id='content'>
            <Table/>
        </div>
    )
}

export default Home