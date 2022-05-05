export const types = {
  
  login: '[auth] login',
  logout: '[auth] logout',

  uiSetError: '[UI] set error',
  uiRemoveError: '[UI] remove error',

  uiStartLoading: '[UI] start loading',
  uiFinishLoading: '[UI] finish loading',

  //? Acciones del equipo
  CREATION_SW: '[CREATE] Seleccion de SW',
  CREATION_SN: '[CREATE] Seleccion de SiteName',
  CREATION_DTN: '[CREATE] Seleccion de DeviceTypeName',
  CREATION_DN: '[CREATE] Seleccion DeviceName',

  startDeviceCreate: '[START] Comienzo de creacion de un nuevo equipo',

  deviceCreate: '[Create] Crear un nuevo equipo',
  deleteDevice: '[Delete] Eliminar un equipo',

  selectDeviceAfteCreate: '[Select] Seleccionar un equipo despues de crearlo', 

  //? Equipos V2 Experimental         
  getAllDevices: '[OBTENER] Obtener todos los equipos',

  filterForWZ: '[FILTRO] Filtrar WZ',
  filterForSite: '[FILTRO] Filtrar por sitios Segun el WZ',
  filterForDeviceTypes: '[FILTRO] Filtrar por DeviceTypes Segun el Site y el WZ',
  filterForDevices: '[FILTRO] Filtrar por Devices Segun el Site, el WZ y el DeviceType',
  getOneDevice: '[FILTRO] Obtener un equipo',

  //? Seleccion de equipos
  selectWZ: '[SELECT] Seleccionar WorkZone',
  selectSite: '[SELECT] Seleccionar Site',
  selectDeviceType: '[SELECT] Seleccionar DeviceType',
  selectDevice: '[SELECT] Seleccionar Device',


  //? Modals                     
  uiOpenModal1: 'uiOpenModal1',
  uiOpenModal2: 'uiOpenModal2',
  uiOpenModal3: 'uiOpenModal3',
  uiOpenModal4: 'uiOpenModal4',
  uiOpenModal5: 'uiOpenModal5',
  uiOpenModal6: 'uiOpenModal6',

  uiCloseModal1: 'uiCloseModal1',
  uiCloseModal2: 'uiCloseModal2',
  uiCloseModal3: 'uiCloseModal3',
  uiCloseModal4: 'uiCloseModal4',
  uiCloseModal5: 'uiCloseModal5',
  uiCloseModal6: 'uiCloseModal6',
  
}