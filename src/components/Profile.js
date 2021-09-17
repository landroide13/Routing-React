import React from 'react'

function Profile() {
  return (
    <React.Fragment>
      <h4>Profile</h4>

      <div class="card grey lighten-3">
        <form className="col s12 pa2">
          <div className="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">Password</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Password Confirmation</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="input-field inline">
                <input id="email_inline" type="email" class="validate" />
                <label for="email_inline">Email</label>
              </div>
            </div>
          </div>

          <a className="waves-effect waves-light btn-large #ff6f00 amber darken-4">
            Update
          </a>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Profile
