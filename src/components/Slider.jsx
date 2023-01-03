import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'


const Slider = () => {


  return (
    <div className="slider">
        <div className="container">
            <img src={slider1} alt="" />
            <img src={slider2}  alt="" />
            <img src={slider3}  alt="" />
        </div>
        <div className="icon">
            <EastOutlinedIcon />
            <WestOutlinedIcon />
        </div>
    </div>
  )
}

export default Slider 