import { useState } from 'react';
// MODEL 

export const useRaffleModel = () => {
  const [participants, setParticipants] = useState([]);

  // Add a new participant
  const addParticipant = (name) => {
    if (name && name.trim() !== "") {
      setParticipants([...participants, name.trim()]);
    }
  };

  // Pick a random winner
  const pickWinner = () => {
    if (participants.length === 0) {
      return "No participants in the raffle.";
    }
    const randomIndex = Math.floor(Math.random() * participants.length);
    return participants[randomIndex];
  };

  return {
    participants,
    addParticipant,
    pickWinner,
  };
};
