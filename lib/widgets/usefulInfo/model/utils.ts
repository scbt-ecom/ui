import type { Entity } from './types'

export const isHtml = (entity: Entity): entity is Entity<'HTML'> => {
  return entity.variant === 'HTML'
}

export const isDocuments = (entity: Entity): entity is Entity<'DOCUMENTS'> => {
  return entity.variant === 'DOCUMENTS'
}

export const isTable = (entity: Entity): entity is Entity<'TABLE'> => {
  return entity.variant === 'TABLE'
}

export const isExperts = (entity: Entity): entity is Entity<'EXPERTS'> => {
  return entity.variant === 'EXPERTS'
}
