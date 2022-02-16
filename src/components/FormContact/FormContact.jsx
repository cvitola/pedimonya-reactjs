import React from 'react'
import { Button, Container, Form, Input, TextArea, Title } from './FormContactStyles'

const FormContact = () => {
  return (
    <Container>
      <Title>Contactanos</Title>
      <Form>
          <Input placeholder='Nombre...'/>
          <Input placeholder='Apellido...'/>
          <Input placeholder='Mail...'/>
          <Input placeholder='Telefono...'/>
          <TextArea />
          <Button>Enviar</Button>
          <Button>Cancelar</Button>
      </Form>
    </Container>
  )
}

export default FormContact