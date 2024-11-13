# SWRaffle
Safety Week Raffle

## Purpose

Removing the need for physical tickets for the safety week raffle.


## Installation

vscode, gitbash, github

## Usage
<!-- tbd -->
https://DianGigrich.github.io/TriviaQuiz/
<!-- add pic example -->
![An example of the quiz.](./Assets/images/Trivia%20Quiz.png)

## Credits
<!-- reasons I don't want to be friends with Indigo anymore -->
Jaired Jawed, Reno McDonald, AskBCS John, TA Henry. So many thanks for your help!

## License

Please refer to the MiT License in the repo.

<!-- CHATGPT ASSIST -->
Explanation of the MVC in React Context
Model (useRaffleModel.js):

Uses React state (useState) to manage participants.
Contains functions to modify the state (addParticipant, pickWinner).
View (RaffleView.js):

Components are purely responsible for rendering UI and handling inputs (ParticipantsList, WinnerDisplay, AddParticipantForm).
Controller (RaffleController.js):

Main component that connects the Model (useRaffleModel) with the View components.
Handles logic for updating state and displaying data.
Additional Considerations
In larger projects, you might use Redux or Context API to handle the Model globally if the app's state becomes complex.
The use of custom hooks like useRaffleModel allows separation of concerns while keeping React's unidirectional data flow.
React's components inherently mix Controller and View responsibilities, so the MVC pattern is adapted rather than strictly enforced.
This setup keeps your project organized and allows easy updates to the logic (Model) or UI (View) independently.