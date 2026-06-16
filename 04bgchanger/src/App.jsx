import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const colorList = [
    {display: "Red", bg: "red", text: "white"},
    {display: "Green", bg: "green", text: "white"},
    {display: "Blue", bg: "blue", text: "white"},
    {display: "Olive", bg: "olive", text: "white"},
    {display: "Grey", bg: "grey", text: "white"},
    {display: "Yellow", bg: "yellow", text: "black"},
    {display: "Pink", bg: "pink", text: "black"},
    {display: "Purple", bg: "purple", text: "white"},
    {display: "Lavender", bg: "lavender", text: "black"},
    {display: "White", bg: "white", text: "black"},
    {display: "Black", bg: "black", text: "white"}
  ];

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" style={{backgroundColor: "white"}}>
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl">
            {
              colorList.map(({display, bg, text}) => (
                <button onClick={() => setColor(bg)} className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer" style={{backgroundColor: bg, color: text}}>{display}</button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
