import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./App.css"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import List from "./list/List.jsx";
import Hotel from "./hotel/Hotel.jsx";
import Home from "./pages/home/Home.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/hotels/:id" element={<Hotel/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
