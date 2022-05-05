import { types } from './../../types/types';

export const startNewDevice = () => {
  return async(dispatch, obtenerState) => {
    const uid = obtenerState().auth.uid;
    const {WZN_toCreate, SN_toCreate, DTN_toCreate, DN_toCreate} = obtenerState().create;

    const nuevoEquipo = {
      WorkZone: WZN_toCreate,
      Site: SN_toCreate,
      DeviceType: DTN_toCreate,
      DeviceName: DN_toCreate,

      factor: '',
      hrsDia: '',

      hrsActuales: '',
      DAYhrsActuales: '',

      hrsUltimoService: '',
      DAYhrsUltimoService: '',

      status: '',
      observacion: ''
    }


  }
}


const obtenerEquipoDespCrearlo = (id, equipo) => ({
  type: types.selectDeviceAfteCreate,
  payload: {
    id,
    ...equipo
  }
});