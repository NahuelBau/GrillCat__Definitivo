import { Col, Label, Row } from "reactstrap";

import "./CrearEquipo.css";
import {
  DataListWZ,
  DataListS,
  DataListDT,
} from "./../../Components/CustomComponents/DataList";
import { useDispatch, useSelector } from "react-redux";
import { startNewDevice } from "./../../actions/equipos/equipos";
import { choiceDeviceName } from "../../actions/create/createDevice";
import { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { getDocs, query, collection, doc, getDoc} from "firebase/firestore";

export const CrearEquipo = () => {
  const dispatch = useDispatch();

  
  const [deviceNameCreate, setDeviceName] = useState(null);

  const {uid}=useSelector(state=>state.auth);

  const saveButton = () => {
    dispatch(choiceDeviceName(deviceNameCreate));

    Swal.fire({
      icon: "success",
      title: "Nombre del nuevo equipo seleccionado. :)",
      timer: 2400,
      position: "top",
      toast: true,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  const handleAddNew = () => {
    dispatch(startNewDevice());
  };

  const getPersons = async () =>{
    const persons = await getDoc(query(collection(db,`${uid}/equipos`)));
    console.log(persons.docs);
  };

  getPersons()


  return (
    <div className="content">
      <h1>Crear Equipo</h1>
      <hr />

      <Row>
        <Col sm={6} className="p-2">
          <Label>
            Cree o seleccione una <strong>ZONA DE TRABAJO</strong>:
          </Label>
          <DataListWZ />
        </Col>

        <Col sm={6} className="p-2">
          <Label>
            Cree o seleccione un <strong>LUGAR</strong>
          </Label>
          <DataListS />
        </Col>
      </Row>

      <Row>
        <Col sm={6} className="p-2">
          <Label>
            Cree o seleccione un <strong>TIPO DE EQUIPO</strong>
          </Label>
          <DataListDT />
        </Col>

        <Col sm={6} className="p-2">
          <Label>
            Cree un <strong>NOMBRE DEL EQUIPO</strong>
          </Label>

          <div className="d-flex">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Ingrese nombre del equipo"
              onChange={(e) => setDeviceName(e.target.value)}
            />
            <button className="btn btn-success btn-lg" onClick={saveButton}>
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <div className="btn-conte">
          <button
            className="btn btn-secondary botonsito"
            onClick={handleAddNew}
          >
            Crear Equipo
          </button>
        </div>
      </Row>
    </div>
  );
};
