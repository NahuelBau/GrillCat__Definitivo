import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
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

    const equiposCollection = db.collection('equipos');
    console.log(equiposCollection);

    const doc1 = await addDoc(collection(db, `${uid}/equipos/${DN_toCreate}`), nuevoEquipo);
    dispatch(obtenerEquipoDespCrearlo( doc1.id, nuevoEquipo ));
    console.log(doc1)
  }
}


export const obtenerEquipoDespCrearlo = (id, equipo) => ({
  type: types.selectDeviceAfteCreate,
  payload: {
    id,
    ...equipo
  }
});