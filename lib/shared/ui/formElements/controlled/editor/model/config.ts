import Color from '@tiptap/extension-color'
import { Heading } from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import { TextStyle } from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { mergeAttributes } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FontSizeExtension } from './extensions'
import { editorHeadingClasses } from './helper'
import { type HeadingLevel } from './types'

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
  FontSizeExtension,
  Underline,
  TextStyle,
  Color,
  Heading.configure({
    levels: [1, 2, 3, 4]
  }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level)
      const level: HeadingLevel = hasLevel ? node.attrs.level : this.options.levels[0]
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
    openOnClick: true
  }).extend({
    renderHTML({ HTMLAttributes }) {
      return ['a', mergeAttributes(HTMLAttributes)]
    }
  })
]
