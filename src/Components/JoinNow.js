import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class JoinNow extends Component{
    render(){
        return (<div className="row">
                    <div className="col-xs-10 col-xs-offset-1 center-text">
                        <span className="fs-18">Not a member? <Link to={'/signup'}>Join Now - It's Free</Link></span>
                    </div>
                </div>);
    }
}

export default JoinNow;