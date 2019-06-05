# Porównanie FJS-u z innymi systemami

FJS to nie jedyny istniejący system zapisu JI. Wielu kompozytorów pisze muzykę mikrotonalną na własną rękę, co spowodowało stworzenie wielu szczególnych dla nich systemów dla wielu skal mikrotonalnych. Większość tych systemów jest jednak zaprojektowana z myślą o szczególnych rodzajach mikrotonalności, na przykład konkretnego mikrotonalnego podziału oktawy, zatem jest niezdatna do użycia przy JI.

FJS stworzyłem specjalnie dla JI, więc jest on dobrze dostosowany do jego zapisu. Niestety nie potrafi zapisać prawie czegokolwiek innego. **Istnieją dwa inne szeroko używane systemy o podobnych zamierzeniach:** Helmholtza-Ellisa i Bena Johnstona. (Jest także jeszcze inny system – Sagittal – przeznaczony do notowania wszelkiej muzyki mikrotonalnej. Nie będziemy jednak go rozważać, ponieważ jest oparty na przedstawianiu wysokości, a więc niezależnie od dokładności wartości reprezentowanych przez znaki zawsze będzie niedokładny w zapisie JI, ponieważ interwały JI są nieskończenie dokładne, jak ułamki naturalne).

System Helmholtza-Ellisa (czasem rozszerzany do „HEWM” – Helmholtza-Ellisa-Wolfa-Monzo) to pierwsza próba rozszerzenia zapisu nutowego do JI. [Najnowszy stworzony dodatek](http://www.marcsabat.com/pdfs/notation.pdf) do HE, który mogłem znaleźć, jest autorstwa Marca Sabata i potrafi przedstawić 61-limit.

Z drugiej strony mamy system stworzony przez jednego człowieka – kompozytora JI Bena Johnstona. [Najbardziej szczegółowa rozprawa o tym systemie](https://www.jstor.org/stable/833435) wypisuje znaki aż do 31-limitu; tak samo jest w [poradniku Kyle'a Ganna](https://kylegann.com/BJNotation.html).

Od teraz będę porównywał obydwa te systemy z FJS-em.

## Wysokości niealterowane

HE, podobnie jak FJS, zakłada, że zwykły zapis pięcioliniowy przedstawia strój pitagorejski. W ten sposób – tak jak w FJS – każdy pitagorejski interwał odpowiada dokładnie jednemu interwałowi – każda kwinta strojona jest na 3/2. Do tego momentu HE i FJS są identyczne. Tak jak w FJS-ie sprzyja to spójności, naturalności i notowaniu opartym na interwałach, a nie z góry ustalonych wysokościach.

BJ, z drugiej strony, opiera się na czymś bardziej… innowacyjnym. Różni się definicjami niealterowanych dźwięków i alteracji. Zwyczajny zapis nutowy u BJ ma następujące znaczenie:

- *f*–*c*–*g*–*d* to ciąg kwint 3/2.
- *f*–*a*, *c*–*e* i *g*–*h* to naturalne tercje wielkie, czyli 5/4.
- Standardowe krzyżyki i bemole przedstawiają przesunięcie o 25/24, czyli Pitagorejski półton chromatyczny minus dwa komaty syntoniczne = 1&lt;<sup>25</sup>.

(Komat syntoniczny to 81/80).

Zakładam, że tak zrobiono, by *c*–*e*–*g*, *f*–*a*–*c* i *g*–*h*–*d* wszystkie były durowymi 4:5:6, a *c*–*es*–*g*, *f*–*as*–*c* i *g*–*b*–*d* – molowymi 10:12:15. Uzyskano więc w *c*–*d*–*e*–*f*–*g*–*a*–*h*–*c* intensywną skalę diatoniczną Ptolemeusza, czyli naturalną skalę durową, a w *c*–*d*–*es*–*f*–*g*–*as*–*b*–*c* naturalną molową.

Mniemam, że celem tego zabiegu było ułatwienie notacji 5-limitowej opartej na harmonii diatonicznej, kosztem dosłownie całej reszty systemu.

Ale i to się nie zgadza – nawet 5-limitową harmonię diatoniczną trudno w ten sposób zapisać. *d*–*a* to nie kwinta czysta – to 40/27. To oznacza, że BJ-owskie znaki dla komatu syntonicznego (plus i minus odpowiednio w górę i w dół) są rozsiane po całej pięciolinii. Joe Monzo pisze w [definicji](http://www.tonalsoft/enc/j/johnston.aspx) BJ w encyklopedii muzyki mikrotonalnej Tonalsoftu następująco:

> *Niektórzy teoretycy strojów uważają, że pomysł notacyjny Johnstona jest dobry, ale że mógłby być lepszy, gdyby tylko użyć do konstrukcji systemu skali pitagorejskiej zamiast 5-limitowej.*

W rzeczywistości brak spójności w niealterowanych wysokościach powoduje lawinę problemów w BJ – nie zdziw się więc, jeżeli będę się odnosił do tego głównego problemu z BJ praktycznie przez całą resztę tej strony.

Stroje niezawierające piątki – na przykład ten z „Dobrze nastrojonego fortepianu” La Monte Younga (który wsławił się używaniem jedynie czynników pierwszych 2, 3 i 7) – wymagają ogromnej ilości korekcji komatem syntonicznym w BJ, pomimo że nawet jeden czynnik 5 nie pojawia się w stroju. To po prostu absurdalne. (Na dole tej strony wyliczam różne tego typu porównania).

To wręcz niewykonalne zadanie przetransponować utwór w BJ. Utwór zapisany HE lub FJS można z łatwością przetransponować o kwintę 3/2, przesuwając pitagorejskie części nazw wysokości, a zostawiając alteracje mikrotonalne bez zmian. Da się to samo osiągnąć i przy niepitagorejskiej transpozycji, jak np. 5/4 – po prostu najpierw przesuń (pitagorejsko) o 81/64, a potem dodaj +5 do wszystkich nut. W BJ tak nie jest – transpozycja o interwał 3- czy 5-limitowy (o dalszych nie wspominając) jest o wiele bardziej skomplikowana. Jeżeli utwór jest w *G*-dur, przełożenie go na *D*-dur wymagałoby dodania komatu syntonicznego (plusa) przy każdym *a*, ponieważ *g*–*d* (3/2) to nie ten sam interwał, co *d*–*a* (40/27), a także jego odwrotności (minusa) do każdego *f*, ponieważ *g*–*b* (6/5) to nie to samo, co *d*–*f* (32/27). Partie instrumentów transponujących musiałyby zostać przepisane w zupełności z ogromną liczbą dodatkowych plusów i minusów, nawet jeżeli interwał, o który transponują, to coś tak prostego, jak mocny cały ton (9/8). To łatwo zauważyć w poradniku Kyle'a Ganna, który rozpisuje **siedem** różnych wersji szeregu alikwotowego od 16. do 32., zależnie od podstawy!

NB. *Kyle Gann napisał ciekawą kontrargumentację dot. tego problemu w swoim poradniku BJ. Udzielam na nią odpowiedź na dole tej strony.*

Punkt dla HE i FJS-u.

> **FJS: 1, HE: 1, BJ: 0.**

## Dobór znaków chromatycznych

I HE, i BJ tak jak FJS zapisują całą resztę JI za pomocą znaków chromatycznych przedstawiających skoki komatyczne.

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

A co w takim razie z BJ? Oto lista aż do 31.:

- 81/80, komat 5., niemający zupełnie takiej samej funkcji, co inne; to bardziej znak do dostrajania (ponieważ utwóry zapisane w BJ są obficie posypane komatami syntonicznymi).
- 35/36, czyli komat 7. z dodanym czynnikiem pięciu.
- 33/32, czyli komat 11.
- 65/64, czyli komat 13. z dodanym czynnikiem pięciu.
- 51/50, czyli komat 17. z dodanym czynnikiem dwudziestu pięciu.
- 95/96, czyli komat 19. z dodanym czynnikiem pięciu.
- 46/45, czyli komat 23. z dodanym czynnikiem pięciu.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 31/30, czyli komat 31. z dodanym czynnikiem pięciu.

Jak widać, wszystkie te alteracje – oprócz 11. – zawierają czynnik 5, a 17. ma nawet podwójną 5. To prawdopodobnie korekcja służąca przeciwdziałaniu wszechobecnych piątek w BJ – zupełnie tak, jakby te czynniki były próbą skorygowania błędu, jakim było przypisanie tonów diatonicznych do sekwencji ptolemejskiej. Także widzimy dużo komatów o postaci $$\frac{n+1}{n}$$, natomiast tutaj są one prawdopodobnie zjawiskiem przypadkowym.

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

FJS wykorzystuje samą liczbę pierwszą dla zapisu wszystkich mikrotonalnych alteracji, a łączy je się, przemnażając. Zakładam, że w BJ łączy się, pisząc jedno po drugim (konkatenacją), której nie można jednoznacznie odszyfrować – 1097 to liczba pierwsza, która naraz jest złożeniem dwóch innych liczb pierwszych, czyli 109 i 7. Jednak nigdy nie spotkałem się z nutą zapisaną w BJ, ozdobioną więcej niż jednym liczbowym znakiem alteracji.

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

BJ także ma zaawansowany system wypowiadania tych nazw. Jest on podobny do FJS-a, ale dużo bardziej skomplikowany, skoro komaty dla 5, 7, i 11 mają nieregularne symbole. Kyle Gann podaje możliwą nazwę „G-sharp-up-arrow-double-sub-seven-minus” (czyli mniej więcej „gis-strzałka-w-górę-podwójny-pod-siedem-minus”). To dużo bardziej skomplikowane, niż najdziksza możliwa nazwa w FJS-ie, która zawsze będzie się składać z: (części pitagorejskiej)-(ewentualnego „nad”)-(otonalnych)-(„pod”)-(utonalnych), w tej kolejności. Gann mówi, że składanie alteracji w BJ nie ma standardowej formy.

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

Jednym z atutów FJS-a jest fakt, że jego algorytmy można łatwo wykonać w głowie i szybko bez pomocy kalkulatorów, przez co jego użycie staje się dużo szybsze. Ale to samo u Johnstona...

> *For every 5 in the numerator: Ascend one major 3rd. (Add plus if starting on a D.)*
>
> *For every 7 in the numerator: Ascend one minor seventh and add a 7. (Add plus if starting on a G, B, or D.)*
>
> *For every 9 in the numerator: Ascend one major second. (Add plus if starting on an E, G, B, or D.)*
>
> *For every 11 in the numerator: Ascend one perfect fourth and add ↑. (Add minus if starting on an A or F.)*
>
> *For every 13 in the numerator: Ascend one minor sixth and add a 13. (Add minus if starting on an F.)*
>
> *For every 17 in the numerator: Add a sharp and a 17.*
>
> *For every 19 in the numerator: Ascend a minor third and add a 19. (Add plus if starting on a D.)*

Jest to tylko fragment długiej listy reguł, za pomocą których ułamki JI zamienia się na notację BJ, jak mówi poradnik Kyle'a Ganna.

Najbardziej irytujące jest to, że mamy dodatkowe reguły dodające plusy i minusy przy interwałach zbudowanych od niektórych nut, i listy tych nut się różnią dla każdej liczby pierwszej (dostrzegam oczywiście związki przyczynowo-skutkowe, ale nadal nie zmienia to faktu, że jest to ogromne przekomplikowanie sprawy!)

I owszem, to jest tylko *część* tego, co u BJ jest odpowiednikiem krótkiego i zwięzłego algorytmu w FJS-ie.

Punkt dla HE i FJS-a.

> **FJS: 8, HE: 3, BJ: 3.**

## Examples

All right, you may think, here's all this abstract analysis, but what about actual examples? How do the three systems perform *in practice*?

Below I've provided examples of actual common JI contexts, so it can be seen how all three systems compare in their efficiency within these contexts. (To name notes in Helmholtz-Ellis, I just use +5, +7, etc. for upward accidentals, and −5, −7, etc. for downward accidentals, to reflect its pitch notation.)

### The Harmonic Series 1-32

**FJS.** This table took me about a minute to write.

| C               | C               | G               | C              | E<sup>5</sup>   | G              | B♭<sup>7</sup>  | C |
| D               | E<sup>5</sup>   | F<sup>11</sup>  | G              | A♭<sup>13</sup> | B♭<sup>7</sup> | B<sup>5</sup>   | C |
| D♭<sup>17</sup> | D               | E♭<sup>19</sup> | E<sup>5</sup>  | F<sup>7</sup>   | F<sup>11</sup> | F♯<sup>23</sup> | G |
| G♯<sup>25</sup> | A♭<sup>13</sup> | A               | B♭<sup>7</sup> | B♭<sup>29</sup> | B<sup>5</sup>  | B<sup>31</sup>  | C |

**Helmholtz-Ellis.** This table took me roughly two minutes to write, being initially uncertain of my results. I used the calculator to verify them.

| C       | C    | G     | C    | E−5     | G    | B♭−7    | C |
| D       | E−5  | F+11  | G    | A−13    | B♭−7 | B−5     | C |
| D♭+5−17 | D    | E♭+19 | E−5  | F−7     | F+11 | F♯+23   | G |
| G♯−5−5  | A−13 | A     | B♭−7 | B♭+5+29 | B−5  | C−11−31 | C |

**Ben Johnston.** This table took roughly three minutes, given that I have actually seen this fragment of the harmonic series in Johnston's system before.

| C    | C    | G    | C   | E    | G   | B7♭   | C |
| D    | E    | F↑   | G   | A♭13 | B7♭ | B     | C |
| C♯17 | D    | E♭19 | E   | F7+  | F↑  | F♯23+ | G |
| G♯   | A♭13 | A+   | B7♭ | B♭29 | B   | B31   | C |

### La Monte Young's "Well-Tuned Piano"

**Young's notation.** (I write the scale as ascending, not as a sequence of keys on the keyboard, so G♯ comes before G as it is a lower pitch.)

E♭, E, F, F♯, G♯, G, A, B♭, B, C♯, C, D, E♭.

**FJS.** Exactly as concise as Young, without relying on an arbitrary keyboard mapping. Also notates the tonic as its true pitch with reference to A = 440 Hz, the tuning of Young's piano.

D<sub>7</sub>, E, E<sub>7</sub>, F<sup>7</sup>, G<sup>7</sup>, G, A, A<sub>7</sub>, B♭<sup>7</sup>, C<sup>7</sup>, C, D, D<sub>7</sub>.

Here is what it would be if it used E♭ to notate the tonic; a little less concise.

E♭, F<sup>7</sup>, F, G♭<sup>49</sup>, A♭<sup>49</sup>, A♭<sup>7</sup>, B♭<sup>7</sup>, B♭, C♭<sup>49</sup>, D♭<sup>49</sup>, D♭<sup>7</sup>, E♭<sup>7</sup>, E♭.

**Helmholtz-Ellis.** Just as concise as the FJS on E♭.

E♭, F−7, F, G♭−7−7, A♭−7−7, A♭−7, B♭−7, B♭, C♭−7−7, D♭−7−7, D♭−7, E♭−7, E♭.

**Ben Johnston.** Very inconcise. Also note the abundance of syntonic comma accidentals, in a tuning with no factor of five.

E♭, F7++, F+, G77♭+, A77♭++, A7♭+, B7♭+, B♭, C77♭+, D77♭+, D7♭, E7♭+, E♭.

### Terry Riley's "Harp of New Albion"

**Riley's notation.**

C♯, D, D♯, E, E♯, F♯, G, G♯, A, A♯, B, B♯, C♯.

**FJS.** The Pythagorean pitch classes match Riley's.

C♯<sup>5</sup>, D, D♯<sup>5</sup>, E, E♯<sup>25</sup>, F♯<sup>5</sup>, G, G♯<sup>5</sup>, A, A♯<sup>25</sup>, B<sup>5</sup>, B♯<sup>25</sup>, C♯<sup>5</sup>.

**Helmholtz-Ellis.** On par with the FJS. Virtually identical.

C♯−5, D, D♯−5, E, E♯−5−5, F♯−5, G, G♯−5, A, A♯−5−5, B−5, B♯−5−5, C♯−5.

**Ben Johnston.** Allegedly optimized for 5-limit harmony. This sequence took me about three minutes to correctly derive.

C♯−, D−−, D♯−, E−, E♯−, F♯−, G−−, G♯−, A−, A♯−, B−−, B♯−, C♯−.

### Notation Comparison

This [comparison](../assets/comparison.pdf) of the three systems in practice uses a 12-bar harmonization of a medieval melody in the Dorian mode on D in 5-limit just intonation. The fact that it's 5-limit should give Johnston's system an unfair advantage... well, see for yourself.

Listen to it:

<audio controls><source src="../assets/audio_6.mp3" type="audio/mpeg"></audio>

## Verdict

Unsurprisingly, the FJS is the best existing notation system for Just Intonation. Helmholtz-Ellis notation, unsurprisingly, is quite bad, being the first attempt at such a task. Johnston notation, given its absurd choice of the natural notes, is considerably worse than even Helmholtz-Ellis; its equal score is a result of figurative transfer error. The FJS significantly exceeds both Helmholtz-Ellis and Johnston notation in its task of notating JI.

## A Note to Kyle Gann

As mentioned, Kyle Gann's guide for Ben Johnston's system contains an addendum where he explains why he prefers Johnston over Helmholtz-Ellis despite its very inconvenient choice of natural notes.

You explain that finding the value of B♭ in the key of C is easier in Johnston than in Helmholtz-Ellis. In Johnston, C to B is 15/8, and adding a flat lowers it by 25/24, resulting in 9/5. In Helmholtz-Ellis, however, C to B is 243/128, and adding a flat lowers it by 2187/2048, and only a calculator can tell you that this results in 16/9. Considering consistency as one of the less important virtues, you dismiss Helmholtz-Ellis because apparently it will force you to constantly multiply and divide by four-digit numbers.

I respond to this argument because it relies on the fact that Helmholtz-Ellis notation, like the FJS, is based on the Pythagorean scale. So if this argument works against Helmholtz-Ellis, it should also work against the FJS.

I also respond because this argument is a non-sequitur.

Ben Johnston notation does force the user to constantly multiply and divide, because even the simplest notes are made of many factors of five juggled back and forth and adjusted for with pluses and minuses. Because the 5-limit scale is not consistent, it also forces the user to always think in terms of the seven diatonic pitches, rather than intervals.

When you attempt to use Helmholtz-Ellis notation, you automatically assume the same restrictions that you were bound to with Ben Johnston notation: trying to figure out the value of a minor seventh using a major seventh minus a chromatic semitone. You criticize Helmholtz-Ellis for the fact that one of these intervals now requires four-digit numbers to represent, while Johnston usually works with up to two-digit numbers.

The minor seventh is right next to you on the circle of fifths; it's just two perfect fourths, both 4/3 (again, unlike in Johnston, where C-F is 4/3 but F-B♭ is 27/20). Why would you go up five fifths (major seventh) to then immediately return seven fifths back (chromatic semitone)? Would you travel from North Carolina to South Carolina stopping by in Maine? Just because C writes its minor seventh with a flat doesn't mean that you have to think of it in those terms; you do this because Johnston forces you to. Take a modulation to D. There, the minor seventh is a natural note, but unlike in Johnston notation, it still has the same size nonetheless.

Your guide to figuring out the ratios from notation does indeed start at looking at the natural notes and figuring out the interval between them. This is because this interval *depends* on the natural notes in Johnston notation, so there indeed is no other way to figure it out. For example, D to E is 10/9, which is different from C to D, 9/8. Helmholtz-Ellis and the FJS do not have this absurd restriction. Every major second is 9/8. This allows a composer to be freed from the restriction of the diatonic scale when thinking in JI, and it allows one to translate interval names directly to ratios.

You could have arrived at the fact that C to B♭ is 16/9 in so many different (and easier) ways than 243/128 times 2048/2187; in fact, you probably chose the most inconvenient possible way to arrive at 16/9 (the equivalent of the only possible way to arrive at 9/5 in Johnston).

For example, you could have noticed that both C and B♭ have no microtonal accidentals, so by the definition of the natural notes, the minor seventh between them is Pythagorean, hence 16/9. Or you could have noticed that it is two 4/3 fourths, hence 16/9. Or you could have noticed that it is the inversion of a 9/8 whole tone, hence 16/9. The FJS gives you such a freedom of quickly and efficiently reading and writing, as opposed to the slow, tedious process that Johnston enforces.

The way I see it, you are used to handcuffed maneuvers in Johnston notation, and are paralyzed when Helmholtz-Ellis (or the FJS) free you, because you got used to the handcuffs over the years of being handcuffed.

Switch to the FJS. It will make the math and notation part of your compositional pursuit **so much easier**.

Or don't, and continue juggling syntonic commas.

Others may have different criteria.
