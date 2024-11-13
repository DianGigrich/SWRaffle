// Sample list of participants
let participants = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Eve",
    "Frank",
    "Grace"
  ];
  
  // Function to pick a random winner
  function pickWinner(participantsList) {
    if (participantsList.length === 0) {
      return "No participants in the raffle.";
    }
    const randomIndex = Math.floor(Math.random() * participantsList.length);
    return participantsList[randomIndex];
  }
  
  // Add a new participant to the list
  function addParticipant() {
    const newParticipant = document.getElementById("newParticipant").value.trim();
    if (newParticipant) {
      participants.push(newParticipant);
      document.getElementById("newParticipant").value = ''; // Clear input field
      updateParticipantsList(); // Update the displayed list
    }
  }
  
  // Update the displayed list of participants
  function updateParticipantsList() {
    const list = document.getElementById("participantsList");
    list.innerHTML = participants.map(name => `<li>${name}</li>`).join('');
  }
  
  // Initialize the participants list on page load
  document.addEventListener("DOMContentLoaded", function () {
    updateParticipantsList();
    document.getElementById("raffleBtn").addEventListener("click", function () {
      const winner = pickWinner(participants);
      document.getElementById("winner").textContent = `Congratulations, ${winner}! You are the winner!`;
    });
    document.getElementById("addBtn").addEventListener("click", addParticipant);
  });
  