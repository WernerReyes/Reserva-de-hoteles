const hoteles = [
    {
      id: 1,
      titulo: 'Hotel Encanto y Comodidad',
      ubicacion: '1995 Broadway, Nueva York',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Área para fumadores • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.0,
      reservas:0,
      precioPorNoche: 3000,
      img: 'img/img-1.png'
    },
    {
      id: 2,
      titulo: 'Inn Moderno Oasis',
      ubicacion: '532 Main Street, Los Ángeles',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Admite mascotas',
      puntaje: 4.5,
      reservas: 0,
      precioPorNoche: 3200,
      img: 'img/img-2.png'
    },
    {
      id: 3,
      titulo: 'Lodge a Orillas del Río',
      ubicacion: '100 River Road, Chicago',
      incluye: 'Wifi • Aire acondicionado • Calefacción • Área para fumadores • Estacionamiento',
      puntaje: 3.8,
      reservas:0,
      precioPorNoche: 2800,
      img: 'img/img-3.png'
    },
    {
      id: 4,
      titulo: 'Resort Brisa Marina',
      ubicacion: '45 Coastal Highway, Miami',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.2,
      reservas: 0,
      precioPorNoche: 3500,
      img: 'img/img-4.png'
    },
    {
      id: 5,
      titulo: 'Lodge con Vista a la Montaña',
      ubicacion: '800 Alpine Road, Denver',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.7,
      reservas: 0,
      precioPorNoche: 3800,
      img: 'img/img-5.png'
    },
    {
      id: 6,
      titulo: 'Hotel Encanto Urbano',
      ubicacion: '25 Downtown Avenue, San Francisco',
      incluye: 'Wifi • Aire acondicionado • Cocina • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.1,
      reservas:0,
      precioPorNoche: 3100,
      img: 'img/img-6.png'
    },
    {
      id: 7,
      titulo: 'Resort Jardines Tranquilos',
      ubicacion: '600 Serene Street, Seattle',
      incluye: 'Wifi • Aire acondicionado • Calefacción • Área para fumadores • Estacionamiento',
      puntaje: 3.9,
      reservas:0,
      precioPorNoche: 2900,
      img: 'img/img-7.png'
    },
    {
      id: 8,
      titulo: 'Inn Oasis del Desierto',
      ubicacion: '320 Sunny Sands, Las Vegas',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.3,
      reservas: 0,
      precioPorNoche: 3600,
      img: 'img/img-8.png'
    },
    {
      id: 9,
      titulo: 'Lodge a Orillas del Lago',
      ubicacion: '1100 Lakeview Drive, Boston',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.6,
      reservas: 0,
      precioPorNoche: 3700,
      img: 'img/img-9.png'
    },
    {
      id: 10,
      titulo: 'Resort Paraíso Tropical',
      ubicacion: '75 Palm Beach Road, Honolulu',
      incluye: 'Wifi • Aire acondicionado • Cocina • Estacionamiento • Admite mascotas',
      puntaje: 4.4,
      reservas:0,
      precioPorNoche: 3300,
      img: 'img/img-10.png'
    },
    {
      id: 11,
      titulo: 'Suites con Vista a la Ciudad',
      ubicacion: '500 Skylight Avenue, Nueva York',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.8,
      reservas: 0,
      precioPorNoche: 4000,
      img: 'img/img-11.png'
    },
    {
      id: 12,
      titulo: 'Inn en el Bosque Encantado',
      ubicacion: '75 Whispering Woods, Seattle',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Admite mascotas',
      puntaje: 4.2,
      reservas: 0,
      precioPorNoche: 3400,
      img: 'img/img-12.png'
    },
    {
      id: 13,
      titulo: 'Hotel Serenidad a Orillas del Mar',
      ubicacion: '230 Oceanfront Drive, Miami',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.5,
      reservas: 0,
      precioPorNoche: 3900,
      img: 'img/img-13.png'
    },
    {
      id: 14,
      titulo: 'Lodge con Vista a la Montaña',
      ubicacion: '450 Alpine Trail, Denver',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.0,
      reservas: 0,
      precioPorNoche: 3200,
      img: 'img/img-14.png'
    },
    {
      id: 15,
      titulo: 'Resort de Escapada Urbana',
      ubicacion: '115 Downtown Street, San Francisco',
      incluye: 'Wifi • Aire acondicionado • Cocina • Estacionamiento • Admite mascotas',
      puntaje: 4.3,
      reservas:0,
      precioPorNoche: 3100,
      img: 'img/img-15.png'
    },
    {
      id: 16,
      titulo: 'Lodge a Orillas del Lago',
      ubicacion: '750 Lakeview Drive, Boston',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.6,
      reservas: 0,
      precioPorNoche: 3600,
      img: 'img/img-16.png'
    },
    {
      id: 17,
      titulo: 'Resort en la Isla del Paraíso',
      ubicacion: '90 Palm Beach Road, Honolulu',
      incluye: 'Wifi • Aire acondicionado • Cocina • Estacionamiento • Admite mascotas',
      puntaje: 4.1,
      reservas:0,
      precioPorNoche: 3300,
      img: 'img/img-17.png'
    },
    {
      id: 18,
      titulo: 'Hotel Marítimo Sereno',
      ubicacion: '760 Calle Oceanfront, Cancún',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón • Admite mascotas',
      puntaje: 4.7,
      reservas: 0,
      precioPorNoche: 4200,
      img: 'img/img-18.png'
    },
    {
      id: 19,
      titulo: 'Refugio en las Montañas',
      ubicacion: '880 Camino Alpine, Santiago',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.5,
      reservas: 0,
      precioPorNoche: 3900,
      img: 'img/img-19.png'
    },
    {
      id: 20,
      titulo: 'Resort Elegante y Sofisticado',
      ubicacion: '1115 Avenida Downtown, Madrid',
      incluye: 'Wifi • Aire acondicionado • Cocina • Calefacción • Estacionamiento • Balcón',
      puntaje: 4.9,
      reservas: 0,
      precioPorNoche: 4500,
      img: 'img/img-20.png'
    },
  ];

export default hoteles;