import {
  types
} from './../types/types';

/*

{
  equipos: [],
  active: null,
  active: {
    id: 'asdfasdfasdf',
    WorkZone: 'Lab1',
    Site: 'Laboratio'
    deviceType: 'GND',
    DeviceName: 'GND__1',

    factor: 200,
    hrsDia: 20,

    hrsActuales: 2000,
    DAYhrsActuales: una fecha(1231231232131) son numeros,

    hrsUltimoService: 1000,
    DAYhrsUltimoService: una fecha,

    status: 'ok' | 'con observaciones' | 'fuera de servicio',
    observacion: 'aca viene una observacipon que puede ser o no una mierdaque podamosad',

  }
}
equipoReducer
*/

const initialState = {
  equipos: [],
  active: null,
}

export const equipoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.selectDeviceAfteCreate:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }


      default:
        return state
  }
}