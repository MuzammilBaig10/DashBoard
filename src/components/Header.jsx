import React from 'react'
import group10 from '../assets/Group10.svg'
import group11 from '../assets/Group11.svg'
import group12 from '../assets/Group12.svg'
import im1 from '../assets/im1.png'
import im2 from '../assets/im2.png'
import im3 from '../assets/im3.png'
import im4 from '../assets/im4.png'
import im5 from '../assets/im5.png'


const Header = () => {
  return (
<div className="main-content">
        <div className="top-bar">
          <h3>Hello Evano 👋</h3>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>

        <div className="stats-container">
          <div className="stat-box">
        <div className="icon"> <img src={group10} alt="" /></div>
            <div>
              <p className='hello'>Total Customers</p>
              <h2 className='hellooo'>5,423</h2>
              <span className="increase">🔼 16% this month</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="icon"><img src={group11} alt="" /></div>
            <div>
              <p className='hello'>Members</p>
              <h2 className='hellooo'>1,893</h2>
              <span className="decrease">🔽 1% this month</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="icon"><img src={group12} alt="" /></div>
            <div>
              <p className='hello'>Active Now</p>
              <h2 className='hellooo'>189</h2>
              <div className="avatars">
                <img src={im1} alt="User 1" />
                <img src={im2} alt="User 2" />
                <img src={im3} alt="User 3" />
                <img src={im4} alt="User 4" />
                <img src={im5} alt="User 5" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header
