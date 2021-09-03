import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

const Detailed = props => {

    // create useLocation() instance
    const location = useLocation();

    // set the props value to the location
    useEffect(() => {
       console.log(location.state.login); 
    }, [location]);

    // return the html data and set value to the tags
    return (
        <div className="card">
            <img src={location.state.avatar_url} alt="Avatar"/>
            <div className="container">
                <h4><b>login : {location.state.login}</b></h4>
                <h4><b>id : {location.state.id}</b></h4>
                <h4><b>node_id : {location.state.node_id}</b></h4>
                <h4><b>followers : {location.state.followers}</b></h4> 
            </div>
        </div>
    )
}

export default Detailed;