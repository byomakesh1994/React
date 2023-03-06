//.......PRODUCT..........

//import logo from "./logo.svg";
// import "./App.css";
// //import Header from "../src/Header";
// import Home from "./Product/Home";
// import Contact from "./Product/Contact";
// import About from "./Product/About";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Navbar from "./Product/Navbar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Add from "./Product/Add";
// import Edit from "./Product/Edit";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/contact" element={<Contact />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/add" element={<Add />} />
//             <Route exact path="/edit/:id" element={<Edit />} />
//           </Routes>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;
//import logo from "./logo.svg";

// ......FORM........

// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Listuser from "./Form/Pages/Antd/Listuser";
// import Adduser from "./Form/Pages/Adduser";
// import EditUser from "./Form/Pages/Edituser";
// import NotFound from "./Form/Component/NotFound";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Listuser />}></Route>
//           <Route path="/add" element={<Adduser />}></Route>
//           <Route path="/edit/:id" element={<EditUser />}></Route>
//           <Route path="*" element={<NotFound />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

//export default App;

//........REDUX...........

// import "./App.css";
// //import Header from "../src/Header";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Redux/Home";
// import Cart from "./Redux/Cart";
// import Navbar from "./Redux/Navbar";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/cart" element={<Cart />}></Route>
//           </Routes>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;

//.............BEER...........

// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Homepage from "./Cocktail/Pages/Homepage";
// import Productdetails from "./Cocktail/Pages/Productdetails";
// import NotFound from "./Cocktail/Component/NotFound";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/products/:id" element={<Productdetails />}></Route>
//         <Route path="*" element={<NotFound />}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//........Countries.........
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import CountryList from "./Countrys/CountryList";
// import "./App.css";
// import ViewCountry from "./Countrys/ViewCountry";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CountryList />}></Route>
//         <Route path="/view/:id" element={<ViewCountry />}></Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//...admin dashboard..........

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Ecom/components/Homepage";
import { Products } from "./Ecom/container/Products";
import { ProductsDetails } from "./Ecom/container/Products";
import { Orders } from "./Ecom/container/Orders";
import { User } from "./Ecom/container/User";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductsDetails />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
