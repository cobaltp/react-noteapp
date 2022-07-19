import { ReactComponent as FolderIcon } from '../assets/folder_icon.svg'
import { FolderData } from './FolderNavigation'

type FolderProps = {
  props: FolderData
}

function FolderItem({props}: FolderProps) {
  const {title} = props

  return (
    <div className="folder-item list-item">
      <div className="icon-container">
        <FolderIcon className="icon-yellow" width={32} height={32} />
      </div>
      <p className="folder-title">{title}</p>
    </div>
  )
}

export default FolderItem