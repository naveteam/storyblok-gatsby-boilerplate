import React from 'react'
import SbEditable from 'storyblok-react'

import Components from './components'

const Grid = ({ blok }) => (
  <SbEditable content={blok}>
    <div className='container'>
      <div className='row'>
        {blok.columns.map(blokColumn =>
          React.createElement(Components(blokColumn.component), { key: blokColumn._uid, blok: blokColumn })
        )}
      </div>
    </div>
  </SbEditable>
)

export default Grid
