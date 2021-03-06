import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Hello First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;
