import config from 'config'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import Slice from './helpers/slice'

const apiEndpoint = config.prismic.baseUrl
let cmsBlockType = (typeof config.prismic.cmsBlockEntityType !== 'undefined') ? config.prismic.cmsBlockEntityType : 'cms-block'
let cmsPageType = (typeof config.prismic.cmsPageEntityType !== 'undefined') ? config.prismic.cmsPageEntityType : 'cms-page'

const resolver = {
  Query: {
    prismicCmsBlocks: () => {
      return Prismic.getApi(apiEndpoint).then((api) => {
        return api.query(Prismic.Predicates.at('document.type', cmsBlockType))
      }).then(response => response.results)
    },
    prismicCmsPages: () => {
      return Prismic.getApi(apiEndpoint).then((api) => {
        return api.query(Prismic.Predicates.at('document.type', cmsPageType))
      }).then(response => response.results)
    },
  },
  PrismicCmsBlock: {
    identifier: parent => {
      return parent.uid
    },
    title: parent => {
      const { data } = parent
      return PrismicDOM.RichText.asHtml(data.title)
    },
    content: parent => {
      const { data } = parent
      return Slice.parse(data.body)
    },
    creation_time: parent => {
      return parent.first_publication_date
    },
    update_time: parent => {
      return parent.last_publication_date
    }
  },
  PrismicCmsPage: {
    slug: parent => {
      return parent.uid
    },
    title: parent => {
      const { data } = parent
      return PrismicDOM.RichText.asHtml(data.title)
    },
    content: parent => {
      const { data } = parent
      return Slice.parse(data.body)
    },
    creation_time: parent => {
      return parent.first_publication_date
    },
    update_time: parent => {
      return parent.last_publication_date
    }
  }
}

export default resolver