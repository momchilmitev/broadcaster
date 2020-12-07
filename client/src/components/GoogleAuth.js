import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '114735155429-5dft50fqsdll16230p6dthqghdhhvhit.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}
