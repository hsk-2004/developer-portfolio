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
        <div id="smooth-wrapper">
          <MusicPlayer />
          <ScrollSequence />
          <div id="smooth-content">
            <Suspense>
              <MainContainer />
            </Suspense>
          </div>
        </div>
      </LoadingProvider>
    </>
  );
};

export default App;
