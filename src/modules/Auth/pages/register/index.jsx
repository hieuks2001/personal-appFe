import { Checkbox, Col, Divider, Form, Image, Input, Row, Button } from "antd";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <>
    <div className="center w-full">
      <Row>
        <Col span={18} push={6}>
          <div style={{ marginRight: "50px" }}>
            {/* <Image
                width={200}
                // src=""
                alt="Your logo"
              /> */}
            <p style={{ fontSize: "30px", fontWeight: 700 }}>Sign Up</p>
            <p style={{ fontSize: "20px" }}>It's quick and easy.</p>
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
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input placeholder="Email address" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone number" />
              </Form.Item>
             
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item className="px-4">
                <Button type="primary">Sign Up</Button>
              </Form.Item>
            </Form>
            <Link to="/login">Already have account?</Link>
          </div>
        </Col>
      </Row>
    </div>
  </>
);
export default App;
