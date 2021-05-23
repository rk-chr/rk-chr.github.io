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
      <div className="absolute bottom-4 w-full">
        <p className="text-center text-white tracking-wider font-light">
          Made with <span className="text-red-600">♥</span> in India, Copyright
          @ {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Profile
