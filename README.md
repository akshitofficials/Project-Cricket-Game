# 🏏 Bat Ball Stump Game

A simple **Bat Ball Stump Game** built using **HTML, CSS, and JavaScript**.

The player chooses **Bat, Ball, or Stump**, and the computer randomly selects one of the three choices. The game then compares both choices and displays the result using an alert.

## 🎮 How to Play

1. Open the game in your browser.
2. Choose one of the three options:
   - 🏏 Bat
   - ⚾ Ball
   - 🪵 Stump
3. The computer randomly selects its choice.
4. The game compares your choice with the computer's choice.
5. The result is displayed in an alert.

## 🧠 Game Rules

| Your Choice | Computer Choice | Result |
|------------|-----------------|--------|
| Bat | Ball | You Win |
| Bat | Bat | Tie |
| Bat | Stump | Computer Wins |
| Ball | Bat | Computer Wins |
| Ball | Ball | Tie |
| Ball | Stump | You Win |
| Stump | Bat | You Win |
| Stump | Ball | Computer Wins |
| Stump | Stump | Tie |

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- `Math.random()`
- Conditional Statements
- Variables (`let`)
- Template Literals
- Browser `alert()`

## 📂 Project Structure

```text
Bat-Ball-Stump-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md