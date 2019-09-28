import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import Dashboard from "./Components/Dashboard";
import NewInvoice from "./Components/NewInvoice";
import ReviewInvoice from "./Components/ReviewInvoice";

import "./App.css";

function App() {
  const { Header, Content, Footer } = Layout;
  const [page, setPage] = useState("DASH");

  const handlePageChange = e => {
    setPage(e.key);
  };

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo">Dr-NET Document Classifier</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["DASH"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item onClick={handlePageChange} key="DASH">
              Dashboard
            </Menu.Item>
            <Menu.Item onClick={handlePageChange} key="NEW">
              New Invoice
            </Menu.Item>
            <Menu.Item onClick={handlePageChange} key="REVIEW">
              Review Invoice
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {page === "DASH" && <Dashboard />}
          {page === "NEW" && <NewInvoice />}
          {page === "REVIEW" && <ReviewInvoice />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          2019 NUS BT3101 CAPSTONE GROUP 2
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
