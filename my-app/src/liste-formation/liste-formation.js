import React from 'react';
import ItemFormation from '../item-formation/item-formation';
import './liste-formation.css';

class ListeFormation extends React.Component {


    
    shouldComponentUpdate(){
        console.log(`Le composant "ListeFormation" devrait etre à jour`);
        return true;
    }

    render(){
        return (
            <div className="ListeFormation-container">
                <div className="ListeFormation-title">
                    <h1>Formations : </h1>
                </div>
                {
                    this.props.listeFormation.map((item) =>{
                        return <ItemFormation name={item.name} key={item.id}/>
                    })
                }
            </div>
        );
    }
}

export default ListeFormation;