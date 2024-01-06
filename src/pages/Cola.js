import React from "react"
import { Row, Col, Typography, List, Card, Tag, Divider } from "antd"
import { useHideMenu } from "../hooks/useHideMenu"
import { SocketContext } from "../context/SocketContext"
import { getLasts } from "../helpers/getLasts"

const { Title, Text } = Typography

export const Cola = () => {
  const { socket } = React.useContext(SocketContext)
  useHideMenu(true)

  const [tickets, setTickets] = React.useState([])

  React.useEffect(() => {
    socket.on("ticket-asignado", (assigned) => {
      console.log("asignados", assigned)
      setTickets(assigned)
    })
    return () => {
      socket.off("ticket-asignado")
    }
  }, [socket])

  React.useEffect(() => {
    getLasts().then((tickets) => setTickets(tickets))
  }, [])

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Escritorio: {item.desktop}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
