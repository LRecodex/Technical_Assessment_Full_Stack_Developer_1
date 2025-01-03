import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this matches the backend's port
});

export const getAllItems = async () => api.get("/item");
export const getItemById = async (id: number) => api.get(`/item/${id}`);
export const createItem = async (data: any) => api.post("/item", data);
export const updateItem = async (id: number, data: any) => api.put(`/item/${id}`, data);
export const deleteItem = async (id: number) => api.delete(`/item/${id}`);
