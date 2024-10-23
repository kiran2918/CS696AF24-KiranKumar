import { Card, Col, Row } from 'react-bootstrap';

const SummaryStatistics = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text>1,234</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Text>$12,345</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Orders</Card.Title>
            <Card.Text>567</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Conversion Rate</Card.Title>
            <Card.Text>7.8%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryStatistics;
