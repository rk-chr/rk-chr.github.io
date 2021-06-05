/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Projects from './project'

const PortFolio = () => {
  const staticProps = {
    placeholder: 'blurred',
    layout: 'fixed',
    quality: 95,
    formats: ['AUTO', 'WEBP', 'AVIF'],
    className: 'rounded-md',
    height: 230,
  }

  return (
    <div className="px-1">
      <p className="tracking-wider text-primary text-xl leading-8 lg:leading-10 text-center mb-2 mt-2 dark:text-white">
        <span className="relative rounded font-bold transform -rotate-45 px-2 word-background">
          <em>Projects</em>
        </span>
      </p>
      <p className="tracking-wide text-primary text-lg leading-8 lg:leading-10 text-center mb-10 dark:text-white">
        <i>Here're some of them</i>
      </p>
      {Projects.map(ele => (
        <div
          key={ele.id}
          className="flex flex-col md:flex-row h-full transition duration-300 ease-in-out cursor-pointer mt-4 mb-16 px-2"
        >
          <div className="flex justify-center rounded-lg md:flex-1 md:justify-start shadow md:hover:shadow-xl">
            {ele.id === 0 && (
              <StaticImage
                src="../../assets/project1.png"
                alt={ele.title}
                {...staticProps}
              />
            )}
            {ele.id === 1 && (
              <StaticImage
                src="../../assets/project2.png"
                alt={ele.title}
                {...staticProps}
              />
            )}
            {ele.id === 2 && (
              <StaticImage
                src="../../assets/project3.png"
                alt={ele.title}
                {...staticProps}
              />
            )}
          </div>
          <div className="flex-3 relative px-2 md:ml-12">
            <h4 className="py-4 text-secondary tracking-wide px-1 dark:text-white">
              {ele.title}
            </h4>
            <p className="tracking-wide text-primary text-sm px-1 dark:text-white">
              {ele.description}
            </p>
            <div className="mt-4 md:mt-0 px-2 md:px-0 py-2 md:py-0 md:absolute md:bottom-4">
              <div className="flex items-center">
                <Link
                  to="#portfolio"
                  onClick={() => {
                    if (window !== undefined) {
                      window.open(ele.web || window.origin)
                    }
                  }}
                >
                  <button
                    type="button"
                    className="p-2 rounded-3xl px-6 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-secondary hover:opacity-80 bg-primary text-white flex items-center justify-between dark:text-white"
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
                </Link>
                <Link
                  to="#portfolio"
                  onClick={() => {
                    if (window !== undefined) {
                      window.open(ele.link)
                    }
                  }}
                >
                  <button
                    type="button"
                    className="p-2 rounded-3xl px-6 text-sm font-medium outline-none tracking-wider mr-5 transform hover:scale-110 duration-300 ease-in-out hover:bg-secondary hover:opacity-80 bg-gray-500 text-white flex items-center justify-between dark:text-white"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortFolio
