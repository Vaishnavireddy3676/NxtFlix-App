# NxtFlix - Movie Streaming Web Application

NxtFlix is a responsive React web application built with Vite that allows users to authenticate, browse trending/genre-filtered movies, view movie details, and manage a personalized Watch Later list.

---

## 🚀 Features

- **Authentication**: Secure Login screen with mock authentication and persistent token storage using `js-cookie`.
- **Protected Routes**: Navigation restrictions preventing unauthorized access to main pages.
- **Dynamic Content & Filtering**:
  - Trending and Fresh Release horizontal carousels.
  - Interactive genre filter (Action, Sci-Fi, Drama, Comedy, Thriller, All).
- **Movie Details**: Dedicated routes showing full movie overviews, ratings, and backdrop banners.
- **Watch Later List**: Context API state management allowing users to add/remove titles stored in `localStorage`.
- **Custom 404 Page**: Catch-all routing for undefined paths.

---

## 🛠️ Tech Stack

- **Frontend Library**: React (Vite)
- **Routing**: React Router DOM (v6+)
- **State Management**: React Context API
- **Icons**: Lucide React
- **Cookies & Local Storage**: `js-cookie` for auth session, `localStorage` for watch later list

---

## 💻 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v16 or higher) installed on your system.

### 2. Installation
Clone or download the project folder, then install dependencies:

```bash
npm install
