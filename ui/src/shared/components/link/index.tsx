import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


type prop = {history?:any, title: string, dataTest: string, route?: string, handleFunction?: () => string}

const Link = ({history, title, dataTest, route, handleFunction}: prop) => {
  let navigate = useNavigate();

  const onclick = (e: any) =>{
    
      
    if (handleFunction) {
      const newRoute: string = handleFunction();
      if (newRoute) {
        navigate(newRoute)
      }
    } else {
      if (route){
        navigate(route)
      }      
    }

  }
  return (
    <div 
      className='link' 
      data-test={dataTest}
      onClick={onclick}
      >
        {title}
      </div>
  );
}

export default Link;
