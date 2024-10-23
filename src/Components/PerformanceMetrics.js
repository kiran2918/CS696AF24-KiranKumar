import { ProgressBar, Col, Row } from 'react-bootstrap';

const PerformanceMetrics = () => {
  return (
    <Row>
      <Col>
        <h5>Sales Performance</h5>
        <ProgressBar now={60} label="60%" />
      </Col>
      <Col>
        <h5>Customer Satisfaction</h5>
        <ProgressBar now={80} variant="success" label="80%" />
      </Col>
    </Row>
  );
};

export default PerformanceMetrics;
