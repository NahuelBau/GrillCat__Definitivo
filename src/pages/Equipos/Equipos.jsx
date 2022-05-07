import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Label, Row } from "reactstrap";
import { startGetAllDevice } from "../../actions/equipos/equipos";
import { SelectDeviceType, SelectDevive, SelectSite, WZSelectComponent } from "./../../Components/CustomComponents/MySelect";

export const Equipos = () => {

  const dispatch = useDispatch();

  const {uid} = useSelector( state => state.auth );
  console.log(uid);

  useEffect(() => {
    dispatch(startGetAllDevice(uid));
  }, []);


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
          <SelectSite />
        </Col>
        <Col sm={6} className="p-2">
          <Label>Tipo de Equipo:</Label>
          <SelectDeviceType />
        </Col>
        <Col sm={6} className="p-2">
          <Label>Nombre del Equipo:</Label>
          <SelectDevive />
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
