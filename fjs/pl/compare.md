# Porównanie FJS-u z innymi systemami

FJS to nie jedyny istniejący system zapisu JI. Wielu kompozytorów pisze muzykę mikrotonalną na własną rękę, co spowodowało stworzenie wielu szczególnych dla nich systemów dla wielu skal mikrotonalnych. Większość tych systemów jest jednak zaprojektowana z myślą o szczególnych rodzajach mikrotonalności, na przykład konkretnego mikrotonalnego podziału oktawy, zatem jest niezdatna do użycia przy JI.

FJS stworzyłem specjalnie dla JI, więc jest on dobrze dostosowany do jego zapisu. Niestety nie potrafi zapisać prawie czegokolwiek innego. **Istnieją dwa inne szeroko używane systemy o podobnych zamierzeniach:** Helmholtza-Ellisa i Bena Johnstona.

Jest także jeszcze jeden inny system, którego nie biorę pod uwagę. Sagittal – przeznaczony do notowania wszelkiej muzyki mikrotonalnej. Nie będziemy jednak go rozważać, ponieważ jest oparty na przedstawianiu wysokości, a więc niezależnie od dokładności wartości reprezentowanych przez znaki zawsze będzie niedokładny w zapisie JI, ponieważ interwały JI są nieskończenie dokładne, jak ułamki naturalne.

System Helmholtza-Ellisa (czasem rozszerzany do „HEWM” – Helmholtza-Ellisa-Wolfa-Monzo) to pierwsza próba rozszerzenia zapisu nutowego do JI. [Najnowszy stworzony dodatek](http://www.marcsabat.com/pdfs/notation.pdf) do HE, który mogłem znaleźć, jest autorstwa Marca Sabata i potrafi przedstawić 61-limit.

Z drugiej strony mamy system stworzony przez jednego człowieka – kompozytora JI Bena Johnstona. [Najbardziej szczegółowa rozprawa o tym systemie](https://www.jstor.org/stable/833435) wypisuje znaki aż do 31-limitu; tak samo jest w [poradniku Kyle'a Ganna](https://kylegann.com/BJNotation.html).

Od teraz będę porównywał obydwa te systemy z FJS-em.

## Wysokości niealterowane

HE, podobnie jak FJS, zakłada, że zwykły zapis pięcioliniowy przedstawia strój pitagorejski. W ten sposób – tak jak w FJS – każdy pitagorejski interwał odpowiada dokładnie jednemu interwałowi – każda kwinta strojona jest na 3/2. Do tego momentu HE i FJS są identyczne. Tak jak w FJS-ie sprzyja to spójności, naturalności i notowaniu opartym na interwałach, a nie z góry ustalonych wysokościach.

BJ, z drugiej strony, opiera się na czymś bardziej… innowacyjnym. Różni się definicjami niealterowanych dźwięków i alteracji. Zwyczajny zapis nutowy u BJ ma następujące znaczenie:

- *f*–*c*–*g*–*d* to ciąg kwint 3/2.
- *f*–*a*, *c*–*e* i *g*–*h* to naturalne tercje wielkie, czyli 5/4.
- Standardowe krzyżyki i bemole przedstawiają przesunięcie o 25/24, czyli Pitagorejski półton chromatyczny minus dwa komaty syntoniczne = 1&lt;<sup>25</sup>.

(Komat syntoniczny to 81/80).

Zakładam, że tak zrobiono, by *c*–*e*–*g*, *f*–*a*–*c* i *g*–*h*–*d* wszystkie były durowymi 4:5:6, a *c*–*es*–*g*, *f*–*as*–*c* i *g*–*b*–*d* – molowymi 10:12:15. Uzyskano więc w *c*–*d*–*e*–*f*–*g*–*a*–*h*–*c* intensywną skalę diatoniczną Ptolemeusza, czyli naturalną skalę durową, a w *c*–*d*–*es*–*f*–*g*–*as*–*b*–*c* naturalną molową.

Mniemam, że celem tego zabiegu było ułatwienie notacji 5-limitowej opartej na harmonii diatonicznej, kosztem dosłownie całej reszty systemu.

Ale i to się nie zgadza – nawet 5-limitową harmonię diatoniczną trudno w ten sposób zapisać. *d*–*a* to nie kwinta czysta – to 40/27. Również kwinta przejściowa (czyli *h*–*fis* bądź *b*–*f*) jest tak samo rozstrojona. To oznacza, że BJ-owskie znaki dla komatu syntonicznego (plus i minus odpowiednio w górę i w dół) są rozsiane po całej pięciolinii. Joe Monzo pisze w [definicji](http://www.tonalsoft/enc/j/johnston.aspx) BJ w encyklopedii muzyki mikrotonalnej Tonalsoftu następująco:

> *Niektórzy teoretycy strojów uważają, że pomysł notacyjny Johnstona jest dobry, ale że mógłby być lepszy, gdyby tylko użyć do konstrukcji systemu skali pitagorejskiej zamiast 5-limitowej.*

W rzeczywistości brak spójności w niealterowanych wysokościach powoduje lawinę problemów w BJ – nie zdziw się więc, jeżeli będę się odnosił do tego głównego problemu z BJ praktycznie przez całą resztę tej strony.

Stroje niezawierające piątki – na przykład ten z „Dobrze nastrojonego fortepianu” La Monte Younga (który wsławił się używaniem jedynie czynników pierwszych 2, 3 i 7) – wymagają ogromnej ilości korekcji komatem syntonicznym w BJ, pomimo że nawet jeden czynnik 5 nie pojawia się w stroju. To po prostu absurdalne. (Na dole tej strony wyliczam różne tego typu porównania).

To wręcz niewykonalne zadanie przetransponować utwór w BJ. Utwór zapisany HE lub FJS można z łatwością przetransponować o kwintę 3/2, przesuwając pitagorejskie części nazw wysokości, a zostawiając alteracje mikrotonalne bez zmian. Da się to samo osiągnąć i przy niepitagorejskiej transpozycji, jak np. 5/4 – po prostu najpierw przesuń (pitagorejsko) o 81/64, a potem dodaj +5 do wszystkich nut. W BJ tak nie jest – transpozycja o interwał 3- czy 5-limitowy (o dalszych nie wspominając) jest o wiele bardziej skomplikowana. Jeżeli utwór jest w *G*-dur, przełożenie go na *D*-dur wymagałoby dodania komatu syntonicznego (plusa) przy każdym *a*, ponieważ *g*–*d* (3/2) to nie ten sam interwał, co *d*–*a* (40/27), a także jego odwrotności (minusa) do każdego *f*, ponieważ *g*–*b* (6/5) to nie to samo, co *d*–*f* (32/27). Partie instrumentów transponujących musiałyby zostać przepisane w zupełności z ogromną liczbą dodatkowych plusów i minusów, nawet jeżeli interwał, o który transponują, to coś tak prostego, jak mocny cały ton (9/8). To łatwo zauważyć w poradniku Kyle'a Ganna, który rozpisuje **siedem** różnych wersji szeregu alikwotowego od 16. do 32., zależnie od podstawy!

NB. *Kyle Gann napisał ciekawą kontrargumentację dot. tego problemu w swoim poradniku BJ. Udzielam na nią odpowiedź na dole tej strony.*

Punkt dla HE i FJS-u.

> **FJS: 1, HE: 1, BJ: 0.**

## Dobór znaków chromatycznych

I HE, i BJ tak jak FJS zapisują całą resztę JI za pomocą znaków chromatycznych przedstawiających skoki komatyczne.

Oto lista aż do komatu 61. dla HE:

- 81/80, czyli komat 5.
- 64/63, czyli komat 7.
- 33/32, czyli komat 11.
- 27/26, czyli komat 13.
- 256/255, czyli komat 17. z dodanym czynnikiem pięciu.
- 513/512, czyli komat 19.
- 736/729, czyli komat 23.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 1024/1023, czyli komat 31. z dodanym czynnikiem jedenastu.
- 297/296, czyli komat 37. z dodanym czynnikiem jedenastu.
- 6561/6560, czyli komat 41. z dodanym czynnikiem pięciu.
- 129/128, czyli komat 43.
- 2304/2303, czyli komat 47. z dodanym czynnikiem czterdziestu dziewięciu.
- 160/159, czyli komat 53. z dodanym czynnikiem pięciu.
- 768/767, czyli komat 57. z dodanym czynnikiem trzynastu.
- 1281/1280, czyli komat 61. z dodanym czynnikiem siedmiu i pięciu.

Kilka z tych alteracji brzmi znajomo: 5., 7., 11., 19., 23. i 43. Pokrywają się one z FJS-owymi.

W oczy rzuca się fakt, że większość pozostałych alteracji – 17., 29., 31., 37., 41., 47., 53., 57. i 61. – zawierają oprócz 2, 3 i danej liczby pierwszej inne czynniki. Tak naprawdę jedyne komaty w HE, które mają formę liczb mostów, to te pierwsze plus 13. (Spośród liczb pierwszych pomiędzy 32 a 64 tylko jeden, 43., ma taką formę).

(Termin „liczba most” pochodzi ze [strony matematycznej](math.html)).

Dlaczego uważam, że ten fakt jest problematyczny? Otóż chociaż komaty pierwsze można wciąż wyrazić, wymaga to dwóch osobnych alteracji, co jest niepotrzebnie mylące. Wydaje się, że wszystkie komaty po 23. zostały dobrane ze zbioru ułamków postaci $$\frac{n+1}{n}$$, często kosztem złożonego rozkładu na czynniki pierwsze. (Warto zauważyć, że taka postać nie gwarantuje, że powstały komat jest mały. Jednym dobrze znanym komatem w teorii mikrotonalnej muzyki jest 1029/1024 – różnica pomiędzy kwintą 3/2 a trzema septymowymi całymi tonami (8/7) – czyli liczba nie o takiej postaci, a jednak wyjątkowo drobna).

HE, odrzucając te komaty, wykorzystuje niektóre liczby pierwsze więcej niż raz i niepotrzebnie komplikuje reprezentacje bardziej złożonych interwałów JI. Na przykład 17/16 wymaga zapisania 16/15 przesuniętego o 256/255, a 16/15 samo w sobie to 256/243 przesunięte o 81/80. Używanie dwóch znaków przygodnych dla prostego interwału pierwszego? Na całe szczęście zlitowano się nad nami i żaden interwał pierwszy z 61-limitu nie wymaga *trzech* lub więcej znaków.

Jest też duża różnorodność wielkości komatów: komat 13., 27/26, jest ogromny w porównaniu do 41. – 6561/6560.

A co w takim razie z BJ? Oto lista aż do 31.:

- 81/80, komat 5., niemający zupełnie takiej samej funkcji, co inne; to bardziej znak do dostrajania (ponieważ utwóry zapisane w BJ są obficie posypane komatami syntonicznymi).
- 35/36, czyli komat 7. z dodanym czynnikiem pięciu.
- 33/32, czyli komat 11.
- 65/64, czyli komat 13. z dodanym czynnikiem pięciu.
- 51/50, czyli komat 17. z dodanym czynnikiem dwudziestu pięciu.
- 95/96, czyli komat 19. z dodanym czynnikiem pięciu.
- 46/45, czyli komat 23. z dodanym czynnikiem pięciu.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 31/30, czyli komat 31. z dodanym czynnikiem pięciu.

Jak widać, wszystkie te alteracje – oprócz 11. – zawierają czynnik 5, a 17. ma nawet podwójną 5. To prawdopodobnie korekcja służąca przeciwdziałaniu wszechobecnych piątek w BJ – zupełnie tak, jakby te czynniki były próbą skorygowania błędu, jakim było przypisanie tonów diatonicznych do sekwencji ptolemejskiej. Także widzimy dużo komatów o postaci $$\frac{n+1}{n}$$, natomiast tutaj są one prawdopodobnie zjawiskiem przypadkowym.

Tych czynników nie można skrytykować w ten sam sposób, jak to zrobiłem przy HE – to całkiem logiczny wybór przy takim nielogicznym zestawie wysokości niealterowanych. 65/64 przenosi 8/5 do 13/8, 51/50 przenosi 25/24 do 17/16, 46/45 przenosi 45/32 do 23/16. Są to odzworowania prostych 5-limitowych interwałów na liczby pierwsze.

FJS działa podobnie do BJ pod tym wzgledem: zawsze odzworowuje strój pitagorejski na liczby pierwsze, beż żadnych dodatkowych czynników.

Punkt dla BJ i FJS-u.

> **FJS: 2, HE: 1, BJ: 1.**

## Konstrukcja komatów

Skąd więc pochodzą te alteracje?

Odpowiedź jest całkiem prosta: ani HE, ani BJ nie wyjaśniają swoich decyzji.

HE zawiera 81/80 (**komat syntoniczny**) i 64/63 (jak nazwał go Michael Harrison, **komat niebiański**), które, jak zakładam, znalazły się tam z powodu ich historycznego znaczenia. 33/32 i 27/26 przypominają znajome ćwierćtonowe interwały z 11- i 13-limitu. Komaty 17. i 19. wyglądają na przypadkowe \\(\frac{n+1}{n}\\) na potęgach dwójki: 256/255 i 513/512. Komaty 23. i 43. są identyczne do tych w FJS-ie. Reszta wydaje się całkiem losowa, jakby wynik szukania \\(\frac{n+1}{n}\\)-owych ułamków w szeregu alikwotowym po omacku.

BJ oczywiście ma 81/80 dla złagodzenia swojej niespójności, ale pozostałe komaty są nierozpoznawalne, ponieważ są odwzorowaniami 5-limitu do interwałów pierwszych, a niektóre z nich rzeczywiście potrafią zadziwić. Mogłoby się wydawać, że komat taki jak 256/255 raczej wystąpi w BJ niż w HE; jednak BJ w tym celu wykorzystuje 51/50, które jest odwzorowaniem nie diatonicznego, lecz *chromatycznego* półtonu na 17/16.

Dlaczego ważne jest pytanie o wybór komatów? W FJS-ie wszystkie komaty są generowane przez algorytm. Nie jest tak w HE czy BJ, co oznacza, że listę trzeba wkuć lub cały czas do niej się odnosić. Bez tych rozpisek nie można nawet zacząć.

Dla FJS-u to jest właśnie jedna z trzech najważniejszych zalet płynących z korzystania z algorytmu. To swoisty odpowiednik „neutralności kulturowej”.

Punkt dla FJS-u, pół dla HE.

> **FJS: 3, HE: 1,5, BJ: 1.**

## Forma alteracji

Zobaczmy, jak zapisuje się te komaty na pięciolinii.

HE poświęcona jest lista skompilowana przez Marca Sabata i Wolfganga von Schweinitza, do której możesz zajrzeć [tu](http://www.marcsabat.com/pdfs/fulllegendE.pdf).

A co to? Inny znak dla każdego komatu, który nie ma nic wspólnego z nim samym? Ech, kolejna rozpiska – tym razem arbitralnych kształtów – do zapamiętania lub ciągłego podpatrywania…

Jedyny związek pomiędzy kształtami a komatami, który mogłem znaleźć, wynikł z bliższej obserwacji. HE dzieli znaki chromatyczne ze względu na wielkość na cztery kategorie, odpowiednio (malejąco): 1/3-tony, ćwierćtony, komaty i schizmaty. Jest tylko jeden 1/3-ton (27/26) i jeden ćwierćton (33/32); te alterują tak, jak tradycyjne ćwierćtonowe znaki chromatyczne. Schizmaty aż do 31-limitu używają ukośników przednich i tylnich oraz plusów i minusów, a komaty – strzałek. Do konstrukcji symboli dla 32. i 64. używa się wcześniejszych znaków, tyle że opatrzonych klamrami – znowu bez żadnego porządku.

Do tego 5-limitowe alteracje zachowują się zupełnie odmiennie od całej reszty. Zamiast być niezależnymi znakami, przyczepiają się do znaków pitagorejskich. To oznacza, że niemożliwe jest zapisać 5-limitową alterację bez równoczesnego zapisania pitagorejskiej alteracji. To trochę przeszkadza, ale nie aż tak bardzo. To, że w *C*-dur, by zapisać strzałkę w dół przy *e*, trzeba również postawić kasownik, jest trochę dziwne, ale to nie poważny problem.

BJ udaje się to znacznie lepiej. Chociaż komaty są z góry ustalone, symbole dla nich są od 13. wzwyż przewidywalne. Tylko następujące znaki są arbitralnym wyborem: 5. (komat syntoniczny) – plusy i minusy; 7. (35/36), tak jak w HE, wykorzystuje strzałkę w kształcie siódemki; 11. (33/32) – strzałka w górę lub w dół. (Znak dla komatu 7. u BJ można też przyczepiać do krzyżyków i bemoli, ale w przeciwieństwie do HE nie jest to wymagane, więc nie stanowi problemu).

Każda alteracja od 13. w górę wykorzystuje samą liczbę pierwszą do zapisu dodatniego przesunięcia… (Oho, dobry początek!)

…a do ujemnego – tę samą liczbę *do góry nogami*. Serio? Jedynym powodem, dla którego nie uznaję tego za problem **największej wagi**, jest to, że 11. zapisuje się specjalnym znakiem, a nie liczbą „11”, która wygląda tak samo po obróceniu, jeżeli zapisuje się cyfrę jeden pionową kreską. Oprócz tego najmniejszą liczbą, która ma taki problem, jest 686989.

FJS wykorzystuje samą liczbę pierwszą dla zapisu wszystkich mikrotonalnych alteracji, neguje się je, dodając znak minus, a łączy je się, przemnażając. Zakładam, że w BJ łączy się, pisząc jedno po drugim (konkatenacją), której nie można jednoznacznie odszyfrować – 1097 to liczba pierwsza, która naraz jest złożeniem dwóch innych liczb pierwszych, czyli 109 i 7. Jednak nigdy nie spotkałem się z nutą zapisaną w BJ, ozdobioną więcej niż jednym liczbowym znakiem alteracji.

Punkt dla FJS-u, pół dla BJ.

> **FJS: 4, HE: 1,5, BJ: 1,5.**

## Składnia alteracji

Spójrzmy więc, jak te alteracje się zachowują, czyli jak właściwie alterują nuty?

W HE wszystkie dodatnie alteracje podwyższają, a wszystkie ujemne obniżają. To uogólnienie idei, że krzyżyk podwyższa, a bemol obniża.

W BJ, poza 81/80, wszystkie dodatnie alteracje są otonalne, a wszystkie ujemne – utonalne. To z kolei uogólnienie idei, że krzyżyk dodaje kwinty, a bemol odejmuje.

W FJS, wszystkie dodatnie alteracje są otonalne, a wszystkie ujemne – utonalne, bez wyjątku.

I tutaj prawdopodobnie znajduje się najbardziej kontrowersyjny punkt tego porównania. Tutaj nie mogę podać konkretnego powodu, dla którego uważam, że wskazywanie otonalności i utonalności jest lepsze od wskazywania kierunku. Mogę natomiast powiedzieć to: Jak wymyśliłem FJS, który początkowo faktycznie wskazywał kierunek, używałem go do rozmyślania i analizowania strojów naturalnych, nagle odkryłem, że przez wskazywanie kierunku FJS przekomplikowuje sprawę – zmienię natychmiast na wskazywanie otonalności i utonalności. Sprawiło to, że moje myślenie FJS-owe ogromnie się uprościło, a zatem tak zostało. Pozostaje mi tylko mieć nadzieję, że to samo spotka również Ciebie, czytelniku.

BJ byłby tutaj na równi z FJS-em, poza bardzo irytującym szczegółem, że 81/80 samo jest wyjątkiem własnej reguły. Ale dlatego, że 81/80 w ogóle działa inaczej – jako dostrojenie-korekta – oraz dlatego, że znaki plus i minus naprawdę oddają ideę podwyższania i obniżania, odpuszczam mu ten grzech lekki.

(Jeśli mimo to uważasz, że lepsze jest wskazywanie kierunku, proszę cię bardzo: daj punkt Helmholtzowi, zamiast FJS i BJ. I tak nie będzie to miało końcowego znaczenia.)

Punkt dla BJ i FJS-u.

> **FJS: 5, HE: 1,5, BJ: 2.5.**

## Nazwy nut

Popatrzymy teraz na coś innego: nazwy nut (a także interwałów). Chociaż HE i BJ oba przykładają do tej kwestii minimalną wagę, FJS tutaj *rozpoczyna* i stąd buduje zapis nutowy.

Z powodu losowych symboli, prawie niemożliwe jest nazywanie nut w HE, chyba że chcesz używać całkowicie innego systemu albo pisać czcionką stworzoną specjalnie dla HE. Jeszcze nie widziałem takiego wyczynu.

A co z BJ? Jego alteracje w końcu wyglądają obiecująco. Ale BJ znowu z kolei ma dziwny system podziału swoich alteracji przy nazywaniu nut. Niektóre z nich są pisane między tonem diatonicznym a alterację pitagorejską, ale nikt nie mówi, które. Na przykład nuta o komat niebiański niżej niż *es* to jest *e*7♭+ (sic!) Alteracja 7 znajduje się między *e* a bemolem, ale + już po tym bemolu. Najbardziej boli fakt, że komat niebiański w dół u BJ to jest „najpierw komat niebiański plus syntoniczny w dół, ale potem z powrotem o syntoniczny w górę”.

BJ także ma zaawansowany system wypowiadania tych nazw. Jest on podobny do FJS-u, ale dużo bardziej skomplikowany, skoro komaty dla 5, 7, i 11 mają nieregularne symbole. Kyle Gann podaje możliwą nazwę „G-sharp-up-arrow-double-sub-seven-minus” (czyli mniej więcej „gis-strzałka-w-górę-podwójny-pod-siedem-minus”). To dużo bardziej skomplikowane, niż najdziksza możliwa nazwa w FJS-ie, która zawsze będzie się składać z: (części pitagorejskiej)-(ewentualnego „nad”)-(otonalnych)-(„pod”)-(utonalnych), w tej kolejności. Gann mówi, że składanie alteracji w BJ nie ma standardowej formy.

Ten system jest nadal lepszy niż nic.

Żaden system nie pokazuje nazw interwałów, które przecież byłyby dokładnym tłumaczeniem ułamków JI bez toniki.

Punkt dla FJS-u, pół dla BJ.

> **FJS: 6, HE: 1,5, BJ: 3.**

## Zasięg i precyzja

Wszystkie trzy systemy są w stanie zapisać JI z nieskończoną precyzją. (Też dlatego nie wziąłem pod uwagę Sagittal w tej analizie. Sagittal, będąc uniwersalnym językiem całej mikrotonalności, ma zawsze skończoną precyzję, poza tym i tak działa całkowicie inaczej, skoro nie operuje wyłącznie w JI.)

Co do zasięgu, mógłbym powiedzieć, że FJS dostaje złoty medal, HE srebrny, a BJ brązowy. Ale to nie ma większego sensu: po prostu porównuję stany obecne. Nie jest to ważne, że HE potrafi zapisać 61-limit, a BJ tylko 31-limit, bo Johnston mógłby wymyślić dodatkowe komaty aż do 127-limitu, gdyby chciał. Ważne jest to, że FJS zapisuje **cały** strój naturalny **teraz**. Jeśli HE i BJ będą dalej kontynuować tak jak teraz, to *nigdy* nie będą w stanie zapisywać tyle JI, co FJS. Zawsze wymaga to, żeby ktoś usiadł, „przeguglował” sobie ciąg alikwotów, i faktycznie się napracował. FJS zaś czyni to automatycznie, czyli zawsze będzie naprzód.

Jest to druga mocna strona algorytmu FJS-owego: sprawia, że FJS dosłownie nie ma limitu.

(Dobra, mogę dać Helmholtzowi pół punktu, skoro jest aż tak naprzód w porównaniu do BJ.)

Punkt dla FJS-u, pół dla HE.

> **FJS: 7, HE: 2, BJ: 3.**

## Automatyzacja

Trzecim i zarazem ostatnim atutem algorytmu jest to, że FJS można zautomatyzować. Znając tylko promień tolerancji, każdy ułamek JI można zamienić na interwał FJS-owy. To pozwoli w przyszłości włączyć FJS do programów komputerowych muzycznych.

HE też to potrafi. Jedynym drobnym problemem jest to, że czasami potrzeba więcej niż jednej alteracji na jeden cel. Ale nadal da się bez problemów go zautomatyzować. Nawet istnieje do tego [kalkulator online](https://www.plainsound.org/HEJI/).

A BJ? Ta sama strona ma również [konwerter z BJ do HE](https://www.plainsound.org/HEJI/johnston.html), który – no cóż – dla komputera działa. Ale czy naprawdę przy każdej nucie będziesz się uciekał do kalkulatora?

Jednym z atutów FJS-u jest fakt, że jego algorytmy można łatwo wykonać w głowie i szybko bez pomocy kalkulatorów, przez co jego użycie staje się dużo szybsze. Ale to samo u Johnstona…

> Dla każdego czynnika 5 w liczniku: pójdź o tercję wielką w górę. (Dodaj plus, jeżeli zacząłeś od *d*).
>
> Dla każdego czynnika 7 w liczniku: pójdź o septymę małą w górę i dodaj 7. (Jeżeli zacząłeś od *g*, *h* lub *d*, dodaj plus).
>
> Dla każdego czynnika 9 w liczniku: pójdź o sekundę wielką w górę. (Dla *e*, *g*, *h* i *d* dodaj plus).
>
> Dla każdego czynnika 11 w liczniku: pójdź o kwartę czystą w górę i dodaj ↑. (Dodaj minus, jeżeli zacząłeś od *a* lub *f*).
>
> Dla każdego czynnika 13 w liczniku: pójdź o sekstę czystą w górę i dodaj 13. (Dla *f*, dodaj również minus).
>
> Dla każdego czynnika 17 w liczniku: dodaj krzyżyk i 17.
>
> Dla każdego czynnika 19 w liczniku: pójdź o tercję małą i dodaj 19. (Dodaj plus, jeżeli zacząłeś od *d*).

Jest to tylko fragment długiej listy reguł, za pomocą których ułamki JI zamienia się na notację BJ, jak mówi poradnik Kyle'a Ganna.

Najbardziej irytujące jest to, że mamy dodatkowe reguły dodające plusy i minusy przy interwałach zbudowanych od niektórych nut, i listy tych nut się różnią dla każdej liczby pierwszej (dostrzegam oczywiście związki przyczynowo-skutkowe, ale nadal nie zmienia to faktu, że jest to ogromne przekomplikowanie sprawy!)

I owszem, to jest tylko *część* tego, co u BJ jest odpowiednikiem krótkiego i zwięzłego algorytmu w FJS-ie.

Punkt dla HE i FJS-u.

> **FJS: 8, HE: 3, BJ: 3.**

## Przykłady

No dobrze – mówisz – tu mam tę całą abstrakcyjną analizę, ale co z rzeczywistymi przykładami? Jak sprawdzają się te trzy systemy *w praktyce*?

Poniżej podaję kilka przykładów częstych użyć JI, żebyś mógł porównać na własną rękę wydajność trzech systemów w tych kontekstach. (Wysokości w HE nazywam, zapisując +5, +7 itp. dla alteracji przenoszących w górę, a −5, −7 itp. – w dół, by odzwierciedlić HE-owy zapis nutowy).

### Seria alikwotowa (1.–32.)

**FJS.** Ta tabela zajęła mi około minutę.

| c                | c               | g               | c             | e<sup>5</sup>   | g              | b<sup>7</sup>    | c |
| d                | e<sup>5</sup>   | f<sup>11</sup>  | g             | as<sup>13</sup> | b<sup>7</sup>  | h<sup>5</sup>    | c |
| des<sup>17</sup> | d               | es<sup>19</sup> | e<sup>5</sup> | f<sup>7</sup>   | f<sup>11</sup> | fis<sup>23</sup> | g |
| gis<sup>25</sup> | as<sup>13</sup> | a               | b<sup>7</sup> | b<sup>29</sup>  | b<sup>5</sup>  | b<sup>31</sup>   | c |

**HE.** Samą tabelę skonstruowałem w dwie minuty, ale nie byłem pewien swoich obliczeń. Potwierdziłem je kalkulatorem.

| c        | c    | g     | c   | e−5    | g    | b−7     | c |
| d        | e−5  | f+11  | g   | a−13   | b−7  | h−5     | c |
| des+5−17 | d    | es+19 | e−5 | f−7    | f+11 | fis+23  | g |
| gis−5−5  | a−13 | a     | b−7 | b+5+29 | h−5  | c−11−31 | c |

**BJ.** Pomimo że widziałem już gdzieś tę rozpiskę, odtworzenie jej zajęło mi aż trzy minuty.

| c    | c    | g    | c   | e    | g   | h7♭   | c |
| d    | e    | f↑   | g   | a♭13 | h7♭ | h     | c |
| c♯17 | d    | e♭19 | e   | f7+  | f↑  | f♯23+ | g |
| g♯   | a♭13 | a+   | h7♭ | h♭29 | h   | h31   | c |

### „Dobrze nastrojony fortepian” La Monte'a Younga.

**Notacja Younga.** (Tu dźwięki wypisane są w kolejności rosnącej, a nie jako szereg klawiszy na klawiaturze; z tego powodu *gis* postawione jest przed *g*, ponieważ jest niższe).

> es, e, f, fis, gis, g, a, b, h, cis, c, d, es.

**FJS.** Tak samo zwięźle, jak u Younga, ale nie polegając na arbitralnym przypisaniu do klawiszy fortepianu. Z *a* = 440 Hz, ta notacja zarazem zapisuje rzeczywiste wysokości zgodnie ze strojem Younga.

> d<sub>7</sub>, e, e<sub>7</sub>, f<sup>7</sup>, g<sup>7</sup>, g, a, a<sub>7</sub>, b<sup>7</sup>, c<sup>7</sup>, c, d, d<sub>7</sub>.

Tak wyglądałoby to, gdybyśmy ustalili za tonikę *es*, zgodnie z zapisem Younga. Rezultat jest trochę mniej zwięzły.

> es, f<sup>7</sup>, f, ges<sup>49</sup>, as<sup>49</sup>, as<sup>7</sup>, b<sup>7</sup>, b, c♭<sup>49</sup>, des<sup>49</sup>, des<sup>7</sup>, es<sup>7</sup>, es.

**Helmholtz-Ellis.** Zwięzłe w tym samym stopniu, co w przypadku FJS na *es*.

> es, f−7, f, ges−7−7, as−7−7, as−7, b−7, b, c−7−7, des−7−7, des−7, es−7, es.

**Ben Johnston.** Okrężne. Zauważ wielość znaków dla komatu syntonicznego, mimo że strój nie wykorzystuje czynnika 5.

> e♭, f7++, f+, g77♭+, a77♭++, a7♭+, h7♭+, h♭, c77♭+, d77♭+, d7♭, e7♭+, e♭.

### „Harfa Nowego Albionu” Terry'ego Riley'ego.

**Zapis Riley'ego.**

> cis, d, dis, e, eis, fis, g, gis, a, ais, b, h, cis.

**FJS.** Zgadza się z Rileym pod względem nazw pitagorejskich.

> cis<sup>5</sup>, d, dis<sup>5</sup>, e, eis<sup>25</sup>, fis<sup>5</sup>, g, gis<sup>5</sup>, a, ais<sup>25</sup>, b<sup>5</sup>, h<sup>25</sup>, cis<sup>5</sup>.

**Helmholtz-Ellis.** Na równi z FJS-em. Niemal identyczne.

> cis−5, d, dis−5, e, eis−5−5, fis−5, g, gis−5, a, ais−5−5, b−5, h−5−5, cis−5.

**Ben Johnston.** Podobno sprawny dla 5-limitów… a jednak zajęło mi trzy minuty, zanim poprawnie wyprowadziłem ten szereg:

> c♯−, d−−, d♯−, e−, e♯−, f♯−, g−−, g♯−, a−, a♯−, h−−, h♯−, c♯−.

### Porównanie notacji obok siebie

To [przyrównanie](../assets/comparison.pdf) trzech notacji opiera się na 12-taktowej harmonizacji średniowiecznej zgadywanki w skali doryckiej na *d* w 5-limicie. Że użyłem 5-limitu, powinno dać niesprawiedliwą przewagę BJ… sam zobacz.

Możesz posłuchać:

<audio controls><source src="../assets/audio_6.mp3" type="audio/mpeg"></audio>

## Werdykt

Nie jest żadną niespodzianką, że FJS jest najlepszym systemem zapisu JI spośród tych trzech. HE niestety wypada całkiem źle jako pierwsza próba. Wyobrażam sobie, że BJ, biorąc pod uwagę dziwny wybór wysokości niealterowanych, jest jeszcze gorszy niż sam HE – równy wynik pochodzi stąd, że zignorowałem propagację błędów. FJS znacząco prześciga i HE, i BJ w zadaniu notowania JI.

## Wiadomość dla Kyle'a Ganna

Jak wspomniałem, poradnik Kyle'a Ganna reklamujący system Johnstona zawiera uzupełnienie, w którym wyjaśnia, dlaczego woli BJ niż HE, chociaż ten pierwszy bardzo niezręcznie wybrał swoje dźwięki niealterowane.

Tłumaczysz pan, że wyliczenie wartości *b* w tonacji *C* jest dużo łatwiejsze w BJ niż w HE. W BJ, *c*-*h* to 15/8, a bemol obniża o 25/24, co daje 9/5. Natomiast w HE, *c*-*h* to 243/128, a bemol obniża o 2187/2048, i potrzeba kalkulatora, żeby stwierdzić, że wychodzi 16/9. Skoro uważasz pan regularność za mało ważny atut, odrzucasz pan HE, ponieważ podobno zmusza do ciągłego mnożenia i dzielenia przez liczby czterocyfrowe.

Odpowiadam na ten argument z dwóch powodów: po pierwsze dlatego, że wynika z faktu, że zarówno HE, jak i FJS, bazuje na skali pitagorejskiej. Jeśli ten argument skutecznie obala HE, to obala również FJS-a.

Drugi powód jest taki, że – nie, nie obala. Wręcz przeciwnie. Jest błędny.

BJ faktycznie zmusza do ciągłego mnożenia i dzielenia, ponieważ nawet najprostsze nuty składają się z wielu piątek przerzucanych w tę i we w tę, z plusami i minusami. Dlatego, że skala 5-limitowa przeczy sama sobie, trzeba także zawsze myśleć o siedmiu tonach diatonicznych, nie samych interwałach.

Gdy próbujesz pan używać HE, pan zakładasz od razu wszystkie ograniczenia notacji BJ: pan próbujesz wyliczyć septymę małą z septymy wielkiej obniżonej o półton chromatyczny. Pan krytykujesz HE za to, że jeden z tych interwałów teraz ma cztery cyfry, podczas gdy BJ ładnie sobie radzi z dwucyfrowymi.

Panie Gannie, septyma mała jest tuż, tuż na kole kwintowym; są to dwie kwarty czyste, obie równe 4/3 (chociaż nie ma tak łatwo w BJ, gdzie *c*-*f*, 4/3, nie równa się *f*-*b*, 27/20). Po co wchodziłbyś pan o pięć kwint do góry (septyma wielka), aby potem od razu zejść o siedem (półton chromatyczny)? Czy podróż z Karoliny Północnej do Południowej przez Maine brzmi tak samo zachęcająco? Tylko dlatego, że w *c* septymę małą pisze się z bemolem, nie oznacza, że musisz pan tak o niej myśleć. Pan jesteś do tego zmuszony przez BJ. A przenieś się pan do tonacji *d*, gdzie septyma mała nie ma alteracji, ale w przeciwieństwie do BJ ma ten sam rozmiar.

Pana poradnik do wyliczania ułamków z notacji faktycznie zaczyna od nut niealterowanych i wyliczenia interwału między nimi: dlatego, że ten interwał *zależy* od nich w BJ, czyli nie ma innego sposobu. Na przykład *d*-*e* to 10/9, czyli interwał różny od *c*-*d*, 9/8. Ani HE, ani FJS tego absurdalnego ograniczenia. Każda sekunda wielka to 9/8. Pozwala to kompozytorom uwolnić się od skali diatonicznej, gdy myślimy w JI, i pozwala na tłumaczenie od razu z ułamków na nazwy interwałów, bez kroku pośredniego, czyli konkretnych nut.

Pan mogłeś wyliczyć 16/9 z *c*-*b* na tyle różnych (dużo łatwiejszych) sposobów niż 243/128 razy 2187/2048. Właściwie wybrałeś pan prawdopodobnie najtrudniejszy z możliwych sposobów wyliczenia 16/9 (ale pamiętajmy, jest to ekwiwalent jedynego możliwego sposobu w BJ, żeby wyliczyć 9/5).

Mogłeś pan na przykład zauważyć, że *c* i *b* oba nie mają żadnych mikrotonalnych alteracji, czyli z definicji niealterowanych dźwięków, septyma mała między nimi musi być pitagorejska, czyli 16/9. Albo, że składa się z dwóch kwart czystych 4/3, czyli 16/9. Albo, że jest to odwrócenie całego tonu 9/8, czyli 16/9. FJS daje ogromną wolność szybkiego i wydajnego czytania i pisania, w przeciwieństwie do powolnego i mozolnego procesu, który wymaga BJ.

Ja widzę to tak, że pan jesteś przyzwyczajony do kajdanek Johnstona, a uwolnienie przez HE (albo FJS) powoduje u pana paraliż, ponieważ przez te lata spędzone w kajdankach pan nie wyobrażasz sobie ich braku.

Przenieś się pan na FJS. To **ogromnie ułatwi** matematykę i notację pańskiej działalności kompozytorskiej.

Albo nie – żongluj pan dalej komatami syntonicznymi.

Inni mogą mieć inne kryteria.
