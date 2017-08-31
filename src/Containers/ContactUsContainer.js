import React, { Component } from 'react';
import ContactUs from '../Components/ContactUs'
import { sendContactUsRequest } from '../Helpers/ApiHelpers'

export default class ContactUsContainer extends Component {
    constructor(props) {
        super(props);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onContactUsSubmission = this.onContactUsSubmission.bind(this);
        this.state = {
            message: '',
            contactusEmail: '',
            contactusFullName: '',
            statusMessage: ''
        }
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    onEmailChange(val) {
        this.setState({contactusEmail: val})
    }

    onNameChange(val) {
        this.setState({contactusFullName: val})
    }

    async onContactUsSubmission() {
        if(!this.state.contactusEmail) {
            this.setState({statusMessage: "Please Enter Your Email Address"});
            return;
        }

        if(!this.state.contactusFullName) {
            this.setState({statusMessage: "Please Enter Your Name"});
            return;
        }
        
        if(!this.state.message) {
            this.setState({statusMessage: "Please Enter Your Inquiry"});
            return;
        }
                                
        await sendContactUsRequest({
            emailAddress: this.state.contactusEmail,
            name: this.state.contactusFullName,
            message: this.state.message
        });

        this.setState({
            message: '',
            contactusEmail: '',
            contactusFullName: '',
            statusMessage: 'Request Sent Successfully'
        });
    }

    render() {
        return <ContactUs message={this.state.message} onMessageChange={this.onMessageChange}  onContactUsSubmit= {this.onContactUsSubmission}
                contactusEmail={this.state.contactusEmail} contactusFullName={this.state.contactusFullName} onEmailChange={this.onEmailChange} 
                onNameChange={this.onNameChange} statusMessage={this.state.statusMessage} />
    }
}