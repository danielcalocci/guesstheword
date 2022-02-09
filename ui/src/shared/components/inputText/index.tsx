import React from 'react';
import './style.css';

type prop = {
  id: string, 
  placeHolder: string, 
  dataTest: string, 
  warning?: string,
  // eslint-disable-next-line no-unused-vars
  setStateFn?:(value: string)=>void
}

const InputText = ({ id, placeHolder, dataTest, warning, setStateFn}: prop) => {
  return (
    <div className={ `inputText ${warning && 'inputWarning'}`} >
      {warning && <div className="warning">{warning}</div>}
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
