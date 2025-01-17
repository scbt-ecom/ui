import { type DropzoneOptions } from 'react-dropzone'

export const bytesToMegabytes = (number: number) => {
  return number / 1024 / 1024
}

export const megabytesToBytes = (number: number) => {
  return number * 1024 * 1024
}

export const defaultDropzoneOptions: DropzoneOptions = {
  maxSize: megabytesToBytes(4),
  multiple: true,
  accept: {
    'image/jpeg': [],
    'image/png': [],
    'application/pdf': []
  }
}

export const FilesErrorCode = {
  FileInvalidType: 'file-invalid-type',
  FileTooLarge: 'file-too-large',
  FileTooSmall: 'file-too-small',
  TooManyFiles: 'too-many-files'
} as const
