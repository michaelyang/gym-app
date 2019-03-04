import Entry from "../components/Entry/Entry";
import RequireLogin from "../components/RequireLogin";

const Home = props => (
    <RequireLogin>
        <div>"Hi"</div>
    </RequireLogin>
);

export default Home;
