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
}

export type TUploaderFileClasses = {
  fileWrapperContent?: string
  fileContent?: string
  fileDeleteIcon?: string
  fileButtonDeleteWrapper?: string
  fileButtonDelete?: string
}

export type TUploaderFileNameClasses = {
  fileText?: string
}

export type TUploaderClasses = TUploaderFilesClasses & TUploaderMainClasses & TUploaderFileClasses & TUploaderFileNameClasses
