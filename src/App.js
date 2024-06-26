import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/Shop" element={<Shop></Shop>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;
