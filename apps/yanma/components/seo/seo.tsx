import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SEOProps {
  title?: string;
  description?: string;
  isBlogPost?: boolean;
}

import Head from 'next/head';
import { metaData as siteMeta } from 'config';

export function SEO({ title, description, isBlogPost = false }: SEOProps) {
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName;
  const pageDescription = description ? description : siteMeta.description;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="twitter:card" content="app" />
      <meta property="twitter:site" content={siteMeta.author.twitterHandle} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
    </Head>
  );
}

export default SEO;
