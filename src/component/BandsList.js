import React from 'react'
import Band from './Band'

const BandsList = ({ bands, changeCurrentBand }) => {
  const allBands = bands.map((band, index) => {
    return (
      <div className="row justify-content-center" key={index}>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <Band
            band={band}
            index={index}
            changeCurrentBand={changeCurrentBand}
          />
        </div>
      </div>
    )
  })

  return <div className="container-fluid mt-3">{allBands}</div>
}

export default BandsList
