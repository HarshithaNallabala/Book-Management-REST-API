# Book-Management-REST-API

# 📚 Book Management REST API

This project is a simple **RESTful API** built using **Node.js** and **Express.js** to manage a list of books. It performs basic **CRUD operations** (Create, Read, Update, Delete) using in-memory storage (no database involved).

---

## 🚀 Features

- View all books (`GET /books`)
- Add a new book (`POST /books`)
- Update a book by ID (`PUT /books/:id`)
- Delete a book by ID (`DELETE /books/:id`)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Postman (for testing)

---

📬 API Endpoints
➤ Get All Books
GET /books

Returns all books in JSON format.

![get](https://github.com/user-attachments/assets/4aa4e88c-6138-4be4-b2be-46cc0d9e2bac)


➤ Add a Book
POST /books

Body:

json
Copy
Edit
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name"
}
➤ Update a Book
PUT /books/:id

Body:

json
Copy
Edit
{
  "title": "Updated Title",
  "author": "Updated Author"
}

![put](https://github.com/user-attachments/assets/1b05c13c-206d-459d-b514-3ff86b500340)


➤ Delete a Book
DELETE /books/:id

![delete](https://github.com/user-attachments/assets/cf7feb1e-0801-4925-9693-29cb2869ef21)


📚 Learning Objectives
•Understand REST API basics

•Use Express routing and middleware

•Handle HTTP methods and JSON

•Test endpoints using Postman

