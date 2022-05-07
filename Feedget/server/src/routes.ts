import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2e10769dc45229",
    pass: "d35b92ccfda0f6"
  }
});

routes.post('/feedbacks', async(req, res) => {
  const {type, comment, screenshot} = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Luciana Kyoko <lukyoko@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
      `</div>`
    ].join('\n')
  });

  return res.status(201).json({data: feedback});
});