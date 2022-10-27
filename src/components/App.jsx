import "../assets/App.css";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Body searchText={searchText} />
    </div>
  );
};

export default App;
