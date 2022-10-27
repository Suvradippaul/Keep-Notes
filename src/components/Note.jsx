import "../assets/Note.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const Note = ({ id, content, color, handleDelete }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="content-box">{content}</div>
      <DeleteRoundedIcon
        className="delete-icon"
        onClick={() => handleDelete(id)}
      ></DeleteRoundedIcon>
    </div>
  );
};

export default Note;
