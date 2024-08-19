import User from "./User";
import UserClass from "./UserClass";

const About = () =>{ 
    return(
        <div>
            <h1>This is about us page</h1>

            {/* <User name={"C K Tripathi from functional()"} location={"Newtown Kolkata"} /> */}

            {/* <UserClass name={"chandan class"} location={"Sapoorjiii Kolkata"} /> */}

            <UserClass />

        </div>
    )
};
export default About;