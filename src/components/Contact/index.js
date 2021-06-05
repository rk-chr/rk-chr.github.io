import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ResumeButton from '../ResumeButton'
import SocialMedia from '../SocialMedia'

const Contact = () => {
  return (
    <div className="px-1 mb-8">
      <p className="tracking-wider text-primary font-bold text-xl leading-8 lg:leading-10 text-center mt-8 mb-10 dark:text-white">
        <span className="relative rounded transform -rotate-45 px-2 word-background">
          <em>Contact</em>
        </span>
      </p>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-6 text-center tracking-wide text-primary dark:text-white">
          Get In{' '}
          <b>
            <em>touch</em>
          </b>{' '}
          - <a href="mailto:rk@ramakishore.dev">rk@ramakishore.dev</a>
        </p>
        <div className="px-8 md:px-0">
          <StaticImage
            src="../../assets/pcon.png"
            alt="Contact"
            placeholder="blurred"
            layout="constrained"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            // width={150}
            height={150}
          />
        </div>
        <div className="mt-12 flex flex-row">
          <ResumeButton />
          <SocialMedia />
        </div>
        <div className="mt-12 w-full">
          <p className="text-center tracking-wider font-light dark:text-white">
            Made with <span className="text-red-600">♥</span> by Rama, Copyright
            @ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
