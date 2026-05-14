import { Suspense } from "react";
import "./App.css";

import MainContainer from "./components/MainContainer";
import ScrollSequence from "./components/ScrollSequence";
import { LoadingProvider } from "./context/LoadingProvider";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <MusicPlayer />
        <ScrollSequence />
        <Suspense>
          <MainContainer />
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
