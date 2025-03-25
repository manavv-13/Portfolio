# Manav's Portfolio

This is the source code for my personal portfolio website, built using **React (Vite) and Tailwind CSS** for the frontend and **Node.js** for the backend. It showcases my skills, projects, and contact details with a dark mode toggle feature.

## 🚀 Tech Stack

### **Frontend:**
- React (Vite)
- Tailwind CSS
- Framer Motion (Animations)
- React Scroll (Smooth Scrolling)

### **Backend:**
- Node.js
- Nodemailer (for contact form email handling)

## 📁 Folder Structure
```
Portfolio/
│-- backend/      # Node.js backend for handling emails
│-- frontend/     # React frontend for the portfolio
│   ├── src/
│   │   ├── assets/      # Static Assets
│   │   ├── components/  # Reusable components like Navbar, Footer
│   │   ├── sections/    # Portfolio sections (Main, About, Projects, etc.)
│   │   ├── pages/       # Home Page to load all sections
│   │   ├── context/     # Dark mode context
│   │   ├── App.jsx      # Main App component
│   │   ├── index.css    # Main CSS file
│   │   ├── main.jsx     # Entry point
│   ├── public/          # Static PDF file
│   ├── index.html       # Root HTML file
│-- .gitignore
│-- README.md
```

## 🌑 Dark Mode
This portfolio includes a **dark mode toggle** implemented using React Context API. The entire page background, text colors, and UI elements dynamically switch between light and dark themes.

## 🔧 Setup & Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/manavv-13/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies for frontend & backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Start the development servers:
   - **Frontend:**
     ```sh
     cd frontend
     npm run dev
     ```
   - **Backend:**
     ```sh
     cd backend
     node server.js
     ```

4. Open `http://localhost:5173` in your browser to view the portfolio.

## 📞 Contact
Feel free to reach out:
- **GitHub:** https://github.com/manavv-13
- **LinkedIn:** https://www.linkedin.com/in/manav-nigam-977365224
- **Email:** anshnigam034@gmail.com

---
© {new Date().getFullYear()} Manav. All rights reserved.

