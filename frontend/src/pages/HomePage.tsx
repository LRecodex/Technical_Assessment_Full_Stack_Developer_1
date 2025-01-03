import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems } from "../features/items/itemSlice";
import { deleteItem } from "../api/itemApi";
import { useAppDispatch } from "../hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: any) => state.items.items);
  const status = useSelector((state: any) => state.items.status);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await deleteItem(id);
      dispatch(fetchItems());
    }
  };

  if (status === "loading") return <div className="text-center mt-5">Loading...</div>;
  if (status === "failed") return <div className="text-center text-danger mt-5">Failed to load items</div>;

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div
        className="w-100 p-4"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Items</h1>
          <Link to="/add">
            <button className="btn btn-success">Add New Item</button>
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any, index: number) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price ? Number(item.price).toFixed(2) : "N/A"}</td>
                  <td>
                    <Link to={`/edit/${item.id}`} className="btn btn-warning btn-sm me-2">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
