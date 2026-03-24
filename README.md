# ✈️ Live Flight Tracker Dashboard

## 📌 Project Overview

This project is a **Live Flight Tracker Dashboard** built using **JavaScript, HTML, CSS, and API integration**. It fetches real-time flight data and displays it in a user-friendly interface.

The application allows users to:

* Search flights by airline name
* Filter flights based on status
* Sort flights by departure time

---

## 🎯 Objective

The goal of this project is to demonstrate:

* API integration using `fetch`
* Use of **Array Higher-Order Functions** (map, filter, sort)
* Dynamic UI rendering
* Clean and responsive design

---

## 🌐 API Used

### ✈️ Aviationstack API

* Provides real-time flight data
* Used to fetch flight details like airline, route, status, and time

### 🔑 API Key

```
55b8b20a69c62d2c84f642bf932e7db3
```

### 🔗 Endpoint

```
http://api.aviationstack.com/v1/flights?access_key=YOUR_API_KEY
```

⚠️ Note:

* Free plan supports **HTTP only (not HTTPS)**
* Data is **limited and random (live flights)**

---

## 🚀 Features Implemented

### 🔍 Search

* Search flights by airline name
* Implemented using `.filter()`

### 🎯 Filter

* Filter flights by status:

  * Active
  * Landed
  * Scheduled
* Implemented using `.filter()`

### ↕️ Sort

* Sort flights by departure time
* Implemented using `.sort()`

### 📦 API Integration

* Fetch real-time data using `fetch()`
* Handle loading and error states

### 🎨 UI Features

* Clean card-based layout
* Responsive design
* Loading indicator

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript (ES6)
* Aviationstack API

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run the Project

1. Download or clone the project
2. Open folder in VS Code
3. Install **Live Server extension**
4. Right-click `index.html` → Open with Live Server

---

## ⚠️ Important Notes

* API uses `http`, so:

  * Open using Live Server
  * Or allow insecure content in browser

* Data is **live**, so:

  * Same results may not appear every time
  * Some airlines (e.g., IndiGo) may not always be available

---

## 📊 Milestone Progress

### ✅ Milestone 1: Setup

* Project idea finalized
* API selected
* Basic structure created

### ✅ Milestone 2: API Integration

* Successfully fetched flight data
* Displayed dynamically

### ✅ Milestone 3: Core Features

* Search implemented
* Filter implemented
* Sort implemented

### 🔄 Milestone 4: Final Submission (Pending)

* Code cleanup
* Deployment
* Documentation update

---

## ⭐ Bonus Features (Optional Improvements)

* Dark mode toggle
* Debouncing for search
* Pagination / Infinite scroll
* Favorite flights (localStorage)
* Auto-suggestions for airlines

---

## 💡 Challenges Faced

* Free API limitations
* Inconsistent flight data
* HTTP vs HTTPS issues
* Handling empty search results

---

## 📈 Future Improvements

* Use better API (paid or advanced)
* Add maps for flight tracking
* Add flight number search
* Improve UI with animations

---

## 💬 Conclusion

This project successfully demonstrates:

* Real-world API integration
* Use of JavaScript HOFs
* Interactive UI design

It is a practical implementation of modern web development concepts and fulfills all required project criteria.

---

## 👨‍💻 Author

**Ayush Kumar**

---
