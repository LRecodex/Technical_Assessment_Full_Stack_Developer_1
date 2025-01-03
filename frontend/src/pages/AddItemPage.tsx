import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../api/itemApi";

const AddItemPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Name and price are required.");
      return;
    }
    await createItem({ name, description, price: parseFloat(price) });
    navigate("/"); // Redirect to the homepage after adding
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", padding: "20px" }}
    >
      <div
        className="container"
        style={{
          maxWidth: "600px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center text-primary mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter item name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter item description"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter item price"
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
