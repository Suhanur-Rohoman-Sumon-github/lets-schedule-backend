import nodemailer from "nodemailer";
import { email } from "./mail.Interface";
import config from "../../config";
const sendEmail = async (data:email) => {
    const {userName,name,userEmail,eventName,dateAndTime,method,meetLink,detailsLink,email} = data 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: config.email_user_name,
                pass: config.email_user_password,
            },
        });

        const info = await transporter.sendMail({
            from: {
                name: `${userName}`,
                address: 'sumonsuhanurrohoman@gmail.com',
            }, // sender address
            to: `${email}`,
            subject: `let's schedule new event booked`,
            text: 'Hello world?', 
            html: `<div style="max-width: 500px; width: 96%; border: 2px solid #0069ff; padding: 20px; background: rgba(0, 0, 255, 0.1); font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; border-radius: 10px;">
            <p >Hi ${name},</p>
            <p  style=" margin: 0;">A new event scheduled has been confirmed with ${userName}.</p>
            <h4 style="margin-bottom: 5px;">Event Name:</h4>
            <p style=" margin: 0;">${eventName}</p>
            <h4 style="margin-bottom: 5px;">Invitee: ${userEmail}</h4>
            <h4 style="margin-bottom: 5px;">Event Date/Time:</h4>
            <p style=" margin: 0;">${dateAndTime}</p>
            <h4 style="margin-bottom: 5px;">Event Location:</h4>
            <p>${method}: ${meetLink}</p>
            <a href="${detailsLink}" style="margin-top: 30px; display: inline-block;">More Information in <b>booking page</b></a>
        </div>`, 
        });  
};

export const mail = {
    sendEmail
}