import React from 'react'

export default () => {
  <div>
    <span>Home</span>
    <Link to={{
      pathname: '/car-stats',
      search: '?reg=test'
    }}>test</Link>
  </div>
}
