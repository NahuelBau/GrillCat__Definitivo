


import React from 'react'

export const WZSelectComponent = () => {
  return (
    <div><div className='contenedor_select'>
    <select 
      className="form-select"  
      name="WorkZone" 
      // onChange={Select}
      >
      <option></option>
      {/* {
        WZAvalible.map(WorkZone => <option key={WorkZone} value={WorkZone}>{WorkZone}</option>)
      } */}
    </select>
  </div></div>
  )
}
