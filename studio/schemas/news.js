export default {
   name: 'news',
   title: 'News',
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
         name: 'body',
         title: 'Body',
         type: 'text',
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
