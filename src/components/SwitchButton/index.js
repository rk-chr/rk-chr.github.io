/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import './index.scss'

const SwitchButton = () => {
  const onSwitch = e => {
    localStorage.setItem('theme', `${e.target.checked}`)
    if (
      localStorage.getItem('theme') === 'true' ||
      (!(localStorage.getItem('theme') === 'false') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onChange={onSwitch}
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </>
  )
}

export default SwitchButton
