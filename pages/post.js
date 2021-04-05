import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p width={{ width: "80vw" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit,
        maiores a natus quis omnis, quisquam perspiciatis modi quibusdam nam,
        facilis architecto dolores pariatur sed?
      </p>
    </Layout>
  );
};

export default withRouter(Post);
