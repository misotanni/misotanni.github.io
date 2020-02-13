# Intensywny kurs FJS-u

Zastanawiasz się, co FJS ma Tobie do zaoferowania, i chciałbyś nauczyć się go używać.

Ten kurs stworzyłem z myślą o przyswajalności. Nie skupię się na pewnych udogodnieniach i skrótach, ponieważ nie są one niezbędne. Jeżeli już miałeś kontakt ze strojami naturalnymi, FJS będzie igraszką – nauczysz się go od zaraz, w kilka minut, a jego piękno i prostota będą dla Ciebie w zasięgu ręki.

## Spis treści

* [Wprowadzenie: Koniec z enharmonią](#introduction)
* [Lekcja 0: Wiadomości wstępne](#lesson-0) 
* [Lekcja 1: Strój pitagorejski](#lesson-1)
* [Lekcja 2: Interwały pierwsze](#lesson-2)
* [Lekcja 3: Składanie alteracji](#lesson-3)
* [*Da capo al Fine*: Co dalej?](#da-capo-al-fine)

---

## <a name="introduction">Wprowadzenie: Koniec z enharmonią</a>

Wszyscy jesteśmy zaznajomieni z zapisem nutowym i występującymi w nim znakami chromatycznymi. Możesz jednak nie być świadomy, że notacji tej uczymy się w wersji przystosowanej do wszechobecnej dwunastostopniowej temperacji równomiernej, w której na co dzień myślimy. (Od teraz będziemy nazywać ją skrótem 12-EDO – z angielskiego „12 Equal Divisions of the Octave”, czyli „równomierny podział oktawy na dwanaście”).

Oto na przykład skala dodekafoniczna w 12-EDO:

<img src="../assets/crash/chromatic-wrong.svg" alt="c–cis–d–dis–e–f–fis–g–gis–a–ais–h–c">

Chwileczkę. Właściwie zwykle zapisujemy ją tak:

<img src="../assets/crash/chromatic-right.svg" alt="c–cis–d–dis–e–f–fis–g–gis–a–b–h–c">

Oczywiście zamiana *ais* na *b* w tym miejscu nie robi naszym uszom różnicy. Wiemy, że to są dwie różne nazwy na jedną wysokość. To, którą wybierzemy, zależy od naszych potrzeb – od czytelności, konsekwencji czy prostoty – i zależnie od kontekstu, ale są mimo wszystko synonimiczne.

Tej własności – przyrównaniu sekundy zmniejszonej do prymy czystej – nadano nazwę wymiany enharmonicznej. Co więcej, muzycy, którzy nie zetknęli się z niekonwencyjnymi strojami albo nie są ich świadomi, mogą nie pojmować, że własność ta nie jest trywialna – wręcz przeciwnie, 12-EDO to jeden z *niewielu* strojów, które ją posiadają. Inne albo nie mają żadnej enharmonii, albo interwałem pustym jest coś innego, niż sekunda zmniejszona. (Dla kontrastu, pryma czysta w 19-EDO jest równoważna sekundzie *podwójnie* zmniejszonej, czyli to *eis* i *fes* są tymi samymi wysokościami).

Mimo tego nie zapominajmy, że historia zapisu nutowego wyprzedza sam pomysł 12-EDO – o uniwersalności nie wspominając – o kilka wieków. Notacja neumatyczna opierała się na skali diatonicznej, tworzonej przez serię kwint (*f*–*c*–*g*–*d*–*a*–*e*–*h*). Właściwie sam fakt, że w zapisie nutowym istnieje więcej niż jeden sposób nazwania tej samej wysokości 12-EDO, sugeruje, że pochodzi od czegoś zupełnie odmiennego od 12-EDO.

Innymi słowy równoważność enharmoniczna to jedyna 12-EDO-owa własność, która daje o sobie znać w zapisie nutowym – cała reszta jest niezwiązana.

## <a name="lesson-0">Lekcja 0: Wiadomości wstępne</a>

Oto krótka lista wiadomości, które musisz mieć dobrze przyswojone, żebyś mógł zrozumieć FJS:

- Wiesz, że stroje naturalne to takie, w których każdy interwał jest wymierny.
- Rozpoznajesz pewne proste JI-owe ułamki, takie jak 2/1, 3/2, 5/4 czy 7/4.
- Interwały potrafisz dodawać poprzez mnożenie ich wartości, odejmować poprzez dzielenie i odwracać poprzez znajdowanie odwrotności multyplikatywnej (czyli *x* → 1/*x*).
- Potrafisz wyliczyć wielkość dowolnego interwału w centach; wiesz, że 100¢ to półton z 12-EDO, a 1200¢ to oktawa czysta; umiesz posłużyć się w tym celu choć jednym z tych wzorów:
	
	$$\displaystyle \text{C}(d)=\frac{1200 \cdot \log d}{\log 2} \text{ , dla dowolnej wspólnej podstawy log}$$
	
	$$\text{C}(d)=\log_c d \text{ , }c=\sqrt[1200]{2}$$
	
Do tego będziesz potrzebował jeszcze trzech matematycznych umiejętności unikatowo FJS-owych.

Pierwszą z nich jest zdolność szybkiej zamiany między **interwałami na pięciolinii** (bez wymian enharmonicznych) a **liczbą kwint** potrzebną do zbudowania tego interwału – i vice versa. Na przykład **sekunda wielka** to **+2** kwinty, ponieważ by dosięgnąć tego interwału, potrzebujemy zrobić dwa skoki kwintowe w górę: *c*–*g*–*d*. Podobnie, **tercja mała** to **−3** kwinty, gdyż można ją skonstruować trzema kwartami (kwarta to odwrotność kwinty): *c*–*f*–*b*–*es*. Każdemu interwałowi pięcioliniowemu odpowiada dokładnie jedna taka liczba. Powinieneś wyćwiczyć konwersję i w tę, i we w tę – najlepiej szybko.

Drugą z nich jest rozkładanie liczb wymiernych na czynniki pierwsze. Tak, jak każda **dodatnia liczba naturalna** daje się przedstawić jako iloczyn liczb pierwszych podniesionych do **naturalnych** wykładników na dokładnie jeden sposób (jak głosi zasadnicze twierdzenie arytmetyki), każdą **dodatnią liczbę wymierną** można jednoznacznie rozłożyć na iloczyn liczb pierwszych podniesionych do **całkowitych** potęg. (Zwykłem żartobliwie nazywać ten fakt „zasadniczym twierdzeniem harmonii” – dlaczego tak, jeszcze zrozumiesz). Na przykład 6/5 przedstawilibyśmy jako 2<sup>1</sup> 3<sup>1</sup> 5<sup>−1</sup>. Nie istnieje żadne inne przedstawienie takiej postaci.

Trzecią z nich jest redukowanie interwałów. Opiera się ono na mnożeniu czy dzieleniu liczby przez 2 aż do otrzymania wartości niemniejszej od 1, a mniejszej od 2 (innymi słowy, interwału mieszczącego się w oktawie). To odzwierciedla nasze postrzeganie interwałów różniących się o oktawę (2/1) jako równe. Na przykład 7/1 staje się 7/4, a 1/6 – 4/3. Zredukowaną postać interwału można uzyskać za pomocą następującego wzoru:

$$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$

Będziemy też korzystać ze „zrównoważonej redukcji”, która ogranicza swój argument do przedziału $$\[\frac{1}{\sqrt{2}}, \sqrt{2})$$. Definiuje się ją za pomocą zwykłej redukcji:

$$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

Albo – łatwiej dla głowy:

$$\text{reb}(d)=\text{red}(d) \text{ , } \text{red}(d) < \sqrt{2}$$

$$\text{reb}(d)=\frac{1}{2} \text{red}(d) \text{ , } \text{red}(d) \geq \sqrt{2}$$

To praktycznie wszystko, co musisz wiedzieć – zaczynajmy więc!

## <a name="lesson-1">Lekcja 1: Strój pitagorejski</a>

Pewnie myślisz, że gdy pozbyliśmy się równoważności enharmonicznej z pięciolinii, możemy teraz zanotować o wiele szerszą paletę wysokości – i myślisz słusznie. Jednak sama lobotomia enharmoniczna nie spowoduje, że będzie można przedstawić każdy strój naturalny w logiczny sposób. Jedną z zalet strojów naturalnych jest możliwość zakodowania drobnych różnic w wysokościach dźwięków, nadając poszczególnym interwałom unikatowe niuanse brzmieniowe.

Oto kilka naturalnych interwałów: 11/10, 10/9, 9/8 i 8/7. Posłuchaj, jak brzmią:

<audio controls><source src="../assets/crash/seconds.mp3" type="audio/mpeg"></audio>

Słyszymy, że wszystkie cztery to „jakieś” sekundy wielkie, ale błędem byłoby zapisać każdy z nich tym samym interwałem sekundy wielkiej. To szeroko różniące się od siebie interwały, a przyduszanie różnorodności tam, gdzie ona się wyróżnia, zaprzecza ideom przewodnim JI.

W takim razie może istnieje jakiś kompromis – podzbiór JI dający się przedstawić na pięciolinii pozbawionej wymian enharmonicznych bez niedokładności? Właśnie tak: tym kompromisem jest nic innego niż tzw. 3-limit (strój składający się z ułamków nieposiadających czynników pierwszych większych niż 3), czyli strój pitagorejski.

To oznacza, że oktawie pięcioliniowej przypisujemy interwał 2/1 – oktawa, tak, jak w 12-EDO – a kwincie przypisujemy 3/2. W ten sposób każdemu interwałowi przypisaliśmy dokładnie jeden 3-limitowy interwał – to bijekcja (odwzorowanie wzajemnie jednoznaczne).

To właśnie tak *definiujemy* diatoniczne wysokości: *f*, *c*, *g*, *d*, *a*, *e* i *h* ustalamy tak, by *f*–*c* = 3/2, *c*–*g* = 3/2 itd. Zauważ, że w ten sposób *h*–*f* będzie wynosić 1024/729 – trochę mniej od 3/2. Dopisujemy więc krzyżyk lub bemol, którego wartość kalibruje tę różnicę: *h*–*fis* = *b*–*f* = 3/2. W dalszej części kursu spostrzeżesz, że FJS kalibruje nie tylko takie różnice znakami chromatycznymi.

Warto wspomnieć, że taki system wymaga czegoś, z czym niektórzy z nas mogli byli się nie spotkać: potrzeby na więcej niż dwa znaki chromatyczne naraz przy jednej nucie. Choć rzadko stosuje się potrójne alteracje w muzyce klasycznej, potrzebujemy ich, by szereg kwint ciągnął się w nieskończoność w obie strony. FJS zezwala na dowolną ilość krzyżyków i bemoli. Nie chcę przez to powiedzieć, że jest to częsty widok – po prostu nie należy popadać w panikę.

Czas najwyższy, by dowiedzieć się o pierwszych dwóch FJS-owych technikach:

> ### Technika FJS-owa nr 1: Zamiana ułamka pitagorejskiego na FJS.
> 
> 1. Rozłóż ułamek na czynniki pierwsze.
> 2. Na chwilę porzuć potęgi dwójki.
> 3. Jeżeli trójka podniesiona jest do potęgi dodatniej, zrób tak wiele kwintowych kroków w górę, jak wielki wykładnik; jeżeli ujemny, idź w dół. Zamień wynik na interwał.
> 4. Jeżeli trzeba, dostosuj oktawy.
>
> **Przykład.** By zamienić 9/8 na FJS, rozkładamy: 2<sup>−3</sup> 3<sup>2</sup>. Opuszczamy czynnik z 2. Przy trójce stoi wykładnik 2, więc robimy dwa kroki w górę (dodatnie): *c*–*g*–*d*, czyli o sekundę wielką. Jesteśmy w odpowiedniej oktawie, więc to jest nasz wynik: sekunda wielka.

> ### Technika FJS-owa nr 2: Zamiana FJS interwału pitagorejskiego na ułamek.
>
> 1. Na chwilę odrzuć oktawy.
> 2. Zamień interwał na ilość kroków kwintowych.
> 3. Podnieś 3 do tak wielkiej potęgi i zredukuj.
> 4. Jeżeli trzeba, dostosuj oktawy.
>
> **Przykład.** By zamienić tercję małą z FJS-u na 3-limitowy ułamek, wyszukujemy najpierw ilość kroków kwintowych odpowiadającą temu interwałowi. Jest to −3 (*c*–*f*–*b*–*es*). Podnosimy 3 do potęgi −3 i uzyskujemy 1/27. By zredukować interwał – czyli zmieścić go w przedziale \[1, 2) – mnożymy go przez 2<sup>5</sup>, uzyskując ostateczny wynik: 32/27.

Poniższa tabela wylicza kilka pierwszych interwałów i ułamków:

| Interwał | Skoki | Ułamek      |
|---------:|:-----:|:------------|
| 2>       | −5    | 256/**243** |
| 6>       | −4    | 128/**81**  |
| 3>       | −3    | 32/**27**   |
| 7        | −2    | 16/**9**    |
| 4        | −1    | 4/**3**     |
| 5        | +1    | **3**/2     |
| 2        | +2    | **9**/8     |
| 6        | +3    | **27**/16   |
| 3        | +4    | **81**/64   |
| 7<       | +5    | **243**/128 |

Nie musisz uczyć się tej tabeli na pamięć. Do opanowania FJS-u tego nie potrzeba. Zamiast tego warto poćwiczyć płynną zamianę na ilość kwint. W ostateczności powinieneś umieć samemu uzyskiwać te ułamki przy podanym interwale (i vice versa) w oparciu o te dwie techniki. Nie krępuj się używać w tym celu kalkulatora – przyda ci się, dopóki nie przyswoisz sobie częstych wartości, co z czasem przyjdzie do Ciebie samo.

### Ćwiczenia – zestaw 1

1. Znajdź FJS-owe interwały odpowiadające wymienionym ułamkom pitagorejskim: 2187/2048, 1024/729, 8192/6561.
2. Znajdź wartości pitagorejskich interwałów odpowiadające następującym FJS-owym reprezentacjom: 7>, 5<, 3\>\>. (Pierwszy interwał to septyma zmniejszona, nie mała).
3. Oblicz wartości ułamkowe interwałów pomiędzy kolejnymi stopniami tej skali: <img src="../assets/crash/pythagorean-scale.svg" alt="e–fis–a–h–d–e"> <audio controls><source src="../assets/crash/pythagorean-scale.mp3" type="audio/mpeg"></audio>
4. Zapisz tę skalę w FJS-ie, przyjmując za tonikę *d*: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Znajdź wartość tzw. komatu pitagorejskiego, czyli FJS-owego 2\>\>.
6. (Trudne!). Pewien wyjątkowo wąski interwał w stroju pitagorejskim, mierzący ok. 3,6¢, to ułamek 3<sup>53</sup>/2<sup>84</sup>. Wynajdź jego odpowiednik w FJS-ie.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="lesson-2">Lekcja 2: Interwały pierwsze</a>

A więc umiesz zapisać wszystko, co pitagorejskie. To całkiem nudna zdolność, ponieważ strój pitagorejski wcale nie odbiega tak daleko od 12-EDO (oprócz tego, że sekunda zmniejszona nie równa się w nim prymie czystej). Przede wszystkim nie daje nam to jeszcze możliwości zapisania każdego JI-owego stroju.

Następnym krokiem przybliżającym nas do naturalnego oświecenia jest omówienie tzw. interwałów pierwszych. Są to interwały występujące w szeregach alikwotowych oparte na liczbach pierwszych. By znaleźć ich wartości, wypisz kilka liczb pierwszych:

> 2, 3, 5, 7, 11, 13, 17, 19, …

Następnie zredukuj:

> 1/1, 3/2, 5/4, 7/4, 11/8, 13/8, 17/16, 19/16, …

Już wiemy, jak zapisać te dwa pierwsze ułamki – to odpowiednio oktawa i kwinta. Te już porządnie omówiliśmy. Jeżeli więc w dalszej części tego kursu wspomnę o „interwałach pierwszych”, nie będę miał na myśli tych dwóch.

Jeżeli zetknąłeś się kiedyś z JI, poznasz w 5/4 „naturalną tercję wielką”, a w 7/4 „harmoniczną septymę” (rodzaj płaskiej septymy małej). Prawdopodobnie te określenia nie wydały Ci się obce. Przecież brzmią jak rozszerzenia pojęć „tercji wielkiej” i „septymy małej”, zamykające w sobie grupę wystarczająco bliskich sobie interwałów.

Ale jeżeli rozważymy to z technicznego punktu widzenia, zaczyna robić się dziwnie.

Załóżmy, że przyjmiemy 5/4 za rodzaj tercji wielkiej. Zapiszemy więc ją jako tercję wielką, ale *z towarzyszącym symbolem sygnalizującym tę różnicę*. Od pitagorejskiej tercji wielkiej – 81/64 – 5/4 różni się tylko o 81/80, czyli ok. 22¢. Dobrze, ale przecież jest lepsze przybliżenie: interwał pitagorejskiej kwarty zmniejszonej – 8192/6561 – jest *jeszcze* bliżej 5/4 niż tercja wielka. Różnicą między 8192/6561 a 5/4 jest tylko 32805/32768, czyli jedynie 2¢!

Posłuchaj różnicy pomiędzy 81/64 a 5/4:

<audio controls><source src="../assets/crash/big-comma.mp3" type="audio/mpeg"></audio>

A teraz 8192/6561 i 5/4:

<audio controls><source src="../assets/crash/small-comma.mp3" type="audio/mpeg"></audio>

Dlaczego więc mielibyśmy wybrać tercję wielką zamiast kwarty zmniejszonej dla 5/4? Twierdzisz pewnie, że prostota jest ważniejsza. Tercja wielka to tylko +4 kwinty, a kwarta zmniejszona to przerażające −8 kwint. Ale w takim razie dlaczego nie posłużylibyśmy się tercją *małą* dla 5/4? Przecież jest jeszcze prostsza – −3 kwinty, w porównaniu do +4. A, to teraz za daleko? Skąd myślisz, że wiesz dokładnie, kiedy stawiać na prostotę, a kiedy na wierność przybliżenia?

Nie musisz się usprawiedliwiać – to była parodia konkurencyjnych systemów JI, które wybierają sobie te przybliżenia wedle własnego kaprysu. FJS na pytanie „Jakie przybliżenia powinienem wybierać dla interwałów pierwszych?” odpowiada: w ogóle nie powinieneś. Zamiast tego uzgadniamy stałą nazywaną **promieniem tolerancji**. Po dłuższym eksperymentowaniu z różnymi promieniami tolerancji i rozpatrywaniu ich zalet i wad doszedłem do wniosku, że w standardowym FJS-ie będziemy używać *λ* o następującej wartości:

$$\displaystyle \lambda =\frac{65}{63}=54.10546743...\mathrm{c}$$

Wyjaśnię, dlaczego, później.

Do czego będziemy wykorzystywać *λ*? Co następuje, jest jednym z najważniejszych szczegółów FJS-u, który wyróżnia FJS spośród szerokiego wyboru systemów JI. Chodzi o **główny algorytm FJS**. Tu przedstawiam go w postaci zrozumiałej dla człowieka. (Na tej stronie znajdują się implementacje programistyczne, a także zdatny do użycia kalkulator).

**Główny algorytm FJS** wylicza tzw. **przeniesienie kwintowe** dla podanej liczby pierwszej i pewnego promienia tolerancji. Poniżej wyjaśniam, co algorytm robi, po co, i do czego potrzebna jest nam wartość przeniesienia.

> ### Główny algorytm FJS
>
> 1. Dany jest interwał pierwszy *p*.
> 2. Niech *k* = 0.
> 3. Wylicz *P*, czyli interwał złożony z *k* skoków o pitagorejską kwintę.
> 4. Czy różnica między *p* a *P* jest mniejsza niż promień tolerancji?
> 5. Jeżeli tak: *k* to przeniesienie. Zwróć *k*. Koniec.
> 6. Jeżeli nie: przejdź do następnego *k* w kolejności z szeregu (0, 1, −1, 2, −2, 3, −3, …) i wróć do kroku 3.
>
> **Przykład.** Poniżej: demonstracja działania algorytmu dla 5 przy promieniu tolerancji *λ* = 65/63. „Komaty” to wartości różnic pomiędzy 5/4 a przybliżeniami „pitagorejskimi”.
>
> | Przeniesienie | Pitagorejskie |   Komat   |    Rozmiar | Wynik | Wniosek      |
> |--------------:|:-------------:|:---------:|-----------:|:------|:-------------|
> |           0   |      1/1      |    5/4    |  386.31¢   | ≥ λ   | kontynuujemy |
> |          +1   |      3/2      |    5/6    |  315.64¢   | ≥ λ   | kontynuujemy |
> |          −1   |      4/3      |   15/16   |  111.73¢   | ≥ λ   | kontynuujemy |
> |          +2   |      9/8      |   10/9    |  182.40¢   | ≥ λ   | kontynuujemy |
> |          −2   |     16/9      |   45/32   |  590.22¢   | ≥ λ   | kontynuujemy |
> |          +3   |     27/16     |   20/27   |  519.55¢   | ≥ λ   | kontynuujemy |
> |          −3   |     32/27     |  135/128  |   92.18¢   | ≥ λ   | kontynuujemy |
> |        **+4** |   **81/64**   | **80/81** | **21.51¢** | < λ   | kończymy     |

Jak widać, sam algorytm jest na tyle prosty, że można by go przeprowadzić bez ołówka i kartki – oprócz kroku 4, który wymaga zdolności szybkiego przybliżania wielkości interwałów w pamięci (centami lub wyobraźnią).

W kroku 4 należy dobrać tak oktawy *p* i *P*, żeby zminimalizować „różnicę”, czyli rozmiar testowej wartości komatu (**wartość bezwzględną** jego rozmiaru w centach). Tylko w tym kroku np. 16/15 i 15/16 się nie różnią. Formalnie przez różnicę mam na myśli $$\text{reb}\left( \frac{p}{3^k} \right)$$.

Chociaż algorytm może wyglądać na mozolny, tak naprawdę jest bardzo szybki – także w głowie. 5/4 na pewno jest za daleko od oktawy, kwinty, kwarty, sekundy wielkiej, septymy małej, i seksty wielkiej. Wątpliwość jest tylko przy tercji małej. Jeśli odpada ona, to będzie to tercja wielka.

Główny algorytm FJS wynajduje najprostsze możliwe przybliżenie pitagorejskie danego interwału pierwszego, bliższe niż o promień tolerancji. Różnicę nazywamy **komatem formalnym** i zapisujemy go nową FJS-ową alteracją. W ten sposób liczy się komat formalny:

> ### Komat formalny
>
> Komat formalny dla liczby pierwszej *p* i przeniesienia *g* wynosi:
>
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$

Można by też podejść od drugiej strony: wyznaczyć przeniesienie dla danej liczby pierwszej, znając przydzielony jej komat formalny. Tego można dokonać, nie używając głównego algorytmu czy znając wielkość promienia tolerancji. (Na pewno nie będziesz tego robił często). Wystarczy, że rozłożysz odwrotność komatu na czynniki pierwsze, a wykładnik przy trójce wskaże przeniesienie. Na przykład, przy komacie formalnym dla 7 równym 63/64: rozkładamy 64/63 (odwrotność) na 2<sup>6</sup> 3<sup>−2</sup> 7<sup>−1</sup>. Ponieważ 3 podniesione jest do potęgi −2, właśnie -2 jest przeniesieniem dla 7.

Tak, jak krzyżyk i bemol, alteracja o taki komat formalny może być dodania lub ujemna. Znak dla tej alteracji to sama liczba pierwsza, dla której komat formalny zbudowano; dokładne nazewnictwo zależy od tego, czy nuty nazywamy czy zapisujemy na pięciolinii:

- Nuty nazywamy, zapisując dodatnie alteracje w indeksie górnym, a ujemne – w dolnym.
- Nuty zapisujemy, przystawiając liczby pierwsze, przy czym ujemne alteracje poprzedzamy kreską.

Może zauważyłeś, że posłużyłem się tu wyrażeniami „dodatni” i „ujemny” zamiast „w górę” i „w dół” – to dlatego, że FJS-owe alteracje dodatnie nie zawsze przenoszą w górę, a ujemne – nie zawsze w dół; zamiast tego **dodatniość zawsze odpowiada otonalności, a ujemność utonalności**. Co ważne, *dodatnie FJS-owe alteracje zawsze przenoszą kierunku od przybliżenia pitagorejskiego do interwału pierwszego*. Na przykład by zapisać dźwięk o 5/4 od *c*, najpierw zapisujemy pitagorejskie przybliżenie *e* (81/64), a potem przenosimy je do 5/4 poprzez dodanie „<sup>5</sup>”. Ta zmiana *obniża* o 81/80 – z *e* do *e*<sup>5</sup>.

Jeżeli znasz zapis naturalny Bena Johnstona, zauważysz podobieństwo. Jeżeli nie, przeczytaj ten akapit:

Taka decyzja może się wydać myląca. Jednak przekonam Cię, że ona w rzeczywistości służy prostocie systemu. Dodatnia alteracja – na przykład +17 – zawsze oznacza dodanie czynnika pierwszego (tu 17) do licznika ułamka, a więc jeżeli wiesz, jaki pitagorejski interwał jest bliski 17/16 (podpowiedź: to 2>), wywnioskujesz, że 17/16 zapiszesz jako po prostu 2> z +17. Nie musisz wiedzieć, czy przybliżenie jest wyżej czy niżej od interwału pierwszego. Takie podejście, oparte na utonalności i otonalności zamiast na kierunkach, upraszcza zapisy różnych skal i strojów i powoduje, że są bardziej intuicyjne. +5 w rzeczywistości przedstawia skok o 80/81, nie 81/80. Jeżeli przyjrzysz się komatom formalnym dla kolejnych liczb pierwszych, zauważysz, że każdy komat formalny zawiera odpowiedni czynnik pierwszy w liczniku (do potęgi +1). To stąd pochodzi również nazwa systemu: **Funkcyjny** System Naturalny, czyli taki, który przywiązuje wagę do *funkcji* (zastosowania) bardziej niż do samych działań na wysokościach.

Gdy rozwijałem pierwszy prototyp Funkcyjnego Systemu Naturalnego – wtedy, gdy jeszcze nie nosił nawet tej nazwy – wszystkie komaty były skierowane w górę, tak, by dodatnio zawsze było do góry, a ujemnie – w dół. Pewnego razu, rozpisując 5- i 7-limitowe stroje, spostrzegłem, że tak zdefiniowane komaty tylko komplikują, i z miejsca zmieniłem je na zawsze utonalne. Od tego czasu w FJS-ie rozumowałem szybciej i prościej, więc tak zostało. (FJS miał też wiele innych niedogodności, które od tego czasu zdołałem wyeliminować, dochodząc do prostego systemu, którego uczysz się teraz…).

Oto seria alikwotów zbudowana na *a* aż do ósmego alikwotu, zapisana za pomocą FJS-u:

> *a*, *a*, *e*, *a*, *cis*<sup>5</sup>, *e*, *g*<sup>7</sup>, *a*.

To samo na pięciolinii:

<img src="../assets/crash/overtone-short.svg" alt="a–a–e–a–cis5–e–g7–a">

W wersji audio:

<audio controls><source src="../assets/crash/overtone-short.mp3" type="audio/mpeg"></audio>

Oczywiście wszystkie alteracje w całym (nieskończonym) szeregu alikwotowym są dodatnie (otonalne). Nie sprawiłoby nam to więcej kłopotu, gdybyśmy brali pod uwagę kierunki? Z czasem zrozumiesz, że FJS zawdzięcza swoją konsekwentność i łatwość w użyciu właśnie temu. Możesz posłużyć się inną analogią: zamiast jako o podwyższeniu i obniżeniu, pomyśl o krzyżyku i bemolu jako o dodawaniu i odejmowaniu (siedmiu) kwint.

Teraz wyjaśnię, jak alteracje oddziałują na siebie nawzajem na pięciolinii.

> ### Przenoszenie FJS-owych alteracji
>
> - Jak wiadomo, zwykłe (pitagorejskie) znaki przygodne przydzielają pola i linie na pięciolinii (*cdefgah*) odpowiednim pitagorejskim wysokościom, a więc działają na wysokości tego pola czy linii (w tej samej oktawie) aż do końca taktu.
> - Podobnie, FJS-owe alteracje przydzielają wysokościom pitagorejskim (*c*, *des*, *cis*, *d*, itp.) dokładne naturalne wysokości, a więc oddziałują na tę pitagorejską wysokość w tej oktawie aż do końca taktu.

Dlaczego akurat tak? Ponieważ w tej formie reguła ta jest spójna i użyteczna. Oto demonstracja:

<img src="../assets/crash/accidentals.svg" alt="c♯5–c, c♯5–c1, c♯5–c♮, c♯5–c♮5">

<audio controls><source src="../assets/crash/accidentals.mp3" type="audio/mpeg"></audio>

- W pierwszym takcie mamy *c*♯5, po którym następuje *c* bez żadnych dodatkowych znaków. Ponieważ druga nuta jest na tym samym polu, co pierwsza, dziedziczy krzyżyk ♯, a skoro to *cis* w tej samej oktawie, dziedziczy również +5. Czytamy więc: *cis*<sup>5</sup>, *cis*<sup>5</sup>.
- W drugim takcie mamy *c*♯5, po którym następuje *c*1. **+1 to FJS-owy odpowiednik kasownika – kasuje wszystkie FJS-owe alteracje i nic innego.** Czytamy więc: *cis*<sup>5</sup>, *cis*.
- W trzecim takcie mamy *c*♯5, po którym następuje *c*♮. Ponieważ drugie *c* jest inną wysokością od pierwszego *cis*, nie dziedziczy alteracji +5. Czytamy więc: *cis*<sup>5</sup>, *c*.
- W czwartym takcie mamy *c*♯5, po którym następuje *c*♮5. Czytamy więc: *cis*<sup>5</sup>, *c*<sup>5</sup>. To jest najrzadsza opcja.

Jeszcze jedna rzecz: FJS także pozwala na dostawianie indeksów górnych i dolnych do interwałów. Tak zapisujemy w FJS-ie JI-owe interwały. Na przykład 5/4 nosi formalnie nazwę 3<sup>5</sup> (tercja wielka +5), co oznacza, że ten interwał znajdziemy pomiędzy *c* a *e*<sup>5</sup>, *f* a *a*<sup>5</sup>, *g* a *h*<sup>5</sup>, itd.

To wszystko, co potrzebujesz wiedzieć, by zapisać dowolny interwał pierwszy. Czas na jeszcze jedną technikę. (Nie musisz pamiętać przyjętej wartości promienia tolerancji – jedyne miejsce, w którym się go używa, to główny algorytm – do obliczania przeniesień).

> ### Technika FJS-owa nr 3: Zapisanie dowolnego otonalnego interwału pierwszego w FJS-ie.
>
> 1. Wylicz przeniesienie kwintowe dla danej liczby pierwszej.
> 2. Zapisz interwał generowany przez tę ilość kwint.
> 3. Dopisz dodatnią alterację tej liczby pierwszej – na przykład dla 23/16 dopisz +23.
>
> **Przykład.** Aby zapisać 7/4 w FJS-ie, wyliczamy przeniesienie dla liczby pierwszej 7: −2. Zapisujemy interwał generowany przez −2 kwinty: *c*–*f*–*b*, a zatem 7 (septyma mała). Ostatecznie dopisujemy +7, uzyskując 7<sup>7</sup>. (Wygląda całkiem dziwnie, ale to poprawny zapis).

(Proces odwrotny – wyznaczanie wartości interwału z jego FJS-owego przedstawienia, wiedząc, że to otonalny interwał pierwszy – jest banalny: po prostu zredukuj liczbę pierwszą z indeksu górnego).

### Ćwiczenia – zestaw 2

(Od tego momentu zawsze zakładamy za promień tolerancji λ).

1. Znajdź przeniesienia odpowiadające 11 i 13.
2. Jeżeli przeniesienie dla 19 równa się −3, jaki 19 ma komat formalny?
3. Znajdź przeniesienie dla 47, wiedząc, że jej komatem formalnym jest 47/48.
4. Zapisz następującą skalę, przyjmując *e* za tonikę: 1/1, 9/8, 5/4, 4/3, 3/2, 7/4, 2/1.
5. Zapisz szereg alikwotowy od *a* aż do czternastego alikwotu.
6. (Trudne!). Zapisz *utonalny* szereg alikwotowy (czyli szereg alikwotów dolnych) od *a* aż do ósmego alikwotu dolnego.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="lesson-3">Lekcja 3: Składanie alteracji</a>

Już wiesz, jak przedstawić dużą część JI w FJS-ie. Potrafisz zapisać każdą wysokość stroju pitagorejskiego oraz każdy interwał pierwszy. Ale to wciąż nie wszystko – co chociażby z interwałami złożonymi z kilku liczb pierwszych (włączając 3), takimi jak 15/8 czy 25/16? A co z niealikwotami, jak 5/3, 6/5 czy 9/7?

Na potrzeby tego intensywnego kursu podzieliłem dotychczas nieomówione interwały na dwie grupy:

- te składające się z interwału pitagorejskiego oraz jednego otonalnego lub utonalnego interwału pierwszego; oraz
- te wymagające więcej niż jednego interwału pierwszego.

Te z pierwszej grupy już potrafisz zapisać, tylko nie jesteś tego świadomy. To dlatego, że FJS-em rządzi wiele przydatnych własności, które pozwolą ci często pominąć mozolne obliczenia i czasochłonne techniki i od razu otrzymać wynik. (Pamiętaj, że interwały łączy się, mnożąc).

> ### Skrótowe własności FJS-u
>
> - Sumą FJS-owych przedstawień dwóch JI-owych interwałów jest FJS-owe przedstawienie iloczynu tychże interwałów.
> - Różnicą między FJS-owymi przedstawieniami dwóch JI-owych interwałów jest FJS-owe przedstawienie ilorazu tychże interwałów.
> - Odwrotnością FJS-owego przedstawienia JI-owego interwału jest FJS-owe przedstawienie odwrotności multiplikatywnej (czyli \\(\frac1x\\)) tegoż interwału.

Te własności prowadzą do interesujących wniosków, o których warto pamiętać, by móc osiągnąć płynność w FJS-ie. Na przykład: dwie wysokości z dokładnie tym samym zestawem alteracji FJS-owych różnią się dokładnie o interwał pitagorejski. *e*<sup>5</sup> i *fis*<sup>5</sup>? Możesz nie mieć pojęcia, czym są w tonacji *B*<sub>7</sub>-dur, ale ponieważ interwał pomiędzy nimi jest pitagorejski, łatwo wywnioskować, że to 9/8. Sprytne, prawda?

Te własności można spożytkować właśnie, by zapisać interwały z pierwszej grupy. Rozważmy 15/8: rozbijamy ten ułamek na część pitagorejską i „resztę” – odpowiednio 3/2 i 5/4. Przełożymy na FJS obydwie części osobno, a potem dodamy do siebie. 3/2 to 5, a 5/4 to 3<sup>5</sup>. Ich sumą jest więc 7&lt;<sup>5</sup> – po prostu dodaliśmy pitagorejskie części tak, jakby miało się dodawać zwykłe interwały, a następnie połączyliśmy ze sobą FJS-owe alteracje. Właśnie takie jest przedstawienie 15/8 w FJS-ie.

Można też myśleć o tym tak: 15. alikwot to jak 5. alikwot w tonacji dominanty. A zatem, żeby zapisać 15/8 w, powiedzmy, *C*-dur, zaczęlibyśmy od niby-modulacji do *G*-dur – wtedy wystarczy po prostu znaleźć piąty alikwot, czyli *h*<sup>5</sup>. To też poprawny sposób dotarcia do zapisu 15/8 w *C*-dur.

Jeszcze inna metoda: nie musisz wiedzieć, czym jest 15/8 w *C*-dur, ale wiesz, co to 5/4 – to *e*<sup>5</sup>. A że pomiędzy 5/4 a 15/8 jest 3/2, interwał pitagorejski, jednoznacznie przechodzimy do poprawnego wyniku *h*<sup>5</sup>.

Posłuż się dowolną z powyższych metod, by poradzić sobie z następnym zestawem ćwiczeń.

### Ćwiczenia – zestaw 3

1. Zapisz w FJS-ie następujące interwały: 5/3, 6/5, 7/6, 9/5.
2. Znajdź wartości następujących FJS-owych interwałów: 2<sup>5</sup>, 3<sub>7</sub>, 7<sup>11</sup>.
3. Zapisz ptolemejską skalę diatoniczną od *c* w FJS-ie. Oto ułamki: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (Trudne!). Dana jest zapisana poniżej skala. Czy to tryb skali z poprzedniego ćwiczenia? <img src="../assets/crash/just-minor.svg" alt="c–d–es_5–f–g–as_5–b_5–c"> <audio controls><source src="../assets/crash/just-minor.mp3" type="audio/mpeg"></audio>

Rozwiązania znajdziesz [tutaj](solutions.html).

(Zanim skończysz czytać tę lekcję, przyswoisz sobie metody na tłumaczenie *dowolnych* ułamków na FJS i z powrotem. Jednak warto mieć na uwadze metody powyżej z powodu ich efektywności – sam prawdopodobnie zauważysz, że będziesz je często wybierał. To tak, jak rozkładać równanie kwadratowe na jednomiany, zamiast rozwiązywać wzorami na pierwiastki funkcji kwadratowej – to o wiele szybsze, gdy tylko się o tym wie).

Stosując te własności, by poradzić sobie z ćwiczeniami, może zadałeś sobie pytanie: „Jak dodać na przykład dwie 3<sup>5</sup> do siebie? Co by powstało?” Może 5&lt;<sup>5</sup>? Nie – to byłoby 3 + 3<sup>5</sup>. W naszym przypadku jest inaczej, ponieważ próbujemy znaleźć 3<sup>5</sup> + 3<sup>5</sup>.

Otóż sposób, w który w FJS-ie zapisujemy drugą wyróżnioną przeze mnie grupę interwałów, to *alteracje złożone*.

Do każdej wysokości czy interwału w FJS-ie można dołączyć dowolną ilość alteracji FJS-owych. Otonalne i utonalne alteracje nigdy się ze sobą nie łączy, ale jeżeli dwie alteracje tego samego rodzaju (obydwie otonalne lub obydwie utonalne) chcemy stosować naraz, łączymy je ze sobą, mnożąc. Dlaczego tak? Ponieważ każda alteracja jest liczbą pierwszą, więc przez mnożenie – w przeciwieństwie do dodawania czy pisania jedno po drugim (czyli tzw. konkatenacji) – nie tracimy informacji o czynnikach, ponieważ każdą liczbę dodatnią można rozłożyć na dokładnie jeden sposób, a kolejność nie gra roli.

Jeżeli iloczyn alteracji jest na tyle duży, że trudno szybko odczytać z niego czynniki (np. 119 = 7 ⋅ 17), możesz alteracje wypisać, przedzielając je przecinkami. Na przykład: *d*<sup>7,17</sup> znaczy to samo, co *d*<sup>119</sup>. Choć powinno się pisać czynniki od najmniejszego do największego, każda kolejność jest równie poprawna. Możesz też przemnożyć tylko niektóre czynniki – na przykład *g*<sup>11,125</sup>.

Odpowiem więc na wcześniejsze pytanie następująco: sumą dwóch 3<sup>5</sup> jest 5&lt;<sup>25</sup>, co pasuje jako FJS-owa nazwa na 25/16. Podobnie, jeżeli 7/4 to interwał 7<sup>7</sup>, nietrudno dojść na przykład do tego, że 49/32 to 6><sup>49</sup>, a 35/32 to 2<sup>35</sup>.

Jak wspomniałem, otonalne i utonalne alteracje się nie mieszają, więc jeżeli do wysokości *ges* dodamy i +7, i −5, uzyskamy *ges*<sup>7</sup><sub>5</sub>. Oto reguły:

- Nazywając wysokości słownie, użyj jednego indeksu górnego dla wszystkich dodatnich alteracji i jednego indeksu dolnego dla wszystkich ujemnych.
- Na pięciolinii najpierw wypisuje się wszystkie dodatnie alteracje (jeżeli występują), następnie wszystkie ujemne, poprzedzone kreską (jeżeli występują), po czym zwykłe znaki przygodne i sama główka nuty.

Zatem wysokości *ges*<sup>7</sup><sub>5</sub> i *fis*<sup>5</sup><sub>7</sub> (odpowiednio 7/5 i 10/7 od *c*) zapisujemy następująco:

<img src="../assets/crash/interval.svg" alt="ges7_5–fis5_7">

A brzmią one następująco:

<audio controls><source src="../assets/crash/interval.mp3" type="audio/mpeg"></audio>

Dzięki złożonym alteracjom potrafimy teraz o wiele więcej. W szczególności możemy dodawać, odejmować i odwracać dowolne interwały. Możemy też przyłożyć interwał do wysokości (np. *g* + 3<sup>5</sup> = *h*<sup>5</sup>) i odjąć wysokość od wysokości (czyli wyliczyć interwał pomiędzy nimi – np. *f*<sup>7</sup>−*c* = 4<sup>7</sup>). Używając już poznanych własności dodawania, odejmowania i odwracania, powinieneś potrafić zapisać wcześniej niedostępne Ci interwały.

> ### Arytmetyka interwałowa w FJS-ie
>
> - By dodać dwa FJS-owe interwały, dodaj ich pitagorejskie części (części odpowiadające zwykłym interwałom) i połącz alteracje.
> - By odjąć dwa FJS-owe interwały od siebie, odejmij ich pitagorejskie części, potem zamień w drugim interwale otonalne i utonalne alteracje ze sobą i połącz. Odejmowanie to dodawanie odwrotności.
> - By odwrócić FJS-owy interwał, odwróć część pitagorejską i zamień utonalne i otonalne alteracje ze sobą.
> - Analogicznie dodaje się interwał do wysokości i odejmuje jedną wysokość od drugiej.

Przy łączeniu alteracji identyczne czynniki po dwóch stronach kasują się. Na przykład dodanie 3<sup>5</sup> (5/4) do 3><sub>5</sub> (6/5) daje „5<sup>5</sup><sub>5</sub>”, co skraca się do samej „5”, czyli 3/2 (co się zgadza). 2><sup>49</sup> (49/48) + 2<sub>7</sub> (8/7) = „3><sup>49</sup><sub>7</sub>”, co z powodu wspólnego czynnika skraca się do 3><sup>7</sup> (7/6).

Z pomocą arytmetyki interwałowej możesz teraz tak naprawdę przedstawić *każdy* ułamek JI w FJS-ie oraz odszyfrować FJS-owe interwały z powrotem na ułamki. Jeżeli ułamki nie zawierają wielu liczb pierwszych, posłuż się poniższymi metodami.

Aby zamienić prosty ułamek JI na FJS: rozłóż licznik na interwał pitagorejski i liczby pierwsze; zbuduj interwał pitagorejski, następnie do tego kolejne interwały pierwsze; powtórz dla mianownika; ostatecznie znajdź różnicę pomiędzy ułamkiem zbudowanym z licznika a tym z mianownika. Na przykład dla 36/25: najpierw budujemy licznik – 36 – czyli 9/8, czyli sekunda wielka; rozkładamy mianownik na 5 ⋅ 5, a więc dwa razy 3<sup>5</sup>, a więc 5&lt;<sup>25</sup>; teraz odejmujemy: 2 − 5&lt; = 5\>, 0 − +25 = −25; zatem ostateczny wynik to 5><sub>25</sub>.

Podobnie możesz łatwo zamienić prosty interwał FJS z powrotem na JI: wypróbuj wliczyć $$\frac{\text{alteracje otonalne}}{\text{alteracje utonalne}}$$. (Nie ma potrzeby, byś rozkładał alteracje na czynniki – to zaleta używania w tym miejscu mnożenia). Wynik może się różnić jedynie o interwał pitagorejski – wtedy wystarczy tylko odpowiednio dostosować. Na przykład dano 1&lt;<sup>5</sup><sub>7</sub>; sprawdzamy 5/7, czyli po redukcji 10/7, metodą powyżej, otrzymując 4&lt;<sup>5</sup><sub>7</sub>, co nie jest wcale aż tak daleko; poprawiamy zatem o jedną pitagorejską kwintę w górę – wynik brzmi więc 3/2 ⋅ 5/7 = 15/14.

Te metody starczą, by w 99% przypadków poprawnie przeczytać i zapisać w FJS-ie – jak sam widzisz, to całkiem proste metody. Tak naprawdę nawet i z nich nie musisz korzystać – wystarczy czasem przejrzeć serię alikwotową, by tłumaczyć w tę i we w tę w kilka sekund. 14/13 w FJS? Skoro 13 to 6>, a 14 to 7, więc 14/13 musi być 2. Z powodu 14 w liczniku dodajesz +7, a z powodu 13 w mianowniku – −13, i voilà – znalazłeś prawidłowy zapis: 2<sup>7</sup><sub>13</sub>.

Jednak jedną z zalet FJS-u jest to, że może on być całkowicie zautomatyzowany. Techniki powyżej polegają na intuicji, która nie przydaje się zbytnio przy skomplikowanych interwałach. Możesz *zawsze* wykonać konwersję za pomocą tych ostatnich dwóch technik poniżej:

> ### Technika FJS-owa nr 4: Automatyczna zamiana dowolnego ułamka na FJS.
>
> 1. Rozłóż ułamek na czynniki pierwsze.
> 2. Dla każdej liczby pierwszej *p* > 3 kładziemy α<sub>*p*</sub> = wykładnik przy p i mnożymy wyjściowy ułamek przez:
>
> 	$$(\text{comma} (p))^{-\alpha _p},$$
>
>	gdzie \\(\text{comma}(p)\\) to komat formalny dla *p*.
>
> 3. Wynik będzie pitagorejski – zapisz go w FJS-ie.
> 4. Teraz dodaj α<sub>*p*</sub> jako alteracje – jeżeli dodatnie, to otonalne; jeżeli ujemne, to utonalne.
> 5. Zredukuj i dostosuj oktawy.
>
> **Przykład.** Zamieńmy półton chromatyczny 25/24 na FJS za pomocą tej techniki. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. Mamy 5<sup>2</sup>, więc zapamiętaj α<sub>5</sub> = 2 i pomnóż przez (80/81)<sup>−2</sup>. Uzyskujemy 2187/2048 – pitagorejskie 1&lt;. Teraz dodajemy +5 dwa (= α<sub>5</sub>) razy i otrzymujemy wynik: 1&lt;<sup>25</sup>.

> ### Technika FJS-owa nr 5: Automatyczna zamiana FJS-owego interwału na ułamek.
>
> 1. Zamień część pitagorejską FJS-owego interwału na ułamek pitagorejski.
> 2. Dla każdego otonalnej (utonalnej) alteracji *p*, pomnóż (podziel) przez komat formalny dla *p*.
> 3. Zredukuj i dostosuj oktawy.
>
> **Przykład.** Pewnym kultowym współbrzmieniem występującym w *Dobrze Nastrojonym Fortepianie* („Well-Tuned Piano”) La Monte Younga jest w zapisie FJS-owym 3><sup>49</sup>. By znaleźć odpowiadający temu zapisowi ułamek, zaczynamy od zamiany pitagorejskiego interwału 3> na 32/27. Następnie +49 oznacza, że mnożymy przez komat formalny siódemki dwa razy, zatem 32/27 ⋅ (63/64)<sup>2</sup> = 147/128.

Ostatnią sprawą wartą wspomnienia jest wymowa i ASCII. FJS-em można się porozumiewać na więcej niż jeden sposób. Oto proste i logiczne reguły wymowy:

> ### Wymowa FJS
>
> 1. Wymów pitagorejską (zwykłą) nazwę wysokości czy interwału.
> 2. Następnie wypowiedz alteracje otonalne (jeżeli występują), ewentualnie poprzedzając je słowem „nad”.
> 3. Następnie wypowiedz alteracje utonalne (jeżeli występują), poprzedzając je słowem „pod”.

Na przykład *e*<sup>5</sup> wymawiamy „e pięć” (lub ew. „e nad pięć”), *es*<sub>5</sub> – „es pod pięć”. Interwał 4<sup>7</sup><sub>11</sub> wymawiamy „kwarta czysta (nad) siedem pod jedenaście”, gdzie „nad” w nawiasach służy jedynie do wyraźnego oddzielenia FJS-owych alteracji od pitagorejskiej nazwy i jest oprócz tego opcjonalna.

Nic się nie zmienia, jeżeli alteracje nie są do końca wymnożone: *a*<sup>5,17</sup><sub>13</sub> wymawiamy „a (nad) pięć siedemnaście pod trzynaście”. Słowo „pod” służy zamknięciu wyliczenia otonalnych alteracji i otwarciu wyliczania tych utonalnych.

W ASCII nie da się zapisać indeksów górnych czy dolnych, więc gdy nie da się zastosować takiego formatowania, użyj znaku podkreślnika (\_) dla utonalnych alteracji. Otonalne alteracje możesz zacząć znakiem karetki (^), który można zwykle pominąć, chyba że po nazwie interwału – wtedy potrzeba go, by oddzielić nazwę interwału pitagorejskiego od alteracji FJS-owych. Toteż *e*<sup>5</sup> można zapisać jako `e^5` albo po prostu `e5`, natomiast 3<sup>5</sup> można zapisać tylko jako `3^5` (nie `35`, bo to by była „kwinttrygintola wielka”, czyli cztery oktawy plus septyma wielka, czyli 243/8).

**To wszystko!**

To wszystko, co musisz wiedzieć, by wykorzystywać FJS w *całości* oraz być w stanie przedstawić *dowolny* strój JI! Bez żadnego wyuczania się na pamięć, drukowania tabelek, nic z tych rzeczy! Jedną z największych korzyści płynących z tego systemu jest to, że jest on całkowicie mobilny – jedyne, czego potrzebujesz, by się rozłożyć, to odpowiednie kalkulacje i wybrany przez ciebie promień tolerancji. Wszystkie techniki, które poznałeś, mogą być zautomatyzowane, wyręczając cię od żmudnych kalkulacji.

FJS posiada wiele pięknych własności, które powodują, że jest on niewiarygodnie spójny. Najważniejszą cechą jest to, że FJS jest *bijekcją* do JI – każdy dodatni ułamek ma dokładnie jedno FJS-owe przedstawienie, a każdy FJS-owy interwał ma dokładnie jednego reprezentanta wśród liczb wymiernych. Inną własnością jest *izomorfizm* – nie ma znaczenia, czy najpierw przemnożymy ułamki, a następnie zamienimy je do FJS, czy najpierw przeniesiemy je do FJS, a potem dodamy – wynik jest ten sam. Te własności zezwalają na prostą transpozycję w FJS-ie: żeby przenieść o np. 2<sup>5</sup>, najpierw przeniósłbyś wszystko o 2 (bez zmiany FJS-owych znaków chromatycznych), a potem dodałbyś +5 do każdej nuty, łącząc po drodze (tak więc +5 zmieniłoby się na +25, +7 na +35, a −5 na 1).

Jeszcze jedna rzecz, zanim wypróbujesz swoich nagromadzonych sił przy następnym ćwiczeniu. To tylko dla odniesienia – mógłbyś sam wyliczyć sobie tę tabelę, jeżeli byś sobie życzył (czego byś i tak nie zrobił, dlatego zrobiłem to dla ciebie).

| Pierwsza | Przeniesienie | Komat formalny |
|---------:|:-------------:|:--------------:|
| 5        | +4            | 80/81          |
| 7        | −2            | 63/64          |
| 11       | −1            | 33/32          |
| 13       | −4            | 1053/1024      |
| 17       | −5            | 4131/4096      |
| 19       | −3            | 513/512        |
| 23       | +6            | 736/729        |
| 29       | −2            | 261/256        |
| 31       | +5            | 248/243        |

Teraz mogę już wyjaśnić, dlaczego to właśnie 65/63 wybrałem na λ. To medianta 33/32 i 32/31, a więc większa od pierwszego, a mniejsza od drugiego. 33/32 jest więc dozwolonym komatem, dając przybliżenie kwarty czystej dla 11/8 (inaczej musielibyśmy posługiwać się absurdalnym 5>). Ale naraz 32/31 nie jest dozwolone, przez co uniemożliwiając przybliżenie oktawy czystej dla 31/16. Sprytne, nie?

### Ćwiczenia – zestaw 4

1. Zamień następujące ułamki na FJS dowolną techniką: 28/27, 15/13, 33/25.
2. Zamień następujące FJS-owe interwały na ułamki dowolną techniką: 6<sub>7</sub>, 4><sup>13</sup><sub>5</sub>, 3><sub>25</sub>.
3. Zanotuj tę JI-ową interpretację durowej kadencji S<sub>II</sub> D T w tonacji *B*-dur o podanych ułamkach (wszystkie od *b*, bez oktaw):
	- S<sub>II</sub>: 10/9, 5/4, 4/3,   5/3,   1/1
	- D:              3/2,  9/8, 21/16, 27/16, 15/8
	- T:              1/1,  9/8, 5/4,   3/2,   15/8
4. Zapisz następującą sekwencję akordów jako ułamki – interwały od *es*, czyli toniki: <img src="../assets/crash/cadence.svg" alt="es–b–g5–es, c5–c5–g5–es, as–c5–as–f5, b–b–f1–d5, es–b–g5–es"> <audio controls><source src="../assets/crash/cadence.mp3" type="audio/mpeg"></audio>
5. Wiedząc, że wysokością bazową jest *a*, zapisz pierwszy przykład muzyczny z tego kursu w FJS-ie. Dla przypomnienia: jest to 11/10, 10/9, 9/8, 8/7.

	<audio controls><source src="../assets/crash/seconds.mp3" type="audio/mpeg"></audio>
	
6. (Trudne!). Tak zwany „ruch 432-hercowy” uparcie twierdzi, że przestrajanie *a* z 440 na 432 Hz poprawia fizyczny i duchowy aspekt muzyki. (W tym zadaniu nie ma znaczenia, czy mają rację). Wynajdź FJS-owy interwał odpowiadający takiemu przestrojeniu.
7. (Trudne!). Jak wygląda w FJS-ie sam promień tolerancji, czyli 65/63?

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="da-capo-al-fine">*Da capo al fine*: Co dalej?</a>

To już *cała* wiedza potrzebna Tobie do FJS-u. Teraz możesz napisać dowolny utwór naturalny z jego użyciem. Pozostały jedynie pewne skrótowe metody zapisu, które wymyśliłem, by ułatwić zapis – na przykład klucze i chwilowe transpozycje. Nie są opisane tutaj – zamiast tego zajrzyj do [pełnego formalnego opisu](rules.html), by się o nich nauczyć (tam też powinieneś sięgać do reguł dla odniesienia).

Oprócz tego – to wszystko! Już nauczyłeś się całego FJS-u w kilka minut. Teraz idź w świat – niech FJS pomoże Ci ułatwić myślenie o JI, gdy napotkasz je na swojej drodze.

**Koniec.**
