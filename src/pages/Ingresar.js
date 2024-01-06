import React from "react"
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import { useHistory, Redirect } from "react-router-dom"
import { useHideMenu } from "../hooks/useHideMenu"
import { getUserStorage } from "../helpers/getUserStorage"

const { Title, Text } = Typography

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 12 },
}

export const Ingresar = () => {
  useHideMenu(false)
  const history = useHistory()

  const [user] = React.useState(getUserStorage())

  console.log("user", user)

  const onFinish = (values) => {
    console.log("Success:", values)
    localStorage.setItem("agente", values.agente)
    localStorage.setItem("escritorio", values.escritorio)
    history.push("/escritorio")
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  if (user.agente && user.escritorio) {
    return <Redirect to="/escritorio" />
  }

  return (
    <>
      <Title level={2} align="center">
        Ingresar
      </Title>
      <Text align="center">Ingrese su nombre y número de escritorio</Text>
      <Divider />
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[{ required: true, message: "Por favor ingrese su usuario" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
