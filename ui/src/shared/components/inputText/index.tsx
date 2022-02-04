import React from 'react';
import './style.css';

// eslint-disable-next-line no-unused-vars
type prop = {title: string, id: string, placeHolder: string, dataTest: string, setStateFn?:(value: string)=>void}

const InputText = ({title, id, placeHolder, dataTest,setStateFn}: prop) => {
  return (
    <div className='inputText'>
      <label htmlFor={id}>{title}</label>
      <input 
        id={id} 
        type='text' 
        placeholder={placeHolder} 
        data-test={dataTest} 
        onChange={(event)=>{setStateFn && setStateFn(event?.target.value);}}
      />
    </div>
  );
};

export default InputText;
