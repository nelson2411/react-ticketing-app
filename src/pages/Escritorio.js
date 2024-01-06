import React from "react"
import { Row, Col, Typography, Divider, Button } from "antd"
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons"
import { useHideMenu } from "../hooks/useHideMenu"
import { getUserStorage } from "../helpers/getUserStorage"
import { Redirect, useHistory } from "react-router-dom"
const { Title, Text } = Typography

export const Escritorio = () => {
  useHideMenu(false)

  const history = useHistory()
  const [user] = React.useState(getUserStorage())

  const salir = () => {
    console.log("salir")
    localStorage.clear()
    history.replace("/ingresar")
  }
  const siguienteTicket = () => {
    console.log("Siguiente ticket")
  }

  if (!user.agente || !user.escritorio) {
    return <Redirect to="/ingresar" />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{user.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 25 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary" onClick={siguienteTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}
