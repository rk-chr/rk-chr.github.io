/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const projects = [
  {
    id: 0,
    name: '',
    imgSrc: '../../assets/project1.png',
    title: 'My Portfolio',
    web: '',
    link: 'https://github.com/ramki2486/my_portfolio',
    description: `Here you're on this website now. I wanted something blazing fast and with good SEO for my portfolio, so a static website generator like Gatsby seemed like the best fit.`,
  },
  {
    id: 1,
    name: '',
    imgSrc: '../../assets/project2.png',
    title: 'Disease Prediction',
    web: 'https://eager-noyce-db6896.netlify.app',
    link: 'https://github.com/ramki2486/symptoms-revamp',
    description: `Created disease prediction analysis based upon the symptoms provided by the user, and the data will send to the trained model to predict the disease and recommended suggestions.`,
  },
  {
    id: 2,
    name: '',
    imgSrc: '../../assets/project1.png',
    title: 'Imdb Search Engine',
    web: 'https://frosty-brahmagupta-7d3d89.netlify.app',
    link: 'https://github.com/ramki2486/movie_react',
    description: `I want to design something beautiful, so I picked up the IMDb movies list which gives an API to use with search input. It cancels the previous request of the search input to make a new call, so that will not face any delay.`,
  },
]

const PortFolio = () => {
  const staticProps = {
    placeholder: 'blurred',
    layout: 'fixed',
    quality: 95,
    formats: ['AUTO', 'WEBP', 'AVIF'],
    className: 'rounded-l-lg h-full w-full',
    height: 200,
  }
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
          <div className="flex-3 relative px-1">
            <h4 className="py-4 text-secondary tracking-wide px-1">
              {ele.title}
            </h4>
            <p className="tracking-wide text-primary text-sm px-1">
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
