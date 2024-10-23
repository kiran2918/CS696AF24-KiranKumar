import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Sidebar from './Components/Sidebar';     // Sidebar Component
import Header from './Components/Header';       // Header Component
import SummaryStatistics from './Components/SummaryStatistics'; // Summary Statistics Component
import ChartWidget from './Components/ChartWidget'; // Chart Widget Component
import RecentActivity from './Components/RecentActivity'; // Recent Activity Component
import PerformanceMetrics from './Components/PerformanceMetrics'; // Performance Metrics Component
import Footer from './Components/Footer';       // Footer Component
import { Container, Row, Col } from 'react-bootstrap';  // Bootstrap Grid System

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Container fluid>
          <SummaryStatistics />
          <Row>
            <Col md={8}>
              <ChartWidget />
            </Col>
            <Col md={4}>
              <RecentActivity />
            </Col>
          </Row>
          <PerformanceMetrics />
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default App;
