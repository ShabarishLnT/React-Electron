import React, {Component} from 'react'
import {render} from 'react-dom'
import styles from './login.css'
import Home from '../Home/home.jsx'

var Modal = require('react-bootstrap-modal')
var modalStyle = {
    width:100,
    height:100,
};
class login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username   : '',
            password   : '',
            text       : ''
        };
    }
    readValues(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    verifyLogin() { 
        const formValues = {
            username : this.state.username,
            password : this.state.password
        }  
        if(formValues.username == "" || formValues.username == null) {
            document.getElementById('idUserName').style.borderColor = "#FF6347";
            this.setState({text: 'Enter Email Address'});
            return false;
        }
        var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        if(!pattern.test(formValues.username)){
            this.setState({text: 'Invalid Email Id'});
            return false;
        }
        if(formValues.password == "" || formValues.password == null) {
            document.getElementById('idPassword').style.borderColor = "#FF6347";
            this.setState({text: 'Enter Password'});
            return false;
        }    
        if(formValues.username == "admin" && formValues.password == "admin") {
            //$('#eulaModal').modal("show");   
            render(<Home/>, document.getElementById("idLogin"));			 
        } else {
            this.setState({text: 'Invalid Credentials'});
            return false;
        }
    }

    acceptEULA() {
        //$('#eulaModal').modal('hide');
        render(<Home/>, document.getElementById("idLogin"));
    }
   
    render() {
        return (
            <div className = {styles.backgroundContainer}>
                <div className = {styles.loginPanel}>
                   <div className = "text-center">
                        <h1 className = {styles.panelHeading}>Sign in </h1>
                   </div>
                   <div className = {styles.form__group}>                       
                       <label className={styles.form__label}>EMAIL ADDRESS</label>
                       <input type="text" className = {styles.form__input} id="idUserName" style={{'backgroundColor' : this.state.usernametextBoxColor}}
                              name='username' value = {this.state.username} onChange = {e => this.readValues(e)}
                              placeholder="Enter email address"/>
                   </div>
                   <div className={styles.form__group}>                       
                       <label className={styles.form__label}>PASSWORD</label>
                       <input type="password" className = {styles.form__input} id="idPassword" style={{'backgroundColor' : this.state.passwordTextBoxColor}}
                              name='password' value = {this.state.password} onChange = {e => this.readValues(e)} 
                              placeholder="Enter password"/>
                       <a href="#" className = {styles.form__help}>Forgot password?</a>
                   </div>
                   <div >
                         <p><font style = {{"color" : "#FF6347"}}>{this.state.text}</font></p>
                   </div><br/>
                   <div className="text-center">
                       <button className={styles.btnStyle} onClick = {this.verifyLogin.bind(this)} >SIGN IN</button>                      
                   </div>
                </div>  
                
            </div>
        )
    }
}

export default login;
