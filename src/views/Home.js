import React, { Fragment } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../components/Hero";


const Home = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [permissions, setPermissions] = React.useState([]);

  React.useEffect(() => {
    const fetchPermissions = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently({
            audience: "https://novaed-api.com/rbac",
            scope: "read:permissions",
          });
          const decoded = JSON.parse(atob(token.split(".")[1]));
          setPermissions(decoded.permissions || []);
        } catch (error) {
          console.error("Error fetching permissions:", error);
        }
      }
    };

    fetchPermissions();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <Fragment>
      <Hero />
      <hr />
      <div className="text-center mt-4">
        {permissions.includes("access:basic-course") && (
          <Button color="primary" tag={Link} to="/student-course" className="m-2">
            Student Course
          </Button>
        )}
        {permissions.includes("access:premium-course") && (
          <Button color="warning" tag={Link} to="/instructor-course" className="m-2">
            Instructor Course
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
