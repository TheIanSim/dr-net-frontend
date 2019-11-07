import React from "react";
import { percRound, keyToName } from "../../functions";
import { Table, Input, Button, Form } from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Field",
        dataIndex: "name",
        width: "30%"
      },
      {
        title: "Value",
        dataIndex: "value",
        editable: true
      },
      {
        title: "Confidence",
        dataIndex: "confidence"
      }
    ];
    this.state = { dataSource: this.formatData(this.props.data) };
  }

  formatData = data => {
    let dataArray = [];
    let index = 0;
    for (let key of Object.keys(data)) {
      if (key.indexOf("_conf") > -1) {
        dataArray.push({
          key: index,
          name: keyToName(key.replace("_conf", "")),
          confidence: percRound(data[key]) + "%",
          value: data[key.replace("_conf", "")]
        });
        index++;
      }
    }
    return dataArray;
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  handleSubmit = () => {
    const { filename, socket } = this.props;
    const { dataSource } = this.state;
    const payload = { filename, data: dataSource };
    console.log(payload)
    socket.emit("req_invoice_details_update", payload);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <h2>{this.props.filename}</h2>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <Button
          type="primary"
          style={{ marginTop: "12px", right: "0px" }}
          onClick={this.handleSubmit}
        >
          {"Validate & Save All"}
        </Button>
      </div>
    );
  }
}

export default EditableTable;
