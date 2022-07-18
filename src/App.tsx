import { useState } from "react"
import "./App.css"
import FolderNavigation from "./components/FolderNavigation"
import ListNavigation from "./components/ListNavigation"

export type UserMetadataType = {
  title: string
}

function App() {
  const [userMetadata] = useState<UserMetadataType>(
    {
      title: "Notes"
    }
  )

  return (
    <div className="App">
      <div className="wrapper">
        <FolderNavigation userMetadata={userMetadata} />
      </div>
      <div className="wrapper">
        <ListNavigation />
      </div>
      <div className="wrapper">
        3
      </div>
    </div>
  )
}

export default App
