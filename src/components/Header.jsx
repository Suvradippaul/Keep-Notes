import "../assets/Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <div className="logo-area">Keep Notes 📑</div>
      <div className="search-area">
        <SearchIcon id="search-icon"></SearchIcon>
        <input
          type="search"
          name=""
          id="search"
          placeholder="Search notes"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
