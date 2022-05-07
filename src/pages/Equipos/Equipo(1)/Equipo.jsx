import React from "react";
import { Row, Col } from "reactstrap";
import {
  HrsActualesCard,
  HrsUltServiceCard,
  InfoHrsUsoCard,
  PrincipalInfoCard,
} from "./../../../Components/CustomComponents/MyCard";

export const Equipo = () => {

  return (
    <div className="content">
      <h1>Equipo</h1>

      <div className="contenedor-1_card">
        <Row>
          <Col sm={6} xs={6}>
            <PrincipalInfoCard />
            <InfoHrsUsoCard />
          </Col>

          <Col sm={6} xs={6}>
            <HrsActualesCard />
            <HrsUltServiceCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};
