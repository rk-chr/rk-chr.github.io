import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const projects = [
  {
    id: 0,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'My Portfolio',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
    id: 1,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'Puzzle Game',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 2,
    name: '',
    imgSrc: '../../assets/profile.jpeg',
    title: 'Authentication App',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
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
          className="flex flex-col md:flex-row h-full bg-white transition duration-300 ease-in-out md:hover:shadow-xl rounded-lg cursor-pointer mt-4"
        >
          <div className="flex justify-center md:flex-2 md:justify-start">
            <StaticImage
              src="../../assets/profile.jpeg"
              alt="Download Resume"
              placeholder="blurred"
              layout="fixed"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              className="rounded-l-lg h-full w-full"
              width={270}
              height={200}
            />
          </div>
          <div className="flex-3 relative">
            <h4 className="py-4 text-secondary tracking-wide px-2 md:px-0">
              {ele.title}
            </h4>
            <p className="tracking-wider text-primary text-sm px-2 md:px-0">
              {ele.description}
            </p>
            <div className="mt-4 md:mt-0 px-2 md:px-0 py-2 md:py-0 md:absolute md:bottom-4">
              <div className="flex items-center">
                <button
                  type="button"
                  className="p-1 rounded-3xl px-6 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-secondary hover:opacity-80 bg-primary text-white flex items-center justify-between"
                >
                  <StaticImage
                    src="../../assets/link.png"
                    alt="View"
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-2"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    width={18}
                    height={18}
                  />
                  View
                </button>
                <button
                  type="button"
                  className="p-1 rounded-3xl px-6 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-secondary hover:opacity-80 bg-gray-500 text-white flex items-center justify-between"
                >
                  <StaticImage
                    src="../../assets/github.png"
                    alt="Github page"
                    placeholder="blurred"
                    layout="constrained"
                    className="mr-2"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    width={18}
                    height={18}
                  />
                  Source
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortFolio
