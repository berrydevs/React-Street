import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Nav from '@components/nav/nav';
import SEO from '@components/seo/seo';
import Head from 'next/head';
import { ReactNode } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  isBlogPost?: boolean;
}

export interface PageProps {
  meta?: MetaProps;
  children?: ReactNode;
}

export function Page(props: PageProps) {
  const { children, meta } = props;
  return (
    <>
      <Head>
        <SEO {...meta} />
      </Head>

      <main>
        <Header></Header>
        <Nav></Nav>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Page;
