import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className='max-w-screen-xl mx-auto flex'>
            <div className="max-w-64 lg:w-64 min-h-screen bg-accent-orange">
                <ul className='menu gap-2'>
                    <li><NavLink>My Profile</NavLink></li>
                    <li><NavLink>Announcements</NavLink></li>
                    
                </ul>
            </div>
            <div className="bg-neutral flex-1 p-8">
            <Outlet></Outlet>
            
            </div>
        </div>
    );
};

export default Dashboard;