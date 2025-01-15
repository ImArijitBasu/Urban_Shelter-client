import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className='max-w-screen-xl mx-auto flex'>
            <div className="max-w-64 lg:w-64 min-h-screen bg-accent-orange">
                <ul className='menu gap-2'>
                    {
                        isAdmin ? <>
                            <li><Link>Admin profile</Link></li>
                            <li><Link>Manage Members</Link></li>
                            <li><Link>Make aAnnouncements</Link></li>
                            <li><Link>Agreement Requests</Link></li>
                            <li><Link>Manage Coupons</Link></li>
                        </> : <>

                        </>
                    }

                    <li><NavLink to={'/dashboard/userProfile'}>My Profile</NavLink></li>
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