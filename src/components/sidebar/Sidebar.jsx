import React from 'react'
import './Sidebar.css'
import CabinIcon from '@mui/icons-material/Cabin';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarTile">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <CabinIcon className='sidebarIcon' />
                                Home
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpOutlinedIcon className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarTile">
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PeopleAltOutlinedIcon className='sidebarIcon' />
                                Users
                            </li>
                        </Link>

                        <Link to="/newUser" className="link">
                            <li className="sidebarListItem">
                                <GroupAddOutlinedIcon className='sidebarIcon' />
                                New User
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <CategoryOutlinedIcon className='sidebarIcon' />
                                Products
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <PaidOutlinedIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlinedIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarTile">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AttachEmailOutlinedIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <ChatOutlinedIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MarkEmailUnreadOutlinedIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarTile">
                    <h3 className='sidebarTitle'>Stuff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BusinessCenterOutlinedIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TroubleshootOutlinedIcon className='sidebarIcon' />
                            Analytic
                        </li>
                        <li className="sidebarListItem">
                            <ReportOutlinedIcon className='sidebarIcon' />
                            Report
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
