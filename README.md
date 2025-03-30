# Product Management Web App  

## 🚀 Overview  
This is a Full Stack Product Management Web App built with React.js for the frontend and Node.js for the backend. The app includes user authentication (JWT-based) and CRUD operations for products, along with filtering and sorting functionalities.  

---

## 📂 Project Structure  
```
Zynetic-Assignment/  
│-- client/  (Frontend - React.js)  
│-- server/  (Backend - Node.js)  
```  

---

## 🫠️ Tech Stack  
**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js  
**Authentication:** JWT (JSON Web Token)  
**Database:** MongoDb  

---

## 📌 Features  

### 🔐 User Authentication (JWT-based)  
- Signup (email, password)  
- Login (returns JWT token)  
- Logout functionality  
- Protected routes using JWT  

### 🛆 Product Management  
- Create Product (name, description, category, price, rating)  
- View all products  
- Update product  
- Delete product  

### 🔍 Product Filtering & Search  
- Filter products by category, price range, or rating  
- Search products by name or description  

---

## 🖥️ How to Run the Project  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/ShreyGrg03/Zynetic-Assigment.git  
cd Zynetic-Assigment  
```  

### 2️⃣ Setup Backend (Node.js)  
```bash
cd server  
npm install  # Install dependencies  
npm run start:dev  # Run the backend server in development mode  
```  

#### 🔹 Configure `.env` file (server/.env)  
```
PORT=5000  
DATABASE_URL=your_MONGODB_URL  
JWT_SECRET=your_secret_key  
```  
Ensure MongoDB is running and update the `DATABASE_URL` accordingly.  

### 3️⃣ Setup Frontend (React.js)  
```bash
cd ./client  
npm install  # Install dependencies  
npm start  # Run the React app  
```  

#### 🔹 Configure `.env` file (client/.env)  
```
REACT_APP_API_URL=http://localhost:5000  
```  

---

## 📝 API Endpoints  

### Authentication  
- `POST /auth/signup` → Register a new user  
- `POST /auth/login` → Login and receive a JWT token  

### Products  
- `GET /products` → Get all products  
- `POST /products` → Create a new product  
- `PUT /products/:id` → Update a product  
- `DELETE /products/:id` → Delete a product  
- `GET /products/search?query=xyz` → Search products  
- `GET /products/filter?category=xyz&price=range` → Filter products  

---

## 📸 Screenshots  

### 📌 Signup/Registration Page  
![Screenshot 2025-03-31 001949](https://github.com/user-attachments/assets/d1c82737-7369-4cd2-ac7b-f3efd24ae174)


### 📌 Login Page  
![Screenshot 2025-03-31 001956](https://github.com/user-attachments/assets/ab26ab99-b0a7-4c0b-ad40-c8fb45772819)


### 📌 Home/Product Page  
![Screenshot 2025-03-31 002050](https://github.com/user-attachments/assets/9a63e44c-d59f-42cb-828a-f9a3e4649798)


---

## 📌 Additional Notes  
- Ensure Node.js (v16+) and MongoDB Compass are installed.  
- Use **Postman** for API testing.  
- JWT tokens are stored in localStorage for authentication.  
- Code is modular and follows best practices for scalability.  

---

## 👨‍💻 Author  
[Shrey Garg](https://github.com/ShreyGrg03)  

Happy coding! 🚀
