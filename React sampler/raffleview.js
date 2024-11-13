import React from 'react';
// VIEW

// Component to display the list of participants
export const ParticipantsList = ({ participants }) => (
  <ul>
    {participants.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);

// Component to display the winner
export const WinnerDisplay = ({ winner }) => (
  <p>{winner ? `Congratulations, ${winner}! You are the winner!` : ''}</p>
);

// Component to handle adding a participant
export const AddParticipantForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue(''); // Clear input field after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter participant's name"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Participant</button>
    </form>
  );
};
