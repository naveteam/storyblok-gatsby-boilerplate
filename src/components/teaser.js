import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const Teaser = ({ blok }) => (
  <SbEditable content={blok}>
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4'>{blok.headline}</h1>
        <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <p className='lead'>
          <Link className='btn btn-primary' to={'/blog/'}>
            Blog Posts
          </Link>
        </p>
      </div>
    </div>
  </SbEditable>
)

export default Teaser
