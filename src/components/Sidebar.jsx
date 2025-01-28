import React from "react";
import logo from '../assets/setting.svg';
import img1 from '../assets/img1.png'
import key from '../assets/key.svg'
import square from '../assets/square.svg'
import user from '../assets/user.svg'
import wallet from '../assets/wallet.svg'
import discount from '../assets/discount.svg'
import message from '../assets/message.svg'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div>Dashboard <small>v.01</small></div>
            </div>
            <ul className="menu">
                <li><i className="icon-dashboard"></i> <img src={key} alt="" />Dashboard</li>
                <li><i className="icon-box"></i> <img src={square} alt="" />Product</li>
                <li className="active"><i className="icon-user"></i> <img src={user} alt="" />Customers</li>
                <li><i className="icon-income"></i> <img src={wallet} alt="" />Income</li>
                <li><i className="icon-promote"></i> <img src={discount} alt="" />Promote</li>
                <li><i className="icon-help"></i> <img src={message} alt="" />Help</li>
            </ul>
                  
                  <div>
                <div className="upgrade-box">
                    <p>Upgrade to PRO to get access all Features!</p>
                    <button>Get Pro Now!</button>
                </div>

                
                <div className="user-profile">
                    <img src={img1} alt="Evano" />
                    <div className="user-info">
                        <span>Evano</span>
                        <small>Project Manager</small>
                    </div>
                </div>
            </div>
        </div>
        

        
    );
};

export default Sidebar;

