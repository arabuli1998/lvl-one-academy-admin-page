import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

export default  function Topbar(){
  return (
    <div className="topbar">
      <div className="topbarwrapper">
              <div className="topleft">
                  <span className="logo"> <Link className="logo" to="/home">admin</Link></span>
        </div>
        
              <div className="topright">
                  <div className="topbariconsconteiner">
               <Language />
<span id="topiconbag">2</span>
                  </div>
                  <div className="topbariconsconteiner">
<NotificationsNone />
<span id="topiconbag">1</span>
                  </div>
                  <div className="topbariconsconteiner">
<Settings />
<span id="topiconbag">2</span>
                  </div>
                  
        </div>
      </div>
    </div>
  );
}
