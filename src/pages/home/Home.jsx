import React, { useEffect } from 'react'
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import {xAxisData} from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useState } from 'react'
import './Home.css'

export default function Home() {
  const[newMembers, setNewMembers] = useState([])

  useEffect(()=>{
    async function fetchData(){
      await fetch("https://content-management-servi-b2cef-default-rtdb.firebaseio.com/newMembers.json")
      .then(response => response.json())
      .then(data=>{
        setNewMembers(Object.entries(data))
        console.log(data);
      })
    }

    fetchData()
  },[])
  return (
    <div className='home'>
    <Features />
    <Chart grid title="User Analytics" data={xAxisData} dataKey="users" />
    <div className='WidgetInHome'>
      <WidgetSm />
      <WidgetLg />
    </div>
    </div>
  )
}

