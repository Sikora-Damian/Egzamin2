const allCards = [
/* =========================
   FINANSE I EKONOMIA – CZĘŚĆ 1 (pkt 1–13)
   ========================= */

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Rynek instrumentów pochodnych definicja",
  a: "Segment rynku finansowego, na którym handluje się instrumentami, których wartość zależy od wartości instrumentu bazowego, np. akcji, waluty, surowca lub indeksu giełdowego. Sam w sobie nie ma wartości."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Instrumenty pochodne najpopularniejsze przykłady",
  a: "Kontrakty terminowe, opcje, swapy i kontrakty forward. Służą do zabezpieczania się przed ryzykiem (hedging) i spekulacji."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Podział rynku instrumentów pochodnych",
  a: "Dzieli się na rynek giełdowy (zorganizowane giełdy, np. GPW) oraz pozagiełdowy OTC (transakcje bezpośrednio między stronami)."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Rola (istota) rynku instrumentów pochodnych w gospodarce",
  a: "Dla firm - zabezpieczanie się przed niekorzystnymi zmianami kursów walut/cen surowców, dla inwestorów - zarządzanie ryzykiem lub zwiększenie zysków."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest ryzyko gospodarcze?",
  a: "Możliwość wystąpienia niekorzystnych zjawisk, mogą wpłynąć na przedsiębiorstwa, sektory i gospodarkę. Może prowadzić do strat finansowych, obniżenia rentowności lub upadłości."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Jak dzieli się ryzyko gospodarcze?",
  a: "Według zasięgu: systemowe (cała gospodarka) i niesystemowe (konkretna firma lub sektor), makroekonomiczne (np. inflacja) i mikroekonomiczne (np. awarie), zewnętrzne i wewnętrzne."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest efekt skali i jakie ma rodzaje?",
  a: "Zjawisko gdzie zwiększenie skali produkcji prowadzi do obniżenia kosztów jednostkowych. Mamy rosnący (spadek kosztów), malejący (wzrost kosztów) i stały."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest próg rentowności?",
  a: "Punkt, w którym przychody całkowite zrównują się z kosztami całkowitymi – firma osiąga wynik „zero”. Wskazuje, ile jednostek produktu trzeba sprzedać, by pokryć wszystkie koszty."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest rachunkowość zarządcza i czym są w niej inwestycje?",
  a: "Rachunkowość zarządcza dostarcza informacji do podejmowania decyzji w firmie i pozwala ocenić opłacalność projektów inwestycyjnych. Inwestycje to alokacja zasobów w celu osiągnięcia korzyści ekonomicznych i zwiększenia wartości przedsiębiorstwa."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Co obejmuje interpretacja inwestycji w rachunkowości zarządczej?",
  a: "Ocenę efektywności (z uwzględnieniem wartości pieniądza w czasie), analizę ryzyka, monitoring realizacji, budżetowanie i prognozowanie oraz wpływ na wartość firmy."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest okres zwrotu nakładów?",
  a: "Metoda określająca, po jakim czasie środki zainwestowane w projekt zostaną odzyskane dzięki wygenerowanym przepływom pieniężnym netto."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Jakie są zalety i wady okresu zwrotu nakładów?",
  a: "Zalety: prosty, szybka ocena ryzyka, dobry do projektów krótkoterminowych. Wady: pomija wartość pieniądza w czasie, ignoruje przepływy po okresie zwrotu, nie mierzy rentowności całkowitej."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym różnią się fundusze unijne od funduszy europejskich?",
  a: "Fundusze unijne pochodzą bezpośrednio z budżetu UE na realizację celów polityki spójności. Fundusze europejskie to pojęcie szersze – nie tylko środki unijne, również fundusze z innych europejskich źródeł, np. Szwajcarii (Szwajcarskie Mechanizmy Finansowe)."
},

{
  q: "FINANSE I EKONOMIA (ZREDAGOWANE): Czym jest montaż finansowy i co najczęściej obejmuje?",
  a: "Ustalenie struktury finansowania projektu unijnego – skąd i w jakich proporcjach pozyskamy środki (dofinansowanie UE, wkład własny, budżet państwa, środki prywatne). Zapewnia skuteczne rozliczenie, zabezpiecza płynność finansową i jest wymogiem formalnym przy ubieganiu się o środki unijne."
},

/* =========================
   POLITYKA PIENIĘŻNA I BANKI (pkt 8–13, 26, 28)
   ========================= */

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Funkcje banku centralnego",
  a: "Funkcja emisyjna (wyłączne prawo do emisji pieniądza), funkcja banku banków (nadzór nad systemem bankowym, ustalanie stóp procentowych i rezerw obowiązkowych, zapewnianie płynności) oraz funkcja banku państwa (prowadzenie rachunków Skarbu Państwa, zarządzanie długiem publicznym, reprezentowanie kraju w instytucjach międzynarodowych). W Polsce jest to NBP."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Jakie są cele polityki pieniężnej?",
  a: "Kontrolowanie ilości pieniądza i stabilizowanie cen: stabilność cen, przeciwdziałanie inflacji, wzrost gospodarczy, stabilność systemu finansowego."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Jakie są najważniejsze instrumenty polityki pieniężnej?",
  a: "Stopy procentowe, operacje otwartego rynku (skup/sprzedaż papierów wartościowych), rezerwa obowiązkowa."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Jak bank centralny zmienia stopy procentowe w zależności od sytuacji gospodarczej?",
  a: "Ekspansywna – obniża stopy. Restrykcyjna – podnosi stopy."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Czym są mechanizmy transmisji monetarnej i jakie są kanały?",
  a: "Sposoby, w jakie decyzje banku centralnego wpływają na gospodarkę realną. Kanały: stopy procentowej, kursu walutowego, efekt majątkowy, kanał kredytowy, oczekiwania inflacyjne."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Jak działają kanały transmisji monetarnej?",
  a: "Stopy procentowej – wyższe stopy, droższy kredyt, mniej inwestycji i konsumpcji. Kursu walutowego – stopy wpływają na wartość złotego, a przez to na import i eksport. Majątkowy – rosnące ceny aktywów, większe wydatki gospodarstw. Kredytowy – dostępność kredytów. Oczekiwania inflacyjne – wiara w walkę z inflacją, mniejsza presja płacowa."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Czym jest polityka monetarna?",
  a: "Działania banku centralnego mające na celu kontrolowanie podaży pieniądza i stóp procentowych."
},

{
  q: "POLITYKA PIENIĘŻNA I BANKI (ZREDAGOWANE): Instrumenty polityki monetarnej na rynku pieniężnym",
  a: "Stopy procentowe, operacje otwartego rynku, rezerwa obowiązkowa, operacje depozytowo-kredytowe."
},

/* =========================
   KURS WALUTOWY, STRATEGIE, BANKI (pkt 11–13)
   ========================= */

{
  q: "KURS WALUTOWY, STRATEGIE, BANKI (ZREDAGOWANE): Rola kursu walutowego w polityce pieniężnej",
  a: "Wartość naszej waluty względem innej, wpływa na inflację, eksport, import i kondycję gospodarki. Słabszy złoty to droższy import, co może podbić inflację."
},

{
  q: "KURS WALUTOWY, STRATEGIE, BANKI (ZREDAGOWANE): Obecnie jaki kurs może wybrać bank centralny przy swobodnym przepływie kapitału?",
  a: "Dwie opcje. Utrzymać stały kurs – traci samodzielność w kształtowaniu stóp procentowych. Obrać płynny kurs – może prowadzić własną politykę pieniężną (Polska: kurs płynny)."
},

{
  q: "KURS WALUTOWY, STRATEGIE, BANKI (ZREDAGOWANE): Czym jest strategia polityki pieniężnej i jakie są jej rodzaje?",
  a: "Sposób, w jaki bank centralny realizuje swoje cele (głównie stabilność cen). Rodzaje: bezpośredni cel inflacyjny (obowiązuje w Polsce), kontrola agregatów pieniężnych, strategia kursowa, strategia pełzającego kursu"
},

{
  q: "KURS WALUTOWY, STRATEGIE, BANKI (ZREDAGOWANE): Jak działają poszczególne strategie polityki pieniężnej?",
  a: "Cel inflacyjny – bank ogłasza cel i dostosowuje stopy procentowe. Kontrola agregatów pieniężnych – wpływ na ilość pieniądza, rzadko stosowana (relacja pieniądz–inflacja nie zawsze przewidywalna). Kursowa – stały kurs względem innej waluty. Pełzający kurs – kurs zmienia się powoli w ustalonym paśmie."
},

{
  q: "KURS WALUTOWY, STRATEGIE, BANKI (ZREDAGOWANE): Rola banków w gospodarce",
  a: "Krwiobieg systemu finansowego, rola to pośrednictwo finansowe (depozyty i kredyty), zapewniają płynność w systemie płatniczym, finansują inwestycje, uczestniczą w kreacji pieniądza, świadczą usługi doradcze i dodatkowe (leasing, faktoring), dostosowują się do nowych technologii."
},

/* =========================
   RYNKI FINANSOWE, STOPY PROCENTOWE (pkt 14–17)
   ========================= */

{
  q: "RYNKI FINANSOWE, STOPY PROCENTOWE (ZREDAGOWANE): Rodzaje rynków finansowych",
  a: "Pieniężny, kapitałowy, walutowy, towarowy, instrumentów pochodnych, obligacji, hipoteczny."
},

{
  q: "RYNKI FINANSOWE, STOPY PROCENTOWE (ZREDAGOWANE): Główna cecha rodzajów rynków finansowych",
  a: "Pieniężny – do roku. Kapitałowy – długoterminowy. Walutowy – wymiana walut. Towarowy – surowce. Instrumentów pochodnych – zależność od innych aktywów. Obligacji – obrót obligacjami. Hipoteczny – nieruchomości."
},

{
  q: "RYNKI FINANSOWE, STOPY PROCENTOWE (ZREDAGOWANE): Czynniki determinujące stopę procentową",
  a: "Polityka monetarna banku centralnego, inflacja, stan gospodarki (ożywienie – podwyżki, recesja – obniżki), popyt na kredyt, ryzyko kredytowe, czynniki globalne, podaż pieniądza."
},

/* =========================
   OBLIGACJE I PORTFEL INWESTYCYJNY (pkt 18, 27)
   ========================= */

{
  q: "OBLIGACJE I PORTFEL INWESTYCYJNY (ZREDAGOWANE): Czym są obligacje",
  a: "Obligacje to papiery wartościowe potwierdzające, że emitent (wydawca) pożyczył od inwestora pieniądze i zobowiązuje się je zwrócić z odsetkami."
},

{
  q: "OBLIGACJE I PORTFEL INWESTYCYJNY (ZREDAGOWANE): Rodzaje obligacji",
  a: "Według emitenta (wydawcy): skarbowe, komunalne, korporacyjne. Według oprocentowania: stałoprocentowe, zmiennoprocentowe, indeksowane. Według zabezpieczenia: zabezpieczone, niezabezpieczone. Według wykupu: kuponowe, zerokuponowe."
},

{
  q: "OBLIGACJE I PORTFEL INWESTYCYJNY (ZREDAGOWANE): Co wpływa na cenę obligacji?",
  a: "Stopy procentowe (rosną – cena obligacji spada), inflacja (zmniejsza realną wartość przyszłych odsetek), ryzyko kredytowe, popyt i podaż, okres do wykupu."
},

{
  q: "OBLIGACJE I PORTFEL INWESTYCYJNY (ZREDAGOWANE): Na czym polega zarządzanie portfelem inwestycyjnym?",
  a: "Dobór aktywów w celu osiągnięcia zysku przy określonym poziomie ryzyka."
},

{
  q: "OBLIGACJE I PORTFEL INWESTYCYJNY (ZREDAGOWANE): Strategie zarządzania portfelem inwestycji",
  a: "Aktywne – decyzje zależne od rynku. Pasywne – odwzorowanie indeksu (ETF). Mieszane – połączenie obu. Alokacja aktywów – podział między klasy aktywów. Wybór zależy od celu, ryzyka i czasu inwestycji."
},

/* =========================
   AKCJE I GIEŁDA (pkt 19, 22, 23, 25)
   ========================= */

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Analiza fundamentalna – na czym polega i jakie ma etapy?",
  a: "Sprawdza, czy cena akcji odzwierciedla rzeczywistą wartość spółki. Etapy: analiza makroekonomiczna, branżowa, finansowa spółki (ocena kondycji), sytuacyjna, wycena akcji (wartość wewnętrzna vs cena rynkowa)."
},

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Zalety i wady analizy fundamentalnej",
  a: "Zalety: pomaga wybierać solidne spółki do długoterminowych inwestycji. Wady: Trzeba regularnie aktualizować założenia bo rynek się zmienia."
},

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Rola giełdy w finansowaniu firm",
  a: "Pozyskanie kapitału przez emisję akcji, rozwój bez kredytu, płynność, wiarygodność i wycena firmy. Finansuje też startupy."
},

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Czym są akcje uprzywilejowane i jakie dają prawa?",
  a: "Akcje dające dodatkowe prawa: więcej głosów, wyższą dywidendę lub pierwszeństwo przy podziale majątku. Pomagają zachować kontrolę nad firmą przy pozyskaniu kapitału."
},

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Zalety i wady akcji uprzywilejowanych",
  a: "Zalety: rozwój firmy bez długu, większy wpływ lub bezpieczeństwo inwestorów. Wady: dywidendy nie obniżają podatku, emisja może być kosztowna."
},

{
  q: "AKCJE I GIEŁDA (ZREDAGOWANE): Wartość wewnętrzna akcji a cena rynkowa",
  a: "Wewnętrzna – teoretyczna wycena na podstawie finansów firmy. Rynkowa – rzeczywista cena na giełdzie (popyt, podaż, emocje). Cena powyżej wartości wewnętrznej – przewartościowanie, poniżej – niedowartościowanie."
},

/* =========================
   EFEKTYWNOŚĆ RYNKU I KRYZYSY (pkt 20–21)
   ========================= */

{
  q: "EFEKTYWNOŚĆ RYNKU I KRYZYSY (ZREDAGOWANE): Definicja efektywności informacyjnej rynków finansowych, główne założenia",
  a: "Ceny papierów wartościowych w pełni i natychmiast odzwierciedlają wszystkie dostępne informacje. Założenia: każda nowa informacja od razu wpływa na ceny, inwestorzy mają równy dostęp do informacji."
},

{
  q: "EFEKTYWNOŚĆ RYNKU I KRYZYSY (ZREDAGOWANE): Poziomy efektywności informacyjnej rynku według Famy",
  a: "Słaba – ceny uwzględniają dane historyczne. Średnia – wszystkie informacje publiczne. Silna – nawet informacje poufne."
},

{
  q: "EFEKTYWNOŚĆ RYNKU I KRYZYSY (ZREDAGOWANE): Konsekwencje efektywności informacyjnej rynku",
  a: "Trudno osiągnąć ponadprzeciętne zyski bez większego ryzyka. Skuteczność analizy jest ograniczona."
},

{
  q: "EFEKTYWNOŚĆ RYNKU I KRYZYSY (ZREDAGOWANE): Źródła kryzysów finansowych",
  a: "Nadmierne zadłużenie, spekulacja (bańki), brak nadzoru, czynniki zewnętrzne (wojny, klęski, wahania cen surowców), polityka pieniężna, utrata zaufania i odpływ kapitału."
},

{
  q: "EFEKTYWNOŚĆ RYNKU I KRYZYSY (ZREDAGOWANE): Skutki kryzysów finansowych",
  a: "Problemy z płynnością i wypłacalnością, panika i destabilizacja rynku."
},

/* =========================
   NADZÓR, UE, BANKI ŚWIATOWE (pkt 28–30)
   ========================= */

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Cel nadzoru nad rynkami finansowymi i zadania KNF",
  a: "Cel: stabilność systemu finansowego, ochrona konsumentów, zapobieganie kryzysom. KNF (Komisja Nadzoru Finansowego): dawanie licencji, kontrola instytucji finansowych, edukacja finansowa."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Rodzaje nadzoru finansowego",
  a: "Makroostrożnościowy, mikroostrożnościowy, ochrona konsumenta."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Czym jest polityka finansowa UE",
  a: "To sposób realizacji długofalowych celów – zrównoważony rozwój, zielona transformacja i cyfryzacja. Jest nie tylko rozdzielaniem funduszy, ale też wsparciem spójności gospodarczej."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Najważniejsze instrumenty polityki finansowej UE",
  a: "Zielony Ład i Fit for 55 (neutralność klimatyczna do 2050 r.), Next Generation EU (odbudowa po pandemii), Wieloletnie Ramy Finansowe 2021–2027, InvestEU, Fundusz Sprawiedliwej Transformacji, raportowanie niefinansowe (ESG)."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Czym jest światowy system bankowy",
  a: "Sieć instytucji, których główną rolą jest pośrednictwo finansowe i zapewnienie stabilności gospodarczej."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Światowy system bankowy – rodzaje banków",
  a: "Centralny (Fed, EBC, NBP) – polityka monetarna, stopy procentowe, płynność sektora bankowego. Komercyjne – depozyty, kredyty, płatności. Inwestycyjne – emisja papierów wartościowych, doradztwo przy fuzjach, instrumenty pochodne."
},

{
  q: "NADZÓR, UE, BANKI ŚWIATOWE (ZREDAGOWANE): Instytucje międzynarodowe w systemie bankowym",
  a: "MFW – pomoc państwom w kryzysie. Bank Światowy – finansuje rozwój i walkę z ubóstwem. BIS – współpraca banków centralnych."
},

/* =========================
   BILANS PŁATNICZY, KURSY WALUT (pkt 31–35)
   ========================= */

{
  q: "BILANS PŁATNICZY, KURSY WALUT (ZREDAGOWANE): Definicja bilansu płatniczego i jego mechanizmy równoważenia",
  a: "Bilans płatniczy – wszystkie transakcje kraju z zagranicą. Automatyczne: zmiany kursu walutowego (deficyt – waluta się osłabia, lepszy eksport). Interwencyjne: polityka fiskalna (zmiany podatków), monetarna (zmiany stóp %) i handlowa (cła)."
},

{
  q: "BILANS PŁATNICZY, KURSY WALUT (ZREDAGOWANE): Przyczyny zadłużenia międzynarodowego",
  a: "Niskie oszczędności krajowe, zła polityka fiskalna, pożyczki w walutach obcych, wysokie stopy procentowe za granicą, kryzysy gospodarcze i wahania cen surowców, pułapka zadłużenia."
},

{
  q: "BILANS PŁATNICZY, KURSY WALUT (ZREDAGOWANE): Czym jest obrót bezdewizowy i jakie ma formy?",
  a: "Państwo rozlicza się bez użycia walut obcych. Formy: barter (towar za towar), umowy offsetowe, clearing. Pozwala uniknąć ryzyka walutowego i kosztów przewalutowania."
},

{
  q: "BILANS PŁATNICZY, KURSY WALUT (ZREDAGOWANE): Zależność bilansu płatniczego od kursów walut",
  a: "Wpływają na siebie nawzajem – system naczyń połączonych. Deficyt – rośnie podaż krajowej waluty, spada jej wartość (deprecjacja). Nadwyżka – rośnie popyt na walutę, umacnia się (aprecjacja)."
},

{
  q: "BILANS PŁATNICZY, KURSY WALUT (ZREDAGOWANE): Systemy kursów walutowych",
  a: "Stały – utrzymuje go bank centralny, stabilny, ale mało elastyczny. Płynny – ustala go rynek (popyt i podaż), bardziej zmienny, ale dostosowuje się do sytuacji gospodarczej. Mieszany – płynny, ale bank centralny czasem interweniuje przy wahaniach."
},

/* =========================
   RACHUNKOWOŚĆ (pkt 36–40)
   ========================= */

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Definicja rachunkowości",
  a: "System do rejestrowania i analizy zdarzeń gospodarczych, dostarczając informacje o sytuacji finansowej firmy."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Podstawowe zasady rachunkowości i co oznaczają",
  a: "Kontynuacja działalności – firma kontynuuje działalność. Memoriał – przychód/koszt od razu gdy wystąpi. Współmierność – koszt w okresie przychodu. Ostrożność – przychody po uzyskaniu. Istotność – pomijać drobne szczegóły. Wiarygodność – dane kompletne, rzetelne, prawdziwe. Periodyzacja – okresowość. Zakaz kompensaty – nie łączyć aktywów/pasywów."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Sprawozdanie finansowe – definicja i termin sporządzenia (spółki z KRS)",
  a: "Dokument pokazujący sytuację finansową i majątkową firmy, sporządzany na dzień zamknięcia ksiąg. Spółki z KRS – termin w ciągu 3 miesięcy od dnia bilansowego, zatwierdzenie w ciągu 6 miesięcy."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Podstawowe części sprawozdania finansowego",
  a: "Wprowadzenie (info o firmie, okresie sprawozdawczym, zasadach wyceny), bilans, rachunek zysków i strat, informację dodatkowa. Dla firm badanych przez biegłego rewidenta także rachunek przepływów pieniężnych i zestawienie zmian w kapitale własnym."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Bilans – definicja, równowaga bilansowa i zasady sporządzania?",
  "Dokument pokazujący majątek firmy oraz źródła jego finansowania na konkretny dzień. Równowaga bilansowa – suma aktywów = suma pasywów. Zasady: ciągłości, istotności i wiarygodności."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Struktura i funkcje bilansu",
  a: "Aktywa – majątek firmy (trwały i obrotowy). Pasywa – źródła finansowania (kapitał własny i zobowiązania). Funkcje: informacyjna, kontrolna, decyzyjna. Współgra z innymi elementami sprawozdania."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Czym jest rachunek zysków i strat (RZiS)?",
  a: "Wynik finansowy przedsiębiorstwa za dany okres – czy zysk czy strata, uwzględniając wszystkie przychody i koszty. Pozwala ocenić rentowność firmy."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Elementy i układy rachunku zysków i strat",
  a: "Przychody ze sprzedaży, koszty działalności, wynik na sprzedaży, koszty i przychody operacyjne, wynik brutto, wynik netto. Układy: porównawczy (rodzaj – np. materiały, płace), kalkulacyjny (funkcja – np. produkcja, sprzedaż)."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Czym jest rachunek przepływów pieniężnych (cash flow) i jak go dzielimy?",
  a: "Pokazuje rzeczywiste przepływy gotówki w firmie w danym okresie. Podział: działalność operacyjna, inwestycyjna, finansowa."
},

{
  q: "RACHUNKOWOŚĆ (ZREDAGOWANE): Znaczenie rachunku przepływów pieniężnych",
  a: "Określa płynność finansową, pomaga ocenić zdolność do rozwoju i inwestycji, pokazuje czy zyski księgowe przekładają się na realne wpływy pieniężne."
}

];
