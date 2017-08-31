import React, { Component } from 'react';
import ContactUs from '../Components/ContactUs'

export default class ContactUsContainer extends Component {
    constructor(props) {
        super(props);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onContactUsSubmission = this.onContactUsSubmission.bind(this);
        this.state = {
            message: '',
            contactusEmail: '',
            contactusFullName: ''
        }
    }

    onMessageChange(event) {
        this.setState({message: event.value})
    }

    onEmailChange(event) {
        this.setState({contactusEmail: event.value})
    }

    onContactUsSubmission() {

    }

    render() {
        return <ContactUs message={this.state.message} onMessageChange={this.onMessageChange}  onContactUsSubmit= {this.onContactUsSubmission}
                contactusEmail={this.state.contactusEmail} contactusFullName={this.state.contactusFullName} onEmailChange={this.onEmailChange} />
    }
}