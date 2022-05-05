import React from "react";
import "./CustomStyles/MyCardStyles.css";

export const PrincipalInfoCard = ({ value }) => {
  return (
    <div>
      <div className="contenedor-carta">
        {value.map((item) => (
          <div>
            <span className="muted-text">{item.label}</span>
            <br></br>
            <span className="font-weight-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InfoHrsUsoCard = ({ valores }) => {
  return (
    <div className="contenedor-carta">
      <span className="muted-text">Factor de cambio</span>
      <span className="font-weight-bold"> 250 hrs</span>
      <span className="muted-text">Horas de uso por dia</span>
      <span className="font-weight-bold">20 hrs</span>
    </div>
  );
};

export const HrsActualesCard = ({ valores }) => {
  return (
    <>
      <h6 className="mb-2">{valores.label1}</h6>
      <div className="contenedor-carta">
        <span className="muted-text">Horas:</span>
        <span className="font-weight-bold">{valores.hrsActuales} hrs</span>
        <span className="muted-text">Dia:</span>
        <span className="font-weight-bold">{valores.diaHrsActuales}</span>
      </div>
    </>
  );
};

export const HrsUltServiceCard = ({ valores }) => {
  return (
    <>
      <h6 className="mb-2">Ultimo Service</h6>
      <div className="contenedor-carta">
        <span className="muted-text">Horas:</span>
        <span className="font-weight-bold">{valores.hrsUltService} 200 hrs</span>
        <span className="muted-text">Dia:</span>
        <span className="font-weight-bold">{valores.dayUltService} 02/03/12</span>
      </div>
    </>
  );
};
