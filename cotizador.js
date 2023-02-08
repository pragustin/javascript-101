
function cotizadorVehiculoViaje(kilometros, diasViaje, peaje){
    // EDITAR DESDE ACA
    const mantenimientoAnual = 2000;
    let precioPeaje = 50;
    // NO EDITAR DESDE ACA

    const precioCombustibleKm = 10;
    const precioChoferKm = 30;
    const mantenimientoDiario = (mantenimientoAnual / 365) * diasViaje

    const precioCombustibleTotal = precioCombustibleKm *  kilometros;
    const precioChoferTotal = precioChoferKm * kilometros

    let total = precioCombustibleTotal + precioChoferTotal + mantenimientoDiario

    if(peaje){
        console.log("PRECIO CON PEAJE:")
        return total + precioPeaje
    } else {
        console.log("PRECIO SIN PEAJE:")
        return total
    }

}

// Variables son KMs y diasViaje
console.log(cotizadorVehiculoViaje(600, 5, true))