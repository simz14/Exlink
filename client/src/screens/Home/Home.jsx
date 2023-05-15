import { Container } from "../../components/Container";
import Layout from "../../components/Layout";
import UsersTable from "./components/UsersTable";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div>
          <UsersTable />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
