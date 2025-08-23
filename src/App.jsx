import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Text, setText] = useState("");
  const [Qr, setQr] = useState("");

  const QrGenerator =(Text)=>{
    if (Text=="") {
      document.getElementById("input").classList.add("error");
      setTimeout(() => {
        document.getElementById("input").classList.remove("error");
      }, 1000);
    }

    (Text)?(setQr("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Text)):(setQr(""))
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r
from-[#fda4af]
to-[#f43f5e]">
      <div className="space-y-4 bg-gradient-to-r
from-[#0f172a]
to-[#334155] py-8 px-8 md:px-18 rounded-lg">
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white">Enter Text or URL</legend>
          <input id="input"
          type="text" value={Text} onChange={(e)=>setText(e.target.value)} className="input w-54 mx-auto bg-white focus:outline-none focus:border-2 text-gray-700" placeholder="Type here" autoComplete="off"/>
        </fieldset>
        {Qr && <img src={Qr} alt="QR Code" className="mx-auto p-2 bg-white rounded-lg" />}
        <button onClick={()=>(QrGenerator(Text))} className="btn btn-dash btn-success w-54 mx-auto">Generate QR</button>
      </div>
    </div>
  );
};

export default App;
