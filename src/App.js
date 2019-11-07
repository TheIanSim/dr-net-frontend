import React, { useState, useEffect } from "react";
import { Layout, Menu, notification, Icon } from "antd";
import Dashboard from "./Components/Dashboard";
import Accuracy from "./Components/Accuracy";
import Invoices from "./Components/Invoices";

import io from "socket.io-client";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "HOME",
      accuracy: {},
      invoices: [],
      socket: null
    };
  }

  handlePageChange = e => {
    this.setState({ page: e.key });
  };

  notificationHandler = data => {
    let icon;
    if (data.title === "PROCESSING") {
      icon = <Icon type="sync" spin style={{ color: "orange" }} />;
    }
    if (
      data.title === "PROCESSING COMPLETED" ||
      data.title === "INVOICE UPDATED"
    ) {
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

  componentDidMount() {
    const socket = io("http://localhost:5000");

    socket.on("invoices_update", data =>
      this.setState({ invoices: JSON.parse(data) })
    );
    socket.on("status_update", data =>
      this.notificationHandler(JSON.parse(data))
    );
    socket.on("accuracy_metrics", data => {
      this.setState({ accuracy: JSON.parse(data) });
    });

    socket.emit("req_invoices");
    socket.emit("req_metrics");

    this.setState({ socket });
  }

  render() {
    const { Header, Content, Footer } = Layout;
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
              <Menu.Item onClick={this.handlePageChange} key="HOME">
                Home
              </Menu.Item>
              <Menu.Item onClick={this.handlePageChange} key="ACCURACY">
                Accuracy
              </Menu.Item>
              <Menu.Item onClick={this.handlePageChange} key="INVOICES">
                Invoices
              </Menu.Item>
              <Menu.Item onClick={this.handlePageChange} key="TRENDS">
                Trends
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "30px", background: "#eaeaea" }}>
            {this.state.page === "HOME" && (
              <Dashboard
                handlePageChange={this.handlePageChange}
                socket={this.state.socket}
                invoicesData={this.state.invoices}
                accuracyData={this.state.accuracy}
              />
            )}
            {this.state.page === "ACCURACY" && (
              <Accuracy
                socket={this.state.socket}
                accuracyData={this.state.accuracy}
              />
            )}
            {this.state.page === "INVOICES" && (
              <Invoices
                socket={this.state.socket}
                invoicesData={this.state.invoices}
              />
            )}
          </Content>
          <Footer
            style={{ textAlign: "center", background: "#eaeaea" }}
            onClick={this.st}
          >
            2019 NUS BT3101 CAPSTONE GROUP 2
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
