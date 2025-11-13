# 🍽️ PlateShare — Community Food Sharing Platform

### 🌐 Live Site: [https://plate-share1.netlify.app]

---

## 🧩 Overview

**PlateShare** is a community-driven food-sharing platform built using the **MERN stack**.  
It allows users to share their surplus food with the community, helping reduce food waste while supporting those in need.  
Users can post available food items, browse donations, and request food — all within an intuitive and modern web interface.

---

## ✨ Key Features

- 🥗 **Share Surplus Food Easily**  
  Logged-in users can donate food by filling out a simple form with details such as food name, quantity, pickup location, and expiry date. Images are hosted using **imgbb** for reliability.

- 🔐 **Secure Authentication**  
  Integrated **Firebase Authentication** (Email/Password + Google Login). Private routes are protected, and users stay logged in even after refreshing the page.

- 📦 **Full CRUD Functionality**  
  Donators can **add**, **update**, and **delete** their food posts, while the public can browse all available foods and view details dynamically from the MongoDB database.

- 🤝 **Food Request & Donation System**  
  Users can request available food, and donators can **accept** or **reject** requests. Accepted requests automatically change the food status to **“Donated”**.

- 🎨 **Modern, Responsive UI with Animations**  
  Built with **Tailwind CSS** and enhanced by **Framer Motion** animations for a smooth user experience across all devices — mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- React Router DOM
- Tailwind CSS
- Framer Motion
- SweetAlert2 for interactive alerts

**Backend:**

- Node.js
- Express.js
- MongoDB

## ⚙️ Core Functionalities

- 🔑 Firebase Authentication (Email/Password & Google Login)
- 🔒 Protected Routes for logged-in users
- 🥘 Food Management (Add / Update / Delete / Read)
- 📊 Dynamic Featured Foods section on Home Page
- 📬 Food Request System with Donator approval
- 🔁 Persistent Login Session
- ⚡ Loading spinner and error handling
- 🚫 Custom 404 Not Found Page
- 🧭 Fully Responsive Layout with Navbar & Footer
