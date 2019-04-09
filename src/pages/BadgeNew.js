import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Katherine"
                lastName="Aguilera"
                twitter="ktyagui"
                jobTitle="Frontend Engineer"
                avatarUrl="https://static.platzi.com/media/avatars/avatars/Kttyaguilera_3b06ef5d-888d-417d-8aa4-814b09782d4e.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;