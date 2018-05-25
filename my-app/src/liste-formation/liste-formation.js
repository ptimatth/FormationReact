import React from 'react';
import ItemFormation from '../item-formation/item-formation';
import './liste-formation.css';
import PropTypes from 'prop-types';
import {addFormation, loadFormations} from '../redux/formations/formations.action';
import {connect} from 'react-redux';


export class ListeFormation extends React.Component {

    constructor(props){
        super(props);
        this.afficherFormations = this.afficherFormations.bind(this);
    }

    static propTypes = {
        addFormation: PropTypes.func.isRequired,
        loadFormations: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        formations: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired 
    }

    afficherFormations(){
        if( this.props.loading ){
            return <div>Chargement ... </div>
        }else{
            return this.props.formations.map((item) =>{
                return <ItemFormation name={item.name} key={item.id}/>
            });
        }
    }
    
    shouldComponentUpdate(){
        console.log(`Le composant "ListeFormation" devrait etre à jour`);
        return true;
    }

    componentDidMount(){
        this.props.loadFormations();
    }

    render(){
        return (
            <div className="ListeFormation-container">
                <div className="ListeFormation-title">
                    <h1>Formations : </h1>
                </div>
                { this.afficherFormations() }
                <button onClick={() => this.props.addFormation('formation ajoutée via redux')}> Add formations</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formations: state.formations.list,
    loading: state.formations.loading

});

const mapDispatchToProps = dispatch => ({
    addFormation: name => dispatch(addFormation(name)),
    loadFormations: () => dispatch(loadFormations()),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListeFormation)


