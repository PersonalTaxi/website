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
    name: "mail.wearebrave.pl",
    port: 465,
    host: "mail-serwer141299.lh.pl",
    secure: true,
    // tls: {
    //   ciphers: "SSLv3",
    // },
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

  const mailToCompanyData = {
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

  const mailToCustomerDataPL = {
    from: '"Personal Taxi" <m.marszalek@wearebrave.pl>',
    to: req.body.email,
    subject: `Potwierdzenie opłacenia zamówienia`,
    text: "Hello. This email is for your email verification.",
    html:
      `<p>Nieniejszym potwierdzamy, że Twoje zamówienie zostało złożone i otrzymało numer ID: ${req.body.id}. <br>Płatność została zrealizowana poprawnie. <br>Nie musisz nic robić z Tą wiadomości ale zachowaj ją. <br>Poniżej znajdziesz podsumowanie swojego zamówienia.</p>` +
      `<br>` +
      `Id Twojego zamówienia: ${req.body.id}` +
      `<br>` +
      `<br>` +
      `Imię i nazwisko: ${req.body.name} ${req.body.lastname}` +
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
      `Cena: ${req.body.price} ${req.query.currency}` +
      `<br>` +
      `<p> Prosimy o sprawdzenie czy wszystko zostało zrealizowane poprawnie. <br>W razie potrzeby jakichkolwiek korekt, uzyskania dodatkowych informacji lub ich zmiany skontaktuj się z nami mailowo poprzez adres office@personaltaxi.pl.<br><br> Widzimy się już niebawem!</p>`,
  };

  const mailToCustomerDataEN = {
    from: '"Personal Taxi" <m.marszalek@wearebrave.pl>',
    to: req.body.email,
    subject: `Confrimation of order and payment. `,
    text: "Hello. This email is for your email verification.",
    html:
      `<p>We confirm that your order and payment was already made correctly and has been givin a ID number: ${req.body.id}. You don't have to do anything with this massage but keep it please. <br>You can find the order summary below.</p>` +
      `<br>` +
      `<br>` +
      `Order ID: ${req.body.id}` +
      `<br>` +
      `<br>` +
      `Full name: ${req.body.name} ${req.body.lastname}` +
      `<br>` +
      `Email: ${req.body.email}` +
      `<br>` +
      `Phone: ${req.body.phone}` +
      `<br><br>` +
      `Start point: ${req.body.from}` +
      `<br>` +
      `Geolocalization: ${req.body.startFromGEO} (<a href="https://www.google.com/maps/place/${req.body.startFromGEO}">Pokaż w Google Maps</a>)` +
      `<br> ---` +
      `<br>` +
      `Finish point: ${req.body.to}` +
      `<br>` +
      `Geolocalization: ${req.body.directionGEO} (<a href="https://www.google.com/maps/place/${req.body.directionGEO}">Pokaż w Google Maps</a>)` +
      `<br> ---` +
      `<br>` +
      `Distance: ${req.body.distance} km` +
      `<br>` +
      `<br>` +
      `Massege for driver: ${req.body.infoForDriver}` +
      `<br>` +
      `Some unusial items: ${req.body.unusualItems}` +
      `<br> ---` +
      `<br>` +
      `Price: ${req.body.price} ${req.query.currency}` +
      `<br>` +
      `<p> 
      We request to check if order was realized correctly. <br> In case of any needs, corrections, obtaining addicional information or changing it please contact us with mail to office@personaltaxi.pl.<br>
      See you soon!</p>`,
  };

  await transporter.sendMail(mailToCompanyData, function (err: string, info: string) {
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

  if (req.query.language === "PL") {
    await transporter.sendMail(mailToCustomerDataPL, function (err: string, info: string) {
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

  if (req.query.language === "EN") {
    await transporter.sendMail(mailToCustomerDataEN, function (err: string, info: string) {
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
}
