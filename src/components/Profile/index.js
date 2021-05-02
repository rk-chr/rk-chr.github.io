import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Profile = () => {
  return (
    <div className="flex-2 bg-primary h-screen relative">
      <div className="flex flex-col justify-center items-center mt-16">
        <div>
          <StaticImage
            src="../../assets/profile.jpeg"
            alt="Profile Picture"
            placeholder="blurred"
            layout="constrained"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            className="rounded-full border-8 border-white mb-2"
            width={220}
            height={220}
          />
        </div>
        <p className="text-white tracking-wide text-lg font-bold">
          Hello 👋 , <i>I'm</i> Rama Kishore ☺️
        </p>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-lightWhite p-1 rounded px-2 font-medium outline-none tracking-wide mr-5"
          >
            Download Resume
          </button>

          <a
            href="https://github.com/ramki2486"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/github.png"
              alt="Github Profile"
              placeholder="blurred"
              layout="constrained"
              className="mr-2"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={36}
              height={36}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ramki2486"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/linkedin.png"
              alt="Linkedin Profile"
              placeholder="blurred"
              layout="constrained"
              className="mr-2"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              width={36}
              height={36}
            />
          </a>
          <a
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
              width={36}
              height={36}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
