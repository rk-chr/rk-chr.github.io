import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { animated, useTransition, config } from 'react-spring'
// import { StaticImage } from 'gatsby-plugin-image'

const WORDS = [
  { id: 0, text: 'creating' },
  { id: 1, text: 'developing' },
  { id: 2, text: 'debugging' },
]

const AboutMe = props => {
  const { onSetActiveHash } = props
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
    <div className="mt-12 px-4 md:px-1 relative pb-20">
      {/* <div className="absolute opacity-5 mt-12">
        <StaticImage
          src="../../assets/coding.svg"
          alt="Download Resume"
          placeholder="blurred"
          layout="constrained"
          className="mr-2"
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
      </div> */}
      <p className="tracking-wider text-primary leading-8 lg:leading-10 text-center mt-12">
        <i>Gratus !</i>, My name is Rama Kishore, and most of my friends call me{' '}
        <b>
          <span className="relative rounded transform -rotate-45 word-highlight">
            <em>Kishore</em>
          </span>{' '}
        </b>
        for short. I'm so much curious about technologies and talking with
        friends about sci-fi movies, got a curiosity into computers and learned
        some part of HTML & CSS in 10th standard, that really got me an interest
        in programming and learning javaScript.
      </p>
      <p className="tracking-wider text-primary leading-8 text-center mt-4">
        When I'm graduating from{' '}
        <b>
          <em>"Computer Science & Engineering"</em>
        </b>{' '}
        after the third year, I got a job as a{' '}
        <b>
          <span className="relative rounded transform -rotate-45 word-highlight">
            <em>Software Engineer</em>
          </span>
        </b>
        , where I stayed for almost 2 years and developed a lot of things like
        creating a project from scratch, testing & many more.
      </p>
      <p className="tracking-wider text-primary leading-8 text-center mt-4">
        In college, apart from class subjects, I took online courses from Udemy
        like <b className="underline">CSS- The Complete Guide</b>,{' '}
        <b className="underline">
          ES6 Javascript: The Complete Developer's Guide
        </b>
        , <b className="underline">React: The Complete Guide</b> and also more I
        keen to learn from documentation to get into as much as deep.
      </p>
      <p className="tracking-wider text-primary leading-8 text-center mt-4">
        The best way to learn is to practice, and I also did a couple of
        personal projects with the knowledge I collected from the courses, you
        can check them on my{' '}
        <b
          className="cursor-pointer text-black underline"
          onClick={onSetActiveHash('#portfolio')}
          role="presentation"
        >
          portfolio
        </b>
        .
      </p>
      <p className="tracking-wider text-primary leading-8 text-center mt-4">
        I love to take{' '}
        <b>
          <em>challenges</em>
        </b>{' '}
        at any time of any kind of bug or development, wanted to learn more
        about it and complete it beyond expectation.
      </p>
      <p className="tracking-wider text-primary leading-8 text-center mt-4">
        My current{' '}
        <b>
          <em className="relative rounded transform -rotate-45 word-highlight">
            stack
          </em>
        </b>{' '}
        of technologies I've known:
      </p>
      <p className="tracking-wider text-primary leading-8 text-center">
        <b className="underline">HTML5</b>, <b className="underline">CSS3</b>,{' '}
        <b className="underline">JAVASCRIPT</b>,{' '}
        <b className="underline">REACTJS</b>,{' '}
        <b className="underline">REACTNATIVE</b>,{' '}
        <b className="underline">ANGULARJS</b>,{' '}
        <b className="underline">REDUX</b>, <b className="underline">WEBPACK</b>
        , <b className="underline">GATSBY</b>{' '}
      </p>
      <div className="md:flex md:justify-center ml-16 md:ml-0">
        <p className="absolute bottom-10 tracking-wider leading-8">
          <span className="relative">
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
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  onSetActiveHash: PropTypes.func.isRequired,
}

export default AboutMe
