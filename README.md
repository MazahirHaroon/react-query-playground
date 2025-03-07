# React Query Playground with JSONPlaceholder API

#### Overview

This repository serves as a **working example of React Query** fetching data from the **Fake REST API** ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)). The purpose of this project is to provide a **base setup for experimenting with React Query**, including options for caching, stale time, and query invalidation.

It is designed for **personal reference and for anyone looking to quickly set up a React Query playground**.

---

## Features

- Fetches a list of posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) using React Query, demonstrating efficient data fetching and caching.
- Adds a new post via the API’s `POST` method. Since the API does not persist new posts, the newly created post is temporarily appended to the list for demonstration purposes.
  - Showcases how React Query automatically re-fetches data when invalidating the correct `queryKey`, ensuring the latest data is retrieved from the API.
- Implements **React Query** with various options (caching, refetching, stale time).
- Uses **React 19** and **Vite**
- Modular and reusable query setup for easy experimentation.

---

## **🛠 Tech Stack**

- **React 19**
- **React Query**
- **Vite**
- **TypeScript**

---

## Installation & Setup

1. **Clone the repository:**

```sh
git clone https://github.com/MazahirHaroon/react-query-playground.git
cd react-query-playground
```

2.  **Install dependencies:**

```sh
npm install
```

3. **Start the development server:**

```sh
npm run dev
```

1. **View the app at:**

```
http://localhost:5173/
```

---

---

## External Docs

- [React Query Docs](https://tanstack.com/query/latest)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Vite](https://vitejs.dev/)

---

### **📜 License**

This project is licensed under the **MIT License** – feel free to use, modify, and experiment with it.

---

#### **👨‍💻 Contributions**

If you find this useful or want to add improvements, feel free to submit a **PR** or raise an **issue**.
