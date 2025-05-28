import { getAllPostSlugs, getPostData } from '../../components/Posts';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../layout';
import BlogPage from '../../components/BlogPage';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();


  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
      },
    },
  };
}

export default function Index({ postData }) {
  return (
        <BlogPage postData={postData}/>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};