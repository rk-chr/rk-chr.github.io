import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Resume from '../../files/RamaResume.pdf'

const ResumeButton = () => {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (window !== undefined) {
            window.open(Resume)
          }
        }}
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
    </>
  )
}

export default ResumeButton
