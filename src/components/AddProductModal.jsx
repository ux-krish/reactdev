import React, { useState } from "react";

const AddProductModal = ({ isOpen, onClose, onAddNewItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields, you can add more validation as needed
    if (!itemName || !itemPrice || !itemDescription) {
      // Handle validation error
      return;
    }

    // Call the parent component function to add the new item
    onAddNewItem({
      name: itemName,
      price: parseFloat(itemPrice),
      description: itemDescription,
    });

    // Clear form fields
    setItemName("");
    setItemPrice("");
    setItemDescription("");

    // Close the modal
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
