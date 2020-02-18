# Pełny opis techniczny FJS

Ta strona to *de facto* podręcznik użytkowania FJS – zawiera wszystkie reguły, włącznie z zapisami skrótowymi. Nie sprawi ci większego użytku, jeżeli nie przeczytałeś najpierw [intensywnego kursu](crash.html).

Wszystkie elementy eksperymentalne zaznaczyłem gwiazdką (\*).

## Promień tolerancji

Jest to w FJS-ie stała. Jej wartość wynosi 65/63 – z definicji.

## Rodzaje redukcji

> Redukcja zwyczajna: $$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$
>
> Redukcja zrównoważona: $$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

### Główny algorytm FJS

> 1. Dany jest interwał pierwszy, *p*.
> 2. Niech *k* = 0.
> 3. Rozważ interwał złożony z *k* skoków o pitagorejską kwintę, *P*.
> 4. Czy różnica między *p* a *P* jest mniejsza niż promień tolerancji?
> 5. Jeżeli tak: *k* to przeniesienie kwintowe. Zwróć *k*. Koniec.
> 6. Jeżeli nie: weź następne *k* w kolejności z (0, 1, −1, 2, −2, 3, −3, …) i wróć do kroku 3.
>
> W kroku 4 przez „różnicę” rozumiemy **wartość bezwzględną** rozmiaru interwału: $$\text{reb}\left( \frac{p}{3^k} \right)$$

### Komat formalny

> Komat formalny dla liczby pierwszej *p* i przeniesienia *g* wynosi:
> 
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$
>
> *Proces odwrotny – zamiana komatu formalnego na przeniesienie kwintowe bez potrzeby użycia głównego algorytmu ani promienia tolerancji: Przeniesienie kwintowe równa się potędze 3 w rozkładzie odwrotności komatu formalnego na czynniki pierwsze.*

### Zamiana ułamka z JI na FJS.

> 1. Rozłóż ułamek na czynniki pierwsze.
> 2. Dla każdej liczby pierwszej *p* > 3 połóż α<sub>*p*</sub> = wykładnik przy p i pomnóż wyjściowy ułamek przez:
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
> 3. Wynik będzie pitagorejski – zapisz go w FJS-ie.
> 4. Teraz dodaj α<sub>*p*</sub> jako alteracje – jeżeli dodatnie, to otonalnie; jeżeli ujemne, to utonalnie.
> 5. Zredukuj i dostosuj oktawy.

### Zamiana interwału z FJS na JI.
 
> 1. Zamień część pitagorejską FJS-owego interwału na ułamek pitagorejski.
> 2. Dla każdego otonalnej (utonalnej) alteracji *p*, pomnóż (podziel) przez komat formalny dla *p*.
> 3. Zredukuj i dostosuj oktawy.

### Arytmetyka interwałowa

> - Sumą FJS-owych przedstawień dwóch JI-owych interwałów jest FJS-owe przedstawienie iloczynu tychże interwałów.
> - Różnicą między FJS-owymi przedstawieniami dwóch JI-owych interwałów jest FJS-owe przedstawienie ilorazu tychże interwałów.
> - Odwrotnością FJS-owego przedstawienia JI-owego interwału jest FJS-owe przedstawienie odwrotności multyplikatywnej tegoż interwału.
> - By dodać dwa FJS-owe interwały, dodaj ich pitagorejskie części (części odpowiadające zwykłym interwałom) i połącz alteracje.
> - By odjąć dwa FJS-owe interwały od siebie, odejmij ich pitagorejskie części, potem zamień w drugim interwale otonalne i utonalne alteracje ze sobą, potem połącz. Odejmowanie to dodawanie odwrotności.
> - By odwrócić FJS-owy interwał, odwróć część pitagorejską i zamień utonalne i otonalne alteracje ze sobą.
> - Analogicznie dodaje się interwał do wysokości i odejmuje jedną wysokość od drugiej.

## Zasady nazywania wysokości

1. FJS zakłada z góry strojenie pitagorejskie dla tradycyjnego zapisu nutowego. Interwał *c*–*e* równa się zatem 81/64, *c*–*des* – 256/243, *des*–*cis* – 531441/524288, itd.

2. Dla pojedynczego komatu formalnego liczby pierwszej *p* większej od 3 przedstawia się dopiskiem „*p*” (najlepiej w indeksie górnym) skok **w znamionowym kierunku** komatu. Na przykład *e*<sup>5</sup> leży 81/80 **w górę** od *e* (ponieważ komatem 5 jest 80/81); *f*<sup>11</sup> leży 33/32 **w dół** od *f* (ponieważ komatem 11 jest 33/32). Te nazwy nutowe czytamy, wymawiając liczbę zaraz po nazwie literowej: „e pięć”, „f jedenaście”. Jeżeli mogłaby zaistnieć możliwość nieporozumienia, można przedzielić te dwie części słowem „nad” (należy pamiętać, że to słowo nie ma żadnego związku z kierunkiem alteracji).

3. Dla pojedynczego komatu formalnego liczby pierwszej *p* większej od 3 przedstawia się dopiskiem „*p*” w indeksie dolnym skok **w kierunku przeciwnym** do znamionowego komatu. Na przykład *es*<sub>5</sub> leży 81/80 nad *es*; *a*<sub>19</sub> to 513/512 pod *a*. Wymawia się te skoki tak samo, jak powyżej, jednak z dodanym interfiksem „pod”: „es pod pięć”, „a pod dziewiętnaście”. 

4. Aby zapisać połączenia ruchów więcej niż jednego komatu **w tej samej orientacji** (tj. albo wszystkie otonalne, albo wszystkie utonalne), **przemnóż** ze sobą ich czynniki (zamiast dodawać je czy zapisać je jeden obok drugiego). To dlatego, że komaty odpowiadają liczbom pierwszym. Kiedy suma dwóch liczb pierwszych nie rozłoży się jednoznacznie na  składniki (np. 14 = 11 + 3 = 7 + 7), iloczyn dwóch pierwszych tak, ze względu na zasadnicze twierdzenie arytmetyki. Wynika z tego, że zawsze możemy wywnioskować, jakie liczby pierwsze wchodzą w skład zapisanej alteracji. (Kolejność nie ma znaczenia). Na przykład *gis*<sup>25</sup> to dwa razy po 81/80 poniżej *gis*, gdyż 25 = 5 ⋅ 5, a nie istnieje żaden inny rozkład pierwszy.

5. Zwykle z iloczynu można wyczytać od razu jego czynniki. Niektóre częstsze iloczyny są nam znane: 25, 35, 49, 125, 625, 343, 55, 77, 121… W przeciwnym wypadku – jeżeli iloczyn nie daje się łatwo rozłożyć, np. 119 = 7 ⋅ 17 – można wypisać czynniki, przedzielając je przecinkiem. Przykład z poprzedniego podpunktu można by zapisać również tak: *gis*<sup>5,5</sup> – obydwa zapisy są poprawne. Czynniki najlepiej zapisać wtedy niemalejąco, tzn. *d*<sup>119</sup> raczej jako *d*<sup>7,17</sup> niż *d*<sup>17,7</sup>. Zezwala też się na dowolne częściowe łączenie czynników pierwszych – np. *g*<sup>11,125</sup> jest poprawnym zapisem *g*<sup>1375</sup>, który czytamy tak, jak zawsze: „g jedenaście sto dwadzieścia pięć”.

6. Dodatnie i ujemne komaty przemnaża się osobno. Zapisuje się wtedy naraz indeks górny i dolny, np. *f*<sup>7</sup><sub>5</sub> przedstawia *f* obniżone o 64/63, następnie podniesione o 81/80 (lub w odwrotnej kolejności – najpierw podniesione o 81/80, potem obniżone o 64/63 – wynik jest taki sam). Zauważ, że te dwa iloczyny powinny zawsze być względnie pierwsze; w przeciwnym razie wystąpi niepotrzebne przesunięcie w jedną stronę, od razu niwelowane przez to samo przesunięcie w drugą: \**c*<sup>35</sup><sub>5</sub> to to samo, co *c*<sup>7</sup>.

7. Liczbą 1 kasuje się wszystkie mikrotonowe alteracje, analogicznie do kasownika ♮, który kasuje pitagorejskie alteracje. Można zapisać go zarówno w indeksie górnym, jak i dolnym. Na przykład *c*–*d*–*e*<sup>5</sup>–*e*<sup>1</sup> (albo po prostu *c*–*d*–*e*<sup>5</sup>–*e*) przedstawia wysokości o 1/1, 9/8, 5/4 i 81/64 nad *c*.

8. Interwałom można dostawiać alteracje tak samo, jak wysokościom.

## Zasady zapisu FJS na pięciolinii

1. Aby przenieść wysokość o dodatnie komaty, zapisz liczbę odpowiadającą połączeniu tych przesunięć przed nutą, jakby znak chromatyczny. By zachować spójność z tradycyjnym zapisem, tak, jak alteracje chromatyczne zapisujemy z lewej nuty, ale na końcu (po prawej) nazwy, tak samo postępujemy z alteracjami mikrotonowymi. Zapisujemy je po lewej (przed) główką nuty, a jeżeli przed nutą stoi już alteracja chromatyczna, przed tą alteracją.

2. Aby przenieść wysokość o komaty ujemne, zapisz podobnie liczbę odpowiadającą iloczynowi tych komatów przed główką nuty, ale poprzedź to znakiem minusa (np. „/35”). Uwaga: przykładowe „7/5” nie oznacza oczywiście przesunięcia o 7/5, tylko o 63/64 połączone z 81/80, czyli o 5103/5120.

3. Jeżeli mają zostać zapisane i dodatnie, i ujemne alteracje przy jednej wysokości, należy wtedy zapisać dodatnie przed ujemnymi (np. „11/65”).

4. *Zwykłe (pitagorejskie) znaki przygodne przydzielają pola i linie na pięciolinii (*cdefgah*) odpowiednim pitagorejskim wysokościom, a więc działają na wysokości tego pola czy linii (w tej samej oktawie) aż do końca taktu, dopóki nie zostaną skasowane lub nadpisane.* Podobnie, FJS-owe alteracje przydzielają wysokościom pitagorejskim (*c*, *des*, *cis*, *d*, itp.) dokładne naturalne wysokości, a więc działają na tej pitagorejskiej wysokości w tej oktawie aż do końca taktu, dopóki nie zostaną skasowane lub nadpisane. To oznacza, że jeżeli zapisać by na początku taktu *e* z alteracją +5, wszystkie następujące nuty o wysokości *e* w tym takcie przyjmą tę +5 domyślnie (chyba że zostanie skasowana 1 lub inną alteracją); jednak *es*, tak jak *d* czy *f*, nie przyjmie +5, niezależnie od tego, czy jest w tym samym takcie.

5. Alteracja „1” kasuje wszelkie alteracje dla danej wysokości pitagorejskiej.

---

## Zasady zapisywania kluczy w FJS (\*)

1. Znaki przykluczowe w FJS-ie działają na tej samej zasadzie, jak zwyczajne; są zapisywane obok (po prawej stronie) pitagorejskich znaków przykluczowych, jeżeli miałyby się znaleźć naraz przy jednym kluczu.

2. Domyślnie FJS-owe znaki przykluczowe mogą oddziaływać jedynie na te wysokości, które przewiduje klucz pitagorejski – na przykład, jeżeli utwór w *A*-dur posiada znaki przykluczowe ♯*fcg*, FJS-owe znaki przykluczowe mogą przydzielać alteracje mikrotonowe jedynie wysokościom *a*, *h*, *cis*, *d*, *e*, *fis* i *gis*. Ponieważ znaki przykluczowe FJS-u są niestandardowym dodatkiem do tradycyjnego zapisu nutowego, nie istnieje żaden ustalony porządek, w którym te alteracje muszą występować. Jednak z powodu pitagorejskich założeń FJS-u stwierdzam, że FJS-owe znaki przykluczowe często będą wykazywać pitagorejskie własności, więc prawdopodobnie będą występować w kolejności zawierającej się w jednym z pitagorejskich układów kwintowych: *fcgdeah* czy *headgcf*.

3. FJS-owy klucz może przydzielać alteracje mikrotonowe także tym wysokościom pitagorejskim, które nie przynależą do ustalonego szeregu diatonicznego, poprzez zapisanie na odpowiedniej linii czy polu alteracji mikrotonowej, następnie alteracji pitagorejskiej zamkniętej w nawiasach, służącej do określenia wysokości pitagorejskiej, do której alteracja ma zostać przydzielona. Nawiasy wymagane są, by zakomunikować, że alteracja pitagorejska nie należy do klucza pitagorejskiego – zamiast tego alteracja mikrotonowa zostanie dodana wszędzie tam, gdzie doda się alterację pitagorejską. Na przykład klucz dla skali *C*-dur harmonicznej można by zapisać jako *h*<sup>5</sup> *e*<sup>5</sup> *a*<sup>5</sup> *a*<sub>5</sub>(♭), wskazując, że wszystkie *a* czyste powinny być przeniesione o +5, a *as* o −5. W tym przypadku *a* nie jest z domysłu interpretowane jako *as*, ale jeżeli bemol zostanie dodany, to *dopiero wtedy* podlega przypisanej *as*om −5.

4. Tak jak ze zwykłymi kluczami, FJS-owe klucze nie wchodzą w interakcję ze znakami przygodnymi. Zamiast tego znaki przygodne FJS-owe nadpisują te, które inaczej zostałyby dodane przez klucz. *e*<sub>7</sub> – zapisane poprzez poprzedzenie główki nuty postawionej na *e* liczbą −7 – będzie zawsze *e*<sub>7</sub>, nawet jeżeli klucz wyznacza *e*<sup>5</sup>. (Nie stanie się ta wysokość np. *e*<sup>5</sup><sub>7</sub> czy po prostu *e*<sup>5</sup>.)

5. Zmiana klucza pitagorejskiego nie wymusza zmiany klucza FJS-owego. Jeżeli na przykład utwór zaczniemy kluczem ♯*fcg* *f*<sup>5</sup> *c*<sup>5</sup> *g*<sup>5</sup>, po zmianie klucza (pitagorejskiego) na *As*-dur (♭*head*) *fis*, *cis* i *gis* nadal będą alterowane o +5. To może wydać się dziwne, ponieważ *fis* raczej nie występuje w *As*-dur, jednak jest to bardzo przydatne, gdyż nie musimy ponownie określać alteracji FJS-owych za każdym razem, gdy dokonujemy choćby bardzo bliskiej modulacji – na przykład z ♯*fcg* do ♯*fc*. W takich przypadkach pożądane jest nawet, by *fis* i *cis* były dalej alterowane o +5 (oraz *gis*, które może na przykład występować jako 4\< w subdominancie drugiego stopnia).

6. Nowy klucz FJS-owy kasuje wszystkie alteracje wprowadzony przez poprzedni. Jeżeli klucz pitagorejski również był się zmienił, co musi się stać przed wprowadzeniem FJS-owego klucza, wtedy oczywiście nowe alteracje mikrotonowe oparte są na nowym zestawie wysokości diatonicznych. Na przykład ♯*fcg* *f*<sup>5</sup> *c*<sup>5</sup> *g*<sup>5</sup> to *A*-dur kwintowe; zmiana pitagorejskiego klucza na ♭*head* prowadzi implicite do klucza ♭*head* *f*<sup>5</sup>(♯) *c*<sup>5</sup>(♯) *g*<sup>5</sup>(♯); jednak jeżeli zapiszemy ponownie *f*<sup>5</sup> *c*<sup>5</sup> *g*<sup>5</sup> zaraz po wprowadzeniu pitagorejskiej zamiany na ♭*head*, tzn. jeżeli dojdzie do zestawienia ♭*head* *f*<sup>5</sup> *c*<sup>5</sup> *g*<sup>5</sup>, rezultat będzie inny niż przedtem, gdyż odpowiednie pola/linie *f*, *c* i *g* diatoniczne dla *As*-dur to już nie *fis*, *cis* i *gis*, lecz *f*, *c* i *g* czyste.

## Zasady dotyczące przenośników FJS-owych (\*)

1. Istnieją tak zwane przenośniki FJS-owe, analogiczne do przenośników oktawowych, lecz wpływające na wysokości poprzez jednoczesne przesunięcie o alterację zamiast o oktawę.

2. Jest to bez znaczenia, czy przenośnik FJS-owy znajduje się u góry (alta) lub u dołu (bassa) pięciolinii.

3. Przenośnik FJS-owy zaczyna się od złożonej alteracji FJS-owej – zapisanej dokładnie tak, jak byłaby zapisana przy nucie. Na przykład transpozycja o +5 zaczynała by się od oznaczenia „5”, o +67 i −5 – „7/5”, itd. Po przenośniku zapis „loco” nie jest wymagany.

4. Wszystkim wysokościom pod przenośnikiem dodaje się podaną alterację złożoną – po ustaleniu wysokości i alteracji ze względu na znaki przygodne i przykluczowe.

## Komat pitagorejski (\*)

Ten element notacji jest niestandardowy i nie występuje w kalkulatorze.

Liczbie 3 można przyporządkować komat pitagorejski. Czyli żeby wygodnie zapisać tryl o interwał 15/14 (który jest półtonem chromatycznym), można go zamienić na półton diatoniczny. +3 podwyższa o komat pitagorejski (jest to ruch otonalny, ponieważ dodaje 12 czynników liczby 3), z kolei −3 obniża. Czyli *his* równa się *c*<sup>3</sup>, a *deses*<sub>7</sub> – *c*<sub>21</sub>.

## FJS a notacja poza JI (\*)

Główny algorytm FJS działa dla każdej liczby, nie tylko liczb pierwszych. Chociaż FJS nie został stworzony w tym celu, cały proces algorytmów może być równie dobrze zastosowany dla większości liczb niewymiernych. Działa każda dodatnia liczba rzeczywista, ale niektóre z nich – dokładniej mówiąc, pierwiastki całkowitego stopnia z liczb wymiernych – zniszczą w trymiga dziewiczą i jakże kruchą bijekcję FJS-u, zostawiając po sobie tylko marną surjekcję (jednoznaczne czytanie, ale już nie pisanie).

Za pomocą FJS-u możesz więc zanotować np. skalę 833 centów, skalę zawierającą czynniki φ (złotego podziału). φ/1 w FJS-ie to 6><sup>φ</sup>.

Więcej: takie rozszerzenie FJS-a pokrywające dodatkowo potęgi φ zachowuje wszystkie jego niesamowite własności.

Między innymi działają również poniższe znane stałe niewymierne:

- π; 6><sup>π</sup> (τ, czyli „prawdziwa ludolfina”, ma dokładnie taki sam interwał FJS, bo równa się po prostu 2π, czyli oktawie π)
- e; 4<sup>e</sup>
- γ; 2<sup>γ</sup> (stała Eulera-Mascheroniego)

Działają wszystkie liczby przestępne.

Niektóre z tych liczb naprawdę się muzycznie przydają. φ na przykład pojawia się, gdy szukamy interwałów, których oba tony kombinacyjne są równie oddalone od faktycznych dźwięków interwału (co zresztą jest konsekwencją faktu, że φ pojawia się w liczbach Fibonacciego). Być może znane jest Ci także stwierdzenie, że φ jest liczbą *najbardziej niewymierną*, to oznacza, że muzyka oparta na φ jest jakby całkowitym przeciwieństwem stroju naturalnego. I tutaj już φ nie jest wzorem na piękno, wręcz przeciwnie! Z kolei liczba e, z definicji, jest asymptotą następującego ciągu: oktawa, dwie kwinty 3/2, trzy kwarty 4/3, cztery tercje 5/4, pięć tercji 6/5, itd. (Nie dotyczy nas użycie tych stałych jako *logarytmiczne* proporcje, np. w stroju średniotonowym złotym (*golden meantone*) albo stroju Lucy (*Lucy Tuning*)).

Nie było dotąd próby przedstawienia liczb ujemnych ani zespolonych w FJS-ie. Co by w ogóle oznaczały?

## Dalsze rozszerzenia systemu (\*)

Od tego momentu FJS jest otwarty na zmiany! Dodaj swoje rozszerzenia, jeżeli uważasz, że ich potrzebujesz. Możesz korzystać z dowolnych „dialektów” FJS o niestandardowych promieniach tolerancji (do tego jest funkcja w kalkulatorze), o wszystkich dodatnich alteracjach przenoszących w górę, czy nawet o niestandardowym głównym algorytmie (np. znajdującym nie najprostsze przybliżenie w ograniczeniu promienia tolerancji, tylko najbliższe przybliżenie w ograniczeniu prostoty tolerancji).

Nie jestem upartym wynalazcą, który nie pozwoli innym tknąć swojego wynalazku. FJS kiedyś zawierał wiele złych zasad; niektóre z nich wypleniłem niemal w ostatniej chwili. Jeżeli uważasz, że stworzyłeś ciekawy dodatek do FJS-u, podziel się nim ze mną przez e-mail i z chęcią dodam go tutaj.

## Przykłady:

Te dwie wysokości to *ges*<sup>7</sup><sub>5</sub> and *fis*<sup>5</sup><sub>7</sub>.

<img src="../assets/crash/interval.svg" alt="ges7_5–fis5_7">

<audio controls><source src="../assets/crash/interval.mp3" type="audio/mpeg"></audio>

Następujące cztery takty czyta się następująco: *cis*<sup>5</sup> *cis*<sup>5</sup>; *cis*<sup>5</sup> *cis*; *cis*<sup>5</sup> *c*; *cis*<sup>5</sup> *c*<sup>5</sup>.

<img src="../assets/crash/accidentals.svg" alt="c♯5–c, c♯5–c1, c♯5–c♮, c♯5–c♮5">

<audio controls><source src="../assets/crash/accidentals.mp3" type="audio/mpeg"></audio>

Oto *A*-dur naturalne: *a*, *h*, *cis*<sup>5</sup>, *d*, *e*, *fis*<sup>5</sup>, *gis*<sup>5</sup>, *a*.

<img src="../assets/rules/mezzo-soprano.svg" alt="♯fcg f5 c5 g5: a–h–c–d–e–f–g–a">

<audio controls><source src="../assets/rules/mezzo-soprano.mp3" type="audio/mpeg"></audio>

Oto część szeregu alikwotowego (8.–16.) od *f*; *f*, *g*, *a*<sup>5</sup>, *b*<sup>11</sup>, *c*, *des*<sup>13</sup>, *es*<sup>7</sup>, *e*<sup>5</sup>, *f*. (To bardzo niepraktyczny klucz, ale nie niedozwolony).

<img src="../assets/rules/overtone-fragment.svg" alt="♭hd a5 e5 h11 d13 e(♭)7: f–g–a–h–c–d–es–e–f">

<audio controls><source src="../assets/rules/overtone-fragment.mp3" type="audio/mpeg"></audio>

Tu mamy ciąg akordów: dwa zmniejszone 10:12:14:17 i dwa durowe 4:5:6, od *a*, *d*, *g* i *c*.

<img src="../assets/rules/progression.svg" alt="e5 h5 f(♯)5 c(♯)5 h(♭)17 a(♭)17: cis–b–e1–g7. d–a–d–fis, h–as–d–f7, c–g–c–e">

<audio controls><source src="../assets/rules/progression.mp3" type="audio/mpeg"></audio>

Poniższa sekwencja akordów ukazuje przydatność reguły o niezmienianiu się FJS-owego klucza przy zmianie pitagorejskiego. Akordy są następujące: *A*, *E*, *A*, *A*<sup>7</sup>, *D*, *G*, *D*<sub>5</sub>, *E* (z nutą pedałową), *A*<sup>7</sup>, *D*; wszystkie trójdźwięki durowe to 4:5:6, a septymowe – 4:5:6:7. Klucz FJS-owy pozostaje ten sam, co przydaje się przy zapisie *gis*<sup>5</sup> w *D*-dur.

<img src="../assets/rules/key-change.svg" alt="♯fcg f5 c5 g5: a–e–c–a, e–e–h–g, a–e–c–a, g7–e–c–a, ♯fc: f–a–d–a, g–h–d–g, a–a–d–f, a–h–e–gis,a–cis–e–g7, d–a–d–fis">

<audio controls><source src="../assets/rules/key-change.mp3" type="audio/mpeg"></audio>

Ten przykład wykorzystuje osiem wysokości – *c*, *d*, *e*<sup>5</sup>, *f*, *g*, *a*<sup>5</sup>, *a* i *h*<sup>5</sup> – bez wykorzystania klucza.

<img src="../assets/rules/ottavation.svg" alt="c–d–g–c–d–g–c–d–g, 5: e–a–h–e–a–h–e–a–h, loco: f–g–c–f–g–c–f–g–c, d–g–a–d–g–a–d–g–a">

<audio controls><source src="../assets/rules/ottavation.mp3" type="audio/mpeg"></audio>

W tym przykładzie są zapisane następujące cztery stałe: φ, π (lub τ), e, oraz γ, w tonacji *A*.

<img src="../assets/rules/irrational.svg" alt="a–fφ, a–fπ, a–d^e, a–hγ">

<audio controls><source src="../assets/rules/irrational.mp3" type="audio/mpeg"></audio>
