import React from 'react'

class Song extends React.Component {
  render() {
    return (
      <h1>{console.log(this.props)}</h1>
    )
  }
}

export default Song