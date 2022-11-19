import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            email: '',
            password: "",
            mobile: "",
            address: ""


        }
    }

    /* handleName = (event) => {
         this.setState({ name: event.target.value })
 
     }
 
     handleEmail = (event) => {
         this.setState({ email: event.target.value })
     }
 
     handlePassword = (event) => {
         this.setState({ password: event.target.value })
     }
     handleMobile = (event) => {
         this.setState({ mobile: event.target.value })
     }
 
     handleAddress = (event) => {
         this.setState({ address: event.target.value })
     }
 */

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = (event) => {
        alert(`${this.state.fname} your form is submitted`)
        event.preventDefault();
    }



    render() {
        return (
            <div className='container' style={{ background: "cyan", width: "30%", padding: "3%", borderRadius: "20px" }}>
                <form onSubmit={this.handleSubmit}>
                    <label>Name : </label><br />
                    <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />
                    <br />

                    <label>Email : </label><br />
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br />

                    <label>Password : </label><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

                    <br />


                    <label>Mobile : </label><br />
                    <input type="number" name="mobile" value={this.state.mobile} onChange={this.handleChange} />

                    <br />

                    <label>Address : </label><br />
                    <textarea value={this.state.address} name="address" onChange={this.handleChange} />

                    <br />
                    <button style={{ color: "red", background: "yellow" }}>Submit</button>




                </form>
            </div>
        )
    }
}

export default Form
