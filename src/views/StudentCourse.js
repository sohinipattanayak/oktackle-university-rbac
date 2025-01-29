// src/views/StudentCourse.js
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Table,
  Container,
} from "reactstrap";

const StudentCourse = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Basic Student Courses</h2>
      
      {/* Course Cards */}
      <Row>
        <Col md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Introduction to React</CardTitle>
              <CardText>
                Dive into the basics of React.js, learning about components, state management, and props to build dynamic user interfaces.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        <Col md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">JavaScript Essentials</CardTitle>
              <CardText>
                Master the core concepts of JavaScript, including ES6 features, closures, and asynchronous programming to enhance your web development skills.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        {/* Add more course cards as needed */}
      </Row>
      
      {/* Course Schedule Table */}
      <h3 className="mt-5 mb-3">Course Schedule</h3>
      <Table striped responsive>
        <thead>
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Introduction to React</td>
            <td>Jane Doe</td>
            <td>Mondays & Wednesdays, 10:00 AM - 11:30 AM</td>
          </tr>
          <tr>
            <td>JavaScript Essentials</td>
            <td>John Smith</td>
            <td>Tuesdays & Thursdays, 2:00 PM - 3:30 PM</td>
          </tr>
          {/* Add more schedule rows as needed */}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentCourse;



// import React from "react";

// const StudentCourse = () => {
//   return (
//     <div>
//       <h2>Basic Student Course</h2>
//       <p>Welcome to the Basic Student Course!</p>
//     </div>
//   );
// };

// export default StudentCourse;
