import Layout from "../components/Layout";
import { withRouter, NextRouter } from "next/router";
import { FC } from "react";

interface PostProps {
  router: NextRouter;
}

const Post: FC<PostProps> = ({ router }) => {
  return (
    <Layout title={router.query.title as string}>
      <p style={{ width: "80vw" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit,
        maiores a natus quis omnis, quisquam perspiciatis modi quibusdam nam,
        facilis architecto dolores pariatur sed?
      </p>
    </Layout>
  );
};

export default withRouter(Post);
