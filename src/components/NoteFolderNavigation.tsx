import { INoteFolder } from "../App"
import NoteFolderItem from "./NoteFolderItem"

interface INoteFolderProps  {
  noteFolders: INoteFolder[]
  onSelectFolder: (senderID: number) => void
}

function NoteFolderNavigation({noteFolders, onSelectFolder}: INoteFolderProps) {
  let handleSelected = ((senderID: number) => {
    onSelectFolder(senderID)
  })

  return (
    <div className="folder-navigation-view">
      <div className="title-view top-navbar">
        <h2 className="app-title">Notes</h2>
      </div>
      <div className="folder-view">
        <div className="collection-view notes-folder-view">
          <div>
            {noteFolders.map((folder, idx) =>
              <NoteFolderItem key={idx} folder={folder} onSelected={handleSelected} />
            )}
          </div>
        </div>
        <div className="bottom-toolbar">

        </div>
      </div>
    </div>
  )
}

export default NoteFolderNavigation