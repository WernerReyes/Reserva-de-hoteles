import hoteles from './hoteles/hoteles.js';
import UI from './clases/UI.js'
import Reservas from './clases/Reserva.js';

( function() {

    // VARIABLES
    const btnBuscarHotel = document.querySelector('.search-icon');
    const tbodyContainer = document.querySelector('.table tbody');
    const totalReservas = document.querySelector('.total-reservas');

     // INSTANCIAS
     const reservas = new Reservas(hoteles);
     const ui = new UI();


    // EVENTOS
    eventListeners();
    function eventListeners() {

        // Buscamos resultados
        btnBuscarHotel.addEventListener( 'click', filtrarDatos );

        // Cuando el documente este listo creamos las filas
        document.addEventListener('DOMContentLoaded', mostrarReservasRealizadas );
        
        // Eliminar reservas
        eliminarReservas(tbodyContainer);
    
    }


    // FUNCIONES
    function filtrarDatos() {
        
        // Filtramo por busqueda
        const filtrado = reservas.regitroReservas.filter( busquedaCliente );
        
        // Total de reservas
        totalReservas.textContent = `${filtrado.length} ${(filtrado.length === 1) ? 'RESERVA' : 'RESERVAS'}`
        
        // volvemos a crear la tabla
        ui.crearTablas(filtrado, tbodyContainer);
    
    }

    function busquedaCliente(hotel) {
        const cliente = document.querySelector('.buscar-hotel').value;
        const letraBusqueda = cliente.toLowerCase().trimStart()[0];
        if( cliente ) {
            return hotel.nombre.toLowerCase().startsWith(letraBusqueda) && 
            hotel.nombre.toLowerCase().includes(cliente.toLowerCase().trim());
        }
    
        return hotel;
         
    }
    
    
    function mostrarReservasRealizadas() {
        // Total de reservas
        totalReservas.textContent = `${reservas.regitroReservas.length} ${(reservas.regitroReservas.length === 1) ? 'RESERVA' : 'RESERVAS'}`

        // Creamos las tablas
        ui.crearTablas(reservas.regitroReservas, tbodyContainer);    
        
      }

    function eliminarReservas(container) {
        container.addEventListener('click', e => {

            if(e.target.classList.contains('bi-trash3-fill')) {
                // Obtenemos el ID del usuario a eliminar
                const idUsuario = e.target.dataset.id;

                // Obtenemos el ID del hotel para disminuir sus reservas
                const idHotel = e.target.dataset.hotel;

                console.log(idUsuario, idHotel)

                // Eliminamos la reservas
                reservas.eliminarReservas(idUsuario);
                
                // Mostamos el modal de que se eliminó correctamente
                ui.modalReservadoCorrectamente(
                                                   { 
                                                     modal: new bootstrap.Modal(document.querySelector('#modalConfirmado')),
                                                     mensaje: '¡El hotel fue eliminado correctamente!',
                                                     mensaje2: '',
                                                   }, document.querySelector('#modalConfirmado .modal-body')
                                              )


                // Disminuimos las reservas
                reservas.cantidadReservasHotel(idHotel);
                
                // Mostramos el HTML actualizado
                mostrarReservasRealizadas();
            }
        })
    }
      

} )();

