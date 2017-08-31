import React, { Component } from 'react';
import FilterContainer from '../Containers/FilterContainer'

class AboutUs extends Component {
    render() {
        let filter = this.props.authenticated? (<div className="turquoise-bg"><div className="container"><FilterContainer /></div></div>) : <div></div>;
        
        return (<div>
            {filter}
            <div className="white-bg">
                <div className="container about-us">
                    <div className="col-xs-12">
                        <p>Beeraholic is developed and maintained by Ahmed Shirin Arnaout.</p>
                        <p>The website is built over React/Redux for the frontend and Node.js/Redis for the backend. </p>
                        <p>Development of this website started on the 18th of August, 2017.</p>
                        <p>You can download/clone the git repository for this website from <a target="blank" href="https://github.com/asarnaout/beeraholic">here</a></p>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default AboutUs;