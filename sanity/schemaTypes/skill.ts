// sanity/schemaTypes/skill.ts
import { defineField, defineType } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Skill Name', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string', 
      options: { list: ['Frontend', 'Backend', 'Database', 'Tools'] } 
    }),
  ],
})
