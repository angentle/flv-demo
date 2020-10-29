import React, { PureComponent } from 'react';
import Reflv from './components/Reflv';

export class Basic extends PureComponent {

  render () {
    return (
      <Reflv url={'demo.flv'} type="flv" />
    )
  }
}
