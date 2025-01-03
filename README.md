
# Frontend - Item Manager Application

This is the frontend for the Item Manager application. It provides a user-friendly interface for managing items.

---

## Setup Instructions

### Prerequisites
- Node.js (>=14.x)
- `npm` (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
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
- Add new items
- View all items
- Edit existing items
- Delete items

---

## API Integration
The frontend interacts with the backend API located at `http://localhost:5000/api`.

---

## Additional Notes
- **Future Enhancements**:
  - Add authentication to the frontend.
  - Improve the UI/UX with animations.
  - Add Toast for UI
---

# Backend - Item Manager API

This is the backend service for the Item Manager application. It provides RESTful APIs for managing items.

---

## Setup Instructions

### Prerequisites
- Node.js (>=14.x)
- MySQL
- `npm` (comes with Node.js)

### Environment Variables
Create a `.env` file in the project root with the following variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=itemsdb
DB_PORT=3306
PORT=5000
```

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database:
   ```bash
   npm run db:init
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`.

---

## API Endpoints

### **Base URL**: `http://localhost:5000/api`

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | `/items`       | Create a new item       |
| GET    | `/items`       | Get all items           |
| GET    | `/items/:id`   | Get a specific item     |
| PUT    | `/items/:id`   | Update an existing item |
| DELETE | `/items/:id`   | Delete an item          |

### Request and Response Examples

#### POST `/items`
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

#### GET `/items`
**Response**:
```json
[
  {
    "id": 1,
    "name": "Item Name",
    "description": "Item Description",
    "price": 99.99,
    "createdAt": "2025-01-03T10:00:00.000Z",
    "updatedAt": "2025-01-03T10:00:00.000Z"
  }
]
```

---

## Additional Notes
- **Known Issues**:
  - Error handling for database disconnections needs improvement.
- **Future Enhancements**:
  - Add search and pagination for `/items`.
  - Add user authentication.

---
