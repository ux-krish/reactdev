import { useEffect, useState } from "react";
import PageLayout from "./components/PageLayout";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import Cart from "./components/Cart";
import { v4 as uuidv4 } from 'uuid';


const initialProducts = [
  {
    id: uuidv4(),
    name: 'Product 1',
    price: 20,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: uuidv4(),
    name: 'Product 2',
    price: 30,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    name: 'Product 3',
    price: 36,
    description: 'tempor incididunt ut labore et dolore magna.',
  },
];
const App = () => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    //console.log(JSON.stringify(products, null, 2));
  }, [products])

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
          let { isCart, ...rest } = product
          return { ...rest };
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
      <Navbar handleAddNewItem={handleAddNewItem}  />
      <div className="w-full gap-4 lg:flex items-start">
        <ProductGallery products={products} handleAddProduct={handleAddProduct} />
        <Cart products={products} handleRemoveProduct={handleRemoveProduct} />
      </div>
    </PageLayout>
  );
};

export default App;
