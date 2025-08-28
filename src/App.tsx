import { RouterProvider } from "react-router";
import { router } from "./router";
import { useEffect, useState } from "react";
import MainLoading from "./element/mainlLoading/mainLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      onLoad(); // already loaded
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return <>{loading ? <MainLoading /> : <RouterProvider router={router} />}</>;
}

export default App;
