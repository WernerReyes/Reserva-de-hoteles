class UI {

    crearHTML(hoteles, container) {

        this.limpiarHTML(container); 
     
      hoteles.forEach( hotel => {
        const { id, img, incluye, precioPorNoche, puntaje, reservas, titulo, ubicacion } = hotel;
        
        // SCRIPTING
        const divContenido = document.createElement('DIV');
        divContenido.classList.add('col-12', 'contenido', 'mb4');
            const divMb3 = document.createElement('DIV');
            divMb3.classList.add('mb-3');
                const divRow = document.createElement('DIV');
                divRow.classList.add('row', 'no-gutters');
                    const btnReservar = document.createElement('DIV');
                    btnReservar.className = 'd-flex justify-content-end mb-2';
                    btnReservar.innerHTML = `<i class="bi bi-pencil-fill btn-reservar" data-id="${id}"></i>`;
                    const imgCol4 = document.createElement('DIV');
                    imgCol4.classList.add('col-md-4');
                    imgCol4.innerHTML = ` <img src="${img}" class="card-img">`;
                    const cardCol8 = document.createElement('DIV');
                    cardCol8.classList.add('col-md-8');
                    cardCol8.innerHTML = `
                        <div class="card-body">
                             <h5 class="card-title mb-0 titulo">${titulo}</h5>
                             <h6 class="ubicacion"><i class="bi bi-geo-alt"></i>${ubicacion}</h6>
                             <p class="mb-5 filtros">${incluye}</p>
                             <div class="d-flex flex-wrap justify-content-center justify-content-md-start">
                                 <p class="card-text puntaje">${puntaje}</p>
                                 <div class="estrellas mx-2 mb-0">
                                     ${this.puntajeHotel(puntaje)}
                                </div>
                                <p class="cantidad-reservas mx-0 mt-1">(${reservas} reservas)</p>
                                <h3 class="mx-4 precio">$${precioPorNoche}</h3>
                                </div>
                        </div>
                    `

                divRow.appendChild(btnReservar);
                divRow.appendChild(imgCol4);
                divRow.appendChild(cardCol8);
            divMb3.appendChild(divRow);
        divContenido.appendChild(divMb3);
    
        // Insertamos el contenido en el HTML
        container.appendChild(divContenido);
        
      });

    }

    mostrarModal(hotelEscogido, container) {
        
        this.limpiarHTML(container);

        const { img, incluye, precioPorNoche, puntaje, reservas, titulo, ubicacion } = hotelEscogido;

        // SCRIPTING
        const divCol4 = document.createElement('DIV');
        divCol4.classList.add('col-md-4');
            const divImg = document.createElement('DIV');
            divImg.className = 'd-flex justify-content-center align-items-center img-container';
            divImg.innerHTML = `<img src="${img}" class="img-fluid">`
        divCol4.appendChild(divImg);

        const divCol8 = document.createElement('DIV');
        divCol8.classList.add('col-md-8');
            const cardBody = document.createElement('DIV');
            cardBody.classList.add('car-body','py-0','px-1');
            cardBody.innerHTML = `
                <div class="card-body py-0 px-1">
                    <h5 class="card-title mb-0 titulo">${titulo}</h5>
                    <h6 class="ubicacion"><i class="bi bi-geo-alt"></i>${ubicacion}</h6>
                    <p class="mb-3 filtros">${incluye}</p>
                    <div class="d-flex flex-wrap justify-content-center justify-content-md-start">
                    <p class="card-text puntaje">${puntaje}</p>
                    <div class="estrellas mx-2 mb-0">
                        ${this.puntajeHotel(puntaje)}
                    </div>
                    <p class="cantidad-reservas mx-0 mt-1">(${reservas} reservas)</p>
                    <h3 class="mx-4 precio">$${precioPorNoche}</h3>
                    </div>
            `
        divCol8.appendChild(cardBody);
        
        // Insertamos el contenido en el MODAL
        container.appendChild(divCol4);
        container.appendChild(divCol8);

    }

    crearTablas(infoCompleto, container) {

      this.limpiarHTML(container);

     if(infoCompleto.length ) {

       infoCompleto.forEach( (info,index) => {
  
        const { id, idUsuario, nombre, precioPorNoche, fechaReserva, fechaFinReserva, titulo, ubicacion, puntaje  } = info;
           
         // Para calcular la diferencia de dias
         const milisegundosPorDia = 1000 * 60 * 60 * 24;
         const diferenciaDias = ((new Date(fechaFinReserva) - new Date(fechaReserva))/milisegundosPorDia);
         

            // SCRIPTING
            
            const trInfo = document.createElement('TR');
            trInfo.classList.add('text-center')
            trInfo.style.background = `${(new Date() > new Date(fechaFinReserva)) ? '#F3F6F9' : '#FFF'}`
            const tdNro = document.createElement('TD')
            tdNro.textContent = (index+1);
            const tdNombre = document.createElement('TD');
            tdNombre.textContent = nombre;
            const tdMontoPagar = document.createElement('TD');
            tdMontoPagar.innerHTML = `
                 <p class="mb-0">$${(diferenciaDias === 0) ? precioPorNoche : diferenciaDias*precioPorNoche}</p>
                 <p class="second">$${precioPorNoche}/Por dia</p>
            `
            const tdFecha = document.createElement('TD');
            tdFecha.innerHTML = `
                 ${fechaReserva} hasta ${fechaFinReserva}
                 <p class="second">${(new Date() > new Date(fechaFinReserva)) ? "expirado" : "activo"}</p>
            `
            const tdHotel = document.createElement('TD');
            tdHotel.innerHTML = `
                 <p class="mb-0">${titulo}</p>
                 <p class="second">${ubicacion}</p>
            `
            const tdPuntaje = document.createElement('TD');
            tdPuntaje.innerHTML = `
            <div class="estrellas mx-2 mb-0">
                 ${this.puntajeHotel(puntaje)}
                 <p class="second">${puntaje}</p>
             </div>
            `
            const tdEliminar = document.createElement('TD');
            tdEliminar.classList.add('text-center');
            tdEliminar.innerHTML = `
                <button class="btn btn-primary" style="background: #FA7436; border: none;">
                      <i class="bi bi-trash3-fill" data-id="${idUsuario}" data-hotel="${id}"></i>
               </button>
            `

          trInfo.appendChild(tdNro);
          trInfo.appendChild(tdNombre);
          trInfo.appendChild(tdMontoPagar);
          trInfo.appendChild(tdFecha);
          trInfo.appendChild(tdHotel);
          trInfo.appendChild(tdPuntaje);
          trInfo.appendChild(tdEliminar);


          // Isertamos en el HTML
          container.appendChild(trInfo);

       } )
        return;
      }
      
      const trInfo = document.createElement('TR');
      trInfo.classList.add('text-center')
            const mensajeVacio = document.createElement('TD');
            mensajeVacio.setAttribute("colspan","7");
            mensajeVacio.classList.add('text-center', 'p-2');
            mensajeVacio.style.fontSize = '20px';
            mensajeVacio.textContent = 'No hay ningun registro';

         trInfo.appendChild(mensajeVacio)

      container.appendChild(trInfo);
    }


    modalReservadoCorrectamente(info, container) {

      const { modal, mensaje, mensaje2 } = info;
      
      // Abrimos el modal
      modal.show();

      container.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        <h3 class="hotel">${mensaje}</h3>
        <p class="m-4">${mensaje2}</p>
      `
      // Despuede de 3 segundo lo cerramos
      setTimeout(() => modal.hide(), 3000 );
    }

    puntajeHotel(puntaje) {
        const estrellas = document.createElement('DIV');
      
        for (let i = 0; i < 5; i++) {
          const spanEstrella = document.createElement('SPAN');
      
          if (i < parseInt(puntaje)) {
            // Parte entera del puntaje, mostrar estrella completa
            spanEstrella.className = 'bi bi-star-fill';
          } else if (puntaje - i > 0.99) {
            // Parte decimal mayor o igual a 0.5, mostrar estrella completa
            spanEstrella.className = 'bi bi-star-fill';
          } else if (puntaje - i > 0) {
            // Parte decimal menor a 0.5, mostrar estrella a la mitad
            spanEstrella.className = 'bi bi-star-half';
          } else {
            // Parte decimal igual a 0 o menor, mostrar estrella en blanco
            spanEstrella.className = 'bi bi-star';
          }
      
          estrellas.appendChild(spanEstrella);
        }
      
        return estrellas.innerHTML;
      }



      motrarAlerta(insercion, mensaje, tipo) {
        
        const existe = document.querySelector('.text-center.alert');
        
      if(!existe) {
        // Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert', 'mx-2', 'p-2', 'my-3');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;
        
        // Insertamos en el HTML
        insercion.insertAdjacentElement('afterend', divMensaje);

        // Quitar el mensaje del HTML
        setTimeout( () => {
         divMensaje.remove();
        },3000);

       }
    }

    noResultado(container) {
      this.limpiarHTML(container);
  
      const noResultado = document.createElement("DIV");
      noResultado.classList.add("alert", "alert-danger", "text-center", "mx-auto", "w-75");
      noResultado.textContent = "No Hay Resultado, Intenta con otros términos de búsqueda";
  
      container.appendChild(noResultado);
  
      }

    limpiarHTML(container) {
        while( container.firstChild ) {
            container.removeChild(container.firstChild);
        }
    }
        
}

export default UI;


