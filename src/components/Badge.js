import React from 'react';

import './styles/Badge.css';
// import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import Navbar from './Navbar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        {/* <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div> */}
        <Navbar/>

        <div className="Badge__section-name">
          {/* <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          /> */}
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#tecnologyconf</div>
      </div>
    );
  }
}

export default Badge;