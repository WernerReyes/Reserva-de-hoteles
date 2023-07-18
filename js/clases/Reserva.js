class Reservas {
    constructor(hotel) {
        this.regitroReservas = JSON.parse( localStorage.getItem('reservas realizadas') ) || [];
        this.hotelActualizado = JSON.parse( localStorage.getItem('hotel actualizado') ) || hotel;
    }

    reservasRegistrados(usuario) {
      const registroUsuario =this.hotelActualizado.find( hotel => hotel.id === Number(usuario.idHotel ) );
      
      this.regitroReservas = [...this.regitroReservas, { ...usuario, ...registroUsuario } ];
      
      this.sincronizarStorage('reservas realizadas', this.regitroReservas );
       
    }

    eliminarReservas(id) {
      this.regitroReservas = this.regitroReservas.filter( registro => registro.idUsuario !== Number(id) );
      
      this.sincronizarStorage('reservas realizadas', this.regitroReservas );
    }

    cantidadReservasHotel(id, tipo) {
        this.hotelActualizado = this.hotelActualizado.map( hotel => {
            if( hotel.id === Number(id) && tipo ) {
                hotel.reservas += 1;
                return hotel;
            } else if(hotel.id === Number(id)) {
                hotel.reservas -= 1;
                return hotel; 
            }
            return hotel;
        } )
        
        this.sincronizarStorage('hotel actualizado',this.hotelActualizado );

    }

    sincronizarStorage( name, datos ) {
        localStorage.setItem( name, JSON.stringify(datos) );
    }
}

export default Reservas;