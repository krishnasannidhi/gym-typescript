import { useState } from "react";

import Navbar from "@/scenes/navbar";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app bg-gray-20">
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
    </div>
  );
}

export default App;
