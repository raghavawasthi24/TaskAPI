## Getting Started

To get started with the API's, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your MongoDB connection in the application.
4. Start the application using `npm start`.

## TASK CURD API's

### 1. List all tasks
   - **Endpoint:** `GET /allTask/:user_id`
   - **Description:** Pass the id of particular user whose tasks is to get.

### 2. Retrieve a single task by ID
   - **Endpoint:** `GET /getTask/:id`
   - **Description:** Retrieve a single task.

### 3. Create a new task
   - **Endpoint:** `POST /createTask`
   - **Description:** Add a new task.

### 4. Update an existing task
   - **Endpoint:** `PATCH /updateTask/:id`
   - **Description:** Upadate a particular task.

### 5. Delete a task
   - **Endpoint:** `DELETE /deleteTask/:id`
   - **Description:** Delete a partcular Task.

##  Authentication
ALL CURD operations are token-based authenticated so you need to login to access all API's.

### 1. Login API
   - **Endpoint:** `POST /login`
   - **Description:** Pass email and password and it will return token.

### 2. Register API
   - **Endpoint:** `POST /register`
   - **Description:** Register a new user.
