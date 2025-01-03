import React, { useEffect } from "react";
import { fetchItems } from "../features/items/itemSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const ItemList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items);
  const status = useAppSelector((state) => state.items.status);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Failed to load items.</div>;

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
