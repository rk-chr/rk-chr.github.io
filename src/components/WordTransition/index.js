import React, { useState, useEffect } from 'react'
import { animated, useTransition, config } from 'react-spring'

const WORDS = [
  { id: 0, text: 'creating' },
  { id: 1, text: 'developing' },
  { id: 2, text: 'debugging' },
]

const WordTransition = () => {
  const [index, setIndex] = useState(0)

  const wordsTransition = useTransition(WORDS[index], {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: -5,
      margin: 0,
      marginLeft: 6,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  })

  useEffect(() => {
    setInterval(() => setIndex(current => (current + 1) % WORDS.length), 2500)
  }, [])

  return (
    <>
      <p className="tracking-wider leading-8 text-lg">
        <span className="relative dark:text-white">
          Hey, I'm good at{' '}
          {wordsTransition((prop, item) => (
            <animated.span key={item} style={prop}>
              <strong>
                <b>
                  <i className="text-secondary">{item?.text}</i>
                </b>
              </strong>
              .
            </animated.span>
          ))}
        </span>
      </p>
    </>
  )
}

export default WordTransition
