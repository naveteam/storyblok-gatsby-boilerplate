import React, { useEffect, useCallback, useState } from 'react'
import SbEditable from 'storyblok-react'

import Components from '../components/components'
import Navi from '../components/navi'

import config from '../../gatsby-config'

const loadStoryblokBridge = cb => {
  const [sbConfig = {}] = config.plugins.filter(item => item.resolve === 'gatsby-source-storyblok')

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb

  return document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = key =>
  window.location.search
    .substr(1)
    .split('&')
    .reduce((acc, item) => {
      const [itemKey, value] = item.split('=')

      if (itemKey === key) {
        return decodeURIComponent(value)
      }

      return acc
    }, '')

const StoryblokEntry = () => {
  const [story, setStory] = useState(null)
  const [globalNavi, setGlobalNavi] = useState({ content: {} })

  const loadGlovalNavi = useCallback(lang => {
    const language = lang === 'default' ? '' : `${lang}/`
    window.storyblok.get(
      {
        slug: `${language}global-navi`,
        version: 'draft'
      },
      data => setGlobalNavi(data.story)
    )
  }, [])

  const loadStory = useCallback(
    () =>
      window.storyblok.get(
        {
          slug: getParam('path'),
          version: 'draft'
        },
        data => {
          setStory(data.story)
          return loadGlovalNavi(data.story.lang)
        }
      ),
    []
  )

  const initStoryblokEvents = useCallback(() => {
    loadStory({ storyId: getParam('path') })

    window.storyblok.on(['change', 'published'], payload => loadStory(payload))

    window.storyblok.on('input', payload => {
      if (story && payload.story.id === story.id) {
        return setStory({
          ...payload.story,
          content: window.storyblok.addComments(payload.story.content, payload.story.id)
        })
      }
    })

    window.storyblok.pingEditor(() => window.storyblok.inEditor && window.storyblok.enterEditmode())
  }, [story])

  useEffect(() => {
    loadStoryblokBridge(initStoryblokEvents)
  }, [])

  if (!story) {
    return <div></div>
  }

  return (
    <SbEditable content={story.content}>
      <div>
        <Navi blok={globalNavi.content}></Navi>
        {React.createElement(Components(story.content.component), { key: story.content._uid, blok: story.content })}
      </div>
    </SbEditable>
  )
}

export default StoryblokEntry
