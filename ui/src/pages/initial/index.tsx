import { useEffect, useState } from 'react';
import './style.css';
import {InputText, Button, Link } from '../../shared/components';
const Initial = () => {
  
  const [name, setName] = useState('');
  const [nameWarning, setNameWarning] = useState('');
  const [gameId, setGameId] = useState('');
  const [gameIdWarning, setGameIdWarning] = useState('');

  useEffect(()=>{
    if (name !== '') {
      setNameWarning('');
    }
  },[name]);

  const handleNewGame = () => {
    if (name) {
      const gameId = 'createNewUniqueHash';
      setGameId(gameId);
      return `/choose?name=${encodeURI(name)}&gameId=${gameId}`;

    } else {
      setNameWarning('Please we need your name');
      return '';
    }
  };

  const handleJoinGame = () => {
    if (name && gameId) {
      return `/scoreboard?name=${encodeURI(name)}&gameId=${gameId}`;
    } else {      
      setNameWarning('Please we need your name');
      setGameIdWarning('Please we need the Game Id');
      return '';
    }
  };
  
  return (
    <div className="initial">
      <img src="/img/loki.webp" alt="loki logo" className="lokiLogo" />
      <div className="logoLabel">GAME</div>
      <div className="initialContainer">
        <InputText
          dataTest='gameId'
          id='gameId'
          placeHolder='Game Id'
          setStateFn={setGameId}
          warning={gameIdWarning}
        />
        <InputText
          warning={nameWarning}
          dataTest='name'
          id='name'
          placeHolder='Name'
          setStateFn={setName}
        />
        <Button 
          dataTest='joinGame'
          title='Join'
          handleFunction={handleJoinGame} 
        />
        <div className="linkCreate">
          <Link 
            handleFunction={handleNewGame} 
            title='Create a new game' 
            dataTest='linkCreate'
          />
        </div>
      </div>
    </div>
  );
};

export default Initial;
