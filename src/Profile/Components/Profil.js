import React from "react";

const Profil = (props) => {


  return(
    
    <div className="card mb-3" style={{maxWidth:"540px"}} onClick= { () => props.handleName(props.user.fullName)}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.user.img} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Fullname : {props.user.fullName}</h5>
              <h5 class="card-text">Bio: {props.user.bio}</h5>
              <h5 class="card-text">Profession: {props.user.profession}</h5>
            </div>
        </div>
      </div>
  </div>

  )
}

export default Profil;