# Expandable Menu  

A modern and responsive expandable menu built using **HTML**, **CSS**, and **JavaScript**. This project features a collapsible sidebar activated by a hamburger menu, along with light/dark theme support for enhanced user experience.

---

## 🚀 Features  
- **Expandable Navigation**: Click the hamburger menu to expand/collapse the sidebar for a compact design.  
- **Light/Dark Theme Toggle**: Seamlessly toggle between light and dark modes using CSS variables.  
- **Responsive Design**: Designed to work flawlessly on all screen sizes, from mobile to desktop.  
- **Customizable Links**: Menu items can be easily edited to fit your project's needs.  

---

## 💻 Technologies Used  
- **HTML5**: For a semantic and structured layout.  
- **CSS3**: For custom styling, animations, and theme management using CSS variables.  
- **JavaScript**: To handle interactive features like menu toggling and theme switching.  

---

## 📂 Project Structure  
```plaintext
├── assets/            # Contains icons and images used in the project
├── index.html         # Main HTML structure for the project
├── style.css          # Contains all the styles for the menu and themes
└── script.js          # JavaScript logic for the menu and theme toggle
```
---

## 🛠️ Installation and Usage

Clone this repository to your local machine:

---

```bash
git clone https://github.com/your-username/expandable-menu.git
cd expandable-menu
```
```bash
open index.html
```
---

## 🎨 Customization
1. Menu Links and Icons
Edit the index.html file to add or modify links and their corresponding icons.
2. Colors
Customize the light and dark theme colors in the :root and [data-theme="dark"] sections of the style.css file.
3. Animations
Modify the transition and transform properties in style.css to change the animation behavior.

---

🧩 How It Works

- **Expandable Menu:**

The menu expands or collapses based on a click event listener attached to the hamburger menu button.
CSS classes control the width and visibility of the menu using smooth transitions.

- **Light/Dark Theme Toggle:**

A data-theme attribute on the body tag dynamically applies light or dark CSS variables to change the theme.

---

## 🤝 Contributing
Contributions are always welcome! If you have any ideas or improvements, feel free to fork the repository and submit a pull request.