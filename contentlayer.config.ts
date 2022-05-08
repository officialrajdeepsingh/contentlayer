// const { defineDocumentType, makeSource } = require ('contentlayer/source-files')
import { defineDocumentType, makeSource, defineNestedType} from "contentlayer/source-files";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ""),
  },
};

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string'},
  },
}))


const Images = defineNestedType(() => ({
  name: 'Images',
  fields: {
    title: { type: 'string', required: true },
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
    bodyType: 'markdown',
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
      image:{
        type: 'string',
        required: true,
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
    computedFields,
  
  }))
  
  export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
  })