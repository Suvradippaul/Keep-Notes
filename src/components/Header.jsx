import "../assets/css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Icon from "../assets/images/icon.png";

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <div className="logo-area">
        Keep Notes
        <img src={Icon} style={{ width: "30px", height: "30px" }} id="icon" />
      </div>
      <div className="search-area">
        <SearchIcon id="search-icon"></SearchIcon>
        <input
          type="search"
          name=""
          id="search"
          placeholder="Search notes"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
