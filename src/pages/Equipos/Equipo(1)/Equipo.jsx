import React from "react";
import { Row, Card, CardBody, Col } from "reactstrap";
import {
  HrsActualesCard,
  HrsUltServiceCard,
  InfoHrsCard,
  InfoHrsUsoCard,
  MyCard,
  MyCard2,
  MyCard3,
  PrincipalInfoCard,
} from "./../../../Components/CustomComponents/MyCard";

export const Equipo = () => {
  const values = [
    {
      label: "Zona de trabajo",
      value: "Salar",
    },
    {
      label: "Lugar",
      value: "Salar1",
    },
    {
      label: "Nombre del equipo",
      value: "GND_11",
    },
  ];

  const values2 = [
    {
      label1: "Factor de cambio",
      value1: "200 hrs",
      label2: "Hrs func por dia",
      value2: "20 hrs",
    },
  ];

  const values3 = {
    label1: "Datos actuales",
    hrsActuales: "3000",
    diaHrsActuales: "20/3/12",
  };

  return (
    <div className="content">
      <h1>Equipo</h1>

      <div className="contenedor-1_card">
        <Row>
          <Col sm={6} xs={6}>
            <PrincipalInfoCard value={values} />
            <InfoHrsUsoCard valores={values2} />
          </Col>

          <Col sm={6} xs={6}>
            <HrsActualesCard valores={values3} />
            <HrsUltServiceCard valores={values3} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
