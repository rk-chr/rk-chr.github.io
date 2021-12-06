/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// import ResumeButton from '../ResumeButton'
import SwitchButton from '../SwitchButton'

const links = [
  { id: 0, name: 'ABOUT ME', link: '#aboutme' },
  { id: 1, name: 'PORTFOLIO', link: '#portfolio' },
  { id: 2, name: 'CONTACT', link: '#contact' },
]

const Navbar = ({ refs }) => {
  const [activeId, setActiveId] = useState(0)
  const { aboutMeRef, portFolioRef, contactRef } = refs

  const onSetActiveRef = id => {
    setActiveId(id)
    if (id === 0) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (id === 1) {
      portFolioRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    } else if (id === 2) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <nav className="sticky top-0 z-20 flex md:justify-between md:items-center px-4 py-2 md:py-4 md:px-24 shadow-sm dark:shadow-2xl dark:bg-none overflow-hidden">
      <div className="flex flex-row md:ml-8 items-center justify-between md:justify-center w-full md:w-52">
        <div className="flex items-center animate-wiggle">
          <div className="flex items-center ">
            <StaticImage
              src="../../assets/logo12.png"
              alt="Logo"
              placeholder="blurred"
              layout="constrained"
              className=""
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              height={32}
            />
          </div>
          <div className="ml-1">
            <p className="tracking-wide dark:text-white">RAMA KISHORE</p>
            <p
              style={{
                letterSpacing: '0.22rem',
                fontSize: '0.6rem',
              }}
              className="dark:text-white"
            >
              WEB DEVELOPER
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center animate-wiggle">
        <div className="cursor-pointer relative md:mr-4 py-2 px-1">
          <SwitchButton />
        </div>
        <ul className="hidden md:flex flex-row items-center justify-end text-xs">
          {links.map(ele => (
            <Link
              key={ele.id}
              to={ele.link}
              onClick={() => onSetActiveRef(ele.id)}
              className={activeId === ele.id ? 'link-active' : ''}
            >
              <li
                className="cursor-pointer tracking-wider mr-8 py-2 px-1 relative text-primary links dark:text-white"
                style={{ marginRight: `${ele.name === 'CONTACT' ? 0 : ''}` }}
              >
                {ele.name}
              </li>
            </Link>
          ))}
          {/* <li className="cursor-pointer tracking-wider py-2 px-1 relative text-primary">
            <ResumeButton />
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
