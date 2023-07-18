import hoteles from './hoteles/hoteles.js';
import UI from './clases/UI.js'
import Reservas from './clases/Reserva.js';

( function() {
   // VARIABLES
   const containerHoteles = document.querySelector('#contenido-agregado');
   const containerModal = document.querySelector('#modalReserva .row');
   const resultados = document.querySelector('.resultados');
   const btnBuscarHotel = document.querySelector('.search-icon');
   // Form reserva
   const formulario = document.querySelector('#formulario');
   const nombreInput = document.querySelector('#nombre-huesped');
   const fechaReservaInput = document.querySelector('#fecha-reserva');
   const fechaFinReservaInput = document.querySelector('#fecha-fin-reserva');
   const btnReservar = document.querySelector('.confirmar-reserva');
   // Modal
   const modal = new bootstrap.Modal(document.querySelector('#modalReserva'))
    

   const datosReservante = {
    nombre: '',
    fechaReserva: '',
    fechaFinReserva: '',
   }


   // EVENTOS
   eventListeners()
   function eventListeners() {
    // Cuando el HTML esta listo 
    document.addEventListener('DOMContentLoaded', hotelesHTML );

    // Obtenemos los datos
    nombreInput.addEventListener( 'input', obtenerDatos );
    fechaReservaInput.addEventListener( 'input', obtenerDatos );
    fechaFinReservaInput.addEventListener( 'input', obtenerDatos );

    // Validamos el formulario
    btnReservar.addEventListener( 'click', validarCamposModal );

    // Buscamos resultados
    btnBuscarHotel.addEventListener( 'click', filtrarDatos );
    
   }


   // INSTANCIAS
   const ui = new UI();
   const reserva = new Reservas(hoteles);



   // FUNCIONES
   function filtrarDatos(e) {
     e.preventDefault();
     
    // Cantidad de resultados y fecha actual
    const fechaActual = new Date();
    const opcionesFecha = { month: 'short', day: 'numeric' };
    
    // Filtramos
    const filtrado = reserva.hotelActualizado.filter( busquedaHotel );

    if(filtrado.length) {
        ui.crearHTML(filtrado, containerHoteles);
        resultados.textContent = `${filtrado.length} resultados • ${fechaActual.toLocaleString('es-ES', opcionesFecha) + ' - ' + fechaActual.getFullYear().toString().slice(-2)}`
        return;
    } 
    
    resultados.textContent = `${filtrado.length} resultados • ${fechaActual.toLocaleString('es-ES', opcionesFecha) + ' - ' + fechaActual.getFullYear().toString().slice(-2)}`
    ui.noResultado(containerHoteles);

   }


   function busquedaHotel(hotel) {
    const datos = document.querySelector('.buscar-hotel').value;
    const letraBusqueda = datos.toLowerCase().trimStart()[0];

    if( datos ) {
        return hotel.titulo.toLowerCase().startsWith(letraBusqueda) && 
        hotel.titulo.toLowerCase().includes(datos.toLowerCase().trim());
    }

    return hotel;
     
   }

   function hotelesHTML() {
    
    // Cantidad de resultados y fecha actual
    const fechaActual = new Date();
    const opcionesFecha = { month: 'short', day: 'numeric' };
    resultados.textContent = `${reserva.hotelActualizado.length} resultados • ${fechaActual.toLocaleString('es-ES', opcionesFecha) + ' - ' + fechaActual.getFullYear().toString().slice(-2)}`

    // Creamos e insertamos el contenido
    ui.crearHTML(reserva.hotelActualizado, containerHoteles);

    // Abril el modal
    abrilModal(containerHoteles);


   }


   function obtenerDatos(e) {
      datosReservante[e.target.name] = e.target.value;
   }

   function abrilModal(container) {
    // const modal = new bootstrap.Modal(document.querySelector('#modalReserva'))
    
    container.addEventListener('click', e => {
        if(e.target.classList.contains('btn-reservar')) {
            
            // Obtenemos el id del btn
            const idBtn = e.target.dataset.id;
            
            // Escogemos el hotel presionado
            const hotelElegido = reserva.hotelActualizado.find( hotel => hotel.id === Number(idBtn) );
            
            // Pasamos los datos a mostrar del modal
            ui.mostrarModal(hotelElegido, containerModal);

            // Abrimos el modal
            modal.toggle();

            // Proporcionamos el id del hotel al btn reserva
           btnReservar.dataset.id = idBtn; 
           

        }
    })
        
    }


    function validarCamposModal(e) {
        e.preventDefault();
        
        // Obtenemos la fecha actual
        const fechaActual = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        
        if(Object.values(datosReservante).some( datos => datos === '')) {
            ui.motrarAlerta(document.querySelector('.modal-input'), "Es obligatorio completar todos los datos", 'error');
            return;
        }

        if(new Date(datosReservante.fechaReserva + 'T00:00:00') < fechaActual || new Date(datosReservante.fechaReserva + 'T00:00:00') < fechaActual ) {
            ui.motrarAlerta(document.querySelector('.modal-input'),"Por favor, ingresa fechas actuales", 'error');
            return;
        }

        if(new Date(datosReservante.fechaReserva) > new Date(datosReservante.fechaFinReserva)) {
            ui.motrarAlerta(document.querySelector('.modal-input'),"ERROR, fechas no válidas", 'error');
            return;
        }
        
        // Añadimos el id de el hotel que el usuario esta reservando y creamos un id para el usuario
        datosReservante.idHotel = e.target.dataset.id;
        datosReservante.idUsuario = new Date().getTime();

        // Añadimos el objeto al arreglo
        reserva.reservasRegistrados({...datosReservante});

        // Aumetamos la reserva seleccionada
        reserva.cantidadReservasHotel(e.target.dataset.id, 'reservar');

        // Cerramos el modal de reserva
        modal.hide();

        // Mostramos el modal de confirmacion
        setTimeout( () => {
            
            ui.modalReservadoCorrectamente(
                                           { 
                                             modal: new bootstrap.Modal(document.querySelector('#modalConfirmado')),
                                             mensaje: `Hotel reservado correctamente!`,
                                             mensaje2: 'Este hotel ya esta disponible en la seccion de reservas'
                                           }, document.querySelector('#modalConfirmado .modal-body')
                                          )
        },500)

        // Volvemos a crear el HTML
        hotelesHTML();
        
        // Vaciamos el objeto
        vaciarObjeto();

        // Reseteamos el formulario
        formulario.reset();

    }

    function vaciarObjeto() {
        datosReservante.nombre = '',
        datosReservante.fechaReserva = '',
        datosReservante.fechaFinReserva = '';
    }

   
   




} )();