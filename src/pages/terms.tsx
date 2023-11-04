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
            Terms of service<br></br>Regulamin usług
          </p>
          <div className="flex mb-[40px]">
            <div
              ref={RODO_PL_Button}
              className="text-[10px] lg:text-[18px] lg:w-1/3 w-1/2 py-[10px] px-[6px] rounded-[5px] mr-[10px] font-bold border-gray-900 cursor-pointer"
              onClick={handleChangingPolicyToPL}
            >
              Regulamin usług<br></br>wersja PL
            </div>
            <div
              ref={RODO_EN_Button}
              className="text-[10px] lg:text-[18px] lg:w-1/3 w-1/2 py-[10px] px-[6px] rounded-[5px] font-bold border-gray-900 cursor-pointer border-b-2"
              onClick={handleChangingPolicyToEN}
            >
              Terms of services<br></br>version EN
            </div>
          </div>
          <p ref={RODO_EN} className="inline">
            <b>I. DEFINITIONS</b> <br></br>
            <br></br>
            1. Personal Data Administrator - the entity that decides on the
            purposes and means of personal data processing. The administrator of
            Customers&apos; personal data is the Service Provider.
            <br></br>
            <br></br>2. eVoucher - a document in electronic form, authorizing
            the execution of a purchased Service, generated in advance through
            the Store, sent to the Client by the Service Provider to the
            indicated e-mail address.<br></br>
            <br></br>3. Client - both Buyer and Consumer.<br></br>
            <br></br>4. Consumer - an adult individual with full legal capacity,
            making an Order through the Store, not directly related to his/her
            business or professional activity, as well as an individual
            concluding a contract directly related to his/her business activity,
            when the content of the contract indicates that it is not of a
            professional nature for him/her, resulting in particular from the
            subject of his/her business activity, made available on the basis of
            the provisions of the Central Register and Information on Business
            Activity.<br></br>
            <br></br>5. shopping cart - an element of the Store&apos;s software
            in which the Services selected by the Customer for purchase are
            visible.<br></br>
            <br></br>
            6. Buyer - an adult individual with the capacity to perform legal
            actions, a legal person or an organizational unit without legal
            personality but with the capacity to perform legal actions, making
            an Order from the Store, directly related to its business or
            professional activity.<br></br>
            <br></br>7. Cookies Policy - a document describing cookies and the
            way they are used on the Store&apos;s website.
            <br></br>
            <br></br>8. Privacy Policy - a document describing the purposes and
            methods of processing personal data and the rights of data subjects.
            <br></br>
            <br></br>9. Rules and Regulations of the Store - these rules and
            regulations for the sale of Services and provision of services by
            electronic means, specifying the rules for the provision and use of
            services offered by the Service Provider through the Store to
            Customers. The Regulations define the rights and obligations of the
            Client and the Service Provider. With regard to services provided
            electronically, these Rules and Regulations of the Store are the
            rules and regulations referred to in Article 8 of the Act of July
            18, 2002 on the provision of services by electronic means.<br></br>
            <br></br>
            10. Store - an online store available at the following address:
            personaltaxi.pl through which the Customer may purchase Services
            from the Store.<br></br>
            <br></br>11. Participant - a natural person who will use the
            Service. The Customer may or may not be a Participant.
            <br></br>
            <br></br>12. contract of carriage - a contract concluded between the
            Service Provider and the Client at the time of purchase of the
            Service, in accordance with the Order.<br></br>
            <br></br>
            <br></br>13. contract concluded at a distance - a contract concluded
            with the Client within an organized system of concluding contracts
            at a distance (within the Store), without the simultaneous physical
            presence of the parties, with the exclusive use of one or more means
            of distance communication up to and including the conclusion of the
            contract.
            <br></br>
            <br></br>14. service - services of transportation of persons or
            goods performed on the territory of the Republic of Poland,
            described in detail on the website: personaltaxi.pl.
            <br></br>
            <br></br>
            15. Service Provider - the owner, administrator and operator of the
            Store - Inter-Dywiz sp. z o.o., Lotnicza 6/2 31-462 Kraków, entered
            in the Register of Entrepreneurs kept by the District Court for
            Kraków - Śródmieście in Kraków, XI Commercial Department of the
            National Court Register under KRS number: 0000496661, holding NIP:
            6751496482, REGON: 123040168. 16. Purchase of Services - reservation
            of Services and their payment by the Customer.<br></br>
            <br></br>17. Order - the Customer&apos;s declaration of intent aimed
            directly at concluding a contract of carriage of persons with the
            Service Provider by completing and submitting the Order Form in
            electronic form available on the Store&apos;s website, including
            reading and accepting the Terms and Conditions of the Online Store.
            <br></br>
            <br></br>
            II. <b>GENERAL PROVISIONS</b> <br></br>
            <br></br>
            1. The Store, available at the address; personaltaxi.pl and operated
            by Inter-Dywiz sp. z o.o. with its registered seat in Krakow,
            Lotnicza 6/2 31-462 Krakow, registered in the Register of
            Entrepreneurs of the National Court Register kept by the District
            Court for Krakow - Śródmieście in Krakow, XI Economic Department of
            the National Court Register under the KRS number: 0000496661,
            holding NIP: 6751496482, REGON: 123040168.<br></br>
            <br></br>
            <br></br>2. These Regulations set out the terms and conditions of
            use of the Store, and in particular sets out the rules and
            procedures for the conclusion of an agreement to purchase Services,
            placing Orders in the Store, the execution of Orders, the principles
            of payment of the price, the exercise of the right of withdrawal,
            the performance of Services.<br></br>
            <br></br>3. The Terms and Conditions are made available free of
            charge through the Store, which provides the opportunity to read its
            contents before concluding a contract.
            <br></br>
            <br></br>4. The Customer acknowledges that customer service in the
            Store is carried out using a data communications system, ensuring
            the processing of personal data referred to in the Privacy Policy
            made available on the Store&apos;s website, through a
            telecommunications network, in accordance with the Law on Provision
            of Electronic Services and the Regulation of the European Parliament
            and of the Council (EU) 2016/679 of April 27, 2016 on the protection
            of natural persons in relation to the processing of personal data
            and on the free movement of such data and repealing Directive
            95/46/EC.
            <br></br>
            <br></br>5. The Store uses cookies. Cookies used on the Store&apos;s
            website are primarily used by the Service Provider or its
            contractors to collect statistical data about the behavior of
            Customers, the number of Customers and how they use the Store&apos;s
            content, as well as to use the collected data to improve the quality
            of services offered by the Service Provider and to direct
            personalized and tailored content to Customers. Detailed information
            regarding the rules of storing and accessing information on the
            Customer&apos;s devices is contained in the Cookies Policy available
            on the Store&apos;s website.<br></br>
            <br></br>
            <br></br>6. In order to use the Store, it is required to have a
            final device with Internet access, with an installed web browser,
            the configuration of which allows you to access the Store, as well
            as to accept and use cookies.<br></br>
            <br></br>
            <br></br>7. The technical requirements necessary to use the Store,
            which the Customer should meet are: <br></br>
            <br></br>
            a. a terminal device connected to the Internet, meeting the
            technical requirements.<br></br>
            <br></br>
            b. an Internet browser that allows the correct display of the
            content of the Service - including but not limited to Opera,
            Firefox, Edge, Safari, Chrome version no older than 2 years from the
            date of official release, c. an active electronic mail (e-mail)
            account, d. an active number in the mobile public telephone network.
            <br></br>
            <br></br>8. the scope and prices of the Services are described in
            detail onpersonaltaxi.pl.<br></br>
            <br></br>9. purchase of the Services is conditional on the
            Customer&apos;s acceptance of the rules set forth in these Shop
            Regulations.<br></br>
            <br></br>10.The Customer, when accepting the Store Rules, shall do
            so on behalf of himself and/or the Participants on whose behalf he
            is making the Purchase of Services. Once the Purchase of Services
            has been made, the Customer is responsible for providing the
            Participants with all information regarding the Service and making
            all payments for the reserved Services.<br></br>
            <br></br>
            III. <b>PURCHASE OF SERVICES</b>
            <br></br>
            <br></br>
            1. Purchase of Services shall be made on the basis of a completed
            form on the Store&apos;s website, acceptance of the Store&apos;s
            Terms and Conditions and payment.<br></br>
            <br></br>2. Before making a Purchase of Services, the Customer
            should read in detail the scope of individual Services located on
            the Store&apos;s website.<br></br>
            <br></br>3. During the Purchase of Services the Customer is obliged
            to provide correct and true data.
            <br></br>
            <br></br>4. In order to place an Order, it is necessary for the
            Customer to perform the following actions: a. select, by adding to
            the shopping cart, the Service ordered, along with specifying the
            date and time of the Service, the number of Participants and
            indicating the place of collection depending on the type of Service
            - in the Additional Information in the form or at the stage of
            configuring the Service, b. fill in the order form with such data as
            name, surname, address, e-mail address and telephone number of the
            Customer, c. select the form of payment, d. accept the Rules of the
            Store, e. confirm the will to conclude a contract, including the
            selection of the &quot;I buy and pay&quot; button.<br></br>
            <br></br>5. if the Customer selects the box with &quot;YES&quot; for
            Invoice in the order form, the VAT number must be provided. After
            payment of the order, the Invoice will be sent to the email address
            indicated in the form.<br></br>
            <br></br>
            6. During the placement of the Order - until the moment of pressing
            the &quot;Buy and pay&quot; button. - The Customer has the
            opportunity to modify the entered data and in the selection of the
            Service.
            <br></br>
            <br></br>7. After the Buyer has provided all the data necessary to
            place the Order for the Service, a summary of the Order will be
            displayed. The Order sent by the Buyer is the Buyer&apos;s statement
            of intent to reserve the Service and conclude a contract of carriage
            with the Service Provider, in accordance with the provisions of
            these Shop Regulations. After placing an Order, the Buyer will
            receive a message confirming the Order, to the email address he/she
            has previously indicated.<br></br>
            <br></br>8. The contract shall be considered concluded at the moment
            of payment for the Order by the Buyer.<br></br>
            <br></br>9. Once the payment has been credited, the Customer will
            receive an order confirmation via email along with an eVoucher.
            <br></br>
            <br></br>
            IV. <b>PRICES AND PAYMENT</b>
            <br></br>
            <br></br> 1. The prices given by the Service Provider are expressed
            in Polish zloty (PLN) and include VAT.<br></br>
            <br></br>2. Price information provided by the Store is binding from
            the moment of placing an order by the Customer. This price will not
            change regardless of price changes in the Store.<br></br>
            <br></br>3. The Service Provider allows non-cash payment through the
            Site using online payment: online prepayment by bank transfer or by
            Visa, Mastercard, BLIK, PayPal account, Google Pay account, Apple
            Pay, , Przelewy24 and others through an external payment system
            owned by PayPro SA (PayPro) - the Entity providing the Service to
            the Users, with its registered office in Poznań, ul. Pastelowa 8
            (60-198), entered in the Register of Entrepreneurs of the National
            Court Register kept by the District Court Poznań Nowe Miasto and
            Wilda, VIII Economic Department of the National Court Register under
            the KRS number 0000347935, NIP number 7792369887, with a share
            capital of PLN 5,476,300.00, fully paid up, and in the Register of
            National Payment Institutions kept by the Polish Financial
            Supervision Authority under the UKNF number IP24/2014.
            <br></br>
            <br></br>
            4. Transaction settlements are carried out through Przelewy24 on the
            basis of the rules of service available at: przelewy24.pl and based
            on the regulations of the Customer&apos;s bank.<br></br>
            <br></br>
            <br></br>
            V. <b>REALIZATION OF SERVICES</b> <br></br>1. The Customer, when
            ordering the Services, shall specify the date and time of the
            Service, the number of Participants and indicate the place of
            collection depending on the type of the Service - in the Additional
            Information in the form or at the stage of Service configuration.
            <br></br>
            <br></br>2. The Order will be fulfilled on the basis of the eVoucher
            received by the Customer after the Service Purchase. Delivery of the
            eVoucher is made via the Internet, to the email address indicated by
            the Customer.<br></br>
            <br></br>3. The Service is provided exclusively by a driver
            subordinate to the Service Provider. The eVoucher number will be
            provided to the driver via the ICT systems used by the Service
            Provider, which does not exempt the Customer from presenting it to
            the driver.<br></br>
            <br></br>4. Failure of the Customer to arrive at the designated
            pick-up location more than 15 minutes after the agreed time is
            tantamount to cancellation of the Service. In such case, the
            Customer shall not be entitled to a refund of the Service price
            paid.<br></br>
            <br></br>5. In case of delays, changes or any other unforeseen
            circumstances, the Client should contact the Service Provider. In
            the absence of contact by phone or e-mail from the Client, any
            complaints will not be considered.<br></br>
            <br></br>6. Depending on the number of passengers, Transit Services
            are carried out by car or VAN.<br></br>
            <br></br>
            VI. <b>POSSIBILITY TO WITHDRAW</b> <br></br>
            <br></br>1. The consumer has the right to withdraw from the
            Agreement within 14 days from the date of conclusion of the
            Agreement concluded remotely, without giving any reason and without
            incurring costs, subject to paragraphs 2 and 3. 2. At the express
            request of the consumer, performance of the service may begin before
            the expiration of the deadline for withdrawal from the Agreement
            concluded off-premises. If the consumer exercises the right of
            withdrawal after requesting the commencement of the performance of
            the service before the expiration of the withdrawal period, he shall
            be obliged to pay for the services performed until the withdrawal.
            <br></br>
            <br></br>
            3. Once the Service has been provided, the Consumer shall not have
            the right to withdraw from the Contract.<br></br>
            <br></br>4. Sending the Service Provider a statement of withdrawal
            before the deadline for withdrawal, in the form of an email message
            to the Service Provider&apos;s email address,
            tj.biuro@personaltaxi.pl, shall suffice to meet the deadline for
            withdrawal. <br></br>
            <br></br>
            5. The Service Provider shall promptly confirm to the Consumer at
            the e-mail address provided at the conclusion of the contract and
            another if provided in the statement submitted, receipt of the
            statement of withdrawal.<br></br>
            <br></br>6. Pursuant to Article 38 of the Consumer Rights Act, the
            right of withdrawal from a contract concluded off-premises or at a
            distance is not granted to the Consumer with respect to contracts
            for the carriage of goods, if the contract specifies the day or
            period of service provision.<br></br>
            <br></br>
          </p>
          <p ref={RODO_PL} className="hidden">
            I. <b>DEFINICJE</b>
            <br></br>
            <br></br>
            1. Administrator danych osobowych – podmiot decydujący o celach i
            środkach przetwarzania danych osobowych. Administratorem danych
            osobowych Klientów jest Usługodawca.<br></br>
            <br></br>
            2. eVoucher – dokument w formie elektronicznej, uprawniający do
            realizacji zakupionej Usługi, wygenerowanej uprzednio za
            pośrednictwem Sklepu, przesłany Klientowi przez Usługodawcę na
            wskazany adres mailowy.
            <br></br>
            <br></br>
            3. Klient – zarówno Kupujący, jak i Konsument.<br></br>
            <br></br>
            4. Konsument – pełnoletnia osoba fizyczna mająca pełną zdolność do
            czynności prawnych, dokonująca Zamówienia w ramach Sklepu,
            niezwiązanego bezpośrednio z prowadzoną przez nią działalnością
            gospodarczą lub zawodową, a także osoba fizyczna zawierająca umowę
            bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści
            tej umowy wynika, że nie posiada ona dla niej charakteru zawodowego,
            wynikającego w szczególności z przedmiotu wykonywanej przez nią
            działalności gospodarczej, udostępnionego na podstawie przepisów o
            Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
            <br></br>
            <br></br>5. Koszyk – element oprogramowania Sklepu, w którym
            widoczne są wybrane przez Klienta Usługi do zakupu.<br></br>
            <br></br>
            6.Kupujący – pełnoletnia osoba fizyczna posiadająca zdolność do
            czynności prawnych, osoba prawna lub jednostka organizacyjna
            nieposiadająca osobowości prawnej, ale mająca zdolność do czynności
            prawnych, dokonująca Zamówienia w ramach Sklepu, związanego
            bezpośrednio z jej działalnością gospodarczą lub zawodową.<br></br>
            <br></br>
            7. Polityka Cookies – dokument opisujący pliki Cookies oraz sposób
            ich wykorzystywania na stronie internetowej Sklepu.<br></br>
            <br></br>
            8.Polityka prywatności – dokument opisujący cele i sposoby
            przetwarzania danych osobowych oraz prawa osób, których dane
            dotyczą.<br></br>
            <br></br>
            9. Regulamin Sklepu – niniejszy regulamin sprzedaży Usług i
            świadczenia usług drogą elektroniczną, określający zasady
            świadczenia i korzystania z usług oferowanych przez Usługodawcę za
            pośrednictwem Sklepu na rzecz Klientów. Regulamin określa prawa i
            obowiązki Klienta i Usługodawcy. W zakresie usług świadczonych drogą
            elektroniczną niniejszy Regulamin Sklepu jest regulaminem, o którym
            mowa w art. 8 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług
            drogą elektroniczną.<br></br>
            <br></br>
            10. Sklep – sklep internetowy dostępny pod adresem: personaltaxi.pl
            za pośrednictwem którego Klient może dokonywać Zakupu Usług w ramach
            Sklepu.<br></br>
            <br></br>
            11. Uczestnik – osoba fizyczna, która będzie korzystała z Usługi.
            Klient może, ale nie musi być Uczestnikiem.<br></br>
            <br></br>
            <br></br>
            12. Umowa przewozu – umowa zawarta pomiędzy Usługodawcą a Klientem w
            chwili dokonania zakupu Usługi, zgodnie z Zamówieniem.<br></br>
            <br></br>
            13. Umowa zawarta na odległość – umowa zawarta z Klientem w ramach
            zorganizowanego systemu zawierania umów na odległość (w ramach
            Sklepu), bez jednoczesnej fizycznej obecności stron, z wyłącznym
            wykorzystaniem jednego lub większej liczby środków porozumiewania
            się na odległość do chwili zawarcia umowy włącznie.<br></br>
            <br></br>14. Usługa – usługi przewozu osób lub rzeczy realizowane na
            terytorium Rzeczpospolitej Polskiej, szczegółowo opisane na stronie:
            personaltaxi.pl.<br></br>
            <br></br>
            15. Usługodawca – właściciel, administrator i prowadzący Sklep –
            Inter-Dywiz sp. z o.o., ul. Lotnicza 6/2 31-462 Kraków, wpisana do
            rejestru przedsiębiorców, prowadzonego przez Sąd Rejonowy dla
            Krakowa – Śródmieścia w Krakowie, XI Wydział Gospodarczy Krajowego
            Rejestru Sądowego pod numerem KRS: 0000496661, posiadająca NIP:
            6751496482, REGON: 123040168.<br></br>
            <br></br>16. Zakup Usług – rezerwacja Usług i ich opłacenie przez
            Klienta.<br></br>
            <br></br>17. Zamówienie – oświadczenie woli Klienta zmierzające
            bezpośrednio do zawarcia umowy przewozu osób z Usługodawcą poprzez
            wypełnienie i przesłanie Formularza Zamówienia w formie
            elektronicznej dostępnego na stronie internetowej Sklepu, w tym
            zapoznanie się z Regulaminem Sklepu online oraz akceptacja jego
            treści.<br></br>
            <br></br>
            II. <b>POSTANOWIENIA OGÓLNE</b>
            <br></br>
            <br></br>1. Sklep, dostępny pod adresem; personaltaxi.pl i
            prowadzony jest przez Inter-Dywiz sp. z o.o. z siedzibą w Krakowie
            przy ul. Lotniczej 6/2 31-462 Kraków, wpisaną do rejestru
            przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd
            Rejonowy dla Krakowa – Śródmieścia w Krakowie, XI Wydział
            Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000496661,
            posiadająca NIP: 6751496482, REGON: 123040168.<br></br>
            <br></br>2. Niniejszy Regulamin określa zasady i warunki korzystania
            ze Sklepu, a w szczególności określa zasady i tryb zawierania umowy
            Zakupu Usług, składania Zamówień w Sklepie, realizacji Zamówień,
            zasad zapłaty ceny, realizacji prawa odstąpienia od umowy, wykonania
            Usługi.
            <br></br>
            <br></br>3. Regulamin jest udostępniony nieodpłatnie za
            pośrednictwem Sklepu, co zapewnia możliwość zapoznania się z jego
            treścią przed zawarciem umowy.<br></br>
            <br></br>4. Klient przyjmuje do wiadomości, że obsługa Klienta w
            Sklepie odbywa się przy wykorzystaniu systemu teleinformatycznego,
            zapewniającego przetwarzanie danych osobowych, o których mowa w
            Polityce prywatności udostępnionej na stronie Sklepu, poprzez sieć
            telekomunikacyjną, zgodnie z Ustawą o świadczeniu usług drogą
            elektroniczną oraz Rozporządzeniem Parlamentu Europejskiego i Rady
            (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE.<br></br>
            <br></br>5. Sklep wykorzystuje pliki cookies. Pliki cookies
            wykorzystywane na stronie internetowej Sklepu służą przede wszystkim
            gromadzeniu przez Usługodawcę lub jego kontrahentów danych
            statystycznych o zachowaniu Klientów, liczbie Klientów oraz o
            sposobie korzystania przez nich z zawartości Sklepu, a także
            wykorzystywaniu zgromadzonych danych do ulepszania jakości usług
            oferowanych przez Usługodawcę oraz kierowania do Klientów
            personalizowanych i dopasowanych treści. Szczegółowe informacje
            odnośnie zasad przechowywania i dostępu do informacji na
            urządzeniach Usługobiorcy zawarto w Polityce Cookies dostępnej na
            stronie internetowej Sklepu.<br></br>
            <br></br>6. W celu korzystania ze Sklepu wymagane jest dysponowanie
            urządzeniem końcowym z dostępem do Internetu, z zainstalowaną
            przeglądarką internetową, której konfiguracja umożliwia uzyskanie
            dostępu do Sklepu, a także przyjmowanie i wykorzystywanie plików
            cookies.<br></br>
            <br></br>7. Wymagania techniczne niezbędne do skorzystania ze
            Sklepu, które powinien spełniać Klient to:<br></br>
            <br></br>a. urządzenie końcowe podłączone do sieci Internet,
            spełniające wymagania techniczne,<br></br>b. przeglądarka
            internetowa umożliwiająca poprawne wyświetlanie treści Serwisu –
            m.in. Opera, Firefox, Edge, Safari, Chrome w wersji nie starszej niż
            2 lata od daty oficjalnej premiery,<br></br>c. aktywne konto poczty
            elektronicznej (e-mail),
            <br></br>d. aktywny numer w ruchomej publicznej sieci telefonicznej.
            <br></br>8. Zakres i ceny Usług są szczegółowo opisane na
            stroniepersonaltaxi.pl.<br></br>
            <br></br>9. Warunkiem dokonania Zakupu Usług jest akceptacja przez
            Klienta zasad określonych w niniejszym Regulaminie Sklepu.<br></br>
            <br></br>
            10. Klient dokonując akceptacji Regulaminu Sklepu dokonuje jej w
            imieniu własnym i/lub Uczestników, w imieniu których dokonuje Zakupu
            Usług. Po dokonaniu Zakupu Usług, Klient jest zobowiązany do
            przekazania Uczestnikom wszelkich informacji dotyczących Usługi i
            dokonania wszystkich płatności za zarezerwowane Usługi.<br></br>
            <br></br>
            III. <b>ZAKUP USŁUG</b>
            <br></br>
            <br></br>1. Zakupu Usług dokonuje się na podstawie wypełnionego
            formularza na stronie internetowej Sklepu, akceptacji Regulaminu
            Sklepu oraz dokonania płatności.<br></br>
            <br></br>2. Przed dokonaniem Zakupu Usług Klient powinien
            szczegółowo zapoznać się z zakresem poszczególnych Usług znajdującym
            się na stronie internetowej Sklepu.
            <br></br>
            <br></br>3. Klient podczas Zakupu Usług zobowiązany jest do podania
            prawidłowych oraz prawdziwych danych.
            <br></br>
            <br></br>4. W celu złożenia Zamówienia niezbędne jest wykonanie
            przez Klienta następujących czynności:<br></br>
            <br></br>a. wyboru, poprzez dodanie do koszyka, zamawianej Usługi
            wraz z określeniem daty i godziny realizacji Usługi, liczby
            Uczestników oraz wskazania miejsca odbioru w zależności od rodzaju
            Usługi – w Informacjach dodatkowych w formularzu lub na etapie
            konfigurowania Usługi,<br></br>b. wypełnienia formularza zamówienia
            takimi danymi, jak imię, nazwisko, adres, adres poczty
            elektronicznej e-mail oraz numer telefonu Klienta,<br></br>c. wyboru
            formy płatności,<br></br>d. akceptacji Regulaminu Sklepu,<br></br>e.
            potwierdzenia woli zawarcia umowy, w tym wybranie przycisku „Kupuję
            i płacę”.<br></br>
            <br></br>
            <br></br>5. W przypadku zaznaczenia w formularzu zamówienia przez
            Klienta okienka z „TAK” dotyczącego Faktury, należy podać numer NIP.
            Po opłaceniu zamówienia Faktura zostanie przesłana na wskazany w
            formularzu adres mailowy.<br></br>
            <br></br>6. W trakcie składania Zamówienia – do momentu naciśnięcia
            przycisku „Kupuję i płacę” – Klient ma możliwość modyfikacji
            wprowadzonych danych oraz w zakresie wyboru Usługi.<br></br>
            <br></br>7. Po podaniu przez Kupującego wszystkich niezbędnych do
            złożenia Zamówienia danych dotyczących Usługi, wyświetli się
            podsumowanie Zamówienia. Zamówienie wysłane przez Kupującego jest
            oświadczeniem woli Kupującego rezerwacji Usługi i zawarcia z
            Usługodawcą umowy przewozu, zgodnie z przepisami niniejszego
            Regulaminu Sklepu. Po złożeniu Zamówienia Kupujący otrzyma wiadomość
            potwierdzającą dokonanie Zamówienia, na wskazany przez siebie
            uprzednio adres mailowy.
            <br></br>
            <br></br>8. Umowę uważa się za zawartą w momencie dokonania zapłaty
            za Zamówienie przez Kupującego.
            <br></br>
            <br></br>9. Po zaksięgowaniu wpłaty Klient otrzymuje drogą mailową
            potwierdzenie zamówienia wraz eVoucherem.<br></br>
            <br></br>
            IV. <b>CENY I PŁATNOŚCI</b>
            <br></br>
            <br></br>1. Ceny podane przez Usługodawcę wyrażone są w złotych
            polskich (PLN) oraz zawierają podatek VAT.
            <br></br>
            <br></br>2. Informacja o cenie podawana w ramach Sklepu ma charakter
            wiążący od momentu złożenia zamówienia przez Klienta. Cena ta nie
            ulegnie zmianie niezależnie od zmian cen w Sklepie.<br></br>
            <br></br>
            3. Usługodawca umożliwia dokonanie poprzez Stronę płatności
            bezgotówkowej z wykorzystaniem płatności online: przedpłaty online
            przelewem bankowym lub kartą Visa, Mastercard, BLIK, konta PayPal,
            konta Google Pay, Apple Pay, , Przelewy24 i innych poprzez
            zewnętrzny system płatności, którego właścicielem jest PayPro SA
            (PayPro) – Podmiot świadczący Usługę na rzecz Użytkowników, z
            siedzibą w Poznaniu, przy ulicy Pastelowej 8 (60-198), wpisany do
            rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego
            przez Sąd Rejonowy Poznań Nowe Miasto i Wilda, VIII Wydział
            Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000347935,
            numerem NIP 7792369887, o kapitale zakładowym wynoszącym 5 476
            300,00 zł, w całości opłaconym oraz do rejestru krajowych instytucji
            płatniczych prowadzonego przez Komisję Nadzoru Finansowego pod
            numerem UKNF IP24/2014.<br></br>
            <br></br>
            4. Rozliczenia transakcji przeprowadzane są za pośrednictwem
            Przelewy24 na podstawie regulaminu usług dostępnego pod adresem:
            przelewy24.pl oraz w oparciu o regulaminy banku Klienta.<br></br>
            <br></br>
            V. <b>REALIZACJA USŁUG</b>
            <br></br>
            <br></br>
            1. Klient dokonując Zamówienia Usług określa datę i godzinę
            realizacji Usługi, liczbę Uczestników oraz wskazuje miejsce odbioru
            w zależności od rodzaju Usługi – w Informacjach dodatkowych w
            formularzu lub na etapie konfigurowania Usługi.<br></br>
            <br></br>2. Zamówienie zostanie zrealizowane na podstawie eVuchera,
            otrzymanego przez Klienta po Zakupie Usługi. Dostarczenie eVouchera
            odbywa się poprzez Internet, na adres mailowy wskazany przez
            Klienta.<br></br>
            <br></br>
            3. Usługa jest świadczona wyłącznie przez kierowcę podległego
            Usługodawcy. Numer eVoucher&apos;a zostanie przekazany kierowcy za
            pośrednictwem systemów teleinformatycznych stosowanych u
            Usługodawcy, co nie zwalnia Klienta z konieczności okazania go
            kierowcy.<br></br>
            <br></br>4. Brak przybycia Klienta w oznaczone miejsce odbioru
            powyżej 15 minut od uzgodnionej godziny jest jednoznaczny z
            rezygnacją z Usługi. W takim przypadku Klientowi nie przysługuje
            zwrot uiszczonej ceny Usługi.<br></br>
            <br></br>5. W przypadku opóźnień, zmian lub jakichkolwiek innych
            nieprzewidzianych okoliczności Klient powinien skontaktować się z
            Usługodawcą. W przypadku braku kontaktu telefonicznego lub za
            pośrednictwem poczty elektronicznej ze strony Klienta ewentualne
            reklamacje nie będą uwzględniane.<br></br>
            <br></br>6. W zależności od ilości pasażerów Usługi przejazdu
            odbywają się samochodem osobowym lub samochodem osobowym typu VAN.
            <br></br>
            <br></br>
            VI. <b>MOŻLIWOŚĆ ODSTĄPIENIA</b>
            <br></br>
            <br></br>1. Konsumentowi przysługuje prawo odstąpienia od Umowy w
            terminie 14 dni od dnia zawarcia Umowy zawartej na odległość, bez
            podania przyczyny i bez ponoszenia kosztów, z zastrzeżeniem ustępu 2
            i 3.<br></br>
            <br></br>2. Na wyraźne żądanie konsumenta wykonywanie usługi może
            rozpocząć się przed upływem terminu do odstąpienia od umowy zawartej
            poza lokalem przedsiębiorstwa. Jeżeli konsument wykonuje prawo
            odstąpienia od umowy po zgłoszeniu żądania rozpoczęcia wykonywania
            usługi przed upływem terminu odstąpienia, ma obowiązek zapłaty za
            świadczenia spełnione do chwili odstąpienia od umowy.
            <br></br>
            <br></br>3. Po zrealizowaniu Usługi Konsumentowi nie przysługuje
            prawo do odstąpienia od Umowy.<br></br>
            <br></br>4. Do zachowania terminu na odstąpienie od umowy wystarczy
            wysłanie Usługodawcy oświadczenia o odstąpieniu przed jego upływem,
            w formie wiadomości mailowej na adres e-mail Usługodawcy,
            tj.biuro@personaltaxi.pl.<br></br>
            <br></br>
            5. Usługodawca niezwłocznie potwierdzi Konsumentowi na adres e-mail
            podany przy zawieraniu umowy i inny jeżeli został podany w złożonym
            oświadczeniu otrzymanie oświadczenia o odstąpieniu od umowy.
            <br></br>
            <br></br>6. Zgodnie z art. 38 ustawy o prawach konsumenta, prawo
            odstąpienia od umowy zawartej poza lokalem przedsiębiorstwa lub na
            odległość nie przysługuje konsumentowi w odniesieniu do umów
            przewozu rzeczy, jeżeli w umowie oznaczono dzień lub okres
            świadczenia usługi.<br></br>
            <br></br>
            VII. <b>REKLAMACJE</b>
            <br></br>1. Klient ma prawo skorzystać z procedury reklamacyjnej, w
            ramach której może zgłosić swoje zastrzeżenia co do usług
            świadczonych drogą elektroniczną, Newslettera lub kwestii związanych
            z realizacją zakupionej Usługi.<br></br>
            <br></br>2. Reklamację można zgłosić pisemnie, na adres Usługodawcy
            lub w formie wiadomości elektronicznej (e-mail) przesłanej na adres:
            biuro@personaltaxi.pl
            <br></br>
            <br></br>3. Reklamacja powinna zawierać co najmniej adres mailowy
            oraz numer telefonu Klienta oraz opis zgłaszanych zastrzeżeń.
            <br></br>
            <br></br>4. Usługodawca rozpoznaje reklamację w terminie nie
            dłuższym niż 14 dni od jej otrzymania.<br></br>
            <br></br>5. Odpowiedź na reklamację udzielana jest w sposób tożsamy
            do jej złożenia lub w sposób zgodny z życzeniem zgłaszającego
            reklamację, wyrażony w reklamacji i na dane wskazane w zgłoszeniu
            reklamacyjnym.<br></br>
            <br></br>
            VIII. <b>ODPOWIEDZIALNOŚĆ</b>
            <br></br>
            <br></br>1. Usługodawca nie ponosi odpowiedzialności w związku z
            niewłaściwym korzystaniem ze Sklepu przez Klienta.<br></br>
            <br></br>2. Usługodawca nie ponosi odpowiedzialności za szkody
            powstałe z powodu błędnego użycia, niemożności użycia lub błędnego
            działania Sklepu z powodu siły wyższej, winy Klienta lub innych
            powodów niezawinionych przez Usługodawcę.<br></br>
            <br></br>3. Usługodawca nie ponosi jakiejkolwiek odpowiedzialności
            za podanie przez Klienta danych nieprawdziwych.
            <br></br>
            <br></br>
            IX. <b>OCHRONA DANYCH OSOBOWYCH</b>
            <br></br>Zgodnie z art. 13 ust. 1 i ust. 2 ogólnego rozporządzenia o
            ochronie danych osobowych z dnia 27 kwietnia 2016 r. informujemy,
            iż: <br></br>
            <br></br>1. Administratorem Pani/Pana danych osobowych jest
            Inter-Dywiz sp. z o.o. z siedzibą w Krakowie przy ul. Lotniczej 6/2
            31-462 Kraków, wpisaną do rejestru przedsiębiorców Krajowego
            Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa –
            Śródmieścia w Krakowie, XI Wydział Gospodarczy Krajowego Rejestru
            Sądowego pod numerem KRS: 0000496661, posiadająca NIP: 6751496482,
            REGON: 123040168. Pani/Pana dane osobowe przetwarzane będą w celu
            realizacji zamówienia na podstawie art. 6 ust. 1 pkt b; ogólnego
            rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016
            r..<br></br>
            <br></br>2. Odbiorcą Pani/Pana danych osobowych będą upoważnieni
            pracownicy administratora danych.
            <br></br>
            <br></br>3. Pani/Pana dane osobowe nie będą przekazywane do państw
            trzecich i organizacji międzynarodowych.<br></br>
            <br></br>4. Pani/Pana dane osobowe będą przechowywane do czasu
            pełnej realizacji zamówienia, a jeżeli zażądał/a Pani/Pan
            wystawienia faktury VAT – także potem, przez okres wymagany
            przepisami podatkowymi oraz przez okres wymagany na podstawie innych
            przepisów powszechnie obowiązującego prawa.
            <br></br>
            <br></br>5. Posiada Pani/Pan prawo dostępu do treści swoich danych
            oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania,
            prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do
            cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem
            przetwarzania, którego dokonano na podstawie zgody przed jej
            cofnięciem.6. Ma Pani/Pan prawo wniesienia skargi do organu
            nadzorczego gdy uzna Pani/Pan, iż przetwarzanie danych osobowych
            Pani/Pana dotyczących narusza przepisy ogólnego rozporządzenia o
            ochronie danych osobowych z dnia 27 kwietnia 2016 r..<br></br>
            <br></br>7. Podanie przez Panią/Pana danych osobowych jest warunkiem
            umownym. Jest Pani/Pan zobowiązana/y do ich podania, a konsekwencją
            niepodania danych osobowych będzie niemożność realizacji zamówienia.
            <br></br>
            <br></br>8. Administrator przetwarza Pani/Pana dane osobowe w
            postaci adresu poczty elektronicznej oraz numeru telefonu w celu
            przesyłania Pani/Panu informacji marketingowych dotyczących
            produktów i usług oferowanych przez Inter-Dywiz sp. z o. o., za
            pomocą środków komunikacji elektronicznej, stosownie do treści art.
            10 ust. 1 i 2 ustawy o świadczeniu usług drogą elektroniczną, po
            wyrażeniu przez Panią/Pana zgody na otrzymywanie takiej informacji.
            <br></br>9. Szczegółowe informacje dotyczące przetwarzania danych
            osobowych uregulowane zostały w Polityce prywatności, znajdującej
            się na stronie internetowej Sklepu.
            <br></br>
            <br></br>
            X. <b>POSTANOWIENIA KOŃCOWE</b>
            <br></br>
            <br></br>1. Usługodawca zastrzega sobie prawo dokonywania zmian w
            Regulaminie Sklepu. Wszelkie zmiany Regulaminu Sklepu obowiązują pod
            warunkiem opublikowania ich na stronie internetowej Sklepu z
            czternastodniowym okresem przejściowym. O zmianie Regulaminu Klient
            zostanie powiadomiony w formie informacji na stronie WWW.<br></br>
            <br></br>2. Miejscem zawarcia umowy przewozu jest siedziba
            Usługodawcy.<br></br>
            <br></br>3. Prawem właściwym dla zawarcia Umowy jest prawo
            Rzeczpospolitej Polskiej, a sądami sądy powszechne w Rzeczpospolitej
            Polskiej, chyba że co innego wynika z bezwzględnie obowiązujących
            przepisów prawa.
            <br></br>
            <br></br>4. Klienci mogą uzyskać dostęp do niniejszego Regulaminu w
            każdym czasie, a także sporządzić jego wydruk.<br></br>
            <br></br>5. Niniejszy Regulamin wchodzi w życie z dniem 31
            października 2023 r.<br></br>
            <br></br>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
