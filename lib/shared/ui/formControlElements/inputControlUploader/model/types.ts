export type TClassesUploaderMain = {
  wrapperMainContent: string
  borderContent: string
  wrapperTextContent: string
  uploaderIcon: string
  selectFileText: string
  selectFileTextSpan: string
  uploaderInput: string
  message: string
}

export type TClassesUploaderFiles = {
  filesWrapperContent: string
  fileWrapperContent: string
  fileContent: string
  fileDeleteIcon: string
  fileText: string
  fileButtonDeleteWrapper: string
  fileButtonDelete: string
}

export type TClassesUploader = TClassesUploaderFiles & TClassesUploaderMain
