import React from 'react';
// import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import confLogo from '../images/astronaut.png';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// // hooks
// function useIncreaseCount(max) {
//   //regresa un arreglo
//   // state , setSate  = inicializar estado
//   const [count, setCount] = React.useState(0);

//   if (count > max) {
//     setCount(0);
//   }

//   return [count, setCount];
// }
// *********************TRABAJANDO CON HOOKS ***********//
function BadgeDetails(props){
  // const [count, setCount] = useIncreaseCount(4);

  // enviar la data a componente Container <BadgeDetailsContainer>
  const badge = props.badge;
  return(
    <div>
    <div className="BadgeDetails__hero">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={confLogo} alt="Logo de la Conferencia" width="100" height="100"/>
          </div>
          <div className="col-6 BadgeDetails__hero-attendant-name">
            <h1>
              {badge.firstName} {badge.lastName}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <Badge
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            twitter={badge.twitter}
            jobTitle={badge.jobTitle}
          />
        </div>
        <div className="col Actions">
          <h2 className="h2">Actions</h2>
          <div>
            <div>
              {/* <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase Count: {count}
                </button> */}
              <Link
                className="btn btn-primary mb-4 Edit-badge"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>

            <div>
            {/* onClick manejar para cerrar el modal */}
            <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  // isOpen propiedad para que modal se despliegue o no
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BadgeDetails;