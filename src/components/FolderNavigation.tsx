import { useState } from 'react'
import FolderItem from "./FolderItem"

export type FolderData = {
  id: number
  title: string
}

function FolderNavigation() {
  const [folderList /*, setFolderList */] = useState<FolderData[]>([
    // samples
    { id: 0, title: "Folder Name" },
    { id: 1, title: "Super Very Longer Folder Name" },
    { id: 2, title: "Srtfn" }
  ])

  return (
    <div className="folder-navigation-view">
      <div className="title-view top-navbar">
        <h2 className="app-title">Notes</h2>
      </div>
      <div className="folder-view">
        <div className="collection-view notes-folder-view">
          <div>{folderList.map(folder => 
            <FolderItem key={folder.id} props={folder} />)}
          </div>
          <div className="scroll-indicator">

          </div>
        </div>
        <div className="bottom-toolbar">

        </div>
      </div>
    </div>
  )
}

export default FolderNavigation