import React from "react"
import { Row, Col, Typography, Divider, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import { useHideMenu } from "../hooks/useHideMenu"

const { Title, Text } = Typography

export const CrearTicket = () => {
  useHideMenu(true)

  const nuevoTicket = () => {
    console.log("horray, a ticket has been created")
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el botón para un nuevo ticket</Title>
          <Button
            shape="round"
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={14} offset={6} align="center">
          <Text>Su número</Text>
          <br />
          <Text style={{ fontSize: 55 }} type="success">
            55
          </Text>
        </Col>
      </Row>
    </>
  )
}
