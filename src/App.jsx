import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeES from "./pages/HomeES";
import HomeEN from "./pages/HomeEN";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeES />,
  },
  {
    path: "/en",
    element: <HomeEN />,
  },
]);

function App() {
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
