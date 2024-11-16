# Assignment Submission Portal

A backend system for managing assignments where users can upload assignments and admins can review (accept/reject) them.

---

## **Features**
- **User Features**:
  - Register and login.
  - Upload assignments with relevant details (e.g., task, admin).
- **Admin Features**:
  - Register and login.
  - View assignments tagged to them.
  - Accept or reject assignments.
- **Secure Authentication**:
  - JWT-based authentication for both users and admins.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

---

## **Setup Instructions**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation or [MongoDB Atlas](https://www.mongodb.com/atlas) for cloud)
- Git (optional for cloning)

### **Installation**
1. Clone the repository:
    ```bash
    git clone https://github.com/OjhaGopal/Backend_Assignment.git
    cd Backend_Assignment
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the project root with the following contents:
    ```env
    MONGO_URI=mongodb://localhost:27017/assignment-portal
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Start MongoDB:
    - **Local MongoDB**: Run `mongod` to start the database.
    - **MongoDB Atlas**: Ensure the URI in `MONGO_URI` points to your cluster.

5. Start the application:
    ```bash
    npm start
    ```

6. Access the application on [http://localhost:5000](http://localhost:5000).

---

## **API Endpoints**

### **User Endpoints**
| Method | Endpoint               | Description                     |
|--------|-------------------------|---------------------------------|
| POST   | `/users/register`       | Register a new user.            |
| POST   | `/users/login`          | User login.                     |
| POST   | `/users/upload`         | Upload an assignment.           |
| GET    | `/admins`               | Fetch all available admins.     |

#### Example Payloads

- **Register**:
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123",
        "role": "User"
    }
    ```

- **Login**:
    ```json
    {
        "email": "john@example.com",
        "password": "password123"
    }
    ```

- **Upload Assignment**:
    ```json
    {
        "task": "Complete project",
        "admin": "adminIdHere"
    }
    ```

### **Admin Endpoints**
| Method | Endpoint                        | Description                     |
|--------|----------------------------------|---------------------------------|
| POST   | `/admins/register`              | Register a new admin.           |
| POST   | `/admins/login`                 | Admin login.                    |
| GET    | `/admins/assignments`           | View assignments.               |
| POST   | `/admins/assignments/:id/accept`| Accept an assignment.           |
| POST   | `/admins/assignments/:id/reject`| Reject an assignment.           |

---

## **Project Structure**
