import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const { mutate: login } = useLogin();
  const onFinish = (values) => {
    // console.log(values);
    login(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const [value, setValue] = useState();
  // const instance = axios.create({
  //   baseURL: "https://api.example.com",
  // });
  // const handleSelectServer = (e) => {
  //   // console.log(e);
  //   setValue(e);
  // };
  // axios.defaults.baseURL = "https://localhost:" + value + "/api";

  return (
    <div className="center w-full">
      <Row>
        <Col span={18} push={6}>
          {" "}
          <div style={{ marginRight: "50px" }}>
            {/* <Image
              width={200}
              // src=""
              alt="Your logo"
            /> */}
            <p style={{ fontSize: "30px", fontWeight: 700 }}>Your Logo Here</p>
            <p style={{ fontSize: "20px" }}>Your slogan Here</p>
          </div>
        </Col>
        <Col span={6} pull={6}>
          <div className="border text-center">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="userEmail"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email address or phone number!",
                  },
                ]}
              >
                <Input placeholder="Email address or phone number" />
              </Form.Item>

              <Form.Item
                name="userPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item name={"port"}>
                <Select
                  placeholder="Chọn server"
                  style={{ width: 150 }}
                  // onChange={handleSelectServer}
                  // value={value}
                  key={"serrver"}
                >
                  <Select.Option key={"DHDN"} value="7116">
                    ĐH ĐN
                  </Select.Option>
                  <Select.Option key={"VKU"} value="7117">
                    VKU
                  </Select.Option>
                  <Select.Option key={"NN"} value="7118">
                    Ngoại ngữ
                  </Select.Option>
                </Select>
                
              </Form.Item>
              <Form.Item className="px-4">
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
            {/* <Link to="#">Forgotten password?</Link> */}
            {/* <hr /> */}
            {/* <div className="px-4">
              <Button type="text" style={{ backgroundColor: "green" }}>
                <Link to="/register">Create new account</Link>
              </Button>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>

    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 8,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your username!",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your password!",
    //       },
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="remember"
    //     valuePropName="checked"
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     {/* <Checkbox>Remember me</Checkbox> */}
    //   </Form.Item>

    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};
export default Login;
