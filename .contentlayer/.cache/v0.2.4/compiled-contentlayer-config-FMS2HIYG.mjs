// contentlayer.config.ts
import { defineDocumentType, makeSource, defineNestedType } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, "")
  }
};
var Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string" }
  }
}));
var Images = defineNestedType(() => ({
  name: "Images",
  fields: {
    title: { type: "string", required: true }
  }
}));
var Categories = defineNestedType(() => ({
  name: "Categories",
  fields: {
    title: { type: "string" }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  bodyType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    draft: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: Tag
    },
    images: {
      type: "list",
      of: Images
    },
    categories: {
      type: "list",
      of: Categories
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FMS2HIYG.mjs.map
