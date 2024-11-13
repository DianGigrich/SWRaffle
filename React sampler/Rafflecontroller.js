import React, { useState } from 'react';
import { useRaffleModel } from './useRaffleModel';
import { ParticipantsList, WinnerDisplay, AddParticipantForm } from './raffleview';

const RaffleController = () => {
  const { participants, addParticipant, pickWinner } = useRaffleModel();
  const [winner, setWinner] = useState('');

  // Handle picking a winner
  const handlePickWinner = () => {
    const selectedWinner = pickWinner();
    setWinner(selectedWinner);
  };

  return (
    <div>
      <h1>Raffle Picker</h1>

      {/* Display Participants List */}
      <h2>Participants</h2>
      <ParticipantsList participants={participants} />

      {/* Add Participant Form */}
      <AddParticipantForm onAdd={addParticipant} />

      {/* Button to pick a winner */}
      <button onClick={handlePickWinner}>Pick a Winner!</button>

      {/* Display the Winner */}
      <WinnerDisplay winner={winner} />
    </div>
  );
};

export default RaffleController;
