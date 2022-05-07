import React from "react";
import { useSelector } from "react-redux";
import "./CustomStyles/MyCardStyles.css";

export const PrincipalInfoCard = () => {
  const { device } = useSelector((state) => state.equipos);
  const { workZoneName, siteName, deviceName } = device;

  return (
    <div>
      <div className="contenedor-carta">
        <div>
          <span className="muted-text">Zona de trabajo:</span>
          <br></br>
          <span className="font-weight-bold">{workZoneName}</span>
        </div>
        <div>
          <span className="muted-text">Lugar:</span>
          <br></br>
          <span className="font-weight-bold">{siteName}</span>
        </div>
        <div>
          <span className="muted-text">Nombre del equipo:</span>
          <br></br>
          <span className="font-weight-bold">{deviceName}</span>
        </div>
      </div>
    </div>
  );
};

export const InfoHrsUsoCard = () => {
  const { device } = useSelector((state) => state.equipos);
  const { factor, hrsFunc } = device;

  return (
    <div className="contenedor-carta">
      <span className="muted-text">Factor de cambio</span>
      <span className="font-weight-bold"> {factor} hrs</span>
      <span className="muted-text">Horas de uso por dia</span>
      <span className="font-weight-bold">{hrsFunc} hrs</span>
    </div>
  );
};

export const HrsActualesCard = () => {
  const { device } = useSelector((state) => state.equipos);
  const { horasActules, horasActualesDay } = device;
  return (
    <>
      <h6 className="mb-2">Datos Actuales</h6>
      <div className="contenedor-carta">
        <span className="muted-text">Horas:</span>
        <span className="font-weight-bold">{horasActules} hrs</span>
        <span className="muted-text">Dia:</span>
        <span className="font-weight-bold">{horasActualesDay}</span>
      </div>
    </>
  );
};

export const HrsUltServiceCard = () => {
  const { device } = useSelector((state) => state.equipos);
  const { horasUltimoServiceDay, horasUltimoService } = device;
  return (
    <>
      <h6 className="mb-2">Ultimo Service</h6>
      <div className="contenedor-carta">
        <span className="muted-text">Horas:</span>
        <span className="font-weight-bold">{horasUltimoService} hrs</span>
        <span className="muted-text">Dia:</span>
        <span className="font-weight-bold">{horasUltimoServiceDay}</span>
      </div>
    </>
  );
};
