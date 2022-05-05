import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Label, Row } from "reactstrap";
import { WZSelectComponent } from "./../../Components/CustomComponents/MySelect";

export const Equipos = () => {


  const navigate = useNavigate()

  const nextPage = () => {
    navigate("/equipos/equipo")
  }

  return (
    <div className="content">
      <h1>Equipos </h1>
      <hr />
      <Row>
        <Col sm={6} className="p-2">
          <Label>Zona de Trabajo:</Label>
          <WZSelectComponent />
        </Col>
        <Col sm={6} className="p-2">
          <Label>Lugar:</Label>
          <WZSelectComponent />
        </Col>
        <Col sm={6} className="p-2">
          <Label>Tipo de Equipo:</Label>
          <WZSelectComponent />
        </Col>
        <Col sm={6} className="p-2">
          <Label>Nombre del Equipo:</Label>
          <WZSelectComponent />
        </Col>

        <Row>
        <div className="btn-conte">
          <button className="btn btn-secondary" onClick={nextPage}>Siguiente</button>
        </div>
      </Row>
      </Row>
    </div>
  );
};
