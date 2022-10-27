import Note from "./Note";
import "../assets/NotesList.css";

const NotesList = ({ notes, handleDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.key}
          key={note.key}
          content={note.content}
          color={note.color}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;
