import React from 'react';

import './homepage.component.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SHIRTS</h1>
                    <span className='subtitle'>SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JEANS</h1>
                    <span className='subtitle'>SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>SHOP</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtitle'>SHOP</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;