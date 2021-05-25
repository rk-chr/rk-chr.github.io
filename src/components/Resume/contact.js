import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Resume from '../../files/RamaResume.pdf'

const Contact = () => {
  return (
    <div className="px-1 grid place-items-center h-full">
      <div>
        <p className="mb-3 text-center tracking-wide text-primary">
          Get In{' '}
          <b>
            <em>touch</em>
          </b>{' '}
          - <a href="mailto:rk@ramakishore.dev">rk@ramakishore.dev</a>
        </p>
        <div className="flex justify-center">
          <StaticImage
            src="../../assets/pcon.png"
            alt="Contact"
            placeholder="blurred"
            layout="fixed"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            // width={150}
            height={150}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => {
              if (window !== undefined) {
                window.open(Resume)
              }
            }}
            className="bg-lightWhite p-1 rounded px-4 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-white hover:opacity-80 bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center"
          >
            <StaticImage
              src="../../assets/download.png"
              alt="Download Resume"
              placeholder="blurred"
              layout="fixed"
              className="mr-2"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={18}
              height={18}
            />
            Resume
          </button>
          <a
            href="https://github.com/ramki2486"
            className="transform hover:scale-110 duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/github.png"
              alt="Github Profile"
              placeholder="blurred"
              layout="fixed"
              className="mr-2"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={32}
              height={32}
            />
          </a>
          <a
            className="transform hover:scale-110 duration-300 ease-in-out"
            href="https://www.linkedin.com/in/ramki2486"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/linkedin.png"
              alt="Linkedin Profile"
              placeholder="blurred"
              layout="fixed"
              className="mr-2"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={32}
              height={32}
            />
          </a>
          <a
            className="transform hover:scale-110 duration-300 ease-in-out"
            href="https://rama-chiratla.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/medium.png"
              alt="Medium Profile"
              placeholder="blurred"
              layout="constrained"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="mt-10 w-full">
          <p className="text-center tracking-wider font-light">
            Made with <span className="text-red-600">♥</span> by Rama, Copyright
            @ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
