import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      userType: 'customer', // Default user type is customer
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUserTypeChange = (event) => {
    this.setState({ userType: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log(this.state);
  };

  renderFormFields = () => {
    const { userType } = this.state;

    if (userType === 'customer') {
      return (
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
                Company name:
                <input
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="border border-gray-300 px-2 py-1 w-full rounded focus:outline-none focus:border-blue-400"
                />
              </label>
        </div>
      );
    } else if (userType === 'partner') {
      return (
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
                Partner name:
                <input
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="border border-gray-300 px-2 py-1 w-full rounded focus:outline-none focus:border-blue-400"
                />
              </label>
        </div>
      );
    }

    return null; // No additional fields for other user types
  };

  render() {
    return (
      <div className="bg-white-100 flex items-center justify-center">
        <div className="bg-white p-4 md:p-8 lg:p-12 rounded shadow-md w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
          <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User Type:
                <select
                  name="userType"
                  value={this.state.userType}
                  onChange={this.handleUserTypeChange}
                  className="border border-gray-300 px-2 py-1 w-full rounded focus:outline-none focus:border-blue-400"
                >
                  <option value="customer">Customer</option>
                  <option value="partner">Partner</option>
                </select>
              </label>
            </div>
            {this.renderFormFields()}
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="border border-gray-300 px-2 py-1 w-full rounded focus:outline-none focus:border-blue-400"
                />
              </label>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
