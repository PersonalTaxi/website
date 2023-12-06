// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

const working = '{"info":"true"}';
const noworking = '{"info":"false"}';

type Data = {
  name: string;
};

export default async function SendnotificationTravel(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  let transporter = await nodemailer.createTransport({
    port: 465,
    host: "mail-serwer141299.lh.pl",
    // secure: true,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  await transporter.verify(function (error: any, success: any) {
    if (error) {
      console.log(error);
      // return res.json({info:"nie działa bo: "+error})
    } else {
      console.log("Server is ready to take our messages");
      // return res.json({info:"działa: "+success})
    }
  });

  const mailData = {
    from: "Opłacono kurs",
    to: "m.marszalek@wearebrave.pl",
    subject: `Zamówienie wycieczki do ${req.body.travel_to}: ${req.body.first_name} ${req.body.last_name}`,
    text: "Hello. This email is for your email verification.",
    html:
      `Imię i nazwisko / firma: ${req.body.first_name} ${req.body.last_name}` +
      `<br>` +
      `Email kontaktowy: ${req.body.email}` +
      `<br>` +
      `Telefon kontaktowy: ${req.body.phone}` +
      `<br><br>` +
      `Miejsce odbioru klienta: ${req.body.pick_up_from_localization}` +
      `<br>` +
      `Godzina odbioru klienta: ${req.body.travel_starts_to}` +
      `<br>` +
      `<br>` +
      `Klient chce być na miejscu o godzinie: ${req.body.pick_up_at_hour}` +
      `<br>` +
      `<br>` +
      `Wiadomość dla kierowcy: ${req.body.info_for_driver}` +
      `<br>` +
      `<br>` +
      `Opis przedmiotów niestandardowych: ${req.body.info_for_driver}`,
    // `<br>` +
    // `Cena: ${req.body.price} zł` +
    // `<br>`,
  };

  await transporter.sendMail(mailData, function (err: string, info: string) {
    console.log("wysyłam");
    if (err) {
      console.log("błąd: " + err);
      res.json(JSON.parse(noworking));
      return res.status(500);
    } else {
      console.log("działa");
      res.json(JSON.parse(working));
      return res.status(200);
    }
  });
}
