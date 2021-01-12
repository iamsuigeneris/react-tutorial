
import React from 'react'
import { UserConsumer, UserProvider } from './userContext'

function ComponentF() {
    return (
        <UserConsumer>
            {
                (username) => {return <div> Hello {username}</div>}
            }
        </UserConsumer>
    )
}

export default ComponentF
