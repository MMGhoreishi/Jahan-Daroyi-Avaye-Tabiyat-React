import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MainLayout } from "./components";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </MainLayout>
    </>
  );
};

export default App;
