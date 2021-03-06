import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/astronaut.png';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// import Navbar from '../components/Navbar';
import api from '../api';
import PageLoading from '../components/PageLoading';
class BadgeNew extends React.Component {
  state = {
    // inicializar el estado
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };
  // enviar a la api
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      // envia dato y lleva a BadgesList
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        // añadir
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    if (this.state.loading){
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="BadgeNew__hero">
          {/* <img
            className="BadgeNew_hero-image img-fluid"
            src={header}
            alt="Logo" /> */}
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="Edit-badges">
        <div className="container">
          <div className="row">
            <div className="Badge-edit">
              <Badge
              // cambiar el estado de acuerdo al BadgeForm || valor provicional
                firstName={this.state.form.firstName || 'First_Name'}
                lastName={this.state.form.lastName|| 'Last_Name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

          <div className="Badge-form">
            <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;