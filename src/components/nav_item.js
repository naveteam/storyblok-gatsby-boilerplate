import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const Teaser = ({ blok }) => (
  <SbEditable content={blok}>
    <li className='nav-item active'>
      <Link className='nav-link' to={'/' + (blok.link.cached_url === 'home' ? '' : blok.link.cached_url)}>
        {blok.name}
      </Link>
    </li>
  </SbEditable>
)

export default Teaser
