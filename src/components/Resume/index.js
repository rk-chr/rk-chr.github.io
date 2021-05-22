import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import AboutMe from './aboutMe'
import './index.scss'

const links = [
  { id: 0, name: 'ABOUT ME', link: '#aboutme' },
  { id: 1, name: 'PORTFOLIO', link: '#portfolio' },
  { id: 2, name: 'CONTACT', link: '#contact' },
]

const Resume = () => {
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    if (window.location) {
      setActiveHash(window.location?.hash)
    }
  }, [window.location])

  const onSetActiveHash = hash => () => {
    setActiveHash(hash)
  }

  return (
    <div className="flex-3 py-6 px-16">
      <nav>
        <ul className="flex flex-row justify-end text-xs">
          {links.map(ele => (
            <Link
              to={ele.link}
              onClick={onSetActiveHash(ele.link)}
              className={activeHash === ele.link ? 'link-active' : ''}
            >
              <li
                key={ele.id}
                className="cursor-pointer tracking-wider mr-8 py-2 px-1 relative text-primary links"
              >
                {ele.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {(activeHash === '#aboutme' || '') && (
        <AboutMe onSetActiveHash={onSetActiveHash} />
      )}
    </div>
  )
}

export default Resume
