import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      message: null,
      errors: {
        email: '',
        message: ''
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.value]: e.target.value })
  }

  submitHandle = e => {
    e.preventDefault(e)

  }
 

  


  render() {
    
  
    return (
      <React.Fragment>
        <div className="row top3">
          <div className="col s12 m12">
            <div className="card grey lighten-3">
              <div className="card-content">
                <span className="card-title">Contact Us</span>
                

                <form className="contact-form pa2" onSubmit={this.submitHandle} >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        onChange={this.handleChange}
                      />
                      <label>Email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="mess"
                        className="materialize-textarea"
                        onChange={this.handleChange}
                      ></textarea>
                      <label>Message</label>
                    </div>
                  </div>

                  
                    <div className="col s12">
                      <a className="waves-effect waves-light btn-large amber darken-4">
                        Send <i className="fas fa-paper-plane"></i>
                      </a>
                    </div>
                  
                  


                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
