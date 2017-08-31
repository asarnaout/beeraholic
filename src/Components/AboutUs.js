import React, { Component } from 'react';
import FilterContainer from '../Containers/FilterContainer'

class AboutUs extends Component {
    
    render() {
        return (
        <div>
            <div className="turquoise-bg"><div className="container"><FilterContainer /></div></div>
            <div className="white-bg">
                <div className="container about-us">
                    <div className="col-xs-12"><h4 className="blue-text bold">About Us</h4></div>
                    <div className="col-xs-12">
                        <h5 className="bold">Development</h5>
                        <p>Beeraholic is developed and maintained by <a target="blank" href="https://www.linkedin.com/in/ahmed-shirin-94216110b/">Ahmed Shirin Arnaout</a>.</p>
                    </div>
                    
                    <div className="col-xs-12">
                        <h5 className="bold">Technology</h5>
                        <p><i>React:</i> A Javascript library used for rendering UI components</p>
                        <p><i>Redux:</i> A Javascript library used for maintaining the application's state</p>
                        <p><i>Bootstrap:</i> A framework used for responsive design</p>
                        <p><i>Node.js:</i> The backend responsible for serving the application</p>
                        <p><i>Redis:</i> An in-memory data store</p>
                    </div>

                    <div className="col-xs-12">
                        <h5 className="bold">Timeline</h5>
                        <p>Development of this website started on the 18th of August, 2017.</p>
                        <p>The website was initially released on the 20th of August, 2017.</p>
                    </div>

                    <div className="col-xs-12">
                        <h5 className="bold">Repository</h5>
                        <p>You can download/clone the git repository for this website from <a target="blank" href="https://github.com/asarnaout/beeraholic">here</a></p>
                    </div>

                </div>
            </div>
        </div>);
    }
}

export default AboutUs;