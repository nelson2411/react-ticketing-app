import React from "react"
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom"
import { CrearTicket } from "./CrearTicket"
import { Cola } from "./Cola"
import { Ingresar } from "./Ingresar"
import { Escritorio } from "./Escritorio"

const { Sider, Content } = Layout

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola de Tickets</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/crear">Crear Ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/ingresar">
                <Ingresar />
              </Route>
              <Route path="/cola">
                <Cola />
              </Route>
              <Route path="/crear" component={CrearTicket} exact />
              <Route path="/escritorio" component={Escritorio} />
              <Redirect to="/ingresar" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
