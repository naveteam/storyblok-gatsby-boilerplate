import React, { useState, useEffect } from 'react'

import Components from '../components/components'
import Navi from '../components/navi'

const StoryblokEntry = ({ pageContext }) => {
  const [story, setStory] = useState({ content: {} })
  const [globalNavi, setGlobalNavi] = useState({ content: {} })

  useEffect(() => {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return
    }

    setStory({
      ...story,
      content: JSON.parse(pageContext.story.content)
    })
    setGlobalNavi({
      ...globalNavi,
      content: JSON.parse(pageContext.globalNavi.content)
    })
  }, [story, pageContext.story])

  return (
    <div>
      <Navi blok={globalNavi.content}></Navi>
      {React.createElement(Components(story.content.component), { key: story.content._uid, blok: story.content })}
    </div>
  )
}

export default StoryblokEntry
