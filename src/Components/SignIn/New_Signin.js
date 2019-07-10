import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';
import 'animate';
import '../../../node_modules/animate.css/animate.css';
import 'hamburgers';
import 'select2/dist/css/select2.css';
import 'select2/dist/js/select2.full';
import Tilt from "react-tilt";
import './css/main.css';
import './css/util.css';
import './js/main';


class NewSignIn extends Component{

    constructor(props) {
        super(props);
        this.state =
            {
                UsernameChange : "",
                passwordChange : "",
            };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <Tilt className="Tilt" options={{scale : 1.1}} >
                            <div className="login100-pic Tilt-inner" style={{ height: 250, width: 250 }} data-tilt>
                                <img src={require('./0.png')} alt="IMG" />
                            </div>
                        </Tilt>
                        <form className="login100-form validate-form">
					        <span className="login100-form-title">
						        Member Login
					        </span>
                            <div className="wrap-input100 validate-input"
                                 data-validate="Valid email is required: ex@abc.xyz">
                                <input onChange={this.onEmailChange} className="input100" type="text" name="email" placeholder="Email" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
							    <i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input onChange={this.onPasswordChange} className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button onClick={this.onSubmitClicked} className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    onEmailChange(event) {
        this.setState(
            {UsernameChange : event.target.value},
        );
    }

    onPasswordChange(event) {
        this.setState(
            {passwordChange : event.target.value},
        );
    }

    onSubmitClicked = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/signin',
            {
                method: "post",
                headers :{
                    "Content-Type" : 'application/json',
                },
                body: JSON.stringify({
                    username : this.state.UsernameChange,
                    password : this.state.passwordChange
                })
            })
            .then(resp => resp.json())
            .then(data => {
                if(data['status'] === 'success')
                {
                    sessionStorage.setItem('token', data['token']);
                    let { fname,role,plants } = data['body'][0];
                    this.props.handler(fname,role,plants);
                    this.props.history.push('/plantstats');
                }
                else
                {
                    alert("Enter the Correct Credentials!");
                }
            });

    }
}

export default NewSignIn;