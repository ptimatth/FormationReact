import React from 'react';
import ItemFormation from '../item-formation/item-formation';
import './liste-formation.css';
import PropTypes from 'prop-types';
import {addFormation} from '../redux/formations/formations.action';
import {connect} from 'react-redux';


export class ListeFormation extends React.Component {
    static propTypes = {
        addFormation: PropTypes.func.isRequired,
        formations: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired 
    }

    
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
                    this.props.formations.map((item) =>{
                        return <ItemFormation name={item.name} key={item.id}/>
                    })
                }
                <button onClick={() => this.props.addFormation('formation ajoutée via redux')}> Add formations</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formations: state.formations.list,
});

const mapDispatchToProps = dispatch => ({
    addFormation: name => dispatch(addFormation(name))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListeFormation)


