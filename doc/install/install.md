# Installation guide:

### How to install Vue Storefront API - Prismic Connector:

To install Vue Storefront API - Prismic Connector, place the extension files in `<project_root>/src/api/extensions/prismic-cms`.

Then, update project dependencies for Vue Storefront API - Prismic Connector:

```bash
yarn
```
or
```bash
npm install
```

Finally, define the following keys in your `<project_root>/config/local.json` configuration file:

```json
"prismic": {
  "baseUrl": "https://dnd-vsf.prismic.io/api/v2",
  "cmsBlockEntityType": "cms-block",
  "cmsPageEntityType": "cms-page"
}
```

Replace configuration with your own values:

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

You can configure the Prismic custom types (CMS blocks and pages) by importing directly the following json configurations:

#### CMS BLOCKS:

```json
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "identifier"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "Title"
      }
    },
    "body" : {
      "type" : "Slices",
      "fieldset" : "Slice zone",
      "config" : {
        "choices" : {
          "text" : {
            "type" : "Slice",
            "fieldset" : "Text",
            "description" : "Rich Text Section",
            "icon" : "text_fields",
            "non-repeat" : {
              "text" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "text",
                  "placeholder" : "Your content here"
                }
              }
            },
            "repeat" : { }
          },
          "links_list" : {
            "type" : "Slice",
            "fieldset" : "Links list",
            "description" : "A list of custom links",
            "icon" : "format_list_bulleted",
            "display" : "list",
            "non-repeat" : {
              "list_title" : {
                "type" : "StructuredText",
                "config" : {
                  "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
                  "label" : "List title"
                }
              }
            },
            "repeat" : {
              "link" : {
                "type" : "Link",
                "config" : {
                  "label" : "link"
                }
              },
              "link_content" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "link content"
                }
              }
            }
          },
          "image" : {
            "type" : "Slice",
            "fieldset" : "Image",
            "description" : "Simple image",
            "icon" : "image",
            "display" : "list",
            "non-repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "Image"
                }
              }
            },
            "repeat" : { }
          },
          "title" : {
            "type" : "Slice",
            "fieldset" : "Title",
            "description" : "Simple title",
            "icon" : "title",
            "display" : "list",
            "non-repeat" : {
              "title_content" : {
                "type" : "StructuredText",
                "config" : {
                  "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
                  "label" : "Title content"
                }
              }
            },
            "repeat" : { }
          },
          "list_item" : {
            "type" : "Slice",
            "fieldset" : "List item",
            "description" : "Image and content field",
            "icon" : "playlist_add",
            "display" : "list",
            "non-repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "image"
                }
              },
              "content" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "content"
                }
              },
              "subcontent" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "subcontent"
                }
              }
            },
            "repeat" : { }
          },
          "video" : {
            "type" : "Slice",
            "fieldset" : "Video",
            "description" : "Video",
            "icon" : "personal_video",
            "display" : "list",
            "non-repeat" : {
              "video" : {
                "type" : "Embed",
                "config" : {
                  "label" : "Video",
                  "placeholder" : "Video"
                }
              }
            },
            "repeat" : { }
          },
          "image_group" : {
            "type" : "Slice",
            "fieldset" : "Image group",
            "description" : "Image group",
            "icon" : "broken_image",
            "display" : "list",
            "non-repeat" : { },
            "repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "Image"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

#### CMS PAGES:

```json
{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "slug"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "Title"
      }
    },
    "body" : {
      "type" : "Slices",
      "fieldset" : "Slice zone",
      "config" : {
        "choices" : {
          "text" : {
            "type" : "Slice",
            "fieldset" : "Text",
            "description" : "Rich Text Section",
            "icon" : "text_fields",
            "non-repeat" : {
              "text" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "text",
                  "placeholder" : "Your content here"
                }
              }
            },
            "repeat" : { }
          },
          "video" : {
            "type" : "Slice",
            "fieldset" : "Video",
            "description" : "Video",
            "icon" : "personal_video",
            "display" : "list",
            "non-repeat" : {
              "video" : {
                "type" : "Embed",
                "config" : {
                  "label" : "Video",
                  "placeholder" : "Video"
                }
              }
            },
            "repeat" : { }
          },
          "image_group" : {
            "type" : "Slice",
            "fieldset" : "Image group",
            "description" : "Image group",
            "icon" : "broken_image",
            "display" : "list",
            "non-repeat" : { },
            "repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "Image"
                }
              }
            }
          },
          "title" : {
            "type" : "Slice",
            "fieldset" : "Title",
            "description" : "Simple title",
            "icon" : "title",
            "display" : "list",
            "non-repeat" : {
              "title_content" : {
                "type" : "StructuredText",
                "config" : {
                  "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
                  "label" : "Title content"
                }
              }
            },
            "repeat" : { }
          },
          "image" : {
            "type" : "Slice",
            "fieldset" : "Image",
            "description" : "Simple image",
            "icon" : "image",
            "display" : "list",
            "non-repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "Image"
                }
              }
            },
            "repeat" : { }
          },
          "links_list" : {
            "type" : "Slice",
            "fieldset" : "Links list",
            "description" : "A list of custom links",
            "icon" : "format_list_bulleted",
            "display" : "list",
            "non-repeat" : {
              "list_title" : {
                "type" : "StructuredText",
                "config" : {
                  "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
                  "label" : "List title"
                }
              }
            },
            "repeat" : {
              "link" : {
                "type" : "Link",
                "config" : {
                  "label" : "link"
                }
              },
              "link_content" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "link content"
                }
              }
            }
          },
          "list_item" : {
            "type" : "Slice",
            "fieldset" : "List item",
            "description" : "Image and content field",
            "icon" : "playlist_add",
            "display" : "list",
            "non-repeat" : {
              "image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "image"
                }
              },
              "content" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "content"
                }
              },
              "subcontent" : {
                "type" : "StructuredText",
                "config" : {
                  "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
                  "label" : "subcontent"
                }
              }
            },
            "repeat" : { }
          }
        }
      }
    }
  }
}
```

##### [> Back to summary](../summary.md)
