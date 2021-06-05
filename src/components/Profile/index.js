import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import WordTransition from '../WordTransition'
import './index.scss'

const Profile = () => {
  return (
    <div className="h-screen relative main dark:bg-none">
      <div className="flex px-4 flex-col md:flex-row items-center justify-center mt-16 overflow-hidden">
        <div className="profile-img animate-wiggle">
          <StaticImage
            src="../../assets/profile.jpeg"
            alt="Profile Picture"
            placeholder="blurred"
            layout="constrained"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            className="border-8"
            width={220}
            height={220}
          />
        </div>
        <div className="ml-4 relative">
          <p className="tracking-wide text-lg text-center md:text-left dark:text-white md:text-7xl 2xl:text-8xl font-bold cus-text animate-wiggle">
            <span className="font-thin">Hello</span> 👋 ,
          </p>
          <p className="tracking-wide text-lg text-center md:text-left dark:text-white md:text-7xl 2xl:text-8xl font-bold cus-text animate-wiggle">
            <span className="font-thin">I'm</span>{' '}
            <span className="name">Rama Kishore ☺</span>
          </p>
          <div className="md:absolute -ml-4 md:ml-0 md:left-2 top-40 2xl:top-48 z-10 animate-wiggle">
            <WordTransition />
          </div>
          {/* <p className="text-center">
            <em className="font-semibold tracking-wider cus-text">
              Currently, I'm Software Engineer @ UptimeAI
            </em>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
