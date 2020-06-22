
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jwt-decode'
import "./AuthComponent.css"



class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: undefined
        };
    }

    componentDidMount() {
        //Verify the expiration of the token...If it doesnt exists catch the error and set the status false
        try {
            const token = localStorage.getItem("token");
            let {exp} = jwt(token);
            exp = exp * 1000;
            const now = Date.now();
            const isValid = (exp >= now)
            
            this.setState({status: isValid}) 
            
        }catch(Error){

            this.setState({status: false})
            
        }


        //console.log("DataAuthComp", this.state.user);
    }

    render() {
        
        if (this.state.status === undefined) {
            return (
                <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                    );
                }
        if (this.state.status !== true) {
                        this.props.history.push('/');
                }
                return this.props.children;
            }
    
        }
        
export default withRouter(AuthComponent);