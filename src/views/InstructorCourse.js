// src/views/InstructorCourse.js
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

const InstructorCourse = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Premium Instructor Courses</h2>
      
      {/* Premium Course Cards */}
      <Row>
        <Col md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Advanced React</CardTitle>
              <CardText>
                Explore advanced topics in React.js, including hooks, context API, and performance optimization to build complex applications.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        <Col md="6" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Node.js Mastery</CardTitle>
              <CardText>
                Become proficient in server-side development with Node.js, learning Express.js, RESTful APIs, and building scalable backend systems.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        {/* Add more premium course cards as needed */}
      </Row>
      
      {/* Premium Course Schedule Table */}
      <h3 className="mt-5 mb-3">Premium Course Schedule</h3>
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
            <td>Advanced React</td>
            <td>Alice Johnson</td>
            <td>Fridays, 1:00 PM - 4:00 PM</td>
          </tr>
          <tr>
            <td>Node.js Mastery</td>
            <td>Bob Williams</td>
            <td>Mondays, 3:00 PM - 6:00 PM</td>
          </tr>
          {/* Add more schedule rows as needed */}
        </tbody>
      </Table>
    </Container>
  );
};

export default InstructorCourse;
