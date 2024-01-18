import { payments as paymentsInterface } from './payments.interface';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import { paymentsModel } from './payments.model';

dotenv.config();
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Stripe secret key is not set in the environment variables');
}
const stripeApiVersion: "2023-10-16" | null = null;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: stripeApiVersion as any,
});

const createPaymentIntentInDb = async (price: number) => {
  const amount = price * 100;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

const savePaymentsDataInDb =async (paymentsData:paymentsInterface) => {
    const result = await paymentsModel.create(paymentsData)
    return result
}

export const payments = {
  createPaymentIntentInDb,
  savePaymentsDataInDb
};
