import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd8b70458581849489b5a335042117c4f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Zhaohao Blog',
  domain: 'blog.luzhaohao.me',
  author: 'Zhaohao Lu',

  // open graph metadata (optional)
  description: 'Zhaohao Lu - blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'IM594',
  // linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2a66f6a1-c1c8-4f4b-a2dd-ec24afdffbda%2F9d2eea85-bb6a-4e4f-a317-7cd184e45800%2Fmmexport1722398671505-modified.png?table=block&id=d8b70458-5818-4948-9b5a-335042117c4f&spaceId=2a66f6a1-c1c8-4f4b-a2dd-ec24afdffbda&width=250&userId=9c7e69fe-3f12-4eea-bbdc-56f4afb8296e&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/introduction': '3e410b6c7b174adfb74d384681fbe13b',
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: '소개',
    //   pageId: '3e410b6c7b174adfb74d384681fbe13b',
    // },
    // {
    //   title: '소개',
    //   pageId: '3e410b6c7b174adfb74d384681fbe13b',
    //   menuPage: true,
    // },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy-MM-dd HH:mm',

  // post page - hidden properties
  hiddenPostProperties: ['Public', 'Description', 'Slug', 'Created'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'light',

  // enable comment
  enableComment: true,

  isSearchEnabled: true,
});
