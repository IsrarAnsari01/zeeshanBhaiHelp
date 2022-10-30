import { useState } from "react";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function AddJ() {
  const [getResponseFromServer, setGetResponseFromServer] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [desp, setDesp] = useState("");
  const [commpanyName, setCompanyName] = useState("");
  const postNewJob = (e) => {
    e.preventDefault();
    setGetResponseFromServer(true);

    let data = {
      jobData: {},
    };
  };
  const cleanFields = () => {
    setJobTitle("");
    setCompanyName("");
    setEmail("");
    setDesp("");
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Company Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  value={commpanyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Candidate Salary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={desp}
                  onChange={(e) => setDesp(e.target.value)}
                />
              </Form.Group>

              {getResponseFromServer ? (
                <Button className="btn btn-primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </Button>
              ) : (
                <Button variant="primary" type="submit" onClick={postNewJob}>
                  Register Your Job
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
