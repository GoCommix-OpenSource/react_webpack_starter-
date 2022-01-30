import React, { Component } from 'react';
import { Outlet } from 'react-router';

export default class Blog extends Component {
  render() {
    return <div>Blog workes
      <Outlet/>
    </div>;
  }
}
