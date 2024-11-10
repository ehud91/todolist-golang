# Todo List Application

This is a full-stack Todo List application with a **Go (Golang) backend** and a **React + TypeScript frontend**. It allows users to create, edit, and delete tasks and manage their to-do lists.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Setup (Go)](#backend-setup-go)
- [Frontend Setup (React + TypeScript)](#frontend-setup-react--typescript)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Add, view, edit, and delete tasks.
- Mark tasks as complete or incomplete.
- Responsive and intuitive UI for managing to-do lists.

## Tech Stack

- **Backend**: Go (Golang)
- **Frontend**: React, TypeScript
- **Database**: (Replace with database of choice, e.g., PostgreSQL, MongoDB, etc.)
- **API**: RESTful

## Getting Started

To get started, ensure you have **Go**, **Node.js**, and **Yarn** or **npm** installed on your machine. Clone the repository and follow the setup instructions below.

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

## Backend Setup (Go)

1. Navigate to the backend directory:
```bash
cd backend
```
2. Install Go dependencies:
```bash
go mod download
```
3. Set up environment variables (See Environment Variables section).
4. Run the server:
```bash
go run main.go
```
By default, the backend runs on http://localhost:8000.

## Frontend Setup (React + TypeScript)

1. Navigate to the frontend directory:
```bash
cd frontend
```

3. Set up environment variables (See Environment Variables section).

4. Start the React development server:
```bash
npm start
# OR
yarn start
```

By default, the frontend runs on http://localhost:3000.

## Environment Variables

Create a ```.env``` file in both the backend and frontend directories with the necessary environment variables.

## Backend (.env file)

```plaintext
PORT=8000
DATABASE_URL=your_database_connection_string
```

## Frontend (.env file)
```plaintext
REACT_APP_API_URL=http://localhost:8000
```

## Running the Application

After setting up both the backend and frontend, open your browser and navigate to http://localhost:3000 to access the Todo List application.

## API Endpoints

Task Endpoints

* GET /api/tasks - Retrieve all tasks
* POST /api/tasks - Create a new task
* GET /api/tasks/:id - Retrieve a single task by ID
* PUT /api/tasks/:id - Update a task by ID
* DELETE /api/tasks/:id - Delete a task by ID

### Example API Request Body

When creating or updating a task, use the following JSON format:

```json
{
  "title": "Complete homework",
  "description": "Finish the math and science assignments",
  "isCompleted": false
}
```
### License

This project is licensed under the MIT License.