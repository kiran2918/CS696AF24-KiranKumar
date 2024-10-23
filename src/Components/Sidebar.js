import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaChartBar, FaUsers, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#home"><FaHome /> Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#dashboard"><FaChartBar /> Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#users"><FaUsers /> Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#orders"><FaShoppingCart /> Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#settings"><FaCog /> Settings</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
