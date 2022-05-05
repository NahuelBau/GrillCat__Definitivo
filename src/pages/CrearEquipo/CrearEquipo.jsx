import { Col, Input, Label, Row } from "reactstrap";

import "./CrearEquipo.css";
import {
  DataListWZ,
  DataListS,
  DataListDT,
} from "./../../Components/CustomComponents/DataList";

export const CrearEquipo = () => {
  return (
    <div className="content">
      <h1>Crear Equipo</h1>
      <hr />

      <Row>

        <Col sm={6} className="p-2">
          <Label>Cree o seleccione una <strong>ZONA DE TRABAJO</strong>:</Label>
          <DataListWZ />
        </Col>

        <Col sm={6} className="p-2">
          <Label>Cree o seleccione un <strong>LUGAR</strong></Label>
          <DataListS />
        </Col>
        
      </Row>

      <Row>

        <Col sm={6} className="p-2">
          <Label>Cree o seleccione un <strong>TIPO DE EQUIPO</strong></Label>
          <DataListDT />
        </Col>

        <Col sm={6} className="p-2">
            <Label>Cree un <strong>NOMBRE DEL EQUIPO</strong></Label>

          <div className="d-flex">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Ingrese nombre del equipo"
              // onChange={e => setDeviceName(e.target.value)}
            />
            <button
              className="btn btn-success btn-lg"
              // onClick={saveButton}
            >
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </Col>

      </Row>

      <Row>
        <div className="btn-conte">
          <button className="btn btn-secondary botonsito">Crear Equipo</button>
        </div>
      </Row>
    </div>
  );
};
