# Features:

### Connect to your own Prismic API:

* Easily configure your Prismic API in [configuration](../configuration/configuration.md)
* Customize your entity type code for CMS blocks and pages in [configuration](../configuration/configuration.md)

### Retrieve your Prismic content from Vue Storefront API:

* CMS blocks from `prismicCmsBlocks` graphql entity
* CMS pages from `prismicCmsPages` graphql entity

### Manage custom Prismic slices:
    
* If you have created a custom slice type on Prismic and you want it to be managed in your CMS blocks and pages you will have to include your slice type in the Slice helper (`helpers/slice.js)`.

* For example if you want to add a slice named *rich_text*, with only a text field, you will add a case with this type in the `parse` method:

```typescript
    case 'rich_text':
      return PrismicDOM.RichText.asHtml(slice.primary.rich_text)
```

In each case you can access the slice content (refers to [Prismic official documentation](https://prismic.io/docs) for more details) and build your html according to its content.
The `PrismicDOM.RichText` helper is also available to parse the contents that are using rich formatting.

##### [> Back to summary](../summary.md)
