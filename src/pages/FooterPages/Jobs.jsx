import React from 'react'
import "./Jobs.css"

export default function Jobs() {
  return (
    <div className='jobsContainer'>
      <p className='NoVacantMessage'>Not hiring at this time. </p>
      <button
      className="HomeButton"
      onClick={() =>
        (window.location.href =
          "/")
      }
      >Go back to home page</button>
      </div>
  )
}
