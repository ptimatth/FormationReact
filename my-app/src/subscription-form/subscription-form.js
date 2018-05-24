import React, { Component } from 'react';
import './subscription-form.css';

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirm: '',
      check: {
        email: false,
        password: false,
        password_confirm: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePassword_confirm = this.handleChangePassword_confirm.bind(this);
    this.canConfirm = this.canConfirm.bind(this);


  }

  handleSubmit(e){
    console.log(this.state);
    e.preventDefault();
  }

  handleChangeEmail(e){
    this.setState({
      email: e.target.value,
      check: {...this.state.check, email: e.target.checkValidity()}
    });
    e.preventDefault();
  }

  handleChangePassword(e){

    !this.checkPassword(e.target.value) ?
      e.target.setCustomValidity('Mot de passe trop faible'):
      e.target.setCustomValidity('');
    this.setState({
      password: e.target.value,
      check: {...this.state.check, password: e.target.checkValidity() }
    });

    e.preventDefault();
  }

  handleChangePassword_confirm(e){
    
    !(this.checkPassword(e.target.value) && e.target.value === this.state.password) ?
      e.target.setCustomValidity('Mot de passe trop faible / Mots de passes différents'):
      e.target.setCustomValidity('');
    this.setState({
      password_confirm: e.target.value,
      check: {...this.state.check, password_confirm: e.target.checkValidity()}
    });
    e.preventDefault();
  }

  checkPassword(str){
    if(str.length > 4 ){
      return true;
    } else {
      return false;
    }
  }


  canConfirm(){
    if(this.state.check.email
        && this.state.check.password 
        && this.state.check.password_confirm){
      return {};
    } else {
      return { disabled: true };
    }
  }

  render() {
    return (
      <form className="SubscriptionForm" onSubmit={this.handleSubmit} >
        <div className="SubscriptionForm-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="SubscriptionForm-group">
          <label>Email</label>
          <input type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
        </div>
        <div className="SubscriptionForm-group">
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        <div className="SubscriptionForm-group">
          <label>Confirm Password</label>
          <input type="password" value={this.state.password_confirm}  onChange={this.handleChangePassword_confirm}/>
        </div>
        <div className="SubscriptionForm-button">
          <input type="submit" { ...this.canConfirm() } />
        </div>
      </form>
    );
  }
}

export default SubscriptionForm;
