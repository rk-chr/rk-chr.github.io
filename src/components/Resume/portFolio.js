import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const projects = [
  {
    id: 0,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'My Portfolio',
  },
  {
    id: 1,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'Puzzle Game',
  },
  {
    id: 1,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'Authentication App',
  },
]

const PortFolio = () => {
  return (
    <div className="mt-8 px-1">
      <p className="mb-2 text-center tracking-wide text-primary">
        Here're some of my{' '}
        <b>
          <em>projects</em>
        </b>
      </p>
      {projects.map(ele => (
        <div
          key={ele.id}
          className="flex h-full bg-white transition duration-300 ease-in-out hover:shadow-xl rounded-lg cursor-pointer mt-4"
        >
          <div className="flex-2">
            <StaticImage
              src="../../assets/profile.jpeg"
              alt="Download Resume"
              placeholder="blurred"
              layout="constrained"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              className="rounded-l-lg h-full"
              width={270}
              height={200}
            />
          </div>
          <div className="flex-3"></div>
        </div>
      ))}
    </div>
  )
}

export default PortFolio
