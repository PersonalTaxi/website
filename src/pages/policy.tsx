import React, { useRef } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function Policy() {
  const RODO_EN: any = useRef();
  const RODO_EN_Button: any = useRef();
  const RODO_PL: any = useRef();
  const RODO_PL_Button: any = useRef();

  const handleChangingPolicyToEN = () => {
    RODO_PL.current.style.display = "none";
    RODO_PL_Button.current.style.border = "0px";

    RODO_EN_Button.current.style.borderBottom = "2px solid black";
    RODO_EN.current.style.display = "inline";
  };

  const handleChangingPolicyToPL = () => {
    RODO_PL.current.style.display = "inline";
    RODO_PL_Button.current.style.borderBottom = "2px solid black";

    RODO_EN_Button.current.style.border = "0px";
    RODO_EN.current.style.display = "none";
  };
  return (
    <>
      <div>
        <Header />
        <div className="pt-[50px] lg:w-[1080px] w-[95vw] mx-auto">
          <p className="text-center font-bold my-[30px] lg:text-[32px] text-[20px]">
            Privacy Policy ("RODO") <br></br>Polityka Prywatności ("RODO")
          </p>
          <div className="flex mb-[40px]">
            <div
              ref={RODO_PL_Button}
              className="text-[10px] lg:text-[18px] lg:w-1/3 w-1/2 border-b-2 py-[10px] px-[6px] rounded-[5px] mr-[10px] font-bold border-gray-900 cursor-pointer"
              onClick={handleChangingPolicyToPL}
            >
              Polityka prywatności (RODO)<br></br>wersja PL
            </div>
            <div
              ref={RODO_EN_Button}
              className="text-[10px] lg:text-[18px] lg:w-1/3 w-1/2 py-[10px] px-[6px] rounded-[5px] font-bold border-gray-900 cursor-pointer border-0"
              onClick={handleChangingPolicyToEN}
            >
              Privacy Policy (RODO)<br></br>version EN
            </div>
          </div>
          <p ref={RODO_EN} className="inline">
            In connection with RODO, or Regulation (EU) R2016/679 of the
            European Parliament and of the Council of 27 April 2016 on the
            protection of natural persons with regard to the processing of
            personal data and on the free movement of such data and repealing
            Directive 95/46/EC (General Data Protection Regulation), effective
            as of May 25, 2018, we inform you about our Privacy Policy. This
            document is the implementation of the information policy towards
            persons using the application for ordering transportation services
            and concluding contracts for the transportation of persons or goods
            by cab (hereinafter referred to as the "Application") persons
            ordering transportation services through the website in the domain
            https://www.personaltaxi.pl/ (the "Site") and through the national
            telephone exchange 605665462 (the "Exchange") or by any other means,
            as well as persons contacting the controller of personal data, i.e.
            Inter-Dywiz sp. z o.o., in all aspects of the processing and
            protection of personal data. We attach great importance to the
            protection, collection, processing and use of your personal data in
            accordance with applicable regulations. The Administrator makes
            every effort to ensure that the information concerning you remains
            private. Accordingly, we publish a document explaining the rules and
            how we collect, process and use information about the users of the
            Application and the Site and other persons whose personal data we
            process. Please read the document carefully to understand our
            privacy policy and how we use your personal information. We would
            like to inform you that Inter-Dywiz Ltd. complies with all
            applicable data protection laws. We respect and protect your
            privacy, and we assure you that we will answer all your questions
            about data protection and ensure that your rights are exercised at
            all times. Therefore, please read the following information
            carefully. Your personal data is processed on the basis of
            applicable laws and regulations, in particular the European
            Parliament and the Council (EU) 2016/679 of April 27, 2016 on the
            protection of natural persons with regard to the processing of
            personal data and on the free movement of such data and the repeal
            of Directive 95/46/EC (hereinafter: the "Regulation") and the Law of
            May 10, 2018 on the Protection of Personal Data (hereinafter: the
            „Law").
            <br></br>
            1. information regarding the Administrator and the collection of
            personal data<br></br>
            <br></br>1 The Administrator within the meaning of Article 4 point 7
            of the Regulation (EU) 2016/679 of the European Parliament and of
            the Council of April 27, 2016 on the protection of natural persons
            with regard to the processing of personal data and on the free flow
            of such data and repealing Directive 95/46/EC with regard to your
            personal data is Inter-Dywiz sp. z o.o. with its seat in Krakow,
            Lotnicza 6/2 Street, 31-462 Krakow, registered in the Register of
            Entrepreneurs of the National Court Register under KRS: 0000496661,
            NIP: 6751496482, REGON: 123040168 (hereinafter the Administrator).
            <br></br>
            <br></br>
            (2) Personal data is all information about a natural person
            identified or identifiable by one or more factors specific to
            physical, physiological, genetic, mental, economic, cultural or
            social identity, including device IP, location data, Internet
            identifier and information collected through cookies and other
            similar technology <br></br>
            <br></br>
            (3) By means of the Application, the Administrator collects your
            personal data such as your name, surname, telephone number, e-mail
            address and, if contacted by the Headquarters, also your voice. The
            Administrator processes the personal data you provide in order to
            conclude and execute agreements, including for electronically
            provided services, for the purpose necessary to use the Website and
            the Application, in particular to set up an account, to enable you
            to search for a cab service in the Application and to provide other
            functions of the Application and to use other services of the
            Administrator, including the Headquarters, in particular, in order
            to place an order via the website or Headquarters, to verify and
            execute a current order for cab transportation and service the order
            placed, to send information with a summary of the course, to contact
            for the purposes of course execution, including by drivers, to
            process complaints, as well as to assert and defend against claims,
            and furthermore for marketing purposes and to contact the
            Administrator. Provision of the indicated personal data is necessary
            for the conclusion and execution of the contract for the use of the
            website and its functions, including the ability to search for the
            service of transporting people and things by cab using the website,
            and their processing is carried out on the basis of Article 6(1)(b)
            of the Regulation.<br></br>
            <br></br>
            (4) If you place an order via the website, the Administrator shall
            further process your location data (GPS data) at the time of the
            order, the coordinates of the pickup location and the coordinates of
            the destination, as well as travel time data (e.g., pickup time and
            time to reach the destination). Consent for the transmission of GPS
            location data is given through the operating system of your terminal
            device. In addition, the administrator processes data regarding the
            trip: cost, payment, invoices, driver id, passenger id, device id.
            The processing of this data is necessary for the performance of the
            contract for the use of the website and its functions, including the
            ability to search for the service of transporting people and things
            by cab using the website, and their processing is carried out on the
            basis of Article 6 (1) (b) of the Regulation. You may optionally
            also enter your home and work address on the website. These data are
            processed insofar as they are provided by you.<br></br>
            <br></br>
            (5) The Administrator shall allow you to make a cashless payment via
            the website using a credit card, PayPal account, Google Pay account,
            Apple Pay, BLIK or Przelewy24. For this purpose, it may be necessary
            for you to provide your card number, card expiration date, CVV2/CVC2
            code. However, the administrator does not have access to or process
            this data. Providing the indicated personal data is necessary to
            make a non-cash payment for a cab ride using the Application in
            accordance with the selected payment method, and their processing is
            carried out on the basis of Article 6(1)(b) of the Regulation. You
            can always make payment by credit card or cash with the driver. For
            the purposes referred to in this section, the data referred to in
            this section may be transferred to payment providers-payment service
            providers.
            <br></br>
            (6) By placing an order through the Site, the Administrator collects
            your personal data such as name, phone number. The Administrator
            processes the personal data you provide for the purpose necessary to
            place an order, perform the service of providing a tool (the Site)
            to place an order for cab transportation, as well as to assert
            claims. The provision of this personal data is necessary for the
            conclusion and execution of the agreement to provide a tool (the
            Site) for placing an order for the transportation of people and
            goods by cab through the Site, and their processing is carried out
            on the basis of Article 6(1)(b) of the Regulation. <br></br>
            <br></br>
            (7) When placing an order through the Switchboard, the Administrator
            collects your personal data such as name, phone number, voice. The
            Administrator processes the personal data you provide for the
            purpose necessary to place an order, implement the service of
            providing a tool (Switchboard) for placing an order for cab
            transportation, as well as to assert claims. The provision of this
            personal data is necessary for the conclusion and execution of the
            contract for the provision of a tool (PBX) for placing an order for
            the transportation of people and goods by cab, and their processing
            is carried out on the basis of Article 6(1)(b) of the Regulation.
            <br></br>
            <br></br>
            (8) In order to carry out an order for transportation services using
            a "voucher", the Administrator processes the personal data of the
            person using the "voucher" option in the form of a telephone number,
            and the processing of such personal data is carried out pursuant to
            Article 6(1)(f) of the Regulation. The processing of the personal
            data provided is necessary for the purposes of the legitimate
            interests pursued by the Administrator, i.e. to provide an
            appropriate tool for placing an order for cab transportation for the
            benefit of the person using the "voucher" option. 8.<br></br>
            <br></br>
            In addition, the Administrator collects and processes your personal
            data in the form of your name, telephone number, email address on
            the basis of Article 6(1)(f) of the Regulation, i.e. the
            Administrator&rsquo;s legitimate interest, which is direct marketing
            of its own services, as well as research, in particular through
            surveys, satisfaction with services, with the proviso that with
            regard to services constituting provision of services by electronic
            means within the meaning of the Act of July 18, 2002. on the
            provision of services by electronic means, the Administrator may
            process data, only with your consent and for the purposes of
            advertising, market research and research into the behavior and
            preferences of service recipients with the purpose of using the
            results of such research to improve the quality of services provided
            by the Administrator (which also applies to profiling), other data
            concerning you that are not necessary for the provision of services
            by electronic means. You may object to such processing at any time,
            which will result in the immediate cessation of the
            Administrator&rsquo;s processing of your personal data for this
            purpose, and in the case of processing on the basis of consent, you
            may revoke (withdraw) your consent at any time.<br></br>
            <br></br>
            (9) The processing of personal data in the form of name, phone
            number, e-mail address for marketing purposes carried out by the
            Administrator&rsquo;s Partners may be carried out only with your
            consent, pursuant to Article 6(1)(a) of the Regulation. Consent to
            the processing of personal data in such cases includes consent to
            the processing of personal data for marketing purposes of the
            Administrator and its Partners, such as subcontractors, companies
            and cab corporations, partners running social media, advertisers and
            entities co-organizing marketing actions, promotions, contests, etc.
            with the Administrator. However, in this case, no personal data are
            transferred to these entities for marketing purposes, and are
            processed exclusively by the Administrator, including through
            automated marketing tools. Provision of personal data for these
            purposes is voluntary and at the discretion of the data subject, and
            their processing by the Administrator is subject to obtaining
            consent. You may withdraw your consent at any time without affecting
            the lawfulness of the processing performed on the basis of consent
            before its withdrawal. More extensively on the conditions for
            granting and withdrawing consent in Section 3 of this policy.
            <br></br>
            <br></br>
            10 The Administrator processes the personal data you provide in the
            contact form in order to provide the service provided electronically
            - contact form. For this purpose, the Administrator collects your
            personal data such as name, e-mail address, telephone number.
            Providing your e-mail address is necessary for responding to your
            inquiry submitted through the electronic contact form. In the case
            of your request for telephone contact, it is also necessary to
            provide your telephone number. Processing is carried out on the
            basis of Article 6(1)(b) of the Regulation.<br></br>
            <br></br>
            (11) Where data processing is optional, data will be processed on
            the basis of consent, which will be evident from the content of the
            consent given. Data may also be processed on the basis of the
            legitimate interest of the Administrator. The extent of the data
            processed depends, in particular, on the form you fill out and the
            service or form of contact you use. The Administrator may apply
            different levels of consent, on which depends the scope of the
            processed data, as well as the manner and purposes of processing.
            <br></br>
            12 The Administrator also uses the information contained in cookies
            for analytical purposes. They provide data about your activity in
            the use of the Application. The use of cookies is based on your
            consent. You can disable cookies at any time by changing the
            settings in your browser. Details on how to use cookies can be found
            in the Cookie Policy.<br></br>
            <br></br>
            13. In order to provide you with the most effective use of the
            website and also to tailor its content and be able to offer you the
            most customized offer, we will process data in the form of:<br></br>
            -cookies<br></br>- The dates and times of your visit to the website,
            <br></br>- The characteristics of your device, in particular the
            operating system, web browser and the size of the<br></br>
            browser window,<br></br>- IP address of your device,<br></br>-
            Device identifiers, which consist of individual characteristics of
            your mobile device. IDs devices allow us to recognize your device on
            our site.<br></br>
            <br></br>
            14 The Site performs functions of acquiring information and personal
            data about users and their behavior also by storing cookies
            (so-called "cookies") in the end devices. The Administrator uses the
            information contained in cookies to improve the functioning of the
            Site. They provide data about user activity on the Site. The use of
            cookies is based on your consent. You can disable cookies at any
            time by changing the settings in your browser. The rules of use are
            defined in the Cookies Policy.<br></br>
            <br></br>
            15 The Administrator is an entrepreneur and constantly strives to
            improve the products and tools he uses to develop our business.
            Therefore, he strives to ensure that his Websites are designed in
            the best way and that as many people as possible who are interested
            in doing business with him visit them. To improve the quality of the
            Site, the Administrator may use tools commonly referred to as
            "trackers." They allow us to monitor the effectiveness of web
            offers. With them, we can collect such data as :<br></br>-
            information through which links online users are redirected to the
            Site<br></br>- information on when and how often the Site was
            visited<br></br>- information what kind of information is searched,
            <br></br>- which links or offers are opened on the Site.<br></br>
            Based on the above information, the Administrator may create
            statistics to help make the Site more attractive and better tailored
            to the needs and preferences of visitors.<br></br>
            The Administrator does not create user profiles. The use of these
            tools does not automatically identify individuals and never uses
            them to identify visitors to the Site.<br></br>
            (16) With respect to your personal data, the Administrator does not
            make automated decisions within the meaning of the Regulation,
            except that: - Your data may be profiled for the purpose of
            providing personalized content in the Application, i.e. the
            implementation of the Application&rsquo;s function of presenting an
            offer of cab transportation services as close to your preferences as
            possible <br></br>- applies to the situation of the introduction of
            such functionality of the Application.<br></br>- data about the use
            of the Application and services offered through the Application, as
            well as <br></br>
            contact data may be used for the purpose of sending personalized
            messages regarding the use of the Administrator&rsquo;s services
            <br></br>
            Such processing is necessary for the performance of a contract for
            the use of the Application or another contract for a service
            provided electronically, pursuant to the wording of Article 22(1)(a)
            of the Regulation;<br></br>
            <br></br>
            (13) The Administrator shall retain your personal data only for the
            period necessary for the performance of the services provided,
            including the assertion of claims and compliance with the
            requirements of applicable laws, including tax laws, or for the
            period necessary for other purposes for which the Administrator may
            process your data in accordance with this Privacy Policy. In the
            case of personal data processed on the basis of the
            Administrator&rsquo;s legitimate interest, including for the purpose
            of providing a service using a "voucher", the Administrator shall
            keep the personal data provided for the period necessary for the
            purpose of processing or until you file an effective objection. In
            the case of personal data processed for the Administrator&rsquo;s
            direct marketing purposes, the Administrator shall retain the
            personal data provided for the period necessary for the purpose of
            processing or until an effective objection is raised. In the case of
            personal data processed on the basis of your consent, the
            Administrator shall keep the personal data you provide for the
            period necessary for the purpose of processing or until you withdraw
            your consent. After these periods, your personal data will be
            deleted.
            <br></br>
            <br></br>
            (14) When contacting through the Central Office, a special message
            informs the caller that the telephone conversation is being
            recorded. The condition for the continuation of the telephone
            conversation is the submission of a statement of consent to its
            recording. The consent can be given by the caller voluntarily
            continuing the call or in any other way implied by the message.
            Failure to submit a statement of consent to record the call will
            result in the call not being recorded and will be terminated.
            <br></br>2 Rights of the data subject<br></br>
            <br></br>
            (1) You have the right to obtain from the Administrator confirmation
            as to whether it processes your personal data, the right to request
            access to such data, and the right to obtain from the Administrator
            information regarding the purposes of processing and the categories
            of personal data processed, information about the recipients or
            categories of recipients to whom the personal data are disclosed,
            the intended period of storage of the personal data, the source of
            the data in case it was collected not from the data subject, and
            information as to whether the Administrator makes automated
            decisions with respect to the data subject, including, but not
            limited to, on the basis of profiling. You also have the right to
            obtain a copy of the data.<br></br>
            <br></br>
            (2) In addition, you have the right to request rectification of
            personal data, the right to request erasure of personal data, the
            right to request restriction of processing, the right to data
            portability and the right to object to processing. You may exercise
            these rights:<br></br>- with respect to a request for erasure: when
            the personal data are no longer necessary for the purposes for which
            they were collected or otherwise processed, when the data subject
            has withdrawn the consent on which the processing is based and there
            is no other legal basis for the processing, when the data subject
            objects under Article 21.<br></br>
            <br></br>(1) to the processing and there are no overriding
            legitimate grounds for the processing, or the data subject objects
            under Art. 21. <br></br>
            <br></br>(2) of the Regulation against processing, when the personal
            data has been unlawfully processed, when the personal data must be
            erased in order to comply with a legal obligation under Union law or
            the law of a Member State to which the Controller is subject, when
            the personal data has been collected in connection with the offering
            of information society services,<br></br>- With regard to a request
            for rectification of data: when your data is incorrect or
            incomplete; with regard to a request for erasure of data: when your
            data is no longer necessary for the purposes for which it was
            collected by the Administrator; you withdraw your consent to data
            processing; you object to the processing of your data; your data is
            processed unlawfully; your data should be erased in order to comply
            with a legal obligation, or your data was collected in connection
            with offering information society services;
            <br></br>- With regard to a request for restriction of data
            processing: when your data is incorrect - you may request
            restriction of processing for a period allowing the Administrator to
            verify the correctness of the data; processing of your data is being
            carried out unlawfully, but you do not want it to be deleted; your
            data will no longer be needed by the Administrator, but will be
            needed by you to establish, assert or defend claims; or you have
            lodged an objection to data processing - until it is determined
            whether the legitimate grounds on the part of the Administrator
            override the grounds for the objection;<br></br>
            If processing has been restricted, such personal data may be
            processed, with the exception of storage, only with the consent of
            the data subject, or to establish, assert or defend claims, or to
            protect the rights of another natural or legal person, or for
            compelling reasons of public interest of the Union or a Member
            State.<br></br>- With regard to the right to data portability: when
            the processing of your data takes place on the basis of your consent
            or contract, and when the processing is carried out by automated
            means;<br></br>- With regard to the right to object: when the
            processing of your personal data is carried out on the basis of a
            legitimate interest and the objection is justified on the grounds of
            your particular situation, as well as when your personal data is
            processed for direct marketing purposes, including profiling.
            <br></br>
            <br></br>
            (3) You also have the right to lodge a complaint with a supervisory
            authority if you consider that the processing of personal data
            concerning you violates the Regulation.<br></br>4 The security
            procedures implemented mean that we may ask for proof of identity
            before exercising your rights.<br></br>
            3. consent to process personal data<br></br>
            <br></br>
            <br></br>
            (1) If the Administrator processes personal data that are not
            necessary for the performance of the service, the provision of such
            data by you is always done voluntarily, after you have given your
            consent to the processing of the data provided.<br></br>
            <br></br>
            <br></br>
            (2) You give your consent after reviewing this policy by checking
            the appropriate checkbox. In this case, you consent to the
            Administrator&rsquo;s collection and processing of the personal data
            you have provided for the purpose expressly indicated when you give
            your consent.<br></br>
            <br></br>
            <br></br>
            (3) You may withdraw your consent at any time, in the same manner as
            your consent was given, i.e. by unchecking the appropriate checkbox.
            In addition, you may withdraw your consent by sending a statement of
            withdrawal of consent to the Administrator in the manner indicated
            in Section 6 of this policy. <br></br>
            <br></br>(4) Withdrawal of consent does not affect the lawfulness of
            processing that was carried out on the basis of consent before its
            withdrawal.<br></br>
            <br></br>
            <br></br>
            (4) The Administrator uses different levels of consents, which may
            be characterized by different scope of data processing and different
            purpose of processing. In particular, separate consents may relate
            to such forms and purposes of processing such as: transfer of data
            to another controller, processing of data for email contact,
            processing of data for telephone contact, processing of data for
            marketing purposes, profiling, processing of data in the use of
            cookies. Each purpose and scope of data processing results from the
            content specified in the consent form. Please read this content
            before submitting your statement of consent. In addition, you may be
            asked for additional consents resulting from specific regulations,
            such as for the use of a telecommunications terminal device or the
            sending of commercial information by electronic means.<br></br>
            <br></br>4 Information on recipients / categories of recipients of
            personal data<br></br>
            <br></br>
            (1) In order to provide and settle the cab service, the
            Administrator will transfer your data, including personal data to
            the following recipients:<br></br>- Location data (GPS coordinates
            of the pickup address), coordinates of the destination, as well as
            travel time data (e.g., pickup time and arrival time at the
            destination), will be provided to drivers who apply for the course;
            <br></br>- Location data (GPS coordinates of the pickup address),
            coordinates of the destination, as well as travel time data (e.g.,
            pickup time and time to reach the destination) and your personal
            data in the form of your name and phone number will be provided to
            drivers who have accepted the order for cab service.<br></br>
            Since the implementation of the cab service may also be carried out
            through entities operating cab corporations or other subcontractors,
            the above data may be transferred to such entities for onward
            transmission to drivers.<br></br>
            <br></br>
            <br></br>
            (2) The Administrator also makes partial use of third-party service
            providers who process personal data on behalf of the Administrator,
            such as hosting providers, email service providers, system providers
            for marketing and emailing, website traffic analysis, marketing
            campaign effectiveness analysis, account functionality support, debt
            collection companies, payment service providers. However, the
            transfer of data can only be used to provide their service. The
            Administrator uses only such entities that provide sufficient
            guarantees for the protection of data subjects&rsquo; rights. The
            processing of personal data by these entities is carried out on the
            basis of written agreements concluded with the Administrator. These
            entities follow the Administrator&rsquo;s guidelines and are subject
            to audits conducted by the Administrator.<br></br>
            <br></br>
            (3) Recipients of your data may include:<br></br>
            <br></br>
            (a) the Administrator&rsquo;s contractors and their subcontractors,
            insofar as your data will be necessary for the performance of the
            contract or other cooperation linking the Administrator with the
            above entities. In the absence of such need, the
            Administrator&rsquo;s contractors will not be recipients of the
            data;<br></br>
            <br></br>
            (b) the Administrator&rsquo;s customers, insofar as your data will
            be needed to perform the contract linking the Administrator with the
            above entities. In the absence of such necessity, the
            Administrator&rsquo;s clients will not be recipients of the data;
            <br></br>
            <br></br>
            (c) entities cooperating with the Administrator for the purpose of
            performing a contract or cooperation, fulfilling obligations under
            the law or other purposes for which the Administrator may process
            your data, such as companies providing hosting services, accounting,
            etc.
            <br></br>
            <br></br>
            (4) Your personal data may also be made available to entities
            entitled to obtain them under applicable law, e.g. law enforcement
            agencies in the event of a request by the authority on the
            appropriate legal basis (e.g. for the purposes of ongoing criminal
            proceedings).<br></br>
            <br></br>
            (5) The Administrator uses the Google Analytics service to analyze
            web traffic, to collect and analyze data on the behavior of people
            using the Application or the Administrator&rsquo;s websites. Web
            traffic analysis is mainly used for website optimization and
            marketing purposes. In accordance with the specified functionalities
            of Google Analytics, Google Analytics also piques "cookies" and the
            data contained therein may be used for marketing purposes, and the
            data contained therein may also be used for profiling.<br></br>
            The operator of the Google Analytics service is Google Inc., 1600
            AmphitheatrePkwy, MountainView, CA 94043-1351, based in the USA. The
            user may not consent to the collection of data related to the use of
            information collected by Google Analytics, and to the processing of
            such data by Google, and may prevent such activities. To do so,
            download a browser add-on available here:
            tools.google.com/dlpage/gaoptout, and then install it.<br></br>
            Terms of use: http://www.google.com/analytics/terms/pl.html<br></br>
            Privacy Policy: https://policies.google.com/privacy?hl=pL<br></br>
            <br></br>
            (6) The Administrator may also r use the remarketing feature of
            Google AdWords at Google Inc, 1600 AmphitheatreParkway,
            MountainView, CA 94043, USA. Remarketing allows you to create a
            personalized "cue" to a recipient who has previously viewed a
            particular page/pages on Google Inc.&rsquo;s website in order to
            display an advertisement for a product/service you may be interested
            in. For this purpose, cookies are stored in your browser that are
            collected from individual pages you visit through your Google
            browser. User visits are collected through cookies that are used to
            identify the browser of the device itself; personal data is not
            stored. You can restrict or disable Google&rsquo;s storage of
            cookies at any time by following the indicated link :
            www.google.com/settings/ads/plugin. For more information on Google
            Adwords and Google&rsquo;s privacy policy, please visit:
            www.google.com/privacy/ads.<br></br>
            <br></br>
            (7) Cookies may be used by advertising networks, in particular the
            Google network, to display advertisements tailored to the
            user&rsquo;s use of the Site. For this purpose, they may retain
            information about the user&rsquo;s navigation path or how long the
            user stayed on a particular page.<br></br>
            <br></br>
            (8) The administrator also has a fanpage on the Facebook website to
            which links contained in the Site direct. Accordingly, data in the
            form of name or email address may be collected and subsequently
            shared with the Facebook operator, in which case the data processing
            is performed for the purpose of using the Administrator&rsquo;s page
            on Facebook and marketing with the help of Facebook.The Site may use
            the social plugins (SocialPlugins) of the social network
            Facebook.com, managed by Facebook Inc., 1601 S. California Ave,
            PaloAlto, CA 94304, USA ("Facebook"). The plug-ins are marked with
            the portal&rsquo;s logo, its icon or the add-on "Facebook
            SocialPlugin". If the User launches a website that contains such a
            plug-in, the browser will establish a direct connection to the
            Facebook server. The content of the plug-in is directly transferred
            by Facebook.com to the browser and integrated by it into the
            website. Inter-Dywiz Ltd. has no influence in this respect on the
            size of the data that Facebook collects via this plug-in. If you are
            a member of Facebook but do not want the portal to associate the
            collected user data, you must make the appropriate settings on your
            Facebook account. It is the responsibility of this entity to grant
            access to your data that you have made available to Facebook, and if
            you have any doubts, you should contact this entity directly or make
            changes to your Facebook account settings On a similar basis, the
            indicated data may be transferred to other similar social networks
            and the entities that run them.<br></br>
            <br></br>
            (9) In addition, in connection with the Administrator&rsquo;s use of
            Google services, e.g. the G Suite service, data may be transferred
            outside the EEA only, however, with guarantees that an adequate
            degree of protection is ensured, e.g. under the standard contractual
            clauses approved by the European Commission.<br></br>
            <br></br>
            (10) For the purposes of the legitimate interests pursued by the
            Administrator, which is the enforcement of claims, your personal
            data in the scope of identification, contact and address data may be
            transferred to debt collection companies and other entities
            providing services related to the recovery of claims.<br></br>
            <br></br>
            11. your data may also be transferred to authorities that may
            request them in accordance with the law.<br></br>
            <br></br>
            5. personal data security<br></br>
            <br></br>
            (1) The Administrator shall process your personal data in accordance
            with the provisions of the Ordinance, including the use of
            appropriate technical and organizational measures to ensure the
            security and adequate confidentiality and integrity of personal
            data, including protection against unauthorized access, against
            unauthorized or unlawful processing, and against accidental loss,
            unauthorized alteration, destruction or damage.<br></br>
            <br></br>
            (2) When downloading your personal data within the framework of
            account registration in the Application, their transmission is
            carried out using an encrypted SSL connection.<br></br>
            <br></br>
            6. contact information<br></br>
            <br></br>
            (1) Any demands, requests, notifications, inquiries relating to the
            processing of personal data can be addressed to you via the contact
            form located on the website www.personaltaxi.pl, by e-mail to:
            biuro@personaltaxi.pl or in writing to Inter-Dywiz sp. z o.o. ul.
            Lotnicza 6/2 31-462 Kraków.<br></br>
            <br></br>
          </p>
          <p ref={RODO_PL} className="hidden">
            W związku z obowiązującym od dnia 25 maja 2018 roku RODO, czyli
            rozporządzeniem Parlamentu Europejskiego i Rady (EU) R2016/679 z
            dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
            z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
            rozporządzenie o ochronie danych), informujemy o naszej Polityce
            Prywatności. Niniejszy dokument stanowi realizację polityki
            informacyjnej wobec osób korzystających z aplikacji służącej do
            zamawiania usług przewozu i zawierania umów o przewóz osób lub
            rzeczy taksówką (dalej „Aplikacja”) osób zamawiających usługę
            przewozu poprzez stronę internetową w domenie
            https://www.personaltaxi.pl/ („Strona”) oraz przez ogólnopolską
            centralę telefoniczną 605665462 („Centrala”) lub w jakikolwiek inny
            sposób, jak również osób kontaktujących się administratorem danych
            osobowych, tj. Inter-Dywiz sp. z o.o., we wszelkich aspektach
            przetwarzania i ochrony danych osobowych. Przykładamy dużą wagę do
            ochrony, zbierania, przetwarzania i wykorzystywania Państwa danych
            osobowych zgodnie z obowiązującymi przepisami. Administrator dokłada
            wszelkich starań, aby dotyczące Państwa informacje pozostawały
            prywatne. W związku z tym publikujemy dokument wyjaśniający zasady
            oraz sposób gromadzenia, przetwarzania i wykorzystywania informacji
            o użytkownikach Aplikacji i Strony oraz innych osób, których dane
            osobowe przetwarzamy. Prosimy o uważne przeczytanie dokumentu w celu
            zrozumienia naszej polityki prywatności oraz sposobu wykorzystania
            Państwa danych osobowych. Pragniemy poinformować, że Inter-Dywiz sp.
            z o.o. przestrzega wszystkich stosownych przepisów prawnych
            dotyczących ochrony danych. Szanujemy i chronimy Waszą prywatność, a
            także zapewniamy, że w każdej chwili odpowiemy na wszystkie pytania
            dotyczące ochrony danych oraz zapewnimy realizację przysługujących
            Wam praw. Prosimy zatem o uważne zapoznanie się z poniższymi
            informacjami. Państwa dane osobowe przetwarzane są w oparciu o
            obowiązujące przepisy prawa w szczególności Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (dalej: „Rozporządzenie“) oraz ustawę z dnia 10 maja 2018
            r. o ochronie danych osobowych (dalej: „Ustawa“).<br></br>
            <br></br>
            1. Informacja dotycząca Administratora i gromadzenia danych
            osobowych<br></br>
            <br></br>
            1. Administratorem w rozumieniu art. 4 pkt 7 Rozporządzenia
            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
            2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE w odniesieniu do Państwa danych
            osobowych jest Inter-Dywiz sp. z o.o. z siedzibą w Krakowie, ul.
            Lotnicza 6/2, 31-462 Kraków, wpisana do rejestru przedsiębiorców
            Krajowego Rejestru Sądowego pod numerem KRS: 0000496661, NIP:
            6751496482, REGON: 123040168 (dalej Administrator).<br></br>
            <br></br>
            2. Dane osobowe są to wszystkie informacje o osobie fizycznej
            zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź
            kilka szczególnych czynników określających fizyczną, fizjologiczną,
            genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną
            tożsamość, w tym IP urządzenia, dane o lokalizacji, identyfikator
            internetowy oraz informacje gromadzone za pośrednictwem plików
            cookie oraz innej podobnej technologii. <br></br>
            <br></br>
            3. Za pomocą Aplikacji, Administrator gromadzi Państwa dane osobowe
            takie jak: imię, nazwisko, numer telefonu, adres e-mail, a w razie
            kontaktowania się przez Centralę także głos. Administrator
            przetwarza podane przez Państwa dane osobowe w celu zawierania i
            wykonania umów, w tym o usługi świadczone drogą elektroniczną, w
            celu niezbędnym do korzystania ze Strony oraz z Aplikacji, w
            szczególności założenia konta, umożliwienia wyszukania usługi
            przewozu taksówką w Aplikacji oraz udostępnienia pozostałych funkcji
            Aplikacji oraz korzystania z pozostałych usług Administratora, w tym
            Centrali, w szczególności w celu złożenia zamówienia przez stronę
            internetową lub Centralę, weryfikacji i realizacji bieżącego
            zlecenia przewozu taksówką i obsługi złożonego zamówienia,
            przesyłania informacji z podsumowaniem kursu, kontaktu dla potrzeb
            realizacji kursu, w tym przez kierowców, rozpatrywania reklamacji, a
            także dochodzenia roszczeń, jak i obrony przed roszczeniami, a
            ponadto w celach marketingowych oraz kontaktu z Administratorem.
            Podanie wskazanych danych osobowych jest niezbędne do zawarcia i
            realizacji umowy o korzystanie ze strony internetowej i jej funkcji,
            w tym możliwości wyszukania usługi przewozu osób i rzeczy taksówką
            przy użyciu strony internetowej, a ich przetwarzanie odbywa się na
            podstawie art. 6 ust. 1 lit. b) Rozporządzenia.<br></br>
            <br></br>
            4. W przypadku złożenia zamówienia poprzez stronę internetową,
            Administrator przetwarza ponadto dane dotyczące Państwa lokalizacji
            (dane GPS) w chwili dokonania zamówienia, współrzędne miejsca
            odbioru oraz współrzędne miejsca docelowego, a także dane dotyczące
            czasu podróży (np. czas odbioru i czas dotarcia do miejsca
            docelowego). Zgoda na przekazanie danych lokalizacji w systemie GPS
            wyrażona jest za pośrednictwem systemu operacyjnego Państwa
            urządzenia końcowego. Administrator przetwarza ponadto dane
            dotyczące przejazdu: koszt, płatności, faktury, identyfikator
            kierowcy, id pasażera, id urządzenia. Przetwarzanie tych danych jest
            niezbędne do realizacji umowy o korzystanie ze strony internetowej i
            jej funkcji, w tym możliwości wyszukania usługi przewozu osób i
            rzeczy taksówką przy użyciu strony internetowej, a ich przetwarzanie
            odbywa się na podstawie art. 6 ust. 1 lit. b) Rozporządzenia. Mogą
            Państwo opcjonalnie wprowadzić na stronie internetowej również adres
            miejsca zamieszkania i adres pracy. Dane te są przetwarzane, o ile
            zostały przez Państwa podane.<br></br>
            <br></br>
            5. Administrator umożliwia Państwu dokonanie za pomocą strony
            internetowej płatności bezgotówkowej z wykorzystaniem karty
            kredytowej, konta PayPal, konta Google Pay, Apple Pay, BLIK lub
            Przelewy24. W tym celu niezbędne może być podanie przez Państwa
            numeru karty, daty ważności karty, kodu CVV2/CVC2. Administrator
            jednak nie ma dostępu, ani nie przetwarza tych danych. Podanie
            wskazanych danych osobowych jest niezbędne do dokonania płatności
            bezgotówkowej za przejazd taksówką przy użyciu Aplikacji zgodnie z
            wybranym sposobem płatności, a ich przetwarzanie odbywa się na
            podstawie art. 6 ust. 1 lit. b) Rozporządzenia. Zawsze mogą Państwo
            dokonać płatności kartą płatniczą lub gotówką u kierowcy. W celach,
            o których mowa w niniejszym punkcie, dane o których mowa w
            niniejszym punkcie mogą być przekazywane do operatorów
            płatności-dostawców usług płatniczych.<br></br>
            <br></br>
            6. Składając zamówienie poprzez Stronę, Administrator gromadzi
            Państwa dane osobowe takie jak: imię, numer telefonu. Administrator
            przetwarza podane przez Państwa dane osobowe w celu niezbędnym do
            złożenia zamówienia, realizacji usługi udostępnienia narzędzia
            (Strony) do złożenia zamówienia dotyczącego przewozu taksówką, a
            także dochodzenia roszczeń. Podanie tych danych osobowych jest
            niezbędne do zawarcia i realizacji umowy o udostępnienie narzędzia
            (Strony) do złożenia zamówienia dotyczącego przewozu osób i rzeczy
            taksówką poprzez Stronę, a ich przetwarzanie odbywa się na podstawie
            art. 6 ust. 1 lit. b) Rozporządzenia. <br></br>
            <br></br>
            7. Składając zamówienie poprzez Centralę, Administrator gromadzi
            Państwa dane osobowe takie jak: imię, numer telefonu, głos.
            Administrator przetwarza podane przez Państwa dane osobowe w celu
            niezbędnym do złożenia zamówienia, realizacji usługi udostępnienia
            narzędzia (Centrali) do złożenia zamówienia dotyczącego przewozu
            taksówką, a także dochodzenia roszczeń. Podanie tych danych
            osobowych jest niezbędne do zawarcia i realizacji umowy o
            udostępnienie narzędzia (Centrali) do złożenia zamówienia
            dotyczącego przewozu osób i rzeczy taksówką, a ich przetwarzanie
            odbywa się na podstawie art. 6 ust. 1 lit. b) Rozporządzenia.
            <br></br>
            <br></br>
            8. W celu realizacji zamówienia usługi przewozu przy użyciu
            „vouchera”, Administrator przetwarza dane osobowe osoby korzystające
            z opcji „voucher” w postaci numeru telefonu, a przetwarzanie tych
            danych osobowych odbywa się na podstawie art. 6 ust. 1 lit. f)
            Rozporządzenia. Przetwarzanie podanych danych osobowych jest
            niezbędne do celów wynikających z prawnie uzasadnionych interesów
            realizowanych przez Administratora, tj. udostępnienia stosownego
            narzędzia do złożenia zamówienia dotyczącego przewozu taksówką na
            rzecz osoby korzystającej z opcji „voucher”. 8.<br></br>
            <br></br>
            Ponadto, Administrator gromadzi i przetwarza Państwa dane osobowe w
            postaci imienia, numeru telefonu, adresu email na podstawie art. 6
            ust. 1 lit. f) Rozporządzenia, tj. prawnie uzasadnionego interesu
            Administratora, jakim jest marketing bezpośredni własnych usług, a
            także badanie, w szczególności za pomocą ankiet, satysfakcji z
            usług,, z tym zastrzeżeniem, że w zakresie usług stanowiących
            świadczenie usług drogą elektroniczną w rozumieniu ustawy z dnia 18
            lipca 2002 r. o świadczeniu usług drogą elektroniczną Administrator
            może przetwarzać dane, jedynie za Państwa zgodą i dla celów reklamy,
            badania rynku oraz zachowań i preferencji usługobiorców z
            przeznaczeniem wyników tych badań na potrzeby polepszenia jakości
            usług świadczonych przez Administratora (co dotyczy także
            profilowania), inne dane dotyczące Państwa, które nie są niezbędne
            do świadczenia usługi drogą elektroniczną. Mogą Państwo w każdej
            chwili wnieść sprzeciw wobec takiego przetwarzania, co spowoduje
            natychmiastowe zaprzestanie przetwarzania przez Administratora
            Państwa danych osobowych w tym celu, a w razie przetwarzania na
            podstawie zgody mogą Państwo w każdej chwili odwołać (cofnąć)
            udzieloną zgodę.<br></br>
            <br></br>
            9. Przetwarzanie danych osobowych w postaci imienia, numeru
            telefonu, adresu e-mail w celach marketingowych realizowanych przez
            Partnerów Administratora może odbywać się jedynie za Państwa zgodą,
            na podstawie art. 6 ust. 1 lit. a) Rozporządzenia. Zgoda na
            przetwarzanie danych osobowych w takim przypadków obejmuje zgodę na
            przetwarzanie danych osobowych w dla celów marketingu Administratora
            oraz jego Partnerów, takich jak podwykonawcy, firmy i korporacje
            taksówkarskie, partnerzy prowadzący social media, reklamodawcy i
            podmioty współorganizujące z Administratorem akcje marketingowe,
            promocje, konkursy itp. W takim jednak przypadku żadne dane osobowe
            nie są przekazywane tym podmiotom dla celów marketingowych, a są
            przetwarzane wyłącznie przez Administratora, w tym za pośrednictwem
            automatycznych narzędzi marketingowych. Podanie danych osobowych w
            tych celach jest dobrowolne i leży w sferze uznania osoby, której
            dane te dotyczą, a ich przetwarzanie przez Administratora zależy od
            uzyskania zgody. Zgodę mogą Państwo wycofać w dowolnym momencie bez
            wpływu na zgodność z prawem przetwarzania, którego dokonano na
            podstawie zgody przed jej cofnięciem. Szerzej na temat warunków
            udzielenia i wycofania zgody w punkcie 3 niniejszej polityki.
            <br></br>
            <br></br>
            10. Administrator przetwarza podane przez Państwa dane osobowe w
            formularzu kontaktowym w celu realizacji usługi świadczonej drogą
            elektroniczną – formularz kontaktowy. W tym celu Administrator
            gromadzi Państwa dane osobowe takie jak: imię, adres e-mail, numer
            telefonu. Podanie adresu e-mail jest niezbędne do udzielania
            odpowiedzi na zapytanie złożone poprzez formularz kontaktowy drogą
            elektroniczną. W przypadku Państwa prośby o kontakt telefoniczny,
            niezbędne jest również podanie numeru telefonu. Przetwarzanie odbywa
            się na podstawie art. 6 ust. 1 lit. b) Rozporządzenia.<br></br>
            <br></br>
            11. W razie, gdy przetwarzanie danych jest fakultatywne, dane będą
            przetwarzane na podstawie zgody, co będzie wynikać z treści
            udzielonej zgody. Dane mogą być przetwarzane również na podstawie
            uzasadnionego interesu Administratora. Zakres przetwarzanych danych
            zależy w szczególności od wypełnionego formularza oraz usługi lub
            formy kontaktu, z której Państwo korzystacie. Administrator może
            stosować różne poziomy zgód, od których zależy zakres przetwarzanych
            danych, a także sposób i cele przetwarzania.<br></br>
            <br></br>
            12. Administrator wykorzystuje także informacje zawarte w plikach
            cookies w celach analitycznych. Dostarczają one danych o Państwa
            aktywności w ramach korzystania z Aplikacji. Korzystanie z plików
            cookies odbywa się na podstawie Państwa zgody. Mogą Państwo w każdej
            chwili wyłączyć pliki cookies poprzez zmianę ustawień w swojej
            przeglądarce. Szczegóły dotyczące sposobu korzystania z plików
            cookies znajdą Państwo w Polityce cookies.<br></br>
            <br></br>
            13. Aby zapewnić Państwu najbardziej efektywne korzystanie ze strony
            internetowej a także by dopasować jej treść i móc zaoferować Państwu
            jak najbardziej dopasowaną do Waszych potrzeb ofertę, będziemy
            przetwarzać dane w postaci:<br></br>
            <br></br>
            -plików cookies<br></br>- daty oraz godziny Państwa wizyty na
            stronie internetowej,<br></br>- właściwości Państwa urządzenia, a w
            szczególności systemu operacyjnego, przeglądarki internetowej oraz
            rozmiaru<br></br>
            okna przeglądarki,<br></br>- adres IP Państwa urządzenia,<br></br>-
            identyfikatory urządzenia, na które składają się indywidualne cechy
            Państwa urządzenia mobilnego. Identyfikatory.<br></br>
            Urządzenia umożliwiają nam rozpoznanie Państwa urządzenia na naszej
            stronie.<br></br>
            <br></br>
            14. Strona realizuje funkcje pozyskiwania informacji oraz danych
            osobowych o użytkownikach i ich zachowaniu także poprzez zapisywanie
            w urządzeniach końcowych pliki cookie (tzw. "ciasteczka").
            Administrator wykorzystuje informacje zawarte w plikach cookies w
            celach usprawnienia funkcjonowania Strony. Dostarczają danych o
            aktywności użytkowników na Stronie. Korzystanie z plików cookies
            odbywa się na podstawie Państwa zgody. Mogą Państwo w każdej chwili
            wyłączyć pliki cookies poprzez zmianę ustawień w swojej
            przeglądarce. Zasady korzystania określa Polityka Cookies.<br></br>
            <br></br>
            15. Administrator jest przedsiębiorcą i nieustannie dąży do
            polepszania produktów i narzędzi których używa do rozwoju naszego
            biznesu. Dlatego stara się, aby jego strony internetowe były
            zaprojektowane w najlepszy sposób i by odwiedzało je jak najwięcej
            osób zainteresowanych współpracą. Aby poprawić jakość Strony,
            Administrator może wykorzystywać narzędzia określane potocznie jako
            “śledzące”. Umożliwiają nam one monitorowanie skuteczności ofert
            sieciowych. Dzięki nim możemy gromadzić takie dane jak np. :
            <br></br>
            <br></br>- informacje, za pomocą jakich linków użytkownicy online
            przekierowywani są na Stronę<br></br>- informacje kiedy i jak często
            odwiedzania była Strona<br></br>- informację jakie informacje są
            wyszukiwane,<br></br>- które linki bądź oferty są na Stronie
            otwierane<br></br>
            Na podstawie powyższych informacji Administrator może tworzyć
            statystyki, które pomagają uczynić Stronę atrakcyjniejszą oraz
            lepiej dostosowaną do potrzeb i preferencji osób odwiedzających.
            <br></br>
            <br></br>
            Administrator nie tworzy profili użytkowników. Korzystanie z tych
            narzędzi nie powoduje automatycznej identyfikacji osób fizycznych i
            nie wykorzystuje ich nigdy po to, aby zidentyfikować osoby
            odwiedzające Stronę<br></br>
            <br></br>
            16. W odniesieniu do Państwa danych osobowych, Administrator nie
            podejmuje zautomatyzowanych decyzji w rozumieniu Rozporządzenia, z
            tym zastrzeżeniem, że: – Państwa dane mogą być profilowane dla
            potrzeby dostarczania spersonalizowanych treści w Aplikacji, tj.
            realizacji funkcji Aplikacji polegającej na przedstawieniu oferty
            usług przewozu taksówką w jak największym stopniu odpowiadających
            Państwa preferencjom- dotyczy sytuacji wprowadzenia takiej
            funkcjonalności Aplikacji.<br></br>
            <br></br>– dane o sposobie korzystania z Aplikacji i usług
            oferowanych za pośrednictwem Aplikacji, a także dane kontaktowe mogą
            być wykorzystywane dla potrzeb wysyłania spersonalizowanych
            komunikatów dotyczących korzystania z usług Administratora<br></br>
            <br></br>
            Takie przetwarzanie jest niezbędne do wykonania umowy o korzystanie
            z Aplikacji lub innej umowy o usługę świadczoną drogą elektroniczną,
            stosownie do treści art. 22 ust. 1 lit a) Rozporządzenia;<br></br>
            <br></br>
            13. Administrator przechowuje Państwa dane osobowe jedynie przez
            okres niezbędny do realizacji świadczonych usług, w tym dochodzenia
            roszczeń oraz zachowania zgodności z wymaganiami wynikającymi z
            obowiązujących przepisów, w tym przepisów podatkowych lub przez
            okres niezbędny do realizacji pozostałych celów, w których zgodnie z
            niniejszą Polityką Prywatności Administrator może przetwarzać
            Państwa dane. W przypadku danych osobowych przetwarzanych na
            podstawie prawnie uzasadnionego interesu Administratora, w tym w
            celu realizacji usługi przy użyciu „vouchera”, Administrator
            przechowuje podane dane osobowe przez okres niezbędny do celu
            przetwarzania lub do czasu wniesienia skutecznego sprzeciwu. W
            przypadku danych osobowych przetwarzanych w celach marketingu
            bezpośredniego Administratora, Administrator przechowuje podane dane
            osobowe przez okres niezbędny do celu przetwarzania lub do czasu
            wniesienia skutecznego sprzeciwu. W przypadku danych osobowych
            przetwarzanych na podstawie udzielonej zgody, Administrator
            przechowuje podane dane osobowe przez okres niezbędny do celu
            przetwarzania lub do wycofania zgody. Po upływie tych okresów
            Państwa dane osobowe zostaną usunięte.<br></br>
            <br></br>
            14. W przypadku kontaktowania się przez Centralę specjalny komunikat
            informuje osobę telefonująca, o tym, że rozmowa telefoniczna jest
            nagrywana. Warunkiem kontynuowania rozmowy telefonicznej jest
            złożenie oświadczenia o wyrażeniu zgody na jej nagrywanie. Wyrażenie
            zgody może nastąpić poprzez dobrowolne kontynuowanie rozmowy przez
            osobę telefonującą bądź w inny sposób wynikający z komunikatu.
            Niezłożenie oświadczenia o wyrażeniu zgody na nagrywanie rozmowy,
            skutkuje tym, że rozmowa nie zostanie zarejestrowana i zostanie
            zakończona.<br></br>
            <br></br>
            2. Prawa osoby, której dane dotyczą<br></br>
            <br></br>
            1. Przysługuje Państwu prawo do uzyskania od Administratora
            potwierdzenia, czy przetwarza on Państwa dane osobowe, prawo żądania
            dostępu do tych danych oraz prawo uzyskania od Administratora
            informacji dotyczących celów przetwarzania i kategorii
            przetwarzanych danych osobowych, informacji o odbiorcach lub
            kategoriach odbiorców, którym dane osobowe są ujawniane, planowanym
            okresie przechowywania danych osobowych, źródle danych w przypadku,
            gdy zostały zebrane nie od osoby, której dotyczą oraz informacji,
            czy Administrator podejmuje wobec podmiotu danych zautomatyzowane
            decyzje, w tym m.in. w oparciu o profilowanie. Mają Państwo także
            prawo do uzyskania kopii danych.<br></br>
            <br></br>
            2. Ponadto przysługuje Państwu prawo żądania sprostowania danych
            osobowych, prawo żądania usunięcia danych osobowych, prawo żądania
            ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo
            do wniesienia sprzeciwu wobec przetwarzania. Z uprawnień tych mogą
            Państwo skorzystać:<br></br>
            <br></br>• w odniesieniu do żądania usunięcia danych: gdy dane
            osobowe nie są już niezbędne do celów, w których zostały zebrane lub
            w inny sposób przetwarzane, gdy osoba, której dane dotyczą, cofnęła
            zgodę, na której opiera się przetwarzanie i nie ma innej podstawy
            prawnej przetwarzania, gdy osoba, której dane dotyczą, wnosi
            sprzeciw na mocy art. 21 ust. 1 wobec przetwarzania i nie występują
            nadrzędne prawnie uzasadnione podstawy przetwarzania lub osoba,
            której dane dotyczą, wnosi sprzeciw na mocy art. 21 ust. 2
            Rozporządzenia wobec przetwarzania, gdy dane osobowe były
            przetwarzane niezgodnie z prawem, gdy dane osobowe muszą zostać
            usunięte w celu wywiązania się z obowiązku prawnego przewidzianego w
            prawie Unii lub prawie państwa członkowskiego, któremu podlega
            Administrator, gdy dane osobowe zostały zebrane w związku z
            oferowaniem usług społeczeństwa informacyjnego,<br></br>
            <br></br>• w odniesieniu do żądania sprostowania danych: gdy Państwa
            dane są nieprawidłowe lub niekompletne; w odniesieniu do żądania
            usunięcia danych: gdy Państwa dane nie będą już niezbędne do celów,
            dla których zostały zebrane przez Administratora; cofną Państwo
            swoją zgodę na przetwarzanie danych; zgłoszą Państwo sprzeciw wobec
            przetwarzania swoich danych; Państwa dane będą przetwarzane
            niezgodnie z prawem; dane powinny być usunięte w celu wywiązania się
            z obowiązku wynikającego z przepisu prawa lub dane zostały zebrane w
            związku z oferowaniem usług społeczeństwa informacyjnego;<br></br>
            <br></br>• w odniesieniu do żądania ograniczenia przetwarzania
            danych: gdy Państwa dane są nieprawidłowe – mogą Państwo żądać
            ograniczenia ich przetwarzania na okres pozwalający Administratorowi
            sprawdzić prawidłowość tych danych; przetwarzanie Państwa danych
            odbywa się niezgodnie z prawem, ale nie chcą Państwo, aby zostały
            usunięte; Państwa dane nie będą już potrzebne Administratorowi, ale
            będą potrzebne Państwu do ustalenia, dochodzenia lub obrony
            roszczeń; lub wnieśli Państwo sprzeciw wobec przetwarzania danych –
            do czasu ustalenia, czy prawnie uzasadnione podstawy po stronie
            Administratora są nadrzędne wobec podstawy sprzeciwu;<br></br>
            <br></br>
            Jeżeli przetwarzanie zostało ograniczone, takie dane osobowe można
            przetwarzać, z wyjątkiem przechowywania, wyłącznie za zgodą osoby,
            której dane dotyczą, lub w celu ustalenia, dochodzenia lub obrony
            roszczeń, lub w celu ochrony praw innej osoby fizycznej lub prawnej,
            lub z uwagi na ważne względy interesu publicznego Unii lub państwa
            członkowskiego.<br></br>
            <br></br>• w odniesieniu do prawa przenoszenia danych: gdy
            przetwarzanie Państwa danych odbywa się na podstawie udzielonej
            zgody lub umowy oraz, gdy przetwarzanie to odbywa się w sposób
            zautomatyzowany;<br></br>
            <br></br>• w odniesieniu do prawa wniesienia sprzeciwu: gdy
            przetwarzanie Państwa danych osobowych odbywa się na podstawie
            prawnie uzasadnionego interesu, a sprzeciw jest uzasadniony ze
            względu na Państwa szczególną sytuację, a także gdy Państwa dane
            osobowe przetwarzane są na potrzeby marketingu bezpośredniego, w tym
            są profilowane.<br></br>
            <br></br>
            3. Przysługuje również Państwu prawo wniesienia skargi do organu
            nadzorczego, w przypadku uznania, że dotyczące Państwa przetwarzanie
            danych osobowych narusza przepisy Rozporządzenia.<br></br>
            <br></br>
            4. Wdrożone procedury bezpieczeństwa oznaczają, że przed wykonaniem
            przysługujących Państwu uprawnień możemy zwrócić się o potwierdzenie
            tożsamości.<br></br>
            <br></br>
            3. Zgoda na przetwarzanie danych osobowych<br></br>
            <br></br>
            1. Jeżeli Administrator przetwarza dane osobowe, które nie są
            niezbędne do realizacji usługi, podanie przez Państwa tych danych
            następuje zawsze dobrowolnie, po uprzednim wyrażeniu przez Państwa
            zgody na przetwarzanie podanych danych.<br></br>
            <br></br>
            2. Wyrażenie zgody następuje po zapoznaniu się z niniejszą polityką,
            poprzez zaznaczenie odpowiedniego okienka wyboru. W takim przypadku
            wyrażają Państwo zgodę na gromadzenie i przetwarzanie przez
            Administratora podanych przez siebie danych osobowych w celu
            wyraźnie wskazanym przy wyrażaniu zgody.<br></br>
            <br></br>
            3. Mogą Państwo w dowolnym momencie wycofać swoją zgodę, w taki sam
            sposób, w jaki zgoda została ona udzielona, tj. poprzez odznaczenie
            odpowiedniego okienka wyboru. Ponadto mogą Państwo wycofać zgodę
            wysyłając do Administratora oświadczenie o wycofaniu zgody w sposób
            wskazany w punkcie 6 niniejszej polityki. 4. Wycofanie zgody nie
            wpływa na zgodność z prawem przetwarzania, którego dokonano na
            podstawie zgody przed jej wycofaniem.<br></br>
            <br></br>
            4. Administrator stosuje różne poziomy zgód, które mogą
            charakteryzować się różnym zakresie przetwarzanych danych oraz
            różnym celem przetwarzania. W szczególności odrębne zgody mogą
            dotyczyć takich form i celów przetwarzania takich jak: przekazanie
            danych innemu administratorowi, przetwarzanie danych dla potrzeb
            kontaktu mailowego, przetwarzanie danych dla potrzeb kontaktu
            telefonicznego, przetwarzanie danych dla celów marketingowych,
            profilowanie, przetwarzanie danych w ramach używania plików cookies.
            Każdorazowy cel i zakres przetwarzania danych wynika z treści
            określonej formularzem zgody. Prosimy o zapoznanie się z tą treścią
            przed złożeniem oświadczenia o wyrażeniu zgody. Dodatkowo mogą
            zostać Państwo poproszeni o dodatkowe zgody, wynikające ze
            szczególnych przepisów, takie jak na posługiwanie się
            telekomunikacyjnym urządzeniem końcowym lub wysyłani informacji
            handlowych drogą elektroniczną.<br></br>
            <br></br>
            4. Informacja o odbiorcach / kategoriach odbiorców danych osobowych
            <br></br>
            <br></br>
            1. W celu realizacji i rozliczania usługi przewozu taksówką,
            Administrator będzie przekazywał Państwa dane, w tym dane osobowe
            następującym odbiorcom:<br></br>
            <br></br>• dane dotyczące lokalizacji (współrzędne GPS adresu
            odbioru), współrzędne miejsca docelowego, a także dane dotyczące
            czasu podróży (np. czas odbioru i czas dotarcia do miejsca
            docelowego), będą przekazywane kierowcom, którzy ubiegają się o dany
            kurs;<br></br>
            <br></br>• dane dotyczące lokalizacji (współrzędne GPS adresu
            odbioru), współrzędne miejsca docelowego, a także dane dotyczące
            czasu podróży (np. czas odbioru i czas dotarcia do miejsca
            docelowego) oraz Państwa dane osobowe w postaci imienia i nazwiska
            oraz numeru telefonu będą przekazywane kierowcom, którzy przyjęli
            zamówienie usługi przewozu taksówką. Ponieważ realizacja usługi
            przewozu taksówką może również następować za pośrednictwem podmiotów
            prowadzących korporacje taksówkarskie lub innych podwykonawców,
            powyższe dane mogą być przekazywane takim podmiotom, w celu ich
            dalszego przekazania kierowcom.<br></br>
            <br></br>
            2. Administrator korzysta również częściowo z zewnętrznych dostawców
            usług, którzy w imieniu Administratora przetwarzają dane osobowe,
            np. dostawców usług hostingu, dostawców usług poczty elektronicznej,
            dostawców systemów do marketingu i wysyłki wiadomości email, analizy
            ruchu w serwisach, analizy skuteczności kampanii marketingowych,
            wspierania funkcjonalności konta, firm windykacyjnych, dostawców
            usług płatniczych. Przekazanie danych może jednak służyć wyłącznie
            realizacji ich usługi. Administrator korzysta wyłącznie z usług
            takich podmiotów, którzy zapewniają wystarczające gwarancje ochrony
            praw osób, których dane dotyczą. Przetwarzanie danych osobowych
            przez te podmioty odbywa się na podstawie pisemnych umów zawartych z
            Administratorem. Podmioty te przestrzegają wytycznych Administratora
            i podlegają prowadzonym przez niego audytom.<br></br>
            <br></br>
            3. Odbiorcami Pani/Pana danych mogą być także:<br></br>
            <br></br>
            a) kontrahenci Administratora oraz ich podwykonawcy, o ile Pani/Pana
            danę będą potrzebne do wykonania umowy lub innej współpracy łączącej
            Administratora z powyższymi podmiotami. W przypadku braku takiej
            konieczności kontrahenci Administratora nie będą odbiorcami danych;
            <br></br>
            <br></br>
            b) klienci Administratora, o ile Pani/Pana dane będą potrzebne do
            wykonania umowy łączącej administratora z powyższymi podmiotami. W
            przypadku braku takiej konieczności klienci Administratora nie będą
            odbiorcami danych;<br></br>
            <br></br>
            c) podmioty współpracujące z Administratorem dla potrzeb związanych
            z wykonaniem umowy lub współpracy, wykonania obowiązków wynikających
            z przepisów prawa lub innych celów, w których Administrator może
            przetwarzać Pani/Pana dane, np. firmy świadczące usługi hostingowe,
            rachunkowe itp.<br></br>
            <br></br>
            4. Państwa dane osobowe mogą być również udostępnione podmiotom
            uprawnionym do ich uzyskania na podstawie obowiązującego prawa np.
            organom ścigania w razie zgłoszenia przez organ żądania na
            odpowiedniej podstawie prawnej (np. dla potrzeb toczącego się
            postępowania karnego).<br></br>
            <br></br>
            5. Administrator korzysta z usługi Google Analytics, w celu analizy
            ruchu w sieci internetowej, zbierania i analizy danych dotyczących
            zachowania osób korzystających z Aplikacji lub stron Administratora.
            Analiza ruchu w sieci wykorzystywana jest głównie do optymalizacji
            strony internetowej oraz celów marketingowych. Zgodnie z określonymi
            funkcjonalnościami Google Analitycs również piki „cookies” i zawarte
            w nich dane mogą być wykorzystywane w celach marketingowych, a dane
            w nich zawarte również służyć profilowaniu.<br></br>
            <br></br>
            Operatorem usługi Google Analytics jest spółka Google Inc., 1600
            AmphitheatrePkwy, MountainView, CA 94043-1351 z siedzibą w USA.
            Użytkownik może nie wyrazić zgody na gromadzenie danych związanych z
            korzystaniem z informacji zbieranych przez Google Analytics, oraz na
            przetwarzanie tych danych przez firmę Google, a także może
            uniemożliwić takie działania. W tym celu należy pobrać dodatek do
            przeglądarki dostępny tutaj: tools.google.com/dlpage/gaoptout, a
            następnie zainstalować go. Warunki użytkowania:
            http://www.google.com/analytics/terms/pl.html<br></br>
            <br></br>
            Polityka Prywatności: https://policies.google.com/privacy?hl=pL
            <br></br>
            <br></br>
            6. Administrator może również korzystać r z funkcji remarketingu w
            Google AdWords w Google Inc, 1600 AmphitheatreParkway, MountainView,
            CA 94043, USA. Remarketing pozwala na stworzenie spersonalizowanej
            „podpowiedzi” dla odbiorcy, który wcześniej przeglądał daną
            stronę/strony w witrynie Google Inc. po to, aby wyświetliła się
            reklama produktu/usługi którą możecie być Państwo zainteresowani. W
            tym celu, w Państwa przeglądarce są przechowywane pliki cookie
            gromadzone z poszczególnych stron odwiedzanych przez Państwa za
            pośrednictwem przeglądarki Google. Odwiedziny użytkowników
            gromadzone są za pomocą plików cookie, które służą do identyfikacji
            przeglądarki internetowej samego urządzenia; dane osobowe nie są
            przechowywane. W każdej chwili mogą Państwo ograniczyć lub wyłączyć
            zapisywanie plików cookie przez Google, postępując zgodnie ze
            wskazanym linkiem : www.google.com/settings/ads/plugin. Więcej
            informacji na temat Google Adwords oraz polityki prywatności Google
            znajdą Państwo pod adresem: www.google.com/privacy/ads.<br></br>
            <br></br>
            7. Pliki cookie mogą być wykorzystane przez sieci reklamowe, w
            szczególności sieć Google, do wyświetlenia reklam dopasowanych do
            sposobu, w jaki użytkownik korzysta ze Strony. W tym celu mogą
            zachować informację o ścieżce nawigacji użytkownika lub czasie
            pozostawania na danej stronie.<br></br>
            <br></br>
            8. Administrator posiada również stronę typu fanpage w serwisie
            internetowym Facebook do której kierują linki zawarte na Stronie. W
            związku z tym dane w postaci imienia i nazwiska lub adresu email
            mogą być gromadzone, a następnie udostępnianie operatorowi serwisu
            Facebook, a w takim przypadku przetwarzanie danych dokonywane jest w
            celu korzystania ze strony administratora w serwisie Facebook i
            marketingu z pomocą serwisu Facebook.Strona może korzystać z wtyczki
            społecznościowej (ang. SocialPlugins) portalu społecznościowego
            Facebook.com, zarządzanego przez Facebook Inc., 1601 S. California
            Ave, PaloAlto, CA 94304, USA ("Facebook"). Wtyczki są oznaczone logo
            portalu, jego ikoną lub też dodatkiem "Facebook SocialPlugin". W
            przypadku uruchomienia przez Użytkownika strony internetowej, która
            zawiera taką wtyczkę, przeglądarka utworzy bezpośrednie połączenie z
            serwerem Facebook. Zawartość wtyczki zostaje przez portal
            Facebook.com bezpośrednio przekazana do przeglądarki i przez nią
            włączona w stronę internetową. Inter-Dywiz sp. z o.o. nie ma w tym
            zakresie żadnego wpływu na rozmiar danych, które Facebook pobiera za
            pomocą tej wtyczki. Jeśli jesteś członkiem Facebooka ale nie chcesz,
            by portal ten kojarzył zgromadzone dane użytkownika, musisz dokonać
            na swoim koncie na Facebook’u odpowiednich ustawień. Za udzielanie
            dostępu do Waszych danych udostępnionych przez Was Facebook’owi
            odpowiada ten podmiot i w przypadku wątpliwości należy zwrócić się
            do bezpośrednio do tego podmiotu albo dokonać zmian w ustawieniach
            konta na Facebook’u Na podobnej zasadzie wskazane dane mogą być
            przekazywane innym podobnym serwisom społecznościowym i prowadzącym
            je podmiotom.<br></br>
            <br></br>
            9. Ponadto, w związku z korzystaniem przez Administratora z usług
            Google np. usługi G Suite, dane mogą być przekazywane poza obszar
            EOG wyłącznie jednak przy zachowaniu gwarancji zapewnienia
            odpowiedniego stopnia ochrony np. wynikającego z zatwierdzonych
            przez Komisję Europejską standardowych klauzul umownych.<br></br>
            <br></br>
            10. Do celów wynikających z prawnie uzasadnionych interesów
            realizowanych przez Administratora jakimi jest dochodzenie roszczeń,
            Państwa dane osobowe w zakresie danych indentyfikacyjnych,
            kontaktowych i adresowych mogą być przekazywane firmom
            windykacyjnych i innym podmiotom świadczącym usługi związane z
            windykacją roszczeń.<br></br>
            <br></br>
            11. Państwa dane mogą być również przekazywane organom, które mogą
            ich żądać stosownie do przepisów prawa.<br></br>
            <br></br>
            5. Bezpieczeństwo danych osobowych<br></br>
            <br></br>
            1. Administrator przetwarza Państwa dane osobowe zgodnie z
            przepisami Rozporządzenia, w tym stosuje odpowiednie środki
            techniczne i organizacyjne w celu zapewnienia bezpieczeństwa i
            odpowiedniej poufności i integralności danych osobowych, w tym
            ochrony przed nieuprawnionym dostępem do nich, przed niedozwolonym
            lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą,
            nieautoryzowaną zmianą, zniszczeniem lub uszkodzeniem.<br></br>
            <br></br>
            2. Podczas pobierania Państwa danych osobowych w ramach rejestracji
            konta w Aplikacji, ich transmisja odbywa za pomocą szyfrowanego
            połączenia SSL.<br></br>
            <br></br>
            6. Dane kontaktowe<br></br>
            <br></br>
            1. Wszelkie żądania, prośby, powiadomienia, zapytania odnoszące się
            do przetwarzania danych osobowych, mogą Państwo kierować za
            pośrednictwem formularza kontaktowego znajdującego się na stronie
            www.personaltaxi.pl, mailowo na adres: biuro@personaltaxi.pl lub
            pisemnie na adres Inter-Dywiz sp. z o.o. ul. Lotnicza 6/2 31-462
            Kraków.<br></br>
            <br></br>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
