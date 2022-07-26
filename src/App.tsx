import { useState } from "react"
import "./App.css"
import NoteFolderNavigation from "./components/NoteFolderNavigation"
import NoteListNavigation from "./components/NoteListNavigation"
import NoteView from "./components/NoteView"

export interface INote {
  id: number
  content: string
  createdAt: Date
  modifiedAt: Date
}

export interface INoteFolder {
  id: number
  title: string
  notes: INote[]
}

function App() {
  const [noteFolders, _] = useState<INoteFolder[]>([
    {
      id: 0,
      title: "Folder Name",
      notes: [
        {
          id: 0,
          content: "Test note\ncontent goes here",
          createdAt: new Date(),
          modifiedAt: new Date()
        },
        {
          id: 1,
          content: "Note title\nsome long content goes here contentcontentcontent\ncontentcontentcontentcontentcontent",
          createdAt: new Date(),
          modifiedAt: new Date()
        }
      ]
    },
    {
      id: 1,
      title: "Folder Name",
      notes: [
        {
          id: 0,
          content: "Test note 2\ncontent goes here",
          createdAt: new Date(),
          modifiedAt: new Date()
        },
        {
          id: 1,
          content: "Note title 2\nsome long content goes here contentcontentcontent\ncontentcontentcontentcontentcontent",
          createdAt: new Date(),
          modifiedAt: new Date()
        }
      ]
    }
  ])

  let [currentFolder, setCurrentFolder] = useState<INoteFolder>(noteFolders[0])
  let [currentNote, setCurrentNote] = useState<INote>(currentFolder.notes[0])

  let handleSelectFolder = ((senderID: number) => {
    setCurrentFolder(noteFolders[senderID])
    setCurrentNote(currentFolder.notes[currentNote.id])
  })

  let handleSelectNote = ((senderID: number) => {
    setCurrentNote(currentFolder.notes[senderID])
  })

  return (
    <div className="App">
      <div className="wrapper">
        <NoteFolderNavigation 
          noteFolders={noteFolders}
          onSelectFolder={handleSelectFolder}
        />
      </div>
      <div className="vertical-divider" />
      <div className="wrapper">
        <NoteListNavigation 
          noteFolder={currentFolder}
          onSelectNote={handleSelectNote} 
        />
      </div>
      <div className="vertical-divider" />
      <div className="wrapper">
        <NoteView />
      </div>
    </div>
  )
}

export default App