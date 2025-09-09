import { type Definition } from '../types'

export const defaultDefinitions: Record<string, Definition> = {
  '#': {
    validator: (char) => /\d/g.test(char)
  },
  A: {
    validator: (char) => /[A-Za-zА-Яа-я]/g.test(char)
  },
  C: {
    validator: (char) => /([АВЕКМНОРСТУХавекмнорстух])/.test(char)
  }
}
