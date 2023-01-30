import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Container } from '@mui/system';
import './Features.css'
export default function Feature(props) {
  return (
    <div className='features'>
      <div className="featureWrapper">
        <div className="featureTitle">Revanue</div>
        <div className="featureCostInfo">
          <div className="featureCost">$2,415</div>
          <span className="featureRate">-11.4</span>
          <ArrowDownwardIcon className='featureIcon negative' />
        </div>
        <div className="featureComparision">
          Compared to last month
        </div>
      </div>
      <div className="featureWrapper">
        <div className="featureTitle">Sales</div>
        <div className="featureCostInfo">
          <div className="featureCost">$4,415</div>
          <span className="featureRate">-1.4</span>
          <ArrowDownwardIcon className='featureIcon negative' />
        </div>
        <div className="featureComparision">
          Compared to last month
        </div>
      </div>
      <div className="featureWrapper">
        <div className="featureTitle">Costs</div>
        <div className="featureCostInfo">
          <div className="featureCost">$2,225</div>
          <span className="featureRate">+2.4</span>
          <ArrowUpwardIcon className='featureIcon' />
        </div>
        <div className="featureComparision">
          Compared to last month
        </div>
      </div>
        
    </div>
  )
}
