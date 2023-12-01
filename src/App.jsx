import { useEffect, useState } from "react";
import Header from "./Header";
import Image from "./Image";
import Button from "./Button";

import useFetch from "./useFetch";

const winMessage = "Win like a chad";
const lostMessage = "Lost like a pepe";

function App() {
  const [status, setStatus] = useState(null);
  const [data, error, isLoading, customFetch] = useFetch();

  const handleClick = (isFake) => {
    if (isFake === data.fake) {
      setStatus(winMessage);
    } else {
      setStatus(lostMessage);
    }
  };

  const handleStatusClick = () => {
    setStatus(null);
    customFetch(import.meta.env.VITE_REACT_APP_API_URL);
  };

  useEffect(() => {
    customFetch(import.meta.env.VITE_REACT_APP_API_URL);
  }, [customFetch]);

  return (
    <>
      <Header />

      { error && (
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl text-red-400 font-semibold">{error.message}</h1>
          <Button name="Reload" handleClick={handleStatusClick} customCss="mt-4 bg-gradient-to-br from-red-900 to-red-400"></Button>
        </div>
      )}

      { isLoading && (
        <h1 className="text-center text-2xl text-orange-400">Loading...</h1>
      )}

      { !isLoading && !error && data && (
        <>
          <Image url={import.meta.env.VITE_REACT_APP_API_URL + data.url} />

          <div className={status ? "hidden" : "flex justify-center" + " space-x-6"}>
            <Button name="Fake ?" handleClick={() => handleClick(true)} customCss="bg-gradient-to-r from-purple-600 to-blue-500"></Button>
            <Button name="Or Not ?" handleClick={() => handleClick(false)} customCss="bg-gradient-to-r from-blue-500 to-purple-600"></Button>
          </div>

          <div className={status ? "flex justify-center" : "hidden"}>
            {status === winMessage ? (
              <Button name={status} handleClick={handleStatusClick} customCss="bg-gradient-to-br from-green-900 to-green-400"></Button>
            ) : (
              <Button name={status} handleClick={handleStatusClick} customCss="bg-gradient-to-br from-red-900 to-red-400"></Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
