import React, {Component} from 'react';
import './network-state.css';
import PropTypes from 'prop-types';

class NetworkStateContainer extends Component{

    static propTypes = {
        children: PropTypes.any.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            online: navigator.onLine
        };

    }

    updateState(){
        this.setState({ 
            online: navigator.onLine
        });
    }

    componentDidMount(){
        window.addEventListener("offline", this.updateState.bind(this), false);
        window.addEventListener("online", this.updateState.bind(this), false);
    }

    shouldComponentUpdate(){
        console.log(`Le composant "NetworkState" devrait etre à jour`);
        return true;
    }

    componentWillUnmount(){
        console.log(`Le composant "NetworkState" va se demonter`);
        window.removeEventListener("offline", this.updateState.bind(this), true);
        window.removeEventListener("online", this.updateState.bind(this), true);
    }


    render(){
        const offlineCalque = (
            <div className="NetworkState">
                <div>OFFLINE</div>
            </div>
        );

        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                {!this.state.online && offlineCalque }
            </div>
            
        );
    }
   
}

export default NetworkStateContainer;