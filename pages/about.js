import Layout from "../components/Layout";
import Error from "./_error";

const About = ({ user, status }) => {
  if (status) {
    return <Error statusCode={status} />;
  }

  return (
    <Layout title="About">
      <div>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Fahmi Alfareza" height="200px" />
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
