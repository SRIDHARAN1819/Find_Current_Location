import React from 'react'
import northPic from './images/north.jpg';
import southPic from './images/south.jpg';
import './LocationDisplay.css'
const locationConfig = {
    North : {
        text : 'hi, You are currently in North region.',
        picture : northPic
    },
    South : {
        text : 'hi, You are currently in South region.',
        picture : southPic
    }
}

const LocationDisplay = ({latitude}) => {


    var region = (latitude > 0) ? 'North' : 'South';
    const {text, picture} = locationConfig[region]
    
    return(
        <div className={region} >
            <div className='ui raised text container segment'>
                <div className='image'>
        <img src={picture} alt="location picture"/> 
        </div>
        <div className='ui teal bottom attached label'>
         <h1>{text}</h1> 
        </div>
        </div>
        </div>
    )
}
export default LocationDisplay;