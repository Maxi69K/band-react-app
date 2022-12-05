import React from 'react'
import styles from './Band.module.css'

const Band = ({ band, index, changeCurrentBand }) => {
  return (
    <div id={index} className="card text-center mt-3">
      <div className="card-header">
        <h3>{band.name}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <img
              src={band.img_url}
              alt={band.name}
              className={styles.mainTumb}
            />
          </div>
          <div className="col-6">
            <p>{band.info.substr(0, 100)} ...</p>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <h6 className="m-2">{band.genre}</h6>
        <button
          onClick={() => changeCurrentBand(band)}
          type="button"
          className="btn btn-outline-secondary"
        >
          read more
        </button>
      </div>
    </div>
  )
}

export default Band
