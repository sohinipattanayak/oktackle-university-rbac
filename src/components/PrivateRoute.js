// src/components/PrivateRoute.js
import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "reactstrap";

const PrivateRoute = ({ component: Component, requiredPermission, ...rest }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [hasPermission, setHasPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently({
            audience: "https://novaed-api.com/rbac",
            scope: "read:permissions",
          });
          const decoded = JSON.parse(atob(token.split(".")[1]));
          if (decoded.permissions && decoded.permissions.includes(requiredPermission)) {
            setHasPermission(true);
          } else {
            setHasPermission(false);
          }
        } catch (error) {
          console.error("Error checking permissions:", error);
          setHasPermission(false);
        }
      }
      setIsLoading(false);
    };

    checkPermission();
  }, [isAuthenticated, getAccessTokenSilently, requiredPermission]);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && hasPermission ? (
          <Component {...props} />
        ) : isAuthenticated ? (
          // User is authenticated but lacks permission
          <div className="text-center mt-5">
            <h2>403 - Forbidden</h2>
            <p>You do not have permission to access this page.</p>
          </div>
        ) : (
          // User is not authenticated
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
