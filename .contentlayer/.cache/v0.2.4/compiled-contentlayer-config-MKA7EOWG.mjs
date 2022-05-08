// contentlayer.config.ts
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  bodyType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    categories: {
      type: "list",
      description: "The categories of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: true
    },
    images: {
      type: "list",
      description: "The images of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true
    },
    tags: {
      type: "list",
      description: "The tags of the post",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MKA7EOWG.mjs.map
