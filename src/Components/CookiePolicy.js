import React, { Component } from 'react';
import FilterContainer from '../Containers/FilterContainer'
import '../Assets/css/common.css'

class CookiePolicy extends Component {
    render(){
        return (
            <div>
                <div className="turquoise-bg"><div className="container"><FilterContainer /></div></div>
                <div className="white-bg">
                    <div className="container cookie-policy">
                    <div className="col-xs-12"><h4 className="blue-text bold">Cookie Policy:</h4></div>

                    <div className="col-xs-12">
                        <h2>What Are Cookies</h2>

                        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

                        <p>For more general information on cookies see the Wikipedia article on HTTP Cookies...</p>

                        <h2>How We Use Cookies</h2>

                        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                        <h2>Disabling Cookies</h2>

                        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>

                        <h2>The Cookies We Set</h2>

                        <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>

                        <h2>Third Party Cookies</h2>

                        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

                        <h2>More Information</h2>

                        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. However if you are still looking for more information then you can contact us through one of our preferred contact methods.</p>
                    </div>
                    </div>
                </div>
            </div>);
    }
}

export default CookiePolicy;