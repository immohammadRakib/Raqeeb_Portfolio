// sanity/schemaTypes/project.ts
import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'tags', title: 'Tags (Technologies)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'githubLink', title: 'GitHub Link', type: 'url' }),
    defineField({ name: 'liveLink', title: 'Live Demo Link', type: 'url' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } }),
  ],
})
