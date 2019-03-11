import RequireLogin from "../components/RequireLogin";
import Logout from "../components/Logout";

const Home = props => (
    <RequireLogin>
        <Logout />
    </RequireLogin>
);

export default Home;
