import logo from "./logo.svg";
import RatingForm from "./Component/RatingForm";
import { useState } from "react";
import ThankYou from "./Component/ThankYou";

function App() {
  const [num, setNum] = useState(null);
  return (
    <>
      <main class="flex-grow flex justify-center items-center">
        <div
          id="rating"
          className={`p-7 font-overpass text-[hsl(217,12%,63%)] max-w-[25rem] ${
            num > 0 ? "text-center" : ""
          } rounded-xl`}
          style={{
            background: "radial-gradient(at center top, #232b34, #181f27)",
          }}
        >
          {num == null ? (
            <RatingForm setNum={setNum} />
          ) : (
            <ThankYou num={num} />
          )}
        </div>
      </main>
      <footer>
        <div class="attribution text-white">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="">Vishal</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
