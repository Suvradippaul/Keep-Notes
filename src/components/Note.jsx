import { useState } from "react";
import "../assets/css/Note.css";
import TextareaAutosize from "react-textarea-autosize";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

const Note = ({ id, content, color, handleDelete, handleEdit }) => {
  const [enable, setEnable] = useState(false);
  const [textValue, setTextValue] = useState(content);

  const handleEnable = () => {
    setEnable(true);
  };

  const handleType = (e) => {
    if (enable) {
      setTextValue(e.target.value);
    }
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div className="content-box">
        <TextareaAutosize
          value={textValue}
          style={{ width: "100%" }}
          onChange={handleType}
          disabled={!enable}
          className="content-area"
        ></TextareaAutosize>
      </div>

      <div className="icons">
        <EditRoundedIcon
          className="edit-icon"
          onClick={handleEnable}
        ></EditRoundedIcon>

        <SaveRoundedIcon
          className="save-icon"
          onClick={() => {
            handleEdit(id, textValue);
            setEnable(false);
          }}
        ></SaveRoundedIcon>

        <DeleteRoundedIcon
          className="delete-icon"
          onClick={() => handleDelete(id)}
        ></DeleteRoundedIcon>
      </div>
    </div>
  );
};

export default Note;
