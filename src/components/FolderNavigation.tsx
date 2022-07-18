import FolderItem from "./FolderItem"
import { UserMetadataType } from "../App"

type UserMetadataProps = {
  userMetadata: UserMetadataType
}

export type NoteType = {
  content: string
  createdAt: Date
  updatedAt: Date
}

function FolderNavigation({ userMetadata }: UserMetadataProps) {
  const { title } = userMetadata

  return (
    <div className="folder-navigation-view">
      <div className="top-navbar">
        <h2 className="app-title">{title}</h2>
      </div>
      <div className="folder-view">
        <div className="collection-view notes-folder-view">
          <div>
            <FolderItem />
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