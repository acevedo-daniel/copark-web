const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Clave para guardar en el navegador
const STORAGE_KEY = "copark_bookings_db";

// Datos iniciales de ejemplo (para que el dashboard no se vea vacío al inicio)
const INITIAL_DATA = [
  {
    id: "book-old-1",
    parkingTitle: "Cochera Centro Histórico",
    price: 1200,
    startTime: new Date(Date.now() - 86400000).toISOString(), // Ayer
    status: "COMPLETED",
    totalPrice: 2400,
  },
];

export const bookingService = {
  // GET: Obtener mis reservas
  getMyBookings: async () => {
    await delay(1000);
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : INITIAL_DATA;
  },

  // POST: Crear reserva
  create: async (bookingData) => {
    console.log("Guardando en DB Local...", bookingData);
    await delay(1500);

    // 1. Obtener actuales
    const currentStore = localStorage.getItem(STORAGE_KEY);
    const bookings = currentStore ? JSON.parse(currentStore) : INITIAL_DATA;

    // 2. Crear nueva con ID y Status
    const newBooking = {
      id: `book-${Date.now()}`,
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
      totalPrice: bookingData.price * 1, // Calculo simple x 1 hora
      ...bookingData,
    };

    // 3. Guardar (Push al inicio para que salga primero)
    const updatedBookings = [newBooking, ...bookings];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));

    return newBooking;
  },
};
