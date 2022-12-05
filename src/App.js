import React, { Component } from 'react'
import BandsList from './component/BandsList'
import ModalDialog from './component/ModalDialog'
import Navbar from './component/Navbar'

class App extends Component {
  state = {
    bands: [],
    currentBand: {},
    show: false,
  }

  changeCurrentBand = (band) => {
    this.setState({ currentBand: band })
    this.handleShow()
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json'
    )
      .then((res) => res.json())
      .then((data) => this.setState({ bands: data }))
  }

  render() {
    return (
      <React.StrictMode>
        <Navbar />
        <BandsList
          bands={this.state.bands}
          changeCurrentBand={this.changeCurrentBand}
        />
        <ModalDialog
          show={this.state.show}
          handleClose={this.handleClose}
          currentBand={this.state.currentBand}
        />
      </React.StrictMode>
    )
  }
}

export default App
