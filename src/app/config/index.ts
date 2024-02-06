import dotenv from 'dotenv'

// config dotenv
dotenv.config()
export default {
  // all secrete key coming from the .env files
  port: process.env.PORT,
  database_url: process.env.Database_Url,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  email_user_name: process.env.email_user_name,
  email_user_password: process.env.email_user_password,
}
