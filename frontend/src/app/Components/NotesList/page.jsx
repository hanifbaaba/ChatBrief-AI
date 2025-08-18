import Notes from "../Page";
export default function NotesList() {
  return (
    <div>
      <ul>
        {Notes.map((note) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  );
}
