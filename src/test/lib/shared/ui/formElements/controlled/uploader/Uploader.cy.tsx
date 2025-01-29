import { baseSchema, uploaderDefaultProps } from './constants'
import { ComponentFactory } from '@/test/utils'
import { Controlled } from '$/shared/ui'

describe('Test cases for Controlled.Uploader', () => {
  const factory = new ComponentFactory(Controlled.UploaderControl)

  it('Should render and pass value correctly', () => {
    cy.mount(factory.getFormProvider({ schema: baseSchema, args: uploaderDefaultProps, defaultValues: { field: [] } }))
    cy.get('[data-test-id="uploader"]').as('uploader')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('@uploader').should('be.visible')
    cy.get('@uploader')
      .selectFile(
        [
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.jpg',
            lastModified: Date.now()
          }
        ],
        { force: true }
      )
      .then(() => {
        cy.get('[data-test-id="file-list"]').children().should('have.length.gt', 0)
        cy.get('@submit').click()
      })
  })

  it('Should be invalid if empty files', () => {
    cy.mount(
      factory.getFormProvider({
        schema: baseSchema,
        args: {
          ...uploaderDefaultProps,
          invalid: true
        },
        defaultValues: { field: [] }
      })
    )
    cy.get('[data-test-id="uploader"]').as('uploader')
    cy.get('[data-test-id="submit"]').as('submit')
    cy.get('[data-test-id="form"]').as('form')

    cy.get('@uploader').should('be.visible')
    cy.get('@submit').click()
    cy.get('@form').get('.desk-body-regular-m').should('be.visible')
  })

  it('Should ignore not supported file', () => {
    cy.mount(
      factory.getFormProvider({
        schema: baseSchema,
        args: {
          ...uploaderDefaultProps,
          dropzoneOptions: {
            accept: {
              'image/png': []
            }
          },
          invalid: true
        },
        defaultValues: { field: [] }
      })
    )
    cy.get('[data-test-id="uploader"]').as('uploader')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@uploader').should('be.visible')

    cy.get('@uploader')
      .selectFile(
        [
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.jpg',
            lastModified: Date.now()
          }
        ],
        { force: true }
      )
      .then(() => {
        cy.get('[data-test-id="file-list"]').should('not.exist')
      })
  })

  it('Should accept no more than 3 files', () => {
    cy.mount(
      factory.getFormProvider({
        schema: baseSchema,
        args: {
          ...uploaderDefaultProps,
          dropzoneOptions: {
            maxFiles: 3,
            accept: {
              'image/png': []
            }
          },
          invalid: true
        },
        defaultValues: { field: [] }
      })
    )
    cy.get('[data-test-id="uploader"]').as('uploader')
    cy.get('[data-test-id="submit"]').as('submit')

    cy.get('@uploader').should('be.visible')

    cy.get('@uploader')
      .selectFile(
        [
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.png',
            lastModified: Date.now()
          },
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.png',
            lastModified: Date.now()
          },
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.png',
            lastModified: Date.now()
          },
          {
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'file.png',
            lastModified: Date.now()
          }
        ],
        { force: true }
      )
      .then(() => {
        cy.get('[data-test-id="file-list"]').should('not.exist')
      })
  })
})
