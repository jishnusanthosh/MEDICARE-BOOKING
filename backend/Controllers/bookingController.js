import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    // Get doctor
    const doctor = await Doctor.findById(req.params.doctorId);

    // Get logged in user
    const user = await User.findById(req.userId);

    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}/doctors/${doctor._id}`,

      customer_email: user.email,
      client_reference_id: req.params.doctorId,

      line_items: [
        {
          price_data: {
            currency: "bdt",
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    // Create booking
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
    });

    await booking.save();

    // Send response
    res.status(200).json({
      success: true,
      message: "Successfully created checkout session",
      session,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error creating checkout session",
    });
  }
};