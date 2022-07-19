import "./App.css"
import FolderNavigation from "./components/FolderNavigation"
import ListNavigation from "./components/ListNavigation"
import NoteView from "./components/NoteView"

export type UserMetadataType = {
  title: string
}

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <FolderNavigation />
      </div>
      <div className="vertical-divider" />
      <div className="wrapper">
        <ListNavigation />
      </div>
      <div className="vertical-divider" />
      <div className="wrapper">
        <NoteView />
      </div>
    </div>
  )
}

export default App