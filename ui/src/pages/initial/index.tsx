import { useState } from 'react';
import './style.css';
import {InputText, Button, Link } from '../../shared/components';
const Initial = () => {
  
  const [name, setName] = useState('');

  const [gameId, setGameId] = useState('');

  const handleNewGame = () => {
    if (name) {
      const gameId = 'createNewUniqueHash';
      setGameId(gameId);
      return `/scoreboard?name=${encodeURI(name)}&gameId=${gameId}`;

    } else {
      alert('Please we need your Name');
      return '';
    }
  };

  const handleJoinGame = () => {
    if (name && gameId) {
      return `/scoreboard?name=${encodeURI(name)}&gameId=${gameId}`;
    } else {
      alert('Please we need your Name and Game Id');
      return '';
    }
  };
  
  return (
    <div className='initial'>
      <div className='initialContainer'>
        <InputText
          dataTest='gameId'
          id='gameId'
          title=''
          placeHolder='Game Id'
          setStateFn={setGameId}
        />
        <InputText
          dataTest='name'
          id='name'
          title=''
          placeHolder='Name'
          setStateFn={setName}
        />
        <Button 
          dataTest='joinGame'
          title='Join'
          handleFunction={handleJoinGame} 
        />
        <div className='linkCreate'>
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
