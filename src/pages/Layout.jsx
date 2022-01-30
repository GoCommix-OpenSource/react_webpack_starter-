import React, { Component } from 'react';
import { Outlet } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
    );
  }
}
