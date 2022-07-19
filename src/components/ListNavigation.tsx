import { useState } from 'react'
import { ReactComponent as MagnifyingGlassIcon } from '../assets/magnifying_glass_icon.svg'
import NoteItem from './NoteItem'

export type Note = {
  id: number
  parentFolderId: number
  content: string
  createdAt: Date
  modifiedAt: Date
}

function ListNavigation() {
  const [noteList /*, setNoteList */] = useState<Note[]>([
    // samples
    {
      id: 0,
      parentFolderId: 0,
      content: "test title\ntest content",
      createdAt: new Date(),
      modifiedAt: new Date() 
    },
    {
      id: 1,
      parentFolderId: 0,
      content: "note without a context",
      createdAt: new Date(),
      modifiedAt: new Date() 
    },
    {
      id: 2,
      parentFolderId: 0,
      content: "very long title name with some lines may exceed\nand very very long context with some lines which might easily exceed limit",
      createdAt: new Date(),
      modifiedAt: new Date() 
    }
  ])

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
          <div>{noteList.map(note => 
            <NoteItem key={note.id} props={note} />)}
          </div>
          <div className="scroll-indicator">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListNavigation