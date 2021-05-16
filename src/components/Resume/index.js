import React from 'react'

const links = [
  { id: 0, name: 'ABOUT ME' },
  { id: 1, name: 'PORTFOLIO' },
  { id: 2, name: 'CONTACT' },
]

const Resume = () => {
  return (
    <div className="flex-3 py-6 px-16">
      <nav>
        <ul className="flex flex-row justify-end text-sm">
          {links.map(ele => (
            <li
              key={ele.id}
              className="cursor-pointer tracking-wider mr-8 py-2 px-1 hover:border-b-2 hover: border-primary-600"
            >
              {ele.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Resume
