import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Profile = () => {
  return (
    <div className="md:flex-2 bg-primary h-screen relative">
      <div className="flex flex-col h-screen md:h-auto items-center mt-16">
        <div>
          <StaticImage
            src="../../assets/profile.jpeg"
            alt="Profile Picture"
            placeholder="blurred"
            layout="fixed"
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
        <p className="text-center mt-20">
          <em className="text-white font-semibold tracking-wider">
            Currently I'm a Software Engineer @ UptimeAI
          </em>
        </p>
      </div>
      <div className="md:hidden animate-wiggle absolute bottom-4 right-2">
        <span className="text-2xl">&#8595;</span>
      </div>
      <div className="absolute bottom-4 w-full m-auto flex justify-center">
        <button
          type="button"
          className="p-1 rounded px-4 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-white hover:opacity-80 bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center"
        >
          <StaticImage
            src="../../assets/download.png"
            alt="Download Resume"
            placeholder="blurred"
            layout="constrained"
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
            layout="constrained"
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
            layout="constrained"
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
            layout="fixed"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  )
}

export default Profile
