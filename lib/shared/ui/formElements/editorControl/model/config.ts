import Color from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { mergeAttributes } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { editorHeadingClasses } from '../model/helper'
import { type THeadingLevel } from '../model/types'

export const editorConfig = [
  StarterKit.configure({
    heading: false,
    bold: {
      HTMLAttributes: {
        class: 'font-bold'
      }
    },
    bulletList: {
      HTMLAttributes: {
        class: 'list-disc [&>li]:ml-4'
      }
    },
    paragraph: {
      HTMLAttributes: {
        class: 'text-dark'
      }
    }
  }),
  Underline,
  TextStyle,
  Color,
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6]
  }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level)
      const level: THeadingLevel = hasLevel ? node.attrs.level : this.options.levels[0]
      return [
        `h${level}`,
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          class: `${editorHeadingClasses[level]}`
        }),
        0
      ]
    }
  }),
  Link.configure({
    openOnClick: true,
    HTMLAttributes: {
      class: 'text-color-primary-default underline underline-offset-4'
    }
  })
]
