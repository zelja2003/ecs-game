# 🎮 ECS Endless Runner Game (Functional Programming)

This project is a simple **2D browser-based endless runner game** built using the **Entity–Component–System (ECS)** architecture as part of a **Functional Programming exam**.

The player moves horizontally, avoids obstacles, and the game difficulty increases over time.

---

## 🧠 Project Concept

The game is implemented using the **ECS (Entity–Component–System)** architectural pattern, where game logic is clearly separated into:

- **Entities** – game objects (player, obstacles)
- **Components** – pure data (position, velocity, size, etc.)
- **Systems** – logic that operates on components (movement, collision, time, level system)

This approach provides:
- clear separation of concerns  
- easier scalability and maintenance  
- functional-style logic organization  

---

## ✨ Features

- 🎮 Keyboard-controlled player movement  
- ⛔ Dynamic obstacle spawning  
- 🧱 Player boundary limits (cannot leave the game area)  
- ⏱️ Time-based level system  
- ⚡ Speed increase every **15 seconds**  
- 🔄 Game restart using **SPACE** key  
- 💥 Collision detection and Game Over state  
- 🎨 Improved and clean CSS styling  

---

## 🕹️ Controls

| Key | Action |
|----|-------|
| Left / Right Arrow | Move player |
| SPACE | Restart game |

---

## 🗂️ Project Structure

```
/src
 ├── ecs/
 │   ├── entities.js
 │   ├── components.js
 │   └── systems.js
 ├── game.js
 ├── config.js
 └── utils.js
/styles
 └── style.css
index.html
README.md
```

---

## 🚀 Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/zelja2003/ecs-game
   ```

2. Open `index.html` in your browser  
   *(No server or additional dependencies required)*

---

## 🧪 Technologies Used

- JavaScript (ES6)
- HTML5 Canvas
- CSS3
- ECS architectural pattern

---

## 📚 Academic Context

This project was created as part of a **Functional Programming course**, with the goal of demonstrating:
- ECS architecture principles  
- functional separation of logic  
- clean and maintainable game code  

---

## 👤 Author

Zeljko Petkovic 
