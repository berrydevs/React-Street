/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

type RenderToStringParams = {
  components?: object
  mdxOptions?: object
  scope?: object
}

type HydrateParams = {
  components?: object
}

declare module "next-mdx-remote/render-to-string" {
  function renderToString(source: string,
    renderToStringParams?: RenderToStringParams): object

  export default renderToString

}

declare module 'next-mdx-remote/hydrate' {
  function hydrate(mdxObject: object, components?: HydrateParams): string

  export default hydrate
}
