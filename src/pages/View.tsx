import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const View = (props: Props) => {
    return (
        <div>
            <h2>View</h2>
            <Link to={'/'}>もどる</Link>
        </div>
    )
}

export default View