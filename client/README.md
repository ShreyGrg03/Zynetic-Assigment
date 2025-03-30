# 📦 Product Management - Frontend (React.js)

## 📂 Folder Structure
```
client/
│-- src/
│   │-- components/    # Reusable UI components
│   │-- pages/         # Application pages (Login, Signup, Dashboard, etc.)
│   │-- services/      # API request functions
│   │-- hooks/         # Custom hooks (e.g., useAuth)
│   │-- context/       # Context API for state management
│   │-- App.js         # Main application entry
│   │-- index.js       # ReactDOM render
│-- public/           # Static assets
│-- .env              # Environment variables
│-- package.json      # Dependencies & scripts
│-- README.md         # Documentation
```

---

## 📌 Features
✅ User Signup & Login (JWT-based authentication)  
✅ Secure routes with token validation  
✅ Create, Read, Update, Delete (CRUD) products  
✅ Product filtering by category, price, and rating  
✅ Search functionality for quick product lookup  
✅ Responsive and modern UI with Tailwind CSS  

---

## 🖥️ Setup & Installation
### 1️⃣ Clone the Repository
```bash
cd Zynetic-Assigment/client
```

### 2️⃣ Install Dependencies
```bash
npm install  # or yarn install
```
### 4️⃣ Start the Development Server
```bash
npm start  # or yarn start
```

This will launch the frontend on `http://localhost:5000/`.

---

## 📡 API Integration
The frontend interacts with the backend via Axios. Example API request:
```js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};
```

---

## 🔐 Authentication & Protected Routes
- JWT tokens are stored in `localStorage` after login.
- Axios automatically attaches the token in API requests.
- Protected pages are restricted for unauthenticated users.

Example protected route:
```js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};
```

---

## 📌 Additional Notes
- Ensure the backend is running before testing the frontend.
- Use Postman or browser dev tools to inspect API requests.
- Debug errors by checking console logs (`F12` in the browser).

---

## 👨‍💻 Author
[Shrey Garg](https://github.com/ShreyGrg03)

Happy coding! 🚀

