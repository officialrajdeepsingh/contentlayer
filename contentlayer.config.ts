import { defineDocumentType, makeSource, defineNestedType} from "contentlayer/source-files";



const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string'},
  },
}))

const Images = defineNestedType(() => ({
  name: 'Images',
  fields: {
    title: { type: 'string',}
  },
}))

const Categories = defineNestedType(() => ({
  name: 'Categories',
  fields: {
    title: { type: 'string' },
  },
}))

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    contentType: 'markdown',
    fields: {
      title: {
        type: 'string',required: true,
      },
      date: {
        type: 'date',
        required: true,
      },
      author:{
        type: 'string',
        required: true,

      },
     
      description:{
        type: 'string',
        required: true,

      },
      slug:{
        type: 'string',
      },
      id:{
        type: 'number',
        required: true,

      },
      image:{
        type: 'string',
    
      },
      draft:{
        type: 'string',
        required: true,
      },
    
      summary:{
        type: 'string',
        required: true,
      },
      tags: {
        type: 'list',of: Tag,
      },
      images: {
        type: 'list',of: Images,
      },
      categories:{
        type: 'list',of: Categories,
      }

    },
    computedFields: {
      slug: {
        type: "string",
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ""),
      },
    }
  
  }))
  
export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})