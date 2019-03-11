import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import Entry from "./Entry/Entry";
import Loading from "./Loading";

const RequireLogin = props => (
    <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => {
            if (loading) return <> </>;
            if (!data.currentUser) {
                return <Entry />;
            }
            return props.children;
        }}
    </Query>
);

export default RequireLogin;
