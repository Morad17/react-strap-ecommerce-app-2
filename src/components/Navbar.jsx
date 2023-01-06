import React, { useState } from 'react'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                
            </div>
            <div className="center">
              <div className="item">
                    <Link to="/">Logo</Link>
                    
                </div></div>
            <div className="right">
              <div className="basket" onClick={()=> setOpen(!open)}>
                Basket
                
              </div>
              <span>0</span>
              {open && <div className="">Basket Items</div>}
            </div>
        </div>
    </div>
  )
}

export default Navbar