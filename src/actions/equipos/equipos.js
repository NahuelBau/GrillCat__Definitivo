import { useSelector } from 'react-redux';
import { fetchConToken } from '../../helpers/fetch';
import { types } from './../../types/types';



export const startGetAllDevice = (uid) => {
  
  return async (dispatch) => {
    console.log(uid)

    try {
      const resp = await fetchConToken('devices/getall', {uid}, 'POST');
      const body = await resp.json();
      console.log(resp)

      await dispatch(getAllDevice(body.equipos));
      await dispatch(ArrayWZ(body.equipos));

      return (body.equipos);

    } catch (error) {
      console.log(error)
    }
  }
}

const getAllDevice = (devices) => {
  return {
    type: types.getAllDevices,
    payload: devices
  }
}

//_________________________________________________________________
// Creacion de arrays y mierdas varias... 
//_________________________________________________________________

export const ArrayWZ = (equipos) => {
  return async (dispatch) => {
    let WZNames = [];
    equipos.map(e => {
      WZNames.push(e.workZoneName);
    });

    const sgArrayProvisorio = new Set(WZNames);
    WZNames = [...sgArrayProvisorio];

    dispatch(createArrayWZ(WZNames));
  }
}

const createArrayWZ = (equipos) => {
  return {
    type: types.filterForWZ,
    payload: equipos
  }
}

export const arraySites = (equipos, workZone) => {
  return async (dispatch) => {
    const arraySites = equipos.filter(e => e.workZoneName === workZone);

    let a = []
    arraySites.map(e => {
      a.push(e.siteName);
    })

    const arrayProvisorio = new Set(a);
    a = [...arrayProvisorio];

    dispatch(createArraySites(a))
  }
}
const createArraySites = (equipos) => {
  return {
    type: types.filterForSite,
    payload: equipos
  }
}

export const arrayDeviceTypes = (equipos, site) => {
  return async (dispatch) => {
    const arrayDeviceType = equipos.filter(e => e.siteName === site);

    let a = [];
    arrayDeviceType.map(e => {
      a.push(e.deviceTypeName);
    })

    const arrayProvisorio = new Set(a);
    a = [...arrayProvisorio];

    dispatch(createArrayDeviceTypes(a))
  }
}
const createArrayDeviceTypes = (equipos) => {
  return {
    type: types.filterForDeviceTypes,
    payload: equipos
  }
}

export const arrayDevices = (equipo, workZoneName, site, deviceType) => {
  return async (dispatch) => {
    const arrayDevices = equipo.filter(e => e.workZoneName === workZoneName && e.siteName === site && e.deviceTypeName === deviceType);

    let a = [];
    arrayDevices.map(e => {
        a.push(e.deviceName);
      }

    )
    dispatch(createArrayDevices(a))
  }
}
const createArrayDevices = (equipos) => {
  return {
    type: types.filterForDevices,
    payload: equipos
  }
}

//_________________________________________________________________


//_________________________________________________________________
//Seleccion
//estas funciones sirve para poder hacer tareas de segundo plano
//_________________________________________________________________

export const startPreSelectWZ = (equipos, WZ) => {
  return async (dispatch) => {
    try {
      await dispatch(selectWZ(WZ))
      dispatch(arraySites(equipos, WZ))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectWZ = (WZ) => ({
  type: types.selectWZ,
  payload: WZ,
})

export const startPreSelectSite = (equipos, site) => {
  return async (dispatch) => {
    try {
      await dispatch(selectSite(site))
      await dispatch(arrayDeviceTypes(equipos, site))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectSite = (site) => ({
  type: types.selectSite,
  payload: site,
})

export const startPreDeviceType = (equipos, workZoneName, site, deviceType) => {
  return async (dispatch) => {
    try {
      await dispatch(selectDeviceType(deviceType))
      await dispatch(arrayDevices(equipos, workZoneName, site, deviceType))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectDeviceType = (event) => ({
  type: types.selectDeviceType,
  payload: event,
});


export const startPreDevices = (equipos, device) => {
  return async (dispatch) => {
    try {
      await dispatch(selectDevice(device))
      await dispatch(selectDeviceView(equipos, device))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectDevice = (device) => ({
  type: types.selectDevice,
  payload: device,
});


//Busqeuda del equipo.
export const selectDeviceView = (equipos, deviceName) => {
  return async (dispatch) => {
    try {
      const device = equipos.find(e => e.deviceName === deviceName);
      dispatch(getDevice(device))
    } catch (error) {
      console.log(error)
    }
  }
}
const getDevice = (event) => ({
  type: types.getOneDevice,
  payload: event
})





const obtenerEquipoDespCrearlo = (id, equipo) => ({
  type: types.selectDeviceAfteCreate,
  payload: {
    id,
    ...equipo
  }
});