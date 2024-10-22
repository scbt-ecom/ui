import { type DropzoneOptions } from 'react-dropzone'

export const defaultDropzoneOptions: DropzoneOptions = {
  maxSize: 4 * 1024 * 1024,
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
