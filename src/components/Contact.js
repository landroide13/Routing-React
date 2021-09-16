import React from 'react'

function Contact() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col s12 m12">
          <div className="card #212121 grey darken-4">
            <div className="card-content white-text">
              <span className="card-title">Contact Us</span>
              <hr />

              <form className="">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Textarea</label>
                    </div>
                  </div>
                </div>
                <a className="waves-effect waves-light btn-large #ff6f00 amber darken-4">
                  Button
                </a>
              </form>
            </div>
            <div className="card-action"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact
