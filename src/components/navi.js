import React from 'react'

import Components from './components'

const Navi = ({ blok }) => (
  <nav className='navbar navbar-expand navbar-light bg-light'>
    <span className='navbar-brand'>Navi</span>
    <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav'>
        {blok.nav_items &&
          blok.nav_items.map(navItem =>
            React.createElement(Components(navItem.component), { key: navItem._uid, blok: navItem })
          )}
      </ul>
    </div>
  </nav>
)

export default Navi
