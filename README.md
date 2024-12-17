# 🤖 Stateless-AI-Chatbot

A basic stateless AI chatbot leveraging the power of Google's AI API.

> **Get your API Key:** Before you start, you'll need an API key from [Google AI Studio](https://aistudio.google.com/apikey).

<br>

## 🗂️ Project Structure

This repository is organized as follows:

```
stateless-ai-chatbot/
├── 🔑 .env                    # Environment variables (API key goes here)
├── 📦 package.json            # Project dependencies & scripts
├── ⚙️ server/                # Backend logic
│   └── 🚀 server.js          # Node.js server (Express)
└── 💻 src/                 # Frontend React code
    ├── ⚛️ App.js             # Main application component
    ├── 📜 index.js           # Entry point for the React app
    ├── 🎨 styles.css         # Global styling
    └── 🧩 components/        # Reusable React components
        ├── ⌨️ ChatInput.js     # Input field for user messages
        ├── 💬 ChatMessage.js    # Component to display a single chat message
        ├── 🗨️ ChatWindow.js    # Container for displaying the chat conversation
        ├── 🗄️ Sidebar.js       # Sidebar for any extra functionality
        └── 🖼️ UI/             # Reusable UI elements
            ├── 🔘 Button.js     # Custom button component
            └── 🔤 Input.js       # Custom input field component
```
<br>

## ✨ Key Features

*   **Stateless Architecture:** No session persistence, making the chatbot easy to scale.
*   **Google AI API:** Utilizes the power of Google's AI models for conversational responses.
*   **Clean Component Structure:** Well-organized frontend code with reusable components.
*   **Simple Setup:** Easy to configure with an API key and node modules.
*  **Customizable UI:** Easily adaptable with its clear component style design.
<br>

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anandrajbaghel/Stateless-AI-Chatbot
    cd stateless-ai-chatbot
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    cd server
    npm install
    cd ../
    ```
3.  **Set up your environment:**
    *   Create a `.env` file in the root directory.
    *   Add your Google AI API key:
        ```
        GOOGLE_API_KEY=YOUR_API_KEY
        ```
4. **Start the server:**
    ```bash
    cd server
    node server.js
    ```
5.  **Start the frontend:**
    ```bash
    npm start
    ```
6.  **Else start both simultaneously**
    ```bash
    npm run dev
    ```
<br>

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request.
```
