import { Layout, Menu, Select } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";
import useLogout from "./../../modules/Auth/hooks/useLogout";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const { Header, Content, Footer } = Layout;
function MainLayout() {
  const { mutate: logout } = useLogout();

  const user = useAppSelector((state) => state.auth.user);
  if (!user) return <Navigate to={"/login"} />;


  const items = [
    getItem(<Link to="/">Quản lý sách</Link>, "1"),
    getItem(<Link to="/user">Quản lý người mượn</Link>, "2"),
    getItem(
      <Link
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Link>,
      "3-1"
    ),
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" items={items} />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {/* Content */}
        <Outlet context={items} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {/* Ant Design ©2018 Created by Ant UED */}
      </Footer>
    </Layout>
  );
}

export default MainLayout;
