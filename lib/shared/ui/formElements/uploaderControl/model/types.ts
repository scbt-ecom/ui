export type TUploaderMainClasses = {
  wrapperMainContent?: string
  borderContent?: string
  wrapperTextContent?: string
  uploaderIcon?: string
  selectFileText?: string
  selectFileTextSpan?: string
  uploaderInput?: string
  message?: string
}

export type TUploaderFilesClasses = {
  filesWrapperContent?: string
  fileWrapperContent?: string
  fileContent?: string
  fileDeleteIcon?: string
  fileText?: string
  fileButtonDeleteWrapper?: string
  fileButtonDelete?: string
}

export type TUploaderClasses = TUploaderFilesClasses & TUploaderMainClasses
