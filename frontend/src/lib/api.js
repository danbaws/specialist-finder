export const API_BASE_URL = 'http://localhost:3000';

export async function getServices() {
    const res = await fetch(`${API_BASE_URL}/api/services`);
    return await res.json();
}

/**
 * @param {Object} bookingData
 */
export async function createBooking(bookingData) {
    const res = await fetch(`${API_BASE_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    });
    return await res.json();
}
