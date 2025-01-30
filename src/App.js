// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import StudentCourse from "./views/StudentCourse";
import InstructorCourse from "./views/InstructorCourse";
import Navbar from "./components/NavBar"; // Ensure Navbar is correctly implemented
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import Guide from "./Guide";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Ensure Navbar is rendered on all pages */}
      <Switch>
      <Route path="/guide" component={Guide} />
        <Route path="/" exact component={Home} />
        <PrivateRoute
          path="/student-course"
          component={StudentCourse}
          requiredPermission="access:basic-course"
        />
        <PrivateRoute
          path="/instructor-course"
          component={InstructorCourse}
          requiredPermission="access:premium-course"
        />
        {/* Fallback Route for unmatched paths */}
        <Route path="*">
          <div className="text-center mt-5">
            <h2>404 - Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;



// import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./views/Home";
// import Profile from "./views/Profile";
// import ExternalApi from "./views/ExternalApi";
// import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";

// // styles
// import "./App.css";
// import StudentCourse from "./views/StudentCourse";
// import InstructorCourse from "./views/InstructorCourse";
// // fontawesome
// import initFontAwesome from "./utils/initFontAwesome";
// initFontAwesome();

// const App = () => {
//   const { isLoading, error } = useAuth0();

//   if (error) {
//     return <div>Oops... {error.message}</div>;
//   }

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <Router history={history}>
//       <div id="app" className="d-flex flex-column h-100">
//         <NavBar />
//         <Container className="flex-grow-1 mt-5">
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/profile" component={Profile} />
//             <Route path="/external-api" component={ExternalApi} />
//             <Route path="/student-course" component={StudentCourse} />
//             <Route path="/instructor-course" component={InstructorCourse} />
//           </Switch>
//         </Container>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
