import React from "react";
import logo from '../assets/setting.svg';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>Dashboard <small>v.01</small></span>
            </div>
            <ul className="menu">
                <li><i className="icon-dashboard"></i> 🔐 Dashboard</li>
                <li><i className="icon-box"></i> 📦 Product</li>
                <li className="active"><i className="icon-user"></i> 👮‍♂️ Customers</li>
                <li><i className="icon-income"></i> 💸 Income</li>
                <li><i className="icon-promote"></i> 🏷️ Promote</li>
                <li><i className="icon-help"></i> 🆘 Help</li>
            </ul>
        </div>
    );
};

export default Sidebar;

