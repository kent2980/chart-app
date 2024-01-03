import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <h1>プレスト presto</h1>
      <Link to={'/view'}>view</Link>
    </div>
  )
}

export default Home;