// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { fetchConToken } from "../helpers/fetch";
// import { startGetWZNames } from "./availableDevices";
// import { startGetAllDevice } from "./equipos__V2";

import { types } from "../../types/types";


export const choiceWZName = (event) => ({
  type: types.CREATION_SW,
  payload: event
})

export const choiceSiteName = (event) => ({
  type: types.CREATION_SN,
  payload: event
})

export const choiceDeviceType = (event) => ({
  type: types.CREATION_DTN,
  payload: event
})

export const choiceDeviceName = (event) => ({
  type: types.CREATION_DN,
  payload: event
});