// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { skill } from './skill'
import { message } from './message'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, message],
}
