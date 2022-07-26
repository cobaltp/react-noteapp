import { INote } from "../App"

interface NoteItemProps {
  note: INote
}

function NoteListItem({note}: NoteItemProps) {
  let splitted = note.content.split(/\r?\n/)
  let title = splitted[0]
  let content = splitted.slice(1)

  return (
    <div className="note-item list-item">
      <div className="note-placeholder" />
      <div className="notes-container">
        <p className="note-item-title">{title}</p>
        <p className="note-item-content">{content}</p>
        <p className="note-item-date">{note.modifiedAt.toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default NoteListItem