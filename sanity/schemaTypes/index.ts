// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { skill } from './skill'
import { message } from './message' // নতুন ইমপোর্ট

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, message], // এখানে যুক্ত হলো
}
