import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = ({ blok }) => (
  <SbEditable content={blok}>
    <div className='col-4'>
      <h2>{blok.name}</h2>
    </div>
  </SbEditable>
)

export default Feature
