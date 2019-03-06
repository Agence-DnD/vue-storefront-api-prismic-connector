import PrismicDOM from 'prismic-dom'

class Slice {

  static parse(prismicData) {
    let content = prismicData.map((slice) => {
      switch(slice.slice_type) {

        case 'title': return PrismicDOM.RichText.asHtml(slice.primary.title_content)

        case 'text': return PrismicDOM.RichText.asHtml(slice.primary.text)

        case 'rich_text':
          return PrismicDOM.RichText.asHtml(slice.primary.rich_text)

        case 'video':
          let video = `<div class="prismic-video-wrapper">`
          video += slice.primary.video.html
          video += `</div>`
          return video

        case 'image_group':
          let imageGroup = `<ul class="prismic-products">`
          let imageGroupList = slice.items.map(function(item) {
            return (`<li class="prismic-product">
                   <img src="${item.image.url}" alt="${item.image.alt}" width="${item.image.dimensions.width}" height="${item.image.dimensions.height}">
                 </li>`)
          })
          imageGroup += imageGroupList.join('\n')
          imageGroup += `<ul>`

          return imageGroup

        case 'image':
          return (`<img src="${slice.primary.image.url}" alt="${slice.primary.image.alt}" width="${slice.primary.image.dimensions.width}" height="${slice.primary.image.dimensions.height}">`)

        case 'links_list':
          let listContent = `<ul class="prismic-links-list">`
          listContent += PrismicDOM.RichText.asHtml(slice.primary.list_title)

          let listItemsContent = slice.items.map((item) => {
            return (`<li class="prismic-link">
                    <a href="${item.link.url}">${PrismicDOM.RichText.asHtml(item.link_content)}</a>
                 </li>`)
          })

          listContent += listItemsContent.join('\n')
          listContent += `</ul>`

          return listContent

        case 'list_item':
          let itemContent = `<div class="prismic-list-item">`
          itemContent += `<div class="prismic-image-wrapper"><img src="${slice.primary.image.url}" alt="${slice.primary.image.alt}" width="${slice.primary.image.dimensions.width}" height="${slice.primary.image.dimensions.height}"></div>`
          itemContent += `<div class="prismic-content-wrapper"><div class="content">${PrismicDOM.RichText.asHtml(slice.primary.content)}</div><div class="subcontent">${PrismicDOM.RichText.asHtml(slice.primary.subcontent)}</div></div>`
          itemContent += `</div>`

          return itemContent
      }
    })

    return content.join('\n')
  }
}

export default Slice
