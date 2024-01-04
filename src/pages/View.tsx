import React from 'react'
import { Link } from 'react-router-dom'
import StockSummary from '../components/tables/StockSummary'

type Props = {}

const View = (props: Props) => {
    return (
        <div>
            <div>
                <h2>View</h2>
                <Link to={'/'}>もどる</Link>
            </div>
            <div>
                <StockSummary/>
            </div>
        </div>
    )
}

export default View