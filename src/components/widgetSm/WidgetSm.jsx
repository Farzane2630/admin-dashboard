import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from '../../datas'
import './WidgetSm.css'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <h3 className='widgetSmTitle'> New Members </h3>
        <ul className="widgetSmList">

            {newMembers.map(user=>(
               <li key={user.id} className="widgetSmItem">
                <div className='widgetSmFeatures'>
                    <img src={user.img} alt="User Avatar" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className='widgetSmUserName'>{user.username} </span>
                        <span className='widgetSmUserJob'>{user.job} </span>
                    </div>
                    <button className='widgetSmIconBtn'>
                        <VisibilityIcon className='widgetSmIcon' />
                    </button>
                </div>
            </li> 
            ))}
            
        </ul>

    </div>
  )
}
