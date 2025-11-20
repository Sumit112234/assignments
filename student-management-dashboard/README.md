# Student Management Dashboard

A simple yet feature-rich **Student Management Dashboard** built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
It uses the public **DummyJSON Users API** as mock student data to demonstrate routing, API calls, state management, and modern UI patterns.

 Designed & developed by **Sumit Baghel**.



## Features

- Browse a list of “students” fetched from a public API.
- View detailed profile for each student.
- Add / remove / clear **Favorite Students** using Redux Toolkit.
- Filter students by specific country (client-side filtering).
- Themed **Home** page with Light/Dark toggle.
- Clean, responsive UI using Tailwind CSS.
- Proper loading, error, and empty states for API calls.



## 🧑 Tech Stack

- **React** (functional components + hooks)
- **React Router DOM** for client-side routing
- **Redux Toolkit** + **React Redux** for favorites state
- **Tailwind CSS** for styling
- **DummyJSON Users API** as data source  
  Endpoint: `https://dummyjson.com/users`



## 📂 Project Structure

src/
┣ components/
┃ ┣ Navbar.jsx # Top navigation bar with active highlighting and favorites count
┃ ┗ StudentCard.jsx # Reusable card for each student
┣ pages/
┃ ┣ Home.jsx # Welcome, theme switcher, motivational quotes, project info
┃ ┣ Students.jsx # Fetch & list students, filter, add to favorites
┃ ┣ StudentDetails.jsx # Dynamic route /students/:id, show full student details
┃ ┣ Favorites.jsx # Redux-driven favorites list
┃ ┗ About.jsx # About project, features, credits
┣ redux/
┃ ┣ store.js # Redux store configuration
┃ ┗ favoritesSlice.js # favorites: [], add/remove/clear reducers
┣ App.jsx # App layout + routes
┗ main.jsx # React entry point, Provider + Router setup


##  Getting Started

### 1. Prerequisites

- **Node.js** 16+  
- npm or yarn

### 2. Install Dependencies

npm install

or
yarn install

text

### 3. Run the App

npm run dev

or
yarn dev

text

Open the printed URL (usually `http://localhost:5173`) in your browser.


## 🌐 API Usage

This app uses the **DummyJSON Users API** as its “students”:

- All users: `GET https://dummyjson.com/users`
- Single user: `GET https://dummyjson.com/users/:id`

Client-side filtering is used to show only students from a specific country (e.g., `United States`) by checking `user.address.country`.



## Core Concepts Demonstrated

### React & Hooks

- Functional components (`Navbar`, `StudentCard`, page components)
- `useState` for theme toggling, loading/error state
- `useEffect` for fetching students and student details
- Conditional rendering for:
  - Loading state
  - Error state
  - “No Students Found”

### Routing

- `react-router-dom` routes:
  - `/` → **Home**
  - `/students` → Students list
  - `/students/:id` → Student details
  - `/favorites` → Favorites
  - `/about` → About page
- Active route highlighting in the Navbar.

### Redux Toolkit

- Slice: `favoritesSlice.js`
  - `favorites: []`
  - `addFavorite(student)`
  - `removeFavorite(studentId)`
  - `clearFavorites()`
- Accessed via `useSelector` and `useDispatch`.



##  UI / UX

- Tailwind-based responsive layout.
- Card-based grid for student listing.
- Gradient backgrounds and subtle shadows for modern dashboard feel.
- Theme toggle (Light/Dark) on the Home page.
- Badges, chips, and soft borders for a clean visual hierarchy.



##  Credits

- **Developer**: **Sumit Baghel**
- **API**: [DummyJSON Users](https://dummyjson.com/users)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit

Feel free to fork, modify, and use this project as a learning resource or as a starting point for your own dashboards.