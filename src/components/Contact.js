import React, { Component } from 'react';


const initialState = {
  email: '',
  message: '',
  emailError: '',
  messageError:''
};

export default class Contact extends Component {
  state = initialState;

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  validate = () => {
    let emailError = '';
    let messageError = '';

    if (!this.state.email || !this.state.email.includes("@")) {
      emailError = 'Invalid Email'
      console.log(emailError)
    }

    if (!this.state.message) {
      messageError = "Message cannot be empty";
      console.log(messageError);
    }

    if (messageError || emailError) {
      this.setState({ messageError, emailError })
      return false
    }

    return true
  }

  submitHandle = e => {
    e.preventDefault()
    
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state)
      this.setState(initialState)
    }
  }
 
  render() {
    
  
    return (
      <React.Fragment>
        <div className="row top3">
          <div className="col s12 m12">
            <div className="card grey lighten-3">
              <div className="card-content">
                <span className="card-title">Contact Us</span>

                <form className="contact-form pa2" onSubmit={this.submitHandle}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" onChange={this.handleChange} value={this.state.email} />
                      <div className="error">{this.state.emailError}</div>
                      <label>Email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="message"
                        className="materialize-textarea"
                        onChange={this.handleChange}
                        value={this.state.message}
                      ></textarea>
                      <div className="error">{this.state.messageError}</div>
                      <label>Message</label>
                    </div>
                  </div>

                  <div className="col s12">
                    <button className="waves-effect waves-light btn-large amber darken-4">
                      Send <i className="fas fa-paper-plane"></i>
                    </button>
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
