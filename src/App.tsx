import "@github/relative-time-element";

import "./App.css";
import { RelativeTimeWrapper } from "./relativeTimeWrapper";

function App() {
  return (
    <>
      <div>
        <relative-time datetime="2014-04-01T16:30:00-08:00">
          April 1, 2014 4:30pm
        </relative-time>
        <br />
        <RelativeTimeWrapper />
      </div>
    </>
  );
}

export default App;
