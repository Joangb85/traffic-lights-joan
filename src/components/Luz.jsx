export const Luz = ({colorLuz, cambiarColor, colorActivo}) => {
    const esSeleccionado = colorLuz===colorActivo
  
    return (<>
    <div onClick={ ()=> {cambiarColor(colorLuz)}
    }
         style={{
          width: '100px',
          height: '100px',
          backgroundColor:colorLuz,
          borderRadius: '100px',
          border:esSeleccionado?'solid 3px':'none'
         }}
         className="rounded-circle"
      ></div>
    
    </>)
  
  }