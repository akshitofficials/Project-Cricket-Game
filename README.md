# 🏏 Bat Ball Stump Game

A fun, interactive, and responsive **Bat Ball Stump Game** developed using **HTML, CSS, and JavaScript**. This browser-based game allows users to play against the computer while tracking their wins, losses, and ties.

The project demonstrates fundamental JavaScript concepts such as DOM manipulation, conditional statements, functions, random number generation, and Local Storage.

## 🚀 Features

- 🎮 **Interactive Gameplay** – Choose Bat, Ball, or Stump to play against the computer.
- 🤖 **Random Computer Moves** – Computer choices are generated using JavaScript's `Math.random()`.
- 🏆 **Score Tracking** – Tracks total wins, losses, and ties.
- 💾 **Local Storage** – Saves the score even after refreshing or reopening the browser.
- 🔄 **Reset Functionality** – Reset the score and start a new game.
- 🎨 **Modern UI** – Gradient backgrounds, circular buttons, shadows, and hover animations.
- 📱 **Responsive Design** – Adjusts the layout for smaller screens using CSS media queries.
- ⚡ **Instant Results** – Displays the user's choice, computer's choice, and game result.

## 🛠️ Technologies Used

- **HTML5** – Structure of the game
- **CSS3** – Styling, animations, and responsive design
- **JavaScript (ES6)** – Game logic and DOM manipulation
- **Web Storage API** – Persistent score storage using Local Storage

## 🎯 Game Rules

The user selects one of three options: Bat, Ball, or Stump. The computer randomly selects its move.

| User Choice | Computer Choice | Result |
|---|---|---|
| Bat | Ball | User Wins |
| Bat | Stump | Computer Wins |
| Ball | Stump | User Wins |
| Ball | Bat | Computer Wins |
| Stump | Bat | User Wins |
| Stump | Ball | Computer Wins |
| Same Choice | Same Choice | Tie |

## 📂 Project Structure

```text
Bat-Ball-Stump-Game/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── bat.png
│   ├── ball.png
│   └── stump.png
└── README.md
```

## ⚙️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/Bat-Ball-Stump-Game.git
   ```

2. Open the project folder in VS Code.
3. Open `index.html` in your browser or use the Live Server extension.
4. Select Bat, Ball, or Stump to start playing!

No additional dependencies or installation are required.

## 🧠 JavaScript Concepts Used

- DOM Manipulation (`querySelector`, `innerText`)
- Functions and Object Methods
- Conditional Statements (`if-else`)
- Random Number Generation (`Math.random()`)
- Local Storage (`getItem`, `setItem`, `removeItem`)
- JSON (`JSON.stringify`, `JSON.parse`)
- Event Handling (`onclick`)
- Template Literals

## 🔮 Future Improvements

- Add sound effects for wins and losses.
- Include animations for game results.
- Add a best-of-five game mode.
- Introduce a leaderboard.
- Add dark mode support.

## 👨‍💻 Author

**Akshit Aggarwal**

GitHub: [@akshitofficials](https://github.com/akshitofficials)

---

⭐ If you like this project, consider giving the repository a star!