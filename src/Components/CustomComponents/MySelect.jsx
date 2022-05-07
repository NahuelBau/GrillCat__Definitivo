


import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startPreDevices, startPreDeviceType, startPreSelectSite, startPreSelectWZ } from '../../actions/equipos/equipos';

export const WZSelectComponent = () => {

  const {WZAvalible, equipos} = useSelector(state => state.equipos);
  const dispatch = useDispatch();

  const Select = (e) => {
    const workZone = (e.target.value);
    dispatch( startPreSelectWZ(equipos, workZone) );
  }
  return (
    <div><div className='contenedor_select'>
    <select 
      className="form-select"  
      name="WorkZone" 
      onChange={Select}
      >
      <option></option>
      {
        WZAvalible.map(WorkZone => <option key={WorkZone} value={WorkZone}>{WorkZone}</option>)
      }
    </select>
  </div></div>
  )
}


export const SelectSite = () => {
  const {equipos, SiteAvalible} = useSelector( state => state.equipos)
  
  const dispatch = useDispatch();
  const value = (e) =>{
    const siteValue = (e.target.value);
    dispatch(startPreSelectSite(equipos,siteValue));
  }
  
  return (
    <div className="">
      <select className="form-select" aria-label="Default select example" onChange={value} >
        <option></option>
        {
          SiteAvalible.map(site => <option key={site} value={site}>{site}</option>)
        }
      </select>
    </div>
  )
}


export const SelectDeviceType = () => {
  const {equipos, DeviceTypeAvalible, WZSelected, SiteSelected} = useSelector( state => state.equipos)
  
  const dispatch = useDispatch();
  const value = (e) =>{
    const deviceType = (e.target.value);
    dispatch(startPreDeviceType(equipos ,WZSelected, SiteSelected, deviceType));
  }
  
  return (
    <div>
      <select className="form-select" aria-label="Default select example" onChange={value} >
        <option></option>
        {
          DeviceTypeAvalible.map(DeviceType => <option key={DeviceType} value={DeviceType}>{DeviceType}</option>)
        }
      </select>
    </div>
  )
}


export const SelectDevive = () => {

  const {DeviceAvalible, equipos} = useSelector( state => state.equipos)
  const dispatch = useDispatch();
  const value = (e) =>{
    const device = (e.target.value);
    dispatch(startPreDevices(equipos,device));
  }
  
  return(
    <div>
    <select className="form-select" aria-label="Default select example" onChange={value}>
      <option></option>
      {
        DeviceAvalible.map( device => <option key={device} value={device}>{device}</option> )
      }
    </select>
  </div>
  )
}

