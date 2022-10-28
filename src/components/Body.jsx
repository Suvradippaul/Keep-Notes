import { useEffect, useState } from "react";
import "../assets/Body.css";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

const colors = [
  "#1e3a5f",
  "#2d555e",
  "#5c2b29",
  "#635d19",
  "#345920",
  "#16504b",
  "#42275e",
  "#5b2245",
  "#3c3f43",
];

const Body = ({ searchText }) => {
  const [notes, updateNotes] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const localData = JSON.parse(window.localStorage.getItem("data"));
    if (localData) {
      updateNotes(localData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const colorGenerator = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const addNote = () => {
    if (content.trim().length > 0) {
      const randomColor = colorGenerator();
      const newNote = { key: nanoid(), content: content, color: randomColor };
      const newNotes = [...notes, newNote];
      updateNotes(newNotes);
      setContent("");
    }
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((item) => item.key != id);
    updateNotes(filteredNotes);
  };

  const handleEdit = (id, textValue) => {
    const newNotes = [];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].key == id) {
        const newObj = notes[i];
        newObj.content = textValue;
        newNotes.push(newObj);
      } else {
        newNotes.push(notes[i]);
      }
    }
    updateNotes(newNotes);
  };

  return (
    <div className="container">
      <div className="create-note-area">
        <textarea
          value={content}
          onChange={handleChange}
          placeholder="✍🏼Take a note..."
          id="create-note"
        ></textarea>
        <button type="" onClick={addNote} id="addNoteBtn">
          Save
        </button>
      </div>
      {notes.length > 0 && (
        <NotesList
          notes={notes.filter((note) =>
            note.content.toLowerCase().includes(searchText)
          )}
          handleDelete={deleteNote}
          handleEdit={handleEdit}
        ></NotesList>
      )}
    </div>
  );
};

export default Body;
