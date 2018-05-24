import React from 'react';
import './item-formation.css';

class ItemFormation extends React.Component {
    constructor(props){
        super(props);

        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount(){
       console.log(`L'item ${this.props.name} vient d'etre monté`);
    }

    shouldComponentUpdate(){
        console.log(`L'item ${this.props.name} doit se metre à jour`);
        return true;
    }

    showAlert(e){
        console.log('L\'event est', e.nativeEvent.type);
        alert(`L'item ${this.props.name} vient d'etre cliqué`);
    }

    render(){
        if(!this.props.name.toLowerCase().includes("angular")){
            return(
                <div className="ItemFormation-container" onClick={this.showAlert}>
                    {this.props.name}
                </div>
            );
        }else{
            return null;
        }
       
    }
}

export default ItemFormation;