import { useState } from "react";
import PageLayout from "./components/PageLayout";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import Cart from "./components/Cart";

const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 20,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 30,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 36,
    description: 'tempor incididunt ut labore et dolore magna.',
  },
];
const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    const isProductInCart = cart.some((product) => product.id === productId);
    
    if (selectedProduct && !isProductInCart) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    }
  };

  const handleRemoveProduct = (productId) => {
    const removedProduct = cart.find((product) => product.id === productId);
    
    setProducts((prevProducts) => [...prevProducts, removedProduct]);
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const handleAddNewItem = (newItem) => {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  return (
    <PageLayout>
      <Navbar handleAddNewItem={handleAddNewItem} />
      <div className="w-full gap-4 lg:flex items-start">
        <ProductGallery products={products} handleAddProduct={handleAddProduct} />
        <Cart cart={cart} handleRemoveProduct={handleRemoveProduct} />
      </div>
    </PageLayout>
  );
};

export default App;
