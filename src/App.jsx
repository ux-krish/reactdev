import { useEffect, useState } from "react";
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

  useEffect(()=>{
    console.log(JSON.stringify(products,null,2));
  },[products])

  const handleAddProduct = (productId) => {
    setProducts(prev => {
      return prev.map(product => {
        if (product.id === productId) {
          return { ...product, isCart: true };
        }
        return product;
      });
    })
  };

  const handleRemoveProduct = (productId) => {
    setProducts(prev => {
      return prev.map(product => {
        if (product.id === productId) {
          return { ...product, isCart: false };
        }
        return product;
      });
    })
  };

  const handleAddNewItem = (newItem) => {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  return (
    <PageLayout>
      <Navbar handleAddNewItem={handleAddNewItem} />
      <div className="w-full gap-4 lg:flex items-start">
        <ProductGallery products={products} handleAddProduct={handleAddProduct} />
        <Cart products={products} handleRemoveProduct={handleRemoveProduct} />
      </div>
    </PageLayout>
  );
};

export default App;
