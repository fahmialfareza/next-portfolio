import Link from "next/link";
import Layout from "../components/Layout";
import { FC } from "react";

interface PostLinkProps {
  title: string;
  slug: string;
}

const PostLink: FC<PostLinkProps> = ({ title, slug }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Blog: FC = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="angular-post" title="Angular Post" />
        <PostLink slug="vue-post" title="Vue Post" />
      </ul>
    </Layout>
  );
};

export default Blog;
