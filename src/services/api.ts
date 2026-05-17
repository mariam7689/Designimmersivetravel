import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-d9620fdc`;

export interface User {
  id: string;
  fullName: string;
  email: string;
  age?: number;
  country?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  rewardsPoints: number;
  level: string;
  createdAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  tripName: string;
  dates: string;
  travelers: number;
  totalAmount: number;
  status: string;
  confirmationNumber: string;
  createdAt: string;
}

// Helper function to make API requests
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('authToken');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token || publicAnonKey}`,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// ===== AUTHENTICATION API =====

export const authAPI = {
  register: async (userData: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    age?: number;
    country?: string;
    dateOfBirth?: string;
    phoneNumber?: string;
  }) => {
    const response = await apiRequest<{ user: User; message: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response;
  },

  login: async (email: string, password: string) => {
    const response = await apiRequest<{ user: User; token: string; message: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    // Store token in localStorage
    if (response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    return response;
  },

  getProfile: async () => {
    const response = await apiRequest<{ user: User }>('/auth/profile');
    return response.user;
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  },
};

// ===== BOOKING API =====

export const bookingAPI = {
  createBooking: async (bookingData: {
    userId: string;
    hotelId: string;
    tripName: string;
    dates: string;
    travelers: number;
    totalAmount: number;
  }) => {
    const response = await apiRequest<{ booking: Booking; message: string }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
    return response;
  },

  getUserBookings: async (userId: string) => {
    const response = await apiRequest<{ bookings: Booking[] }>(`/bookings/user/${userId}`);
    return response.bookings;
  },
};

// ===== PAYMENT API =====

export const paymentAPI = {
  processPayment: async (paymentData: {
    bookingId: string;
    amount: number;
    paymentMethod: 'card' | 'paypal';
    cardDetails?: {
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      cardholderName: string;
    };
  }) => {
    const response = await apiRequest<{ payment: any; message: string }>('/payments', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
    return response;
  },
};

// ===== REWARDS API =====

export const rewardsAPI = {
  addPoints: async (userId: string, points: number, reason: string) => {
    const response = await apiRequest<{ points: number; message: string }>('/rewards/add', {
      method: 'POST',
      body: JSON.stringify({ userId, points, reason }),
    });
    return response;
  },
};

// ===== HOTEL API =====

export const hotelAPI = {
  getAllHotels: async () => {
    const response = await apiRequest<{ hotels: any[] }>('/hotels');
    return response.hotels;
  },

  getHotelById: async (id: string) => {
    const response = await apiRequest<{ hotel: any }>(`/hotels/${id}`);
    return response.hotel;
  },
};
