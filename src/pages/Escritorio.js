import React from "react"
import { Row, Col, Typography, Divider, Button } from "antd"
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons"
import { useHideMenu } from "../hooks/useHideMenu"
import { getUserStorage } from "../helpers/getUserStorage"
import { Redirect, useHistory } from "react-router-dom"
import { SocketContext } from "../context/SocketContext"
const { Title, Text } = Typography

export const Escritorio = () => {
  useHideMenu(false)

  const history = useHistory()
  const [user] = React.useState(getUserStorage())
  const [ticket, setTicket] = React.useState(null)
  const { socket } = React.useContext(SocketContext)

  const salir = () => {
    console.log("salir")
    localStorage.clear()
    history.replace("/ingresar")
  }
  const siguienteTicket = () => {
    socket.emit("siguiente-ticket-trabajar", user, (ticket) => {
      console.log("ticket", ticket)
      setTicket(ticket)
    })
  }

  if (!user.agent || !user.desktop) {
    return <Redirect to="/ingresar" />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{user.desktop}</Text>
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
        {ticket && (
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 25 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        )}
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
