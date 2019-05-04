import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/astronaut.png';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Badges extends React.Component {
  state = {
    // cuando cargue
    loading: true,
    // no hay error
    error: null,
    data: undefined,
  };
  // Declar Metodo
  componentDidMount() {
    this.fetchData();

    // actualizacion automatica
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    // llamada a la api
    try {
      // api.js  -- async await esperar la contestacion
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    // si loading es cierto muestre el indicador
    if (this.state.loading === true && !this.state.data) {
      return  <PageLoading />;
    }

    if (this.state.error) {
      return  <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
                width= "120"
                height= "119"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;