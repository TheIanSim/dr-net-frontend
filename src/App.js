import React, { useState, useEffect } from "react";
import { Layout, Menu, notification, Icon } from "antd";

import Dashboard from "./Components/Dashboard";
import Accuracy from "./Components/Accuracy";
import Invoices from "./Components/Invoices";

import socketIOClient from "socket.io-client";

import "./App.css";

function App() {
  const { Header, Content, Footer } = Layout;
  const [page, setPage] = useState("HOME");
  const socket = socketIOClient("http://localhost:5000");

  const handlePageChange = e => {
    setPage(e.key);
  };

  const notificationHandler = data => {
    data = JSON.parse(data);
    let icon;
    if (data.title === "PROCESSING") {
      icon = <Icon type="sync" spin style={{ color: "orange" }} />;
    }
    if (data.title === "PROCESSING COMPLETED") {
      icon = (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      );
    }

    notification.open({
      message: data.title,
      description: data.content,
      icon,
      onClick: null
    });
  };

  useEffect(() => {
    socket.emit("req-home");
    socket.on("status_update", data => notificationHandler(data));
  }, []);

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo">Dr-NET Document Classifier</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["HOME"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item onClick={handlePageChange} key="HOME">
              Home
            </Menu.Item>
            <Menu.Item onClick={handlePageChange} key="ACCURACY">
              Accuracy
            </Menu.Item>
            <Menu.Item onClick={handlePageChange} key="INVOICES">
              Invoices
            </Menu.Item>
            <Menu.Item onClick={handlePageChange} key="TRENDS">
              Trends
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "30px", background: "#eaeaea" }}>
          {page === "HOME" && (
            <Dashboard handlePageChange={handlePageChange} socket={socket} />
          )}
          {page === "ACCURACY" && <Accuracy socket={socket} />}
          {page === "INVOICES" && <Invoices socket={socket} />}
        </Content>
        <Footer
          style={{ textAlign: "center", background: "#eaeaea" }}
          onClick={() =>
            notificationHandler({
              title: "PROCESSED",
              content: "mess,dfsdfsage"
            })
          }
        >
          2019 NUS BT3101 CAPSTONE GROUP 2
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
