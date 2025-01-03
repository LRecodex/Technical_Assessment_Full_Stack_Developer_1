import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, updateItem } from "../api/itemApi";
import { Item } from "../features/items/types";

const EditItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getItemById(Number(id));
        const item = response.data as Item;
        setName(item.name);
        setDescription(item.description || "");
        setPrice(item.price.toString());
      } catch (error) {
        console.error("Failed to fetch item:", error);
        alert("Failed to fetch item details. Please try again.");
      }
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || isNaN(parseFloat(price))) {
      alert("Name and a valid price are required.");
      return;
    }
    try {
      await updateItem(Number(id), { name, description, price: parseFloat(price) });
      navigate("/"); // Redirect to the homepage after updating
    } catch (error) {
      console.error("Failed to update item:", error);
      alert("Failed to update the item. Please try again.");
    }
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
        <h2 className="text-center text-primary mb-4">Edit Item</h2>
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
              Update Item
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

export default EditItemPage;
