import React from 'react'
import OutputList from './OutputList'

function Output() {
    return (
        <>
            <h1 style={{ fontSize: '45px', textAlign: "center",padding:"12px",backgroundColor:'whitesmoke' }}>Registered Users</h1>
            <div className='output-div'>
                <ul>
                    <OutputList />

                </ul>
            </div>
        </>
    )
}

export default Output