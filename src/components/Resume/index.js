import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import AboutMe from './aboutMe'
import PortFolio from './portFolio'
import Contact from './contact'
import './index.scss'

const links = [
  { id: 0, name: 'ABOUT ME', link: '#aboutme' },
  { id: 1, name: 'PORTFOLIO', link: '#portfolio' },
  { id: 2, name: 'CONTACT', link: '#contact' },
]

const Resume = () => {
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    if (window !== undefined && window.location) {
      setActiveHash(window.location?.hash || '#aboutme')
    }
  }, [])

  const onSetActiveHash = hash => () => {
    setActiveHash(hash)
  }

  return (
    <div className="md:flex-3 md:py-6 md:px-16">
      <nav className="flex justify-center md:justify-between items-center">
        <div className="hidden md:flex ml-8 items-center justify-center">
          <div className="flex items-center">
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
            <p className="tracking-wide">RAMA KISHORE</p>
            <p
              style={{
                letterSpacing: '0.22rem',
                fontSize: '0.6rem',
              }}
            >
              WEB DEVELOPER
            </p>
          </div>
        </div>
        <ul className="flex flex-row justify-end items-center text-xs">
          {links.map(ele => (
            <Link
              key={ele.id}
              to={ele.link}
              onClick={onSetActiveHash(ele.link)}
              className={activeHash === ele.link ? 'link-active' : ''}
            >
              <li
                className="cursor-pointer tracking-wider mr-8 py-2 px-1 relative text-primary links"
                style={{ marginRight: `${ele.name === 'CONTACT' ? 0 : ''}` }}
              >
                {ele.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {(activeHash === '#aboutme' || activeHash === '') && (
        <AboutMe onSetActiveHash={onSetActiveHash} />
      )}
      {activeHash === '#portfolio' && <PortFolio />}
      {activeHash === '#contact' && <Contact />}
    </div>
  )
}

export default Resume
