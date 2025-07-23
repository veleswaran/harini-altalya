import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './component/welcome.js';
import About from './component/about.js';
// import Form from './component/form.js';
import List from './component/List.js';
import Productcard from './component/Productcard.js';
import Form1 from './component/Form1.js';
import Form2 from './component/Form2.js';
import Task from './component/Task.js';
import Users from './component/Users.js';
import Product from './component/Product.js';
import Instagram from './component/Instagram.js';
import Students from './component/Students.js';
import Store1 from './component/Store1.js';
import Table from './component/Table.js';
import Forms from './component/Forms.js';
import Usertable from './component/Usertable.js';
import Details from './component/Details.js';
import Content from './component/posts/Create.js';
import Contenttable from './component/posts/List.js';
import PostCreate from './component/posts/Create.js';
import PostList from './component/posts/List.js';
import PostUpdate from './component/posts/Update.js';
import Userupdate from './component/Userupdate.js';





function App() {
  return (
    <>
      {/* 
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<Welcome />}></Route>
      //     <Route path='/about' element={<About />}></Route>
      //     <Route path='/form' element={<Form />}></Route>
      //   </Routes>
      // </BrowserRouter>
      <List User={[{
        Name: 'Alex',
        Email: 'alex123',
        Phone: '81785',
        Age: '23'
      },
      {
        Name: 'Alex',
        Email: 'alex123',
        Phone: '81785',
        Age: '23'
      }]} />

      <Productcard items={[{ image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp", title: "Essence Mascara Lash Princess", description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula", price: 9.99 },
      {
        image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
        title: "Eyeshadow Palette with Mirror",
        description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.", price: 19.99,
      }, {
        image:
          "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
        , title: "Powder Canister",
        description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",

        price: 14.99,
      }

      ]} /> */}

      {/* <Product/> */}
      {/* <Users/> */}
      {/* <Store1/> */}
      {/* <Instagram /> */}
      {/* <Task /> */}
      {/* <Students/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/contenttable' element={<Contenttable />}></Route>
          <Route path='/posts' element={<PostList />}></Route>
          <Route path='/posts/create' element={<PostCreate />}></Route>
          <Route path='/posts/update' element={<PostUpdate />}></Route>
          <Route path='/create' element={<Forms />}></Route>
          <Route path='/usertable' element={<Usertable />}></Route>
          <Route path='/userupdate' element={<Userupdate />}></Route>
          <Route path='/list' element={<Contenttable />}></Route>
          <Route path='/contenttable' element={<Contenttable />}></Route>
         
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
