import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  // Returns a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.author}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  // fetch necessary data for the blog post using param.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}