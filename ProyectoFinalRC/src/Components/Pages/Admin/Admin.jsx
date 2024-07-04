import React, { Component } from 'react'
import CrudUsers from "./CrudUsers"
import CrudReserv from "./CrudReserv"

export class Admin extends Component {
  render() {
    return (
      <div>
        <CrudUsers/>
        <CrudReserv/>
      </div>
    )
  }
}

export default Admin
