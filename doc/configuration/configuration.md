# Configuration guide:

### How to configure Vue Storefront API - Prismic Connector:

To configure Vue Storefront API - Prismic Connector, you can define some values in your `<project_root>/config/local.json`:
                                  
```json
"prismic": {
    "baseUrl": "https://dnd-vsf.prismic.io/api/v2",
    "cmsBlockEntityType": "cms-block",
    "cmsPageEntityType": "cms-page"
}
```

* `baseUrl ` -> Prismic API base url. You can get it from Prismic interface in:
**Settings > Configuration > API & Security > API Endpoint**

![Prismic API Endpoint](../img/prismic-api-endpoint.png)

* `cmsBlockEntityType ` -> define the prismic custom entity used for CMS blocks (default: `cms-block`). This entity needs the following attributes:
	* identifier -> type: `uid`
	* title -> type: `title`
	
> The slice option needs to be enabled, it will be used for the content
	
* `cmsPageEntityType ` -> define the prismic custom entity used for CMS pages (default: `cms-page`). This entity needs the following attributes:
	* slug -> type: `uid`
	* title -> type: `title`
	
> The slice option needs to be enabled, it will be used for the content

You can also manage custom Prismic slices:

* If you have created a custom slice type on Prismic and you want it to be managed in your CMS blocks and pages you will have to include your slice type in the Slice helper (`helpers/slice.js)`.

* For example if you want to add a slice named "rich_text", with only a text field, you will add a case with this type in the `parse` method:

```typescript
    case 'rich_text':
      return PrismicDOM.RichText.asHtml(slice.primary.rich_text)
```

In each case you can access the slice content (refers to [Prismic official documentation](https://prismic.io/docs) for more details) and build your html according to its content.
The `PrismicDOM.RichText` helper is also available to parse the contents that are using rich formatting.

##### [> Back to summary](../summary.md)
