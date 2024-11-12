export { EditorControl, type IEditorControlProps } from './EditorControl'
// 'use client'

// /* eslint-disable react/no-unstable-nested-components */
// import { Controller, type FieldValues } from 'react-hook-form'
// import { BlockNoteView } from '@blocknote/mantine'
// import { useCreateBlockNote } from '@blocknote/react'
// import '@blocknote/core/fonts/inter.css'
// import '@blocknote/mantine/style.css'
// import type { TControlledInputProps } from '../model'
// import { FieldContainer } from '../ui'

// export interface IEditorControlProps<T extends FieldValues> extends TControlledInputProps<T> {
//   classes?: any
// }

// export const EditorControl = <T extends FieldValues>({ control, classes, size = 'full', ...props }: IEditorControlProps<T>) => {
//   const editor = useCreateBlockNote({
//     initialContent: [
//       {
//         type: 'paragraph',
//         content: 'Welcome to this demo!'
//       },
//       {
//         type: 'paragraph'
//       },
//       {
//         type: 'bulletListItem',
//         content: 'Link'
//       }
//     ]
//   })

//   console.log(editor, '@editor')

//   const changeFn = async (change) => {
//     // Converts the editor's contents from Block objects to HTML and store to state.
//     const html = await editor.blocksToHTMLLossy(editor.document)
//     change(html)
//   }

//   return (
//     <Controller
//       control={control}
//       name={props.name}
//       render={({ field: { onChange, ref: controlledRef, value }, fieldState: { error } }) => {
//         console.log(value, '@value')

//         return (
//           <FieldContainer size={size} classes={classes}>
//             <div className='mt-10 w-[600px] rounded-md border border-warm-grey-200 px-3 py-4'>
//               <BlockNoteView theme='light' editor={editor} onChange={() => changeFn(onChange)} ref={controlledRef} />
//             </div>
//             <div>{value}</div>
//           </FieldContainer>
//         )
//       }}
//     />
//   )
// }
