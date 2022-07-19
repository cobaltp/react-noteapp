import { Note } from './ListNavigation'

type NoteProps = {
  props: Note
}

function NoteItem({props}: NoteProps) {
  const {id, parentFolderId, content, createdAt, modifiedAt} = props

  let s = content.split(/\r?\n/)
  let title = s[0]
  let paragraph = s.length > 1 ? s.slice(1) : "no additional text"

  return (
    <div className="note-item list-item">
      <div className="note-placeholder" />
      <div className="note-container">
        <div className="note-content">
          <p className="note-item-title">{title}</p>
          <p className="note-item-content">{paragraph}</p>
          <p className="note-item-date">{modifiedAt.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteItem