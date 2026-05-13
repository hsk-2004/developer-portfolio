import { Suspense } from "react";
import "./App.css";

import MainContainer from "./components/MainContainer";
import ScrollSequence from "./components/ScrollSequence";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <ScrollSequence />
        <Suspense>
          <MainContainer />
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
