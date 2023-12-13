// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

const working = '{"info":"true"}';
const noworking = '{"info":"false"}';

type Data = {
  name: string;
};

export default async function SendnotificationTaxi(
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
    from: "Zamówienie na kurs",
    to: "m.marszalek@wearebrave.pl",
    subject: `Zamówienie transferu od: ${req.body.name} ${req.body.lastname}`,
    text: "Hello. This email is for your email verification.",
    html:
      `Id zamówienia (również sesja w P24): ${req.body.id}` +
      `<br>` +
      `Imię i nazwisko / firma: ${req.body.name} ${req.body.lastname}` +
      `<br>` +
      `Email: ${req.body.email}` +
      `<br>` +
      `Telefon: ${req.body.phone}` +
      `<br><br>` +
      `Początek trasy: ${req.body.from}` +
      `<br>` +
      `Geolokalizacja: ${req.body.startFromGEO} (<a href="https://www.google.com/maps/place/${req.body.startFromGEO}">Pokaż w Google Maps</a>)` +
      `<br> ---` +
      `<br>` +
      `Koniec trasy: ${req.body.to}` +
      `<br>` +
      `Geolokalizacja: ${req.body.directionGEO} (<a href="https://www.google.com/maps/place/${req.body.directionGEO}">Pokaż w Google Maps</a>)` +
      `<br> ---` +
      `<br>` +
      `Dystans: ${req.body.distance} km` +
      `<br>` +
      `<br>` +
      `Wiadomość dla kierowcy: ${req.body.infoForDriver}` +
      `<br>` +
      `Opis przedmiotów niestandardowych: ${req.body.unusualItems}` +
      `<br> ---` +
      `<br>` +
      `Cena: ${req.body.price} zł` +
      `<br>` +
      `<p><a href="https://www.google.com/maps/dir/${req.body.startFromGEO}/${req.body.directionGEO}">Trasa Google Maps</a></p>`,
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