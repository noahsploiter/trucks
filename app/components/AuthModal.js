"use client";

import { useState } from "react";
import { Modal, Tabs, Form, Input, Button, Divider } from "antd";
import {
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function AuthModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("login");

  const onFinish = (values) => {
    console.log("Form values:", values);
    // Handle authentication here
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={400}
      className="auth-modal"
      centered
    >
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        centered
        items={[
          {
            key: "login",
            label: "Login",
            children: (
              <div className="py-4">
                <Button
                  icon={<GoogleOutlined />}
                  className="w-full h-12 text-base flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 mb-6"
                >
                  Continue with Google
                </Button>
                <Divider className="my-6">or</Divider>
                <Form
                  name="login"
                  onFinish={onFinish}
                  layout="vertical"
                  className="space-y-4"
                >
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Email"
                      size="large"
                      className="rounded-lg"
                    />
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
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Password"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ),
          },
          {
            key: "signup",
            label: "Sign Up",
            children: (
              <div className="py-4">
                <Button
                  icon={<GoogleOutlined />}
                  className="w-full h-12 text-base flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 mb-6"
                >
                  Sign up with Google
                </Button>
                <Divider className="my-6">or</Divider>
                <Form
                  name="signup"
                  onFinish={onFinish}
                  layout="vertical"
                  className="space-y-4"
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Full Name"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Email"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        min: 6,
                        message: "Password must be at least 6 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Password"
                      size="large"
                      className="rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
                    >
                      Create Account
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
}
