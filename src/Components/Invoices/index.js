import React from "react";
import { Table, Button, Tag, Divider, Modal } from "antd";
import ModalContent from "./ModalContent";

const statusColours = {
  unprocessed: "red",
  processing: "orange",
  processed: "blue",
  reviewed: "green"
};

const categories = [
  "IT Infrastructure",
  "Telecom Services",
  "Operations",
  "Human Resources"
];

const dates = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

class Invoices extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: [],
    visible: false
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  formatAccCol = percent => {
    // const r =
    //   percent < 50 ? 255 : Math.floor(255 - ((percent * 2 - 100) * 255) / 100);
    // const g = percent > 50 ? 255 : Math.floor((percent * 2 * 255) / 100);
    // return "rgb(" + r + "," + g + ",0)";
    if (percent < 30) {
      return "red";
    }
    if (percent < 60) {
      return "orange";
    }
    return "green";
  };

  showModal = data => {
    console.log(data);
    this.setState({
      visible: true,
      selected: data
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      selected: null
    });
  };

  processData = data => {
    for (let row of data) {
      console.log(row);
      let num = 0;
      let den = 0;
      for (let key in row) {
        if (key.indexOf("_conf") > -1 && row[key] !== 0) {
          den++;
          num += row[key];
        }
      }
      row["accuracy"] = ((num / den) * 100).toFixed(2);
    }
    return data;
  };

  updateData = incomingData => {
    incomingData = JSON.parse(incomingData);
    const processedData = this.processData(incomingData);
    console.log(processedData);
    this.setState({
      ...this.state,
      data: processedData.reverse()
    });
  };

  componentDidMount() {
    this.props.socket.emit("req_invoices");
    this.props.socket.on("invoices_update", this.updateData);
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: "File Name",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id < b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
        ellipsis: true,
        render: (text, data) => (
          <a onClick={() => this.showModal(data)}>{text}</a>
        )
      },
      {
        title: "Provider",
        dataIndex: "name_of_provider",
        key: "name_of_provider",
        sorter: (a, b) => a.name_of_provider < b.name_of_provider,
        sortOrder:
          sortedInfo.columnKey === "name_of_provider" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Date",
        dataIndex: "date_of_invoice",
        key: "date_of_invoice",
        filters: dates.map(date => ({ text: date, value: date })),
        filteredValue: filteredInfo.date_of_invoice || null,
        onFilter: (value, record) => record.date_of_invoice.includes(value),
        sorter: (a, b) => a.date_of_invoice.length - b.date_of_invoice.length,
        sortOrder:
          sortedInfo.columnKey === "date_of_invoice" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        filters: categories.map(cat => ({ text: cat, value: cat })),
        filteredValue: filteredInfo.category || null,
        onFilter: (value, record) => record.category.includes(value),
        sorter: (a, b) => a.category.length - b.category.length,
        sortOrder: sortedInfo.columnKey === "category" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Country",
        dataIndex: "country_of_consumption",
        key: "country_of_consumption",
        filters: [
          { text: "Singapore", value: "Singapore" },
          { text: "Hong Kong", value: "Hong Kong" },
          { text: "Japan", value: "Japan" }
        ],
        filteredValue: filteredInfo.country_of_consumption || null,
        onFilter: (value, record) =>
          record.country_of_consumption &&
          record.country_of_consumption.includes(value),
        sorter: (a, b) =>
          a.country_of_consumption.length - b.country_of_consumption.length,
        sortOrder:
          sortedInfo.columnKey === "country_of_consumption" && sortedInfo.order,
        ellipsis: true
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        filters: Object.keys(statusColours).map(k => ({ text: k, value: k })),
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order,
        ellipsis: true,
        render: tag => (
          <Tag color={statusColours[tag]} key={tag}>
            {tag}
          </Tag>
        )
      },
      {
        title: "Confidence",
        dataIndex: "accuracy",
        key: "accuracy",
        filters: [
          { text: "High", value: [100, 70] },
          { text: "Mid", value: [70, 30] },
          { text: "Low", value: [30, 0] }
        ],
        filteredValue: filteredInfo.accuracy || null,
        onFilter: (value, record) =>
          record.accuracy > value[1] && record.accuracy <= value[0],
        sorter: (a, b) => a.accuracy - b.accuracy,
        sortOrder: sortedInfo.columnKey === "accuracy" && sortedInfo.order,
        ellipsis: true,
        render: acc => (
          <Tag color={this.formatAccCol(acc)} key={acc}>
            {acc}%
          </Tag>
        )
      }
      // {
      //   title: "Actions",
      //   dataIndex: "actions",
      //   key: "actions",
      //   render: (text, record) => (
      //     <span>
      //       <a>Open File</a>
      //       <Divider type="vertical" />
      //       <a>Run Classifier</a>
      //     </span>
      //   )
      // }
    ];
    return (
      <div className="card">
        <Modal
          title="File Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="80%"
        >
          <ModalContent data={this.state.selected} />
        </Modal>
        <div>
          <div className="table-operations">
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={this.state.data}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Invoices;
