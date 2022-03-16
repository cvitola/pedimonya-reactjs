import React from 'react'
import { Form, Input, TextArea, ImgContact  } from './FormContactStyles'
import { ContainerFirst, H1, Button } from '../BasicStyles/BasicStyles';
import imgContact from '../../assets/img/contactImage.jpg';

const FormContact = () => {
  return (
    <ContainerFirst>
      <H1>CONTACTANOS</H1>
      <ImgContact src={imgContact} alt="Imagen Contacto" />
      <Form>
          <Input placeholder='Nombre...'/>
          <Input placeholder='Apellido...'/>
          <Input placeholder='Mail...'/>
          <Input placeholder='Telefono...'/>
          <TextArea />
          <Button>Enviar</Button>
      </Form>
    </ContainerFirst>
  )
}

export default FormContact