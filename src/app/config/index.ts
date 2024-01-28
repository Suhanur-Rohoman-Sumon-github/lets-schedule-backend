import dotenv from 'dotenv'
dotenv.config()
export default {
  port: process.env.PORT,
  database_url: process.env.Database_Url,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  email_user_name: process.env.email_user_name,
  email_user_password: process.env.email_user_password,
}
