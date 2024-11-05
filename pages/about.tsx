import Layout from "../components/Layout";
import Error from "./_error";
import { NextPage } from "next";

interface User {
  name: string;
  avatar_url: string;
}

interface AboutProps {
  user: User;
  status?: number | false;
}

const About: NextPage<AboutProps> = ({ user, status }) => {
  if (status) {
    return <Error statusCode={status} />;
  }

  return (
    <Layout title="About">
      <div>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt={user.name} height="200px" />
      </div>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/fahmialfareza");
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return { user: data, status: statusCode };
};

export default About;
