import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const SocialMedia = () => {
  return (
    <>
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
    </>
  )
}

export default SocialMedia
