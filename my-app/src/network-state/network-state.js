import React from 'react';
import './network-state.css';

class NetworkState extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            online: true
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
        if(!this.state.online ) {
            return (
                <div className="NetworkState">
                    <div>OFFLINE</div>
                </div>
            );
        } else {
            return null;
        }
    }
   
}

export default NetworkState;