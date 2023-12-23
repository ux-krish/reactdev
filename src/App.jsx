import { useEffect, useState } from "react";
import PageLayout from "./components/PageLayout";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import Cart from "./components/Cart";
import { v4 as uuidv4 } from 'uuid';
import Login from "./components/Login";


const initialProducts = [
  {
    id: uuidv4(),
    name: 'Cake',
    price: 300,
    description: '6 inch / 1 Pound',
  },
  {
    id: uuidv4(),
    name: 'Chocolate',
    price: 100,
    description: 'Dark / White / Strawberry',
  },
  {
    id: uuidv4(),
    name: 'Ice Cream',
    price: 80,
    description: 'Mango / Banana / Coconut',
  },
  {
    id: uuidv4(),
    name: 'Cake 1',
    price: 300,
    description: '6 inch / 1 Pound',
  },
  {
    id: uuidv4(),
    name: 'Chocolate 1',
    price: 100,
    description: 'Dark / White / Strawberry',
  },
  {
    id: uuidv4(),
    name: 'Ice Cream 1',
    price: 80,
    description: 'Mango / Banana / Coconut',
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


  const [copyProducts, setCopyProducts] = useState(initialProducts);
  const [searchData, setSearchData] = useState('');

 const filterData = (searchData) => {
  setSearchData(searchData);
};

useEffect(() => {
  if (searchData.length > 0) {
    const temp = copyProducts.filter(product =>
      product.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setProducts(temp);
  } else {
    setProducts(copyProducts);
  }
}, [searchData, copyProducts]);

  return (
    <PageLayout>
      <Navbar
        handleAddNewItem={handleAddNewItem}
        searchEvent={(searchData) => { filterData(searchData) }}
      />
      <div className="w-full gap-4 lg:flex items-start">
        <ProductGallery products={products} handleAddProduct={handleAddProduct} />
        <Cart products={products} handleRemoveProduct={handleRemoveProduct} />
      </div>
       {/* <Login /> */}
    </PageLayout>
  );
};

export default App;
