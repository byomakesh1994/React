import React, { useEffect, useState } from "react";
import Layout from "../../Component/Layout";
import {
  Table,
  Button,
  Popconfirm,
  Drawer,
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Spin,
} from "antd";
import { fetchListuser } from "../../Redux/Action/Listaction";
import { useDispatch, useSelector } from "react-redux";

import { DeleteFilled, EditFilled, ContactsFilled } from "@ant-design/icons";

const Listuser = () => {
  const { Option } = Select;
  const formRef = React.createRef();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);

  const [val, setVal] = useState({});
  useEffect(() => {
    dispatch(fetchListuser());
  }, []);

  const editUser = (record) => {
    setVisible(true);
    setVal({ ...record });
    console.log(record);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (e) => {
    console.log(val);
    setVisible(false);
  };

  const resetForm = () => {
    setVal({
      name: "",
      email: "",
      select: "",
      date: null,
      checkbox: null,
      radio: "",
      rate: "",
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Framework",
      dataIndex: "radio",
      key: "radio",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <Button
            type="primary"
            size="small"
            className="mr-2 only-icon float-left ant-btn-no-bg ant-btn-primary-no-bg"
            //onClick={() => addUser()}
          >
            <ContactsFilled />
          </Button>
          <Button
            type="primary"
            size="small"
            className="mr-2 only-icon float-left ant-btn-no-bg ant-btn-primary-no-bg"
            onClick={() => editUser(record)}
          >
            <EditFilled />
          </Button>
          <Popconfirm
            title="Are you sure to delete this Meeting?"
            placement="topRight"
            //   onConfirm={() => {
            //     this.DeleteNeedsExpectations(record);
            //   }}
            //   onCancel={this.CancelDeleteMeeting}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              size="small"
              className="only-icon float-left ant-btn-no-bg ant-btn-dangerous-no-bg"
              danger
            >
              <DeleteFilled />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  // const inputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };
  // const onChange = (date, dateString) => {
  //   setUser({ ...user, date: dateString });
  // };

  // const checkboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   const { checkbox } = user;
  //   if (checked) {
  //     setUser({ ...user, checkbox: [...checkbox, value] });
  //   } else {
  //     const filter = checkbox.filter((el) => el.id !== value);
  //     setUser({ ...user, checkbox: filter });
  //   }
  // };

  // const handleChange = (val) => {
  //   setUser({ ...user, select: val });
  // };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setVal((val) => {
      return { ...val, [name]: value };
    });
  };
  const onChange = (date, dateString) => {
    setVal((val) => {
      return { ...val, date: dateString };
    });
  };

  const checkboxChange = (e) => {
    const { value, checked } = e.target;

    // if (val && checked) {
    //   setVal((val) => {
    //     return { ...val, checkbox: [...checkbox, value] };
    //   });
    // } else {
    //   const filter = checkbox.filter((el) => el.id !== value);
    //   setVal((val) => {
    //     return { ...val, checkbox: filter };
    //   });
    // }
  };

  const handleChange = (value) => {
    setVal({ ...val, select: value });
  };

  return (
    <Layout>
      <h3>List User</h3>
      <Table
        loading={loading}
        columns={columns}
        dataSource={list}
        rowKey="id"
      />

      <Drawer
        title="Edit User"
        placement="right"
        onClose={onClose}
        open={visible}
      >
        <Form
          onFinish={(e) => onFinish()}
          layout="vertical"
          size="large"
          ref={formRef}
          // initialValues={email}
        >
          <Form.Item label="Name">
            <Input
              placeholder="Name"
              onChange={(e) => inputChange(e)}
              name="name"
              value={val?.name}
            ></Input>
          </Form.Item>
          <Form.Item label="Email">
            <Input
              placeholder="Email"
              onChange={(e) => inputChange(e)}
              name="email"
              value={val?.email}
            ></Input>
          </Form.Item>
          <Form.Item label="State" hasFeedback>
            <Select
              placeholder="Please Select a State"
              name="select"
              onChange={handleChange}
              value={val?.select}
            >
              <Option value="Odisha">Odisha</Option>
              <Option value="Delhi">Delhi</Option>
              <Option value="Hydrabad">Hydrabad</Option>
              <Option value="Mumbai">Mumbai</Option>
              <Option value="Chennai">Chennai</Option>
            </Select>
          </Form.Item>
          <Form.Item direction="vertical">
            <DatePicker
              allowClear
              onChange={onChange}
              name="date"
              // value={val.date}
            />
          </Form.Item>
          <Form.Item label="Checkbox.Group">
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <Checkbox
                    name="checkbox"
                    value="HTML"
                    onChange={(e) => checkboxChange(e)}
                    defaultChecked={true}
                  >
                    HTML
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    name="checkbox"
                    value="CSS"
                    onChange={(e) => checkboxChange(e)}
                    //checked={val.checkbox.find((e) => e === "CSS")}
                  >
                    CSS
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    name="checkbox"
                    value="JAVASCRIPT"
                    onChange={(e) => checkboxChange(e)}
                    //checked={val.checkbox.find((e) => e === "JAVASCRIPT")}
                    defaultChecked={true}
                  >
                    JAVASCRIPT
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    name="checkbox"
                    value="BOOTSTRAP"
                    onChange={(e) => checkboxChange(e)}
                    // checked={val.checkbox.find((e) => e === "BOOTSTRAP")}
                  >
                    BOOTSTRAP
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    name="checkbox"
                    value="Reactjs"
                    onChange={(e) => checkboxChange(e)}
                    // checked={val.checkbox.find((e) => e === "Reactjs")}
                  >
                    Reactjs
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="link"
              htmlType="button"
              className="float-right"
              danger
              onClick={() => resetForm()}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" className="float-right">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </Layout>
  );
};

export default Listuser;
