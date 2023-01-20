import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import {format} from "date-fns";
import Calendar from "./Calendar";


const Home = ( {currentUser, setCurrentUser} ) => {

    const [showDetails, setShowDetails] = useState(true);
    const current = format((new Date()), "ccc dd MMM yy");
    const [data, setData] = useState(current);
  
    const showDetailsHandle = (dayStr) => {
      setData(dayStr);
      setShowDetails(true);
    };

        return (
            <div className='Home'>
               <Calendar showDetailsHandle={showDetailsHandle} data={data} current={current}/>
            </div>
        )
}

export default Home;