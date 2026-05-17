import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d9620fdc/health", (c) => {
  return c.json({ status: "ok" });
});

// ===== AUTHENTICATION ROUTES =====

// User Registration
app.post("/make-server-d9620fdc/auth/register", async (c) => {
  try {
    const body = await c.req.json();
    const { fullName, email, password, age, country, dateOfBirth, phoneNumber } = body;

    // Validate required fields
    if (!fullName || !email || !password) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Check if user already exists
    const existingUser = await kv.get(`user:${email}`);
    if (existingUser) {
      return c.json({ error: "User already exists" }, 409);
    }

    // Create user object
    const user = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password, // In production, hash this password!
      age,
      country,
      dateOfBirth,
      phoneNumber,
      createdAt: new Date().toISOString(),
      rewardsPoints: 0,
      level: "Sand Explorer",
    };

    // Store user
    await kv.set(`user:${email}`, JSON.stringify(user));
    await kv.set(`user:id:${user.id}`, JSON.stringify(user));

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return c.json({ user: userWithoutPassword, message: "Registration successful" }, 201);
  } catch (error) {
    console.log("Registration error:", error);
    return c.json({ error: "Registration failed" }, 500);
  }
});

// User Login
app.post("/make-server-d9620fdc/auth/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password required" }, 400);
    }

    // Get user from KV store
    const userJson = await kv.get(`user:${email}`);
    if (!userJson) {
      return c.json({ error: "Invalid credentials" }, 401);
    }

    const user = JSON.parse(userJson);

    // Verify password (in production, use bcrypt to compare hashed passwords)
    if (user.password !== password) {
      return c.json({ error: "Invalid credentials" }, 401);
    }

    // Generate session token (in production, use JWT)
    const token = crypto.randomUUID();
    await kv.set(`session:${token}`, JSON.stringify({ userId: user.id, email: user.email }));

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return c.json({ user: userWithoutPassword, token, message: "Login successful" });
  } catch (error) {
    console.log("Login error:", error);
    return c.json({ error: "Login failed" }, 500);
  }
});

// Get User Profile
app.get("/make-server-d9620fdc/auth/profile", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const token = authHeader.split(" ")[1];
    const sessionJson = await kv.get(`session:${token}`);
    if (!sessionJson) {
      return c.json({ error: "Invalid session" }, 401);
    }

    const session = JSON.parse(sessionJson);
    const userJson = await kv.get(`user:id:${session.userId}`);
    if (!userJson) {
      return c.json({ error: "User not found" }, 404);
    }

    const user = JSON.parse(userJson);
    const { password: _, ...userWithoutPassword } = user;
    return c.json({ user: userWithoutPassword });
  } catch (error) {
    console.log("Profile fetch error:", error);
    return c.json({ error: "Failed to fetch profile" }, 500);
  }
});

// ===== BOOKING ROUTES =====

// Create Booking
app.post("/make-server-d9620fdc/bookings", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, hotelId, tripName, dates, travelers, totalAmount } = body;

    const booking = {
      id: crypto.randomUUID(),
      userId,
      hotelId,
      tripName,
      dates,
      travelers,
      totalAmount,
      status: "pending",
      confirmationNumber: `DSR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`booking:${booking.id}`, JSON.stringify(booking));
    await kv.set(`user-booking:${userId}:${booking.id}`, JSON.stringify(booking));

    return c.json({ booking, message: "Booking created successfully" }, 201);
  } catch (error) {
    console.log("Booking creation error:", error);
    return c.json({ error: "Failed to create booking" }, 500);
  }
});

// Get User Bookings
app.get("/make-server-d9620fdc/bookings/user/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const bookingKeys = await kv.getByPrefix(`user-booking:${userId}:`);
    const bookings = bookingKeys.map(json => JSON.parse(json));
    return c.json({ bookings });
  } catch (error) {
    console.log("Fetch bookings error:", error);
    return c.json({ error: "Failed to fetch bookings" }, 500);
  }
});

// ===== PAYMENT ROUTES =====

// Process Payment
app.post("/make-server-d9620fdc/payments", async (c) => {
  try {
    const body = await c.req.json();
    const { bookingId, amount, paymentMethod, cardDetails } = body;

    // Simulate payment processing (in production, integrate with Stripe/PayPal)
    const payment = {
      id: crypto.randomUUID(),
      bookingId,
      amount,
      paymentMethod,
      status: "success",
      transactionId: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      processedAt: new Date().toISOString(),
    };

    await kv.set(`payment:${payment.id}`, JSON.stringify(payment));

    // Update booking status
    const bookingJson = await kv.get(`booking:${bookingId}`);
    if (bookingJson) {
      const booking = JSON.parse(bookingJson);
      booking.status = "confirmed";
      booking.paymentId = payment.id;
      await kv.set(`booking:${bookingId}`, JSON.stringify(booking));
    }

    return c.json({ payment, message: "Payment processed successfully" });
  } catch (error) {
    console.log("Payment processing error:", error);
    return c.json({ error: "Payment processing failed" }, 500);
  }
});

// ===== REWARDS ROUTES =====

// Add Rewards Points
app.post("/make-server-d9620fdc/rewards/add", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, points, reason } = body;

    const userJson = await kv.get(`user:id:${userId}`);
    if (!userJson) {
      return c.json({ error: "User not found" }, 404);
    }

    const user = JSON.parse(userJson);
    user.rewardsPoints = (user.rewardsPoints || 0) + points;

    await kv.set(`user:id:${userId}`, JSON.stringify(user));
    await kv.set(`user:${user.email}`, JSON.stringify(user));

    return c.json({ points: user.rewardsPoints, message: "Rewards points added" });
  } catch (error) {
    console.log("Add rewards error:", error);
    return c.json({ error: "Failed to add rewards" }, 500);
  }
});

// ===== HOTELS ROUTES =====

// Get All Hotels
app.get("/make-server-d9620fdc/hotels", async (c) => {
  try {
    // In production, this would fetch from database
    // For now, return mock data
    const hotels = [
      {
        id: "1",
        name: "White Desert Eco-Lodge",
        type: "Eco-lodge",
        pricePerNight: 320,
        location: "White Desert, Farafra Oasis",
        rating: 4.9,
        reviews: 127,
      },
      // Add more hotels as needed
    ];
    return c.json({ hotels });
  } catch (error) {
    console.log("Fetch hotels error:", error);
    return c.json({ error: "Failed to fetch hotels" }, 500);
  }
});

// Get Hotel by ID
app.get("/make-server-d9620fdc/hotels/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const hotelJson = await kv.get(`hotel:${id}`);

    if (!hotelJson) {
      return c.json({ error: "Hotel not found" }, 404);
    }

    const hotel = JSON.parse(hotelJson);
    return c.json({ hotel });
  } catch (error) {
    console.log("Fetch hotel error:", error);
    return c.json({ error: "Failed to fetch hotel" }, 500);
  }
});

Deno.serve(app.fetch);