import { ReactComponent as MagnifyingGlassIcon } from '../assets/magnifying_glass_icon.svg'
import { INote, INoteFolder } from '../App'
import NoteListItem from './NoteListItem'
import { useState } from 'react'

interface INoteListProps {
  noteFolder: INoteFolder
  onSelectNote: (senderID: number) => void
}

function NoteListNavigation({noteFolder}: INoteListProps) {
  const [noteFolderTitle, setNoteFolderTitle] = useState<string>(noteFolder.title)
  const [notes, setNotes] = useState<INote[]>(noteFolder.notes)

  return (
    <div className="list-navigation">
      <div className="list-search-view top-navbar">
        <div className="icon-container">
          <MagnifyingGlassIcon className="icon-gray" width={32} height={32} />
        </div>
        <input className="notes-search-input" type="text" placeholder="Search..." />
      </div>
      <div className="list-view">
        <div className="collection-view notes-item-view">
          <div>
            {notes.map((note, idx) =>
              <NoteListItem key={idx} note={note} />
            )}
          </div>
          <div className="scrollbar-indicator-track">
            <div className="scrollbar-indicator-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteListNavigation