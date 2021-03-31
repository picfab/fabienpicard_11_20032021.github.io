import React from 'react'
import getdata from '../utils/getdata'
import Card from '../Components/Card'

export default class ListAppartement extends React.Component {
  constructor(props) {
    super(props)
    this.state = { appartements: [] }
  }
  componentDidMount() {
    getdata('appartements.json')
      .then(appartements => {
        this.setState({ appartements })
      })
  }
  render() {
    return (
      <ul className="listAppart">
        {this.state.appartements.map((appart, i) =>
          <li key={i}>
            <Card appart={appart} />
          </li>
        )}
      </ul>
    )
  }
}
