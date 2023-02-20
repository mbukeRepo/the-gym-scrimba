import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const Sidebar = ({
  notes,
  setCurrentNoteId,
  currentNote,
  newNote,
  deleteNote,
}) => {
  const notesElements = notes.map(({ id, body }) => (
    <div key={id}>
      <div
        className={`title ${id === currentNote.id ? "selected-note" : ""}`}
        onClick={() => setCurrentNoteId(id)}
      >
        <h4 className="text-snippet">{body.split("\n")[0]}</h4>
        <button
          className="delete-btn"
          onClick={(event) => deleteNote(event, id)}
        >
          <FontAwesomeIcon icon={faTrash} color="white" />
        </button>
      </div>
    </div>
  ));
  return (
    <section className="pane sidebar dark">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {notesElements}
    </section>
  );
};

export default memo(Sidebar);
