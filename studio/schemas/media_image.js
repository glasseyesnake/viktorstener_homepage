export default {
   name: 'media_image',
   title: 'Media image',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
      },
      {
         name: 'publishedAt',
         title: 'Published at',
         type: 'datetime',
      },
      {
         name: 'mainImage',
         title: 'Main image',
         type: 'image',
         options: {
            hotspot: true,
         },
      },
   ],

   preview: {
      select: {
         title: 'title',
         media: 'mainImage',
      },
      prepare(selection) {
         const { author } = selection
         return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
         })
      },
   },
}
