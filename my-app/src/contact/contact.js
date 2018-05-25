import React, {Component} from 'react';
import './contact.css'
import { Route, NavLink, Switch } from 'react-router-dom';
import contacts from './contact.json'

export function ContactItem ({match, location}) {
  const contact = {...location.state.contact};
  return (
    <div className="Contact-item">
      <div className="Contact-item-group">
        <label>Nom : </label>
        <div className="Contact-item-nom">{contact.name}</div>
      </div>
      <div className="Contact-item-group">
        <label>Adresse: </label>
        <div className="Contact-item-adress">
          <div>{contact.adress_l1}</div>
          <div>{contact.adress_l2}</div>
          <div>{contact.adress_l3}</div>
        </div>
      </div>
      <div className="Contact-item-group">
        <label>Email: </label>
        <div className="Contact-item-adress">{contact.email}</div>
      </div>
    </div>
  )
}



export function ContactMenu () {
  return (
      contacts.map((contact) => {
        return (
          <div className="Contact-menu-item" key={contact.id}>
            <NavLink
              to={{
                pathname: '/contact/' + contact.id,
                state: { contact : contact }
              
              }}
              activeClassName="Contact-selected"
              >{contact.name}</NavLink>
          </div>
        )
      })
    );
}

export const Contact = ({match}) => {  
  return (
    <div className="Contact">
        <div className="Contact-menu">
          <ContactMenu />
        </div>
        <Switch>
          <Route path={`${match.path}/:contact_id`} component={ContactItem}/>
          <Route path={`${match.path}`} component={ContactItem}/>
        </Switch>
    </div>
  );
}

export default Contact