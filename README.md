
# Item Manager Application

This is a full-stack application for managing items, with a backend built using Express.js and Sequelize and a frontend built with React.js.

---

## Backend - Item Manager API

This is the backend service for the Item Manager application. It provides RESTful APIs for managing items.

### Setup Instructions

#### Prerequisites
- Node.js (>=14.x)
- MySQL
- `npm` (comes with Node.js)

#### Environment Variables
Create a `.env` file in the `backend` directory with the following variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=itemsdb
DB_PORT=3306
PORT=5000
```

#### Installation
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run migrations to set up the database schema:
   ```bash
   npx sequelize-cli db:migrate
   ```

4. (Optional) Seed the database with initial data:
   ```bash
   npx sequelize-cli db:seed:all
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`.

---

### API Endpoints

**Base URL**: `http://localhost:5000/api`

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | `/items`       | Create a new item       |
| GET    | `/items`       | Get all items           |
| GET    | `/items/:id`   | Get a specific item     |
| PUT    | `/items/:id`   | Update an existing item |
| DELETE | `/items/:id`   | Delete an item          |

#### Request and Response Examples

**POST `/items`**

**Request Body**:
```json
{
  "name": "Item Name",
  "description": "Item Description",
  "price": 99.99
}
```

**Response**:
```json
{
  "id": 1,
  "name": "Item Name",
  "description": "Item Description",
  "price": 99.99,
  "createdAt": "2025-01-03T10:00:00.000Z",
  "updatedAt": "2025-01-03T10:00:00.000Z"
}
```

---

## Frontend - Item Manager Application

This is the frontend for the Item Manager application. It provides a user-friendly interface for managing items.

### Setup Instructions

#### Prerequisites
- Node.js (>=14.x)
- `npm` (comes with Node.js)

#### Installation
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

The application will run on `http://localhost:5173`.

---

## Features

### Backend Features
- RESTful API with CRUD operations.
- Database integration using Sequelize and MySQL.
- Input validation for item creation and updates.

### Frontend Features
- Add new items.
- View all items in a table format.
- Edit existing items.
- Delete items with confirmation.
- Toast notifications for success and error feedback.

---

## Additional Notes

### Known Issues
- Error handling for database disconnections needs improvement.
- Some API error messages need better user-friendly formatting.

### Future Enhancements
- **Backend**:
  - Add search and pagination for `/items`.
  - Implement user authentication.
- **Frontend**:
  - Improve the UI/UX with animations and enhanced responsiveness.
  - Add authentication and role-based access control.
  - Enhance toast notifications for better feedback.

---
