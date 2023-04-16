import { useState } from "react";

import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app bg-gray-20">
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
    </div>
  );
}

export default App;
