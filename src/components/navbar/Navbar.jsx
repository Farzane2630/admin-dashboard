import React from 'react'
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

export default function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <AutoFixHighOutlinedIcon style={{fontSize: 40}} />
                 MagicBox </div>
            <div>
                <div className='nav-right'>
                    <div className='nav-icons'>
                        <NotificationsNoneIcon className='notif' />
                        <span className='nav-icon-badge2'>2</span>
                        <LanguageIcon className='lang' />
                        <span className='nav-icon-badge1'>1</span>
                        <SettingsIcon />
                    </div>
                    <img src="/Images/avatar.png" alt="admin" className='avatar' />
                </div>
            </div>
        </div>
    )
}
