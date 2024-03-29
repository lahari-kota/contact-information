import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.jpg";
 const ContactDetails = (props) => {
    const { name ,email }=prps.location.state.contact;
    return (
        <div className="main">
            <div className="ui caed centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>

                </div>
            </div>
            <div className ="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        back to contact list
                    </button>
                </Link>
            </div>
        </div>
    )
 };
 export default ContactDetails;