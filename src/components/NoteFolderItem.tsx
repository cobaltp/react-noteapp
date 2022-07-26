import { useState } from 'react'
import { ReactComponent as FolderIcon } from '../assets/folder_icon.svg'
import { INoteFolder } from '../App'

type FolderItemProps = {
  folder: INoteFolder
  onSelected: (senderID: number) => void
}

function FolderItem({folder, onSelected}: FolderItemProps) {
  let defaultDivClassName = "folder-item list-item"
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [divClassName, setDivClassName] = useState<string>("folder-item list-item")

  let handleClick = (() => {
    setIsSelected(!isSelected)
    setDivClassName(isSelected ? defaultDivClassName + " item-selected" : defaultDivClassName)
    onSelected(folder.id)
  })

  return (
    <div className={divClassName} onClick={handleClick}>
      <div className="icon-container">
        <FolderIcon className="icon-yellow" width={32} height={32} />
      </div>
      <p className="folder-title">{folder.title}</p>
    </div>
  )
}

export default FolderItem