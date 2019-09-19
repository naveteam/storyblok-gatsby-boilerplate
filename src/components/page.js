import React from 'react'

import Components from './components'

const Page = ({ blok }) => (
  <div>
    {blok.body &&
      blok.body.map(blokBody =>
        React.createElement(Components(blokBody.component), {
          key: blokBody._uid,
          blok: blokBody
        })
      )}
  </div>
)

export default Page
