import Layout from "../components/Layout";
import { NextPage, NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <Layout title="Error!!!">
      <p>
        {statusCode
          ? `Could not load your user data: Status Code ${statusCode}`
          : `Couldn't get that page, sorry`}
      </p>
    </Layout>
  );
};

// Define `getInitialProps` with the correct type for NextPage
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
