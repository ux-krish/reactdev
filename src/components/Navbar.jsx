import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
export default function Navbar({ handleAddNewItem }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // Reset all form fields when the modal is closed
    setProductName('');
    setPrice('');
    setDescription('');
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (productName.trim() !== '' && price.trim() !== '') {
      const newItem = {
        id:uuidv4(),
        name: productName,
        price: parseFloat(price),
        description,
      };
      //console.log(newItem)
      handleAddNewItem(newItem);
      closeModal();
    }
  };

  return (
    <>
      <div className='flex items-center justify-between bg-slate-700 p-3 rounded-md mt-4 mb-8 shadow-lg'>
        <h1 className="text-2xl font-bold text-slate-300 px-4">Product List</h1>
        <button onClick={openModal} className='bg-slate-600 py-2 px-6 rounded-md font-bold text-slate-300 hover:bg-slate-950 shadow-lg'>Add Product</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal bg-slate-400/70 h-full fixed top-0 bottom-0 left-0 right-0 overflow-y-auto flex items-center justify-center'
        overlayClassName='overlay'
        ariaHideApp={false}
      >
        <div className='flex flex-col items-center bg-slate-900 p-10 rounded-xl max-w-[600px] w-[95%] sm:w-full overflow-y-auto'>
          <h2 className='text-slate-400 font-bold text-3xl mb-6'>Add Product</h2>
          <input
            type='text'
            placeholder='Product Name'
            value={productName}
            onChange={handleProductNameChange}
            className='w-full mb-4 h-[50px] px-4 rounded-md'
          />
          <input
            type='text'
            placeholder='Price'
            value={price}
            onChange={handlePriceChange}
            className='w-full mb-4 h-[50px] px-4 rounded-md py-3'
          />
          <textarea
            rows={5} 
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
            className='w-full mb-4 h-[50px] px-4 rounded-md py-3'
          />
          <div className='grid grid-cols-2 w-full gap-4'>
          <button onClick={handleSubmit} className='px-6 py-3 bg-slate-600 w-full text-slate-100 rounded-md'>Submit</button>
          <button onClick={closeModal} className='px-6 py-3 bg-rose-900 w-full text-slate-100 rounded-md'>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
}
