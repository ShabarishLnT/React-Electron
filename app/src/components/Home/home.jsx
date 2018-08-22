import React, {Component} from 'react'
import {render} from 'react-dom'
import styles from './home.css'
class home extends Component {
    constructor(props){
        super(props);       
    }     
    render() {
        return (
            <div className = {styles.backgroundContainer}>
                <div className = {styles.loginPanel}>
                   <div className = "text-center">
                        <h1 className = {styles.panelHeading}>Home Page</h1>
                   </div>
                </div>                
            </div>
        )
    }
}
export default home;
