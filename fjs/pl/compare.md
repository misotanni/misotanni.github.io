# Porównanie FJS-u z innymi systemami

FJS to nie jest jedyny system zapisu JI, z którym można się spotkać. Wielu kompozytorów, pisząc muzykę mikrotonową na własną rękę, tworzą wiele osobistych systemów dla różnorakich skal mikrotonowych. Większość tych systemów jest jednak zaprojektowana z myślą o szczególnych rodzajach mikrotonowości lub własnych potrzebach, na przykład konkretnego podziału oktawy czy limitu (ograniczenia ze względu na czynniki pierwsze), zatem jest niezdatna do użycia do ogólnego JI.

FJS stworzyłem szczególnie dla ogółu JI; jest on przez to dobrze dostosowany do jego zapisu. Niestety oznacza to, że nie nadaje się do niczego innego. **Dwoma rozpowszechnionymi notacjami JI o podobnym zakresie** są notacje Helmholtza-Ellisa (HE) i Bena Johnstona (BJ).

Istnieje także Sagittal, system przeznaczony do notowania wszelkiej muzyki mikrotonowej. Nie będziemy jednak go rozważać, ponieważ jest oparty na przybliżeniach wysokości, a więc niezależnie od przyjętej dokładności znaków zawsze będzie niedokładny w zapisie JI, ponieważ interwały JI jako liczby wymierne są jednoznacznie, nieskończenie dokładne.

System Helmholtza-Ellisa (czasem rozszerzany do „HEWM” – Helmholtza-Ellisa-Wolfa-Monzo) to pierwsza powszechnie znana próba rozszerzenia zapisu nutowego do JI. [Najmłodsze rozbudowanie HE](http://www.marcsabat.com/pdfs/notation.pdf), które mogłem znaleźć, autorstwa Marka Sabata, potrafi przedstawić 61-limit.

W przeciwnym narożniku mamy system stworzony przez jednego człowieka – kompozytora JI Bena Johnstona. [Najbardziej szczegółowa rozprawa o tym systemie](https://www.jstor.org/stable/833435) wymienia znaki umożliwiające zapis 31-limitu; to samo przeczytać można w [poradniku Kyle'a Ganna](https://kylegann.com/BJNotation.html).

Teraz będę porównywał obydwa te systemy z FJS-em.

## Zwykły zapis

HE, podobnie do FJS-u, opiera się na założeniu, że zwykły zapis pięcioliniowy oznacza wysokości stroju pitagorejskiego. W ten sposób w obydwóch systemach każdy pitagorejski interwał odpowiada dokładnie jednemu interwałowi zapisanemu – każda kwinta czysta to 3/2. Do tego momentu HE i FJS niczym się nie różnią. Tak, jak w FJS-ie, sprzyja to spójności, naturalności i relatywności odległości (w przeciwieństwie do z góry ustalonych miejscach na pięciolinii).

Z drugiej strony podejście zastosowane w BJ jest trochę bardziej… innowacyjne. Tak temperowany jest zwykły zapis:

- *f*–*c*–*g*–*d* to ciąg kwint po 3/2.
- *f*–*a*, *c*–*e* i *g*–*h* to naturalne tercje wielkie, czyli 5/4.
- Standardowe krzyżyki i bemole przenoszą o 25/24, czyli pitagorejski półton chromatyczny minus dwa komaty syntoniczne (1&lt;<sup>25</sup>; komat syntoniczny to 81/80).

Celem tego zabiegu było zapewne to, by *c*–*e*–*g*, *f*–*a*–*c* i *g*–*h*–*d* wszystkie były trójdźwiękami durowymi 4:5:6, a *c*–*es*–*g*, *f*–*as*–*c* i *g*–*b*–*d* – molowymi 10:12:15. *c*–*d*–*e*–*f*–*g*–*a*–*h*–*c* tworzy wtedy skalę diatoniczną Ptolemeusza, czyli naturalną skalę durową, a *c*–*d*–*es*–*f*–*g*–*as*–*b*–*c* – naturalną molową.

Podobno ułatwia to diatoniczny zapis notacji 5-limitowej, kosztem dosłownie wszystkiego innego.

Ale i to się nie zgadza – i 5-limitową harmonię diatoniczną trudno czasem w ten sposób zapisać. *d*–*a* to nie kwinta czysta, tylko 40/27. Również kwinta przejściowa (czyli *h*–*fis* bądź *b*–*f*) jest równie rozstrojona. To oznacza, że BJ-owe znaki dla komatu syntonicznego, czyli plus i minus, bywają rozsypane po całej kartce. Joe Monzo w encyklopedii muzyki mikrotonowej Tonalsoftu [pisze](http://www.tonalsoft/enc/j/johnston.aspx) o BJ następująco:

> *Niektórzy teoretycy strojów uważają, że pomysł notacyjny Johnstona jest dobry, jednak dodają, że mógłby on być lepszy, gdyby oparty był na skali pitagorejskiej zamiast 5-limitowej.*

W rzeczywistości brak spójności w niealterowanych wysokościach wywołuje lawinę problemów w BJ – proszę się nie zdziwić, gdy będę się odwoływał do tego problemu niemalże cały czas w reszcie tego dokumentu.

Stroje niezawierające czynnika 5 – na przykład ten z „Dobrze nastrojonego fortepianu” La Monte Younga (który wsławił się własnością bycia generowanym przez 2, 3 i 7) – wymagają ogromnej ilości korekcji syntonicznych w BJ, pomimo że 5 nie należy do stroju, co jest po prostu absurdalne. (Na dole tej strony wyliczam różne tego rodzaju porównania).

To wręcz niewykonalne transponować utwory zapisane w BJ. W HE lub FJS można z łatwością transponować o interwały pitagorejskie, gdyż alteracje mikrotonowe wtedy nie ulegają żadnej zmianie. Przy niepitagorejskiej transpozycji, jak np. 5/4, po prostu najpierw przesuwa się o 81/64 (czyli o interwał pitagorejski), następnie dodaje +5 do wszystkich nut. W BJ już tak nie jest – przekład choćby o interwał 3- czy 5-limitowy to o wiele bardziej złożony proces. Zamiana utworu na przykład z *G*-dur na *D*-dur to zadanie wymagające dodania plusa (komatu syntonicznego) przy każdym *a*, ponieważ *g*–*d* (3/2) to nie ten sam interwał, co *d*–*a* (40/27); również do każdego *f*, ponieważ *g*–*b* (6/5) to nie to samo, co *d*–*f* (32/27). Partie instrumentów transponujących musiałyby zostać przepisane całkowicie, z ogromną liczbą dodatkowych plusów i minusów – nawet jeżeli interwał, o który transponują, to cały ton (9/8). Ten problem łatwo zauważyć w poradniku Kyle'a Ganna, który rozpisuje **siedem** różnych wersji szeregu alikwotowego od 16. do 32., zależnie od podstawy!

NB. *Kyle Gann napisał ciekawą kontrargumentację w tej kwestii w swoim poradniku BJ. Mój komentarz znajduje się niżej na tej stronie.*

Punkt dla HE i FJS-u.

> **FJS: 1, HE: 1, BJ: 0.**

## Dobór znaków mikrotonowych

I HE, i BJ, i FJS zapisują całą resztę JI za pomocą znaków mikrotonowych przedstawiających skoki komatyczne.

Oto lista aż do komatu 61. dla HE:

- 81/80, czyli komat 5.
- 64/63, czyli komat 7.
- 33/32, czyli komat 11.
- 27/26, czyli komat 13.
- 256/255, czyli komat 17. z dodanym czynnikiem pięciu.
- 513/512, czyli komat 19.
- 736/729, czyli komat 23.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 1024/1023, czyli komat 31. z dodanym czynnikiem jedenastu.
- 297/296, czyli komat 37. z dodanym czynnikiem jedenastu.
- 6561/6560, czyli komat 41. z dodanym czynnikiem pięciu.
- 129/128, czyli komat 43.
- 2304/2303, czyli komat 47. z dodanym czynnikiem czterdziestu dziewięciu.
- 160/159, czyli komat 53. z dodanym czynnikiem pięciu.
- 768/767, czyli komat 59. z dodanym czynnikiem trzynastu.
- 1281/1280, czyli komat 61. z dodanym czynnikiem siedmiu i pięciu.

Kilka z tych alteracji może wyglądać dla Ciebie znajomo: 5., 7., 11., 19., 23. i 43. Pokrywają się one z FJS-owymi.

Większość pozostałych alteracji – 17., 29., 31., 37., 41., 47., 53., 59. i 61. – zawiera oprócz 2, 3 i danej liczby pierwszej inne czynniki. Tak naprawdę jedyne komaty w HE, które ich nie zawierają, to te, które pokrywają się z FJS-owymi, plus 13. (Spośród tych pomiędzy 32 a 64 tylko jeden, 43., ma taką formę).

Dlaczego to problem? Chociaż komaty pierwsze jako takie można wciąż wyrazić, wymaga to dwóch odrębnych alteracji, co jest niepotrzebnie mylące. Zdaje mi się, że wszystkie komaty po 23. dobrano ze zbioru ułamków postaci $$\frac{n+1}{n}$$, często kosztem złożonego rozkładu pierwszego. (Warto zauważyć, że taka postać nie gwarantuje, że powstały komat jest mały. Jednym dobrze znanym komatem w teorii mikrotonowej muzyki jest 1029/1024 – różnica pomiędzy kwintą 3/2 a trzema septymowymi całymi tonami (8/7) – czyli liczba nie takiej postaci, a jednak wyjątkowo drobna).

HE wykorzystuje niektóre liczby pierwsze więcej niż raz i niepotrzebnie komplikuje reprezentacje bardziej złożonych interwałów JI. Na przykład 17/16 wymaga zapisania 16/15 przesuniętego o 256/255, a samo 16/15 to 256/243 przesunięte o 81/80. Używanie dwóch znaków przygodnych dla prostego interwału pierwszego? Przynajmniej do interwałów pierwszych do 31 nie potrzeba *trzech* lub więcej znaków.

Jest też dużo różnorodności w szerokościach tych komatów: trzynasty – 27/26 – jest ogromny w porównaniu do 41. – 6561/6560.

A co w takim razie z BJ? Oto lista aż do 31.:

- 81/80, komat 5., niemający zupełnie takiej samej funkcji, co inne; to bardziej znak do dostrajania (ponieważ utwory zapisane w BJ są owymi komatami syntonicznymi obficie poprószone).
- 35/36, czyli komat 7. z dodanym czynnikiem pięciu.
- 33/32, czyli komat 11.
- 65/64, czyli komat 13. z dodanym czynnikiem pięciu.
- 51/50, czyli komat 17. z dodanym czynnikiem dwudziestu pięciu.
- 95/96, czyli komat 19. z dodanym czynnikiem pięciu.
- 46/45, czyli komat 23. z dodanym czynnikiem pięciu.
- 145/144, czyli komat 29. z dodanym czynnikiem pięciu.
- 31/30, czyli komat 31. z dodanym czynnikiem pięciu.

Jak widać, wszystkie te alteracje – oprócz 11. – zawierają czynnik 5, a 17. ma nawet podwójną 5. To prawdopodobnie remedium na wszechobecne piątki w BJ – jakby próba skorygowania błędu, jakim było przypisanie tonów diatonicznych do sekwencji ptolemejskiej, konkretnie od *c*. Także widzimy dużo komatów o postaci $$\frac{n+1}{n}$$, prawdopodobnie jako wypadkowa różnych czynników (nie czynników w znaczeniu arytmetycznym!).

Tego doboru nie można mierzyć tą samą miarą, co HE – to całkiem rozsądny wybór przy takim nierozsądnym zestawie wysokości diatonicznych. 65/64 przenosi 8/5 do 13/8, 51/50 przenosi 25/24 do 17/16, 46/45 – 45/32 do 23/16… To odwzorowania prostych 5-limitowych interwałów na stosowne liczby pierwsze.

Wartości alteracji wykorzystane przy FJS są podobne do tych z BJ pod tym właśnie względem: zawsze odwzorowują interwały ze stroju pitagorejskiego na liczby pierwsze, tyle że bez żadnych dodatkowych czynników.

Punkt dla BJ i FJS-u.

> **FJS: 2, HE: 1, BJ: 1.**

## Konstrukcja komatów

Skąd pochodzą te alteracje?

Ani HE, ani BJ nie udzielają wyjaśnień.

W HE występują 81/80 (**komat syntoniczny**) i 64/63 (**komat septymowy**), które, jak zakładam, znalazły się tam z powodu ich historycznego znaczenia. 33/32 i 27/26 przypominają znajome ćwierćtonowe interwały z 11- i 13-limitu. Komaty 17. i 19. wyglądają na przypadkowe \\(\frac{n+1}{n}\\) na potęgach dwójki: 256/255 i 513/512. Komaty 23. i 43. są identyczne do FJS-owych. Reszta wydaje się całkiem losowa, jakby poszukiwanie odpowiadających komu ułamków \\(\frac{n+1}{n}\\) w szeregu alikwotowym w ciemno.

BJ oczywiście ma 81/80 dla załagodzenia swojej niespójności, ale pozostałe komaty są zupełnie nierozpoznawalne z powodu swojego 5-limitowego pochodzenia, a niektóre z nich rzeczywiście potrafią zadziwić. Mogłoby się wydawać, że komat taki jak 256/255 raczej wystąpi w BJ niż w HE; jednak BJ w tym celu wykorzystuje 51/50, które jest odwzorowaniem nie diatonicznego, lecz *chromatycznego* półtonu na 17/16.

Dlaczego ważne jest pytanie o dobór komatów? W FJS-ie wszystkie komaty są generowane przez algorytm. Nie jest tak w HE czy BJ, co oznacza, że listę trzeba wkuć lub cały czas do niej zaglądać. Bez tych rozpisek nie można nawet zacząć.

Dla FJS-u to jest właśnie jedna z trzech najważniejszych zalet płynących z korzystania z algorytmu. To swoisty odpowiednik „neutralności kulturowej”.

Punkt dla FJS-u, pół dla HE.

> **FJS: 3, HE: 1,5, BJ: 1.**

## Zapis alteracji

Zobaczmy, jak zapisuje się te komaty na pięciolinii.

HE poświęcona jest lista skompilowana przez Marka Sabata i Wolfganga von Schweinitza, do której możesz zajrzeć [tu](http://www.marcsabat.com/pdfs/fulllegendE.pdf).

A co to? Inny, nic nieznaczący znak dla każdego komatu? Ech, kolejna rozpiska – tym razem arbitralnych kształtów – do zapamiętania lub ciągłego podpatrywania…

Jedyny związek pomiędzy kształtami a komatami, który mogłem znaleźć, wynikł z bliższej obserwacji. HE dzieli znaki chromatyczne ze względu na wielkość na cztery kategorie, to jest (od największej do najmniejszej): 1/3-tony, ćwierćtony, komaty i schizmaty. Jest tylko jeden 1/3-ton (27/26) i jeden ćwierćton (33/32); te alterują tak, jak tradycyjne ćwierćtonowe znaki chromatyczne. Schizmaty aż do 31-limitu używają ukośników przednich i tylnych oraz plusów i minusów, a komaty – strzałek. Do konstrukcji symboli dla 32. i 64. używa się wcześniejszych znaków, tyle że opatrzonych klamrami – znowu bez żadnego uwidaczniającego się porządku.

Do tego 5-limitowe alteracje zachowują się zupełnie odmiennie od całej reszty. Zamiast być niezależnymi znakami, doczepiają się do znaków pitagorejskich. To oznacza, że nie da się zapisać 5-limitowej alteracji bez równoczesnego zapisania pitagorejskiej alteracji. To trochę przeszkadza, ale nie aż tak bardzo. To, że w *C*-dur, by zapisać strzałkę w dół przy *e*, trzeba również postawić kasownik, jest trochę dziwne, ale to nie poważny problem.

BJ wypada znacznie lepiej. Chociaż komaty są z góry ustalone, symbole dla nich są od trzynastego wzwyż przewidywalne. Tylko te znaki zostały wybrane arbitralnie: 5. (komat syntoniczny) – plus i minus; 7. (35/36) – jak w HE, czyli strzałka w kształcie siódemki; 11. (33/32) – strzałka w górę czy w dół. (Znak dla komatu 7. u BJ można też przyczepiać do krzyżyków i bemoli, ale w przeciwieństwie do HE nie jest to wymóg).

Każda alteracja pierwsza od 13. w górę wykorzystuje samą liczbę pierwszą do zapisu dodatniego przesunięcia… (Oho, dobry początek!).

…A do ujemnego – tę samą liczbę *do góry nogami*. Serio? Jedynym powodem, dla którego nie uznaję tego za przywarę **największej wagi**, jest to, że 11. zapisuje się specjalnym znakiem, a nie liczbą „11”, która wygląda tak samo po obróceniu, jeżeli zapisuje się cyfrę jedną prostą kreską. Oprócz tego najmniejszą liczbą pierwszą, która wykazuje taką własność, jest 686989.

FJS wykorzystuje samą liczbę pierwszą dla zapisu wszystkich mikrotonowych alteracji; odwraca się je, dodając kreskę, a łączy je się, przemnażając. W BJ natomiast pisze się jedno po drugim (konkatenuje), co doprowadza do sytuacji niejednoznacznych – 137 to liczba pierwsza, która naraz jest złożeniem dwóch innych liczb pierwszych: 13 i 7. (Dziękuję czytelnikowi *Volleo 6144* za zauważenie tego faktu). Jednak nigdy nie spotkałem się z nutą zapisaną w BJ ozdobioną więcej niż jednym liczbowym znakiem alteracji.

Punkt dla FJS-u, pół dla BJ.

> **FJS: 4, HE: 1,5, BJ: 1,5.**

## Składnia alteracji

Spójrzmy więc, jak te alteracje się zachowują, czyli jak właściwie alterują nuty.

W HE wszystkie dodatnie alteracje podwyższają, a wszystkie ujemne obniżają. To uogólnienie idei, że krzyżyk podwyższa, a bemol obniża.

W BJ poza 81/80 wszystkie dodatnie alteracje są otonalne, a wszystkie ujemne – utonalne. To z kolei uogólnienie idei, że krzyżyk dodaje kwinty, a bemol odejmuje.

W FJS, wszystkie dodatnie alteracje są otonalne, a wszystkie ujemne – utonalne, bez wyjątku.

Niniejszym przedstawię prawdopodobnie najbardziej kontrowersyjną opinię w tym porównaniu. Tutaj nie mogę podać konkretnego powodu, dla którego uważam, że wskazywanie otonalności i utonalności jest lepsze od kierunku. Mogę natomiast powiedzieć tak: gdy wypracowałem pierwszą wersję FJS, w której faktycznie wagę miał kierunek, i używałem go do rozmyślania i analizowania strojów naturalnych, odkryłem nagle, że taki zapis komplikuje rozważania o JI – przerzuciłem się wtedy w jednej chwili o- i utonalność. Pobudziło i ułatwiło mi to myślenie w FJS-ie; zmiana stała się wnet oficjalna. Pozostaję w nadziei, że Ty też dojdziesz do tej samej konkluzji, czytelniku.

BJ byłby tutaj na równi z FJS-em, poza bardzo irytującym szczegółem, że 81/80 jest wyjątkiem własnej reguły. Ale dlatego, że 81/80 działa inaczej – jako temperacja i korekta naraz – oraz dlatego, że znaki plus i minus naprawdę oddają ideę podwyższania i obniżania, odpuszczam mu to przewinienie.

(Jeśli mimo to uważasz, że lepszy jest kierunek, to proszę Cię bardzo: daj punkt HE zamiast FJS i BJ. I tak nie będzie to miało większego wpływu na końcowy wynik).

Punkt dla BJ i FJS-u.

> **FJS: 5, HE: 1,5, BJ: 2.5.**

## Nazwy nut

Zwrócimy teraz uwagę na coś innego: nazwy nut (a także interwałów). Chociaż HE i BJ oba przykładają do tej kwestii niewielką wagę, FJS od tego *rozpoczyna* konstrukcję zapisu nutowego.

Z powodu losowych symboli niewiarygodnie trudno nazywać nuty w HE, chyba że chcesz używać całkowicie innego systemu lub specjalnej czcionki, a takiej jeszcze nie spotkałem.

A co z BJ? Jego alteracje w końcu wyglądają obiecująco. Ale BJ z kolei dokonuje dziwnej klasyfikacji swoich alteracji przy nazywaniu nut. Niektóre z nich są pisane między tonem diatonicznym a alteracją pitagorejską, ale nigdzie nie podaje się, które. Na przykład nuta o komat septymowy niżej od *es* to *e*7♭+ ([sic!](https://en.wikipedia.org/wiki/The_Well-Tuned_Piano#Tuning)). Alteracja 7 znajduje się między *e* a bemolem, ale `+` już po tym bemolu. Najboleśniejsze jest to, że komat septymowy w dół u BJ to: „komat septymowy plus syntoniczny w dół, ale potem od razu z powrotem o syntoniczny w górę”.

BJ także ma zaawansowany system wypowiadania tych nazw. Jest podobny do FJS-u, ale dużo bardziej skomplikowany, skoro komaty dla 5, 7, i 11 mają nieregularne symbole. Kyle Gann podaje hipotetyczną nazwę „G-sharp-up-arrow-double-sub-seven-minus” (czyli mniej więcej „**gis**-strzałka-w-górę-podwójnie-pod-siedem-minus”). To już o wiele bardziej skomplikowane, niż najwymyślniejsza możliwa nazwa w FJS-ie, która i tak rozłoży się na trzy części: (część pitagorejska)–(ewentualne „nad” i otonalne)–(„pod” i utonalne). A według Ganna składanie alteracji nie jest unormowane.

Wciąż, taki system jest lepszy niż nic.

Żaden system nie określa nazw interwałów, które przecież byłyby dosłownym tłumaczeniem ułamków JI odrębnych od toniki.

Punkt dla FJS-u, pół dla BJ.

> **FJS: 6, HE: 1,5, BJ: 3.**

## Potencjał i precyzja

Wszystkie trzy systemy są w stanie zapisać JI z nieskończoną precyzją. (Dlatego też nie wziąłem pod uwagę Sagittalu w tej analizie. Sagittal jako uniwersalny język całej mikrotonowości ma zawsze skończoną precyzję. Poza tym i tak działa na zupełnie innych zasadach, skoro nie operuje wyłącznie w JI).

Co do potencjału zapisu, mógłbym powiedzieć, że FJS dostaje złoty medal, HE srebrny, a BJ brązowy. Ale to nieważne – po prostu przyglądam się liczbom. Nie ma znaczenia, że HE potrafi zapisać w szczególności 61-limit, a BJ tylko 31-limit, bo ktoś mógłby wymyślić dodatkowe komaty do BJ aż do 127-limitu, gdyby tylko chciał. W FJS zapiszesz **cały** strój naturalny **tu i teraz**. Jeśli HE i BJ rozwijać się będzie tak, jak było to do teraz, to *nigdy* nie będą w stanie zapisywać tyle JI, co FJS. Zawsze potrzeba kogoś, kto przeglądnie ciąg alikwotów i faktycznie napracuje się przy tym. W FJS-ie dzieje się zaś to wszystko bez ludzkiej ingerencji, więc zawsze będziemy o krok dalej.

To druga mocna strona FJS-owego algorytmu: dzięki niemu FJS dosłownie nie ma limitu.

(Jednak skoro HE tak wyprzedza BJ, należy mu się pół punktu).

Punkt dla FJS-u, pół dla HE.

> **FJS: 7, HE: 2, BJ: 3.**

## Automatyzacja

To trzeci i ostatni atut algorytmu. Znając tylko promień tolerancji, każdy ułamek JI można zamienić na interwał FJS-owy. To pozwoli w przyszłości włączyć FJS do muzycznych programów komputerowych.

HE też; jedynym drobnym problemem jest to, że czasami potrzeba więcej niż jednej alteracji, by osiągnąć daną liczbę pierwszą. Nadal da się go jednak zautomatyzować. Nawet istnieje do tego [kalkulator online](https://www.plainsound.org/HEJI/).

A BJ? Ta sama strona ma również [konwerter z BJ do HE](https://www.plainsound.org/HEJI/johnston.html), który – no cóż – dla komputera działa. Ale czy naprawdę przy każdej nucie będziesz się uciekał do kalkulatora?

Jednym z atutów FJS-u jest fakt, że jego algorytmy można łatwo przeprowadzić w głowie, szybko, bez pomocy kalkulatorów, przez co jego użycie staje się dużo szybsze. Ale to samo u Johnstona wygląda tak:

> Dla każdego czynnika 5 w liczniku: pójdź o tercję wielką w górę. (Dodaj plus, jeżeli zacząłeś od *d*).
>
> Dla każdego czynnika 7 w liczniku: pójdź o septymę małą w górę i dodaj 7. (Jeżeli zacząłeś od *g*, *h* lub *d*, dodaj plus).
>
> Dla każdego czynnika 9 w liczniku: pójdź o sekundę wielką w górę. (Dla *e*, *g*, *h* i *d* dodaj plus).
>
> Dla każdego czynnika 11 w liczniku: pójdź o kwartę czystą w górę i dodaj ↑. (Dodaj minus, jeżeli zacząłeś od *a* lub *f*).
>
> Dla każdego czynnika 13 w liczniku: pójdź o sekstę czystą w górę i dodaj 13. (Dla *f*, dodaj również minus).
>
> Dla każdego czynnika 17 w liczniku: dodaj krzyżyk i 17.
>
> Dla każdego czynnika 19 w liczniku: pójdź o tercję małą i dodaj 19. (Dodaj plus, jeżeli zacząłeś od *d*).

To tylko fragment długiej listy reguł, za pomocą których ułamki JI zamienia się na notację BJ zgodnie z poradnikiem Kyle'a Ganna.

Najbardziej irytuje mnie to, że przy interwałach zbudowanych od niektórych nut dodaje się według towarzyszących reguł plusy i minusy, a listy tych nut różnią się dla każdej liczby pierwszej. (Dostrzegam oczywiście związki przyczynowo-skutkowe, ale to nadal ogromne mącenie wody).

I owszem, to jest tylko *część* tego, co FJS osiąga przy swoim zwięzłym algorytmie.

Punkt dla HE i FJS-u.

> **FJS: 8, HE: 3, BJ: 3.**

## Przykłady

No dobrze – mówisz – mam tu tę całą abstrakcyjną analizę, ale co z rzeczywistymi przykładami? Jak sprawdzają się te trzy systemy *w praktyce*?

Poniżej podaję kilka przykładów częstych użyć JI, żebyś mógł samemu prześledzić i porównać wydajność trzech systemów w tych kontekstach. (Wysokości w HE nazywam, zapisując +5, +7 itp. dla alteracji przenoszących w górę, a −5, −7 itp. – w dół, by odzwierciedlić HE-owy zapis nutowy. W BJ piszę krzyżyki i bemole oddzielnie, nie jako końcówki -is oraz -es, ponieważ czasami pojawiają się dodatkowe znaki pomiędzy nimi.)

### Seria alikwotowa (1.–32.)

**FJS.** Sporządzenie tej tabeli zajęło mi około minutę.

| c                | c               | g               | c             | e<sup>5</sup>   | g              | b<sup>7</sup>    | c |
| d                | e<sup>5</sup>   | f<sup>11</sup>  | g             | as<sup>13</sup> | b<sup>7</sup>  | h<sup>5</sup>    | c |
| des<sup>17</sup> | d               | es<sup>19</sup> | e<sup>5</sup> | f<sup>7</sup>   | f<sup>11</sup> | fis<sup>23</sup> | g |
| gis<sup>25</sup> | as<sup>13</sup> | a               | b<sup>7</sup> | b<sup>29</sup>  | b<sup>5</sup>  | b<sup>31</sup>   | c |

**HE.** Samą tabelę skonstruowałem w dwie minuty, ale nie byłem pewien swoich obliczeń. Potwierdziłem je kalkulatorem.

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

**Notacja Younga.** (Tu dźwięki wypisane są w kolejności rosnącej, a nie jako szereg klawiszy na klawiaturze; z tego powodu *gis* postawione jest przed *g*, ponieważ jest niższe).

> es, e, f, fis, gis, g, a, b, h, cis, c, d, es.

**FJS.** Tak samo zwięźle, jak u Younga, ale nie polegając na arbitralnym przypisaniu do klawiszy fortepianu. Z *a* = 440 Hz ta notacja zarazem zapisuje rzeczywiste wysokości zgodnie ze strojem Younga.

> d<sub>7</sub>, e, e<sub>7</sub>, f<sup>7</sup>, g<sup>7</sup>, g, a, a<sub>7</sub>, b<sup>7</sup>, c<sup>7</sup>, c, d, d<sub>7</sub>.

Tak wyglądałoby to, gdybyśmy ustalili za tonikę *es*, zgodnie z zapisem Younga. Rezultat jest trochę mniej zwięzły.

> es, f<sup>7</sup>, f, ges<sup>49</sup>, as<sup>49</sup>, as<sup>7</sup>, b<sup>7</sup>, b, c♭<sup>49</sup>, des<sup>49</sup>, des<sup>7</sup>, es<sup>7</sup>, es.

**Helmholtz-Ellis.** Tak zwięzłe, jak w przypadku FJS na *es*.

> es, f−7, f, ges−7−7, as−7−7, as−7, b−7, b, c−7−7, des−7−7, des−7, es−7, es.

**Ben Johnston.** Okrężne. Zauważ, jak dużo znaków dla komatu syntonicznego, mimo że strój nie wykorzystuje czynnika 5.

> e♭, f7++, f+, g77♭+, a77♭++, a7♭+, h7♭+, h♭, c77♭+, d77♭+, d7♭, e7♭+, e♭.

### „Harfa Nowego Albionu” Terry'ego Riley'ego.

**Zapis Riley'ego.**

> cis, d, dis, e, eis, fis, g, gis, a, ais, b, h, cis.

**FJS.** Zgadza się z Rileym pod względem nazw pitagorejskich.

> cis<sup>5</sup>, d, dis<sup>5</sup>, e, eis<sup>25</sup>, fis<sup>5</sup>, g, gis<sup>5</sup>, a, ais<sup>25</sup>, b<sup>5</sup>, h<sup>25</sup>, cis<sup>5</sup>.

**Helmholtz-Ellis.** Na równi z FJS-em. Niemal identyczne.

> cis−5, d, dis−5, e, eis−5−5, fis−5, g, gis−5, a, ais−5−5, b−5, h−5−5, cis−5.

**Ben Johnston.** Podobno sprawny dla 5-limitów… a jednak zajęło mi trzy minuty, zanim poprawnie wyprowadziłem ten szereg:

> c♯+, d, d♯+, e+, e♯+, f♯+, g, g♯+, a+, a♯+, h, h♯+, c♯+.

### Porównanie notacji obok siebie

To [przyrównanie](../assets/compare/chorale.pdf) trzech notacji opiera się na 12-taktowej harmonizacji średniowiecznej melodii w skali doryckiej na *d* w 5-limicie. 5-limitowość powinna dać niesprawiedliwą przewagę BJ… proszę zobaczyć na własne oczy.

Tu można odsłuchać:

<audio controls><source src="../assets/compare/chorale.mp3" type="audio/mpeg"></audio>

Więcej porównań znajdziesz m.in. w [przykładach](examples.html).

## Werdykt

To żadna niespodzianka, że FJS jest najlepszym systemem zapisu JI spośród tych trzech. Zarówno HE, jak i BJ mają sporo wad, które sprawiają, że dużo mniej przydają się do zapisu JI, czyli ich pierwotnego celu. FJS znacząco prześciga i HE, i BJ w sprawnym zapisie JI.

## Wiadomość dla Kyle'a Ganna

Jak wspomniałem, poradnik Kyle'a Ganna reklamujący system Johnstona zawiera uzupełnienie, w którym wyjaśnia, dlaczego woli BJ zamiast HE, pomimo że ten pierwszy bardzo niezręcznie wybrał swoje wysokości diatoniczne.

Tłumaczy Pan, że wyliczenie wartości *b* w *C*-dur jest dużo łatwiejsze w BJ niż w HE. W BJ *c*–*h* to 15/8, a bemol obniża o 25/24, co daje 9/5. Natomiast w HE *c*–*h* to 243/128, a bemol obniża o 2187/2048, więc podobno potrzeba kalkulatora, żeby upewnić się, że wychodzi 16/9. Skoro uważa Pan regularność za mało ważny atut, odrzuca Pan HE, który rzekomo zmusza do ciągłego mnożenia i dzielenia przez liczby czterocyfrowe.

Odeprę tę argumentację z dwóch powodów: po pierwsze dlatego, że zarówno HE, jak i FJS oparte są na skali pitagorejskiej. Jeśli więc udowadnia on coś o HE, to również o FJS-ie.

Drugi powód: to błędne wnioskowanie.

BJ faktycznie zmusza do ciągłego mnożenia i dzielenia, ponieważ nawet najprostsze nuty składają się z wielu piątek przerzucanych w tę i we w tę plusami i minusami. Dlatego, że skala 5-limitowa przeczy sama sobie, trzeba także zawsze myśleć o siedmiu stopniach diatonicznych, nie zaś o samych interwałach.

Gdy próbuje Pan używać HE, zakłada Pan od razu wszystkie ograniczenia notacji BJ: próbuje Pan wyliczyć septymę małą z septymy wielkiej obniżonej o półton chromatyczny. Krytykuje Pan HE za to, że jeden z tych interwałów teraz ma cztery cyfry, podczas gdy BJ ładnie sobie radzi z dwucyfrowymi.

Panie Gannie, septyma mała jest tuż-tuż na kole kwintowym; są to dwie kwarty czyste, obie równe 4/3 (chociaż nie ma tak łatwo w BJ, gdzie *c*–*f*, 4/3, nie równa się *f*–*b*, 27/20). Po co wchodziłby Pan o pięć kwint do góry (septyma wielka), aby potem od razu zejść o siedem (półton chromatyczny)? Czy podróż z Warszawy do Trójmiasta przez Zakopane brzmi tak samo zachęcająco? Czy *g*–*f* przez *fis*, co w FJS-ie nie różni się niczym od wcześniejszego przykładu, brzmi tak samo logicznie? Tylko dlatego, że w *C* septymę małą pisze się z bemolem, nie oznacza, że musi Pan tak o niej myśleć. Zmusza Pana do tego BJ. Niech Pan spróbuje przenieść się do tonacji *G*, albo *D*, albo *A*, *E*, *H*, gdzie septyma mała nie ma alteracji, ale w przeciwieństwie do BJ ma ten sam rozmiar.

Pana poradnik do wyliczania ułamków z notacji faktycznie każe zaczynać od nut niealterowanych i wyliczenia interwału między nimi: dlatego, że interwał JI *zależy* od interwału ptolemejskiego w BJ, co oznacza, że innego sposobu nie ma. Na przykład *d*–*e* to 10/9, czyli interwał różny od *c*–*d*, 9/8. Ani w HE, ani w FJS-ie nie znajdzie Pan takiego absurdalnego ograniczenia. Każda sekunda wielka to 9/8. Pozwala to kompozytorom uwolnić się od skali diatonicznej, gdy myślą w JI, i tłumaczyć od razu z ułamków na nazwy interwałów bez kroku pośredniego, czyli konkretnych nut bazowych.

Pan mógł wyliczyć 16/9 z *c*–*b* na tyle różnych (dużo łatwiejszych) sposobów niż 243/128 razy 2187/2048. Właściwie wybrał Pan prawdopodobnie najtrudniejszy z możliwych sposobów wyliczenia 16/9 (ale pamiętajmy, jest to ekwiwalent jedynego możliwego sposobu w BJ, żeby wyliczyć 9/5).

Mógł Pan na przykład zauważyć, że *c* i *b* oba nie mają żadnych mikrotonowych alteracji, czyli z definicji niealterowanych dźwięków septyma mała między nimi musi być pitagorejska, czyli 16/9. Albo że składa się z dwóch kwart czystych 4/3, czyli 16/9. Albo że jest to odwrócenie całego tonu 9/8, czyli 16/9. FJS daje ogromną wolność szybkiego i wydajnego czytania i pisania w przeciwieństwie do powolnego i mozolnego procesu, do którego zobowiązuje BJ.

Poniżej widnieje przykład z Pańskiego poradnika do notacji BJ, który jest fragmentem z Kwartetu smyczkowego nr. 9 samego Johnstona:

<img src="../assets/compare/BJSQ9ex.jpg" alt="Ben Johnston, Kwartet smyczkowy nr. 9, fragment">

Tylko dwa takty, cztery pięciolinie. Toniką jest *c*, czyli podobno najprostsza możliwa tonika dla BJ. Skalą są banalne alikwoty, do 32. A jednak ten fragment zawiera nie jeden, nie dwa, ale **trzy** błędy. Oto i one: po pierwsze, altówka w 1. takcie w 4. mierze gra nie 11/8, ale 99/64; po drugie, wszystkie instrumenty poza pierwszymi skrzypcami w 2. takcie w 4. mierze mają nie 19/16, lecz 39/32; po trzecie, partia altówki kończy się nie na dźwiękach 17/16 i 1/1, ale 153/128 i 9/8. (Wszystkie te ułamki są interwałami od *c*, nie licząc oktaw).

Prawie kryptograficzny harmider, którym jest notacja BJ, sprawia, że to nie tylko może wystąpić – to wcale nie dziwi. Tyle zamieszania podczas kompozycji, i to – powtarzam – w tonacji *C* (nie wspominając na przykład *D*, albo *B*!)

Poniżej dla porównania ten sam fragment przepisany w FJS-ie (łącznie z błędami, ale tym razem rzucają się od razu w oczy):

<img src="../assets/compare/bj9.svg" alt="The same excerpt, in the FJS">

Ja widzę to tak, że Pan przyzwyczaił się przez lata do cugli, które założył Panu BJ, a gdy HE (czy też FJS) Pana z nich uwalnia, bierze Pana paraliż.

Mam nadzieję, że może Pan teraz przyznać: to nie BJ, ale FJS jest „symetryczny”, „jednocześnie intuicyjny i dokładny”, „bardzo logiczny”, „harmonicznie wyrazisty”, czy „ułatwiający zrozumienie stosunków harmonicznych”.

Niech się Pan przeniesie na FJS. To **ogromnie ułatwi** matematykę i notację Pańskiej działalności kompozytorskiej.

Albo może Pan pozostać przy tej żonglerce komatami syntonicznymi.

Inni mogą kierować się innymi kryteriami.
