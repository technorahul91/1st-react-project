import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: '',
            password: "",
            mobile: "",
            address: ""


        }
    }

    handleName = (event) => {
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

    handleSubmit=(event)=>{
        alert(`${this.state.name} your form is submitted`)
    }

    render() {
        return (
            <div className='container' style={{ background: "cyan", width: "30%", padding: "3%", borderRadius: "20px" }}>
                <form onSubmit={this.handleSubmit}>
                    <label>Name : </label><br />
                    <input type="text" value={this.state.name} onChange={this.handleName} />
                    <br />

                    <label>Email : </label><br />
                    <input type="email" value={this.state.email} onChange={this.handleEmail} />
                    <br />

                    <label>Password : </label><br />
                    <input type="password" value={this.state.password} onChange={this.handlePassword} />

                    <br />


                    <label>Mobile : </label><br />
                    <input type="number" value={this.state.mobile} onChange={this.handleMobile} />

                    <br />

                    <label>Address : </label><br />
                    <textarea value={this.state.address} onChange={this.handleAddress} />

                    <br />
                    <button style={{ color: "red", background: "yellow" }}>Submit</button>




                </form>
            </div>
        )
    }
}

export default Form