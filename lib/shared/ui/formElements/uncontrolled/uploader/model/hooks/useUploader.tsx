import { useState } from 'react'
import { type DropzoneOptions, type FileRejection, useDropzone } from 'react-dropzone'
import { bytesToMegabytes, FilesErrorCode } from '../helpers'
import { Notification } from '$/shared/ui/'

export type TUseUploader = {
  controlledFiles?: File[]
  dropzoneOptions: DropzoneOptions
  onChange?: (files: File[]) => void
}

export const useUploader = ({ dropzoneOptions, controlledFiles = [], onChange }: TUseUploader) => {
  const [filesStatus, setFilesStatus] = useState<Record<string, 'loading' | 'success' | 'error'>>({})

  const removeFile = (index: number) => {
    const updatedFiles = controlledFiles?.filter((_, idx) => idx !== index)
    if (onChange) onChange(updatedFiles)
  }

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      setFilesStatus((prev) => ({ ...prev, [file.name]: 'loading' }))

      reader.onload = () => {
        setFilesStatus((prev) => ({ ...prev, [file.name]: 'success' }))
      }

      reader.readAsArrayBuffer(file)
    })

    switch (rejectedFiles[0]?.errors[0]?.code) {
      case FilesErrorCode.FileInvalidType:
        Notification({
          intent: 'error',
          text: 'Неверный формат файла. Загрузите в формате jpg/png/pdf'
        })
        break
      case FilesErrorCode.FileTooLarge:
        Notification({
          intent: 'error',
          text: `Файл слишком большой. Максимальный размер ${dropzoneOptions.maxSize ? bytesToMegabytes(dropzoneOptions.maxSize) : 0} МБ`
        })
        break
      case FilesErrorCode.TooManyFiles:
        Notification({
          intent: 'error',
          text: `Вы загрузили слишком много файлов. Максимальное количество ${dropzoneOptions.maxFiles}`
        })
        break
      default:
        break
    }

    const updatedFiles = [...controlledFiles, ...acceptedFiles]

    if (onChange) onChange(updatedFiles)
  }

  const dropzoneState = useDropzone({
    onDrop,
    ...dropzoneOptions
  })

  return { filesStatus, removeFile, dropzoneState }
}
