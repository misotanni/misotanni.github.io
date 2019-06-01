# Intensywny kurs FJS-u

Zastanawiasz się, co FJS ma Tobie do zaoferowania, i chciałbyś nauczyć się go używać.

Ten kurs stworzyłem z myślą o przyswajalności istoty systemu. Nie skupię się na pewnych udogodnieniach i skrótach, ponieważ nie są one konieczne ani niezbędne. Jeżeli już miałeś kontakt ze strojami naturalnymi, FJS będzie dla Ciebie igraszką – nauczysz się go naraz, w kilka minut, a jego piękno i prostota będą Tobie w zasięgu ręki.

## Spis treści

* [Wprowadzenie: Koniec z enharmonią](#introduction)
* [Lekcja 0: Wiadomości wstępne](#lesson_0) 
* [Lekcja 1: Strój pitagorejski](#lesson_1)
* [Lekcja 2: Interwały pierwsze](#lesson_2)
* [Lekcja 3: Składanie alteracji](#lesson_3)
* [Da capo al fine: Co dalej?](#da_capo_al_fine)

---

## <a name="introduction">Wprowadzenie: Koniec z enharmonią</a>

Wszyscy jesteśmy zaznajomieni z zapisem nutowym i występującymi w nim znakami chromatycznymi. Możesz jednak nie być świadomy, że notacji tej uczymy się w wersji przystosowanej do wszechobecnej dwunastostopniowej temperacji równomiernej, w której na co dzień myślimy. (Od teraz będziemy nazywać ją skrótem 12-EDO, z angielskiego „12 equal divisions of the octave”, czyli „równomierny podział oktawy na dwanaście”).

Oto na przykład skala dodekafoniczna w 12-EDO:

<img src="../assets/example_1.png" alt="c–cis–d–dis–e–f–fis–g–gis–a–ais–h–c">

Chwileczkę. Właściwie zwykle zapisujemy ją tak:

<img src="../assets/example_2.png" alt="c–cis–d–dis–e–f–fis–g–gis–a–b–h–c">

Oczywiście zamiana *ais* na *b* w tym miejscu nie robi nam różnicy. Wiemy, że to są dwie różne nazwy na tę samą wysokość. To, którą wybierzemy, zależy od naszych potrzeb – od czytelności, konsekwencji czy prostoty – i zależnie od kontekstu, ale są one sobie mimo wszystko synonimami.

Tę własność – przyrównanie sekundy zmniejszonej do prymy czystej – nadano nazwę równoważności enharmonicznej. Co więcej muzycy, którzy nie zetknęli się z niekonwencyjnymi strojami albo nie są ich świadomi, mogą nie pojmować, że własność ta nie jest tautologią – wręcz przeciwnie, 12-EDO to jeden z *niewielu* strojów, które ją posiadają. Inne albo nie mają żadnej enharmonii, albo interwał inny niż sekunda zmniejszona jest zredukowany do zera. (Dla kontrastu, 19-EDO-owa pryma czysta jest równa sekundzie *podwójnie* zmniejszonej, czyniąc *eis* i *fes* tymi samymi wysokościami).

Mimo tego nie zapominajmy, że historia zapisu nutowego sięga dalej niż sam pomysł 12-EDO – o jednomyślnym przyjęciu nie wspominając – poprzedzając go o kilka wieków. Notacja neumatyczna opierała się na skali diatonicznej, którą tworzono przez serię kwint (*f*–*c*–*g*–*d*–*a*–*e*–*h*). Właściwie sam fakt, że w zapisie nutowym istnieje więcej niż jeden sposób nazwania tej samej wysokości 12-EDO, sugeruje, że jego pochodzenie opiera się na czymś zupełnie odmiennym od 12-EDO.

Innymi słowy równoważność enharmoniczna to jedyna 12-EDO-owa własność, która daje o sobie znać w zapisie nutowym – cała reszta jest niezależna.

## <a name="lesson_0">Lekcja 0: Wiadomości wstępne</a>

Oto krótka lista wiadomości, które musisz rozumieć, żebyś mógł zrozumieć i FJS:

- Wiesz, że stroje naturalne to takie, w których każdy interwał jest wymierny.
- Rozpoznajesz pewne proste JI-owe ułamki, takie jak 2/1, 3/2, 5/4, czy 7/4.
- Dodajesz interwały przez mnożenie ich wartości, odejmujesz przez dzielenie, a odwracasz, biorąc odwrotność multyplikatywną (*x* → 1/*x*).
- Potrafisz wyliczyć wielkość danego interwału w centach; wiesz, że 100¢ to półton 12-EDO, a 1200¢ to oktawa czysta; umiesz, by to zrobić, posłużyć się jednym z tych wzorów:
	
	$$\displaystyle \text{C}(d)=\frac{1200 \cdot \log d}{\log 2} \text{ , dla dowolnej wspólnej podstawy log}$$
	
	$$\text{C}(d)=\log_c d \text{ , }c=\sqrt[1200]{2}$$
	
Do tego będziesz potrzebował jeszcze trzech matematycznych umiejętności konkretnych dla FJS-u.

Pierwszą z nich jest zdolność szybkiej zamiany między **interwałami na pięciolinii** (bez podmian enharmonicznych) a **ilością kwint** potrzebną do zbudowania tego interwału – i vice versa. Na przykład **sekunda wielka** to **+2** kwinty, ponieważ by dosięgnąć tego interwału, potrzebujemy zrobić dwa skoki kwintowe w górę: *c*–*g*–*d*. Podobnie, **tercja mała** to **−3** kwinty, gdyż można ją skonstruować trzema kwartami – czyli odwrotnościami kwint: *c*–*f*–*b*–*es*. Każdemu interwałowi pięcioliniowemu odpowiada dokładnie jedna taka liczba. Powinieneś umieć dokonywać tej konwersji i w tę, i we w tę – najlepiej szybko.

Drugą z nich jest rozkładanie liczb wymiernych na czynniki pierwsze. Tak, jak każda **dodatnia liczba naturalna** daje się przedstawić jako iloczyn liczb pierwszych podniesionych do **naturalnych** wykładników (jak głosi zasadnicze twierdzenie arytmetyki), każdą **dodatnią liczbę wymierną** można jednoznacznie rozłożyć na iloczyn liczb pierwszych podniesionych do **całkowitych** potęg. (Zwykłem żartobliwie nazywać ten fakt „zasadniczym twierdzeniem harmonii”). Na przykład 6/5 przedstawilibyśmy jako 2<sup>1</sup> 3<sup>1</sup> 5<sup>−1</sup>. Nie istnieje żadna inna taka reprezentacja. (W tym intensywnym kursie pominiemy szczegóły matematyczne, ale zainteresowani mogą posłużyć się [tą stroną](math.html). Jeżeli w tym kursie założona jest prawdziwość jakiejś matematycznej własności, prawdopodobnie właśnie tam znajdziesz jej dowód).

Trzecią z nich jest redukowanie interwałów. Opiera się ono na mnożeniu czy dzieleniu liczby przez 2, dopóki nie uzyskamy czegoś nie mniejszego od 1, a mniejszego od 2 (czyli interwału mieszczącego się w oktawie). (To odzwierciedla nasze postrzeganie interwałów różniących się o oktawę (2/1) jako równe). Na przykład 7/1 staje się 7/4, a 1/6 – 4/3. Zredukowaną postać interwału można uzyskać za pomocą następującego wzoru:

$$\text{red}(d)=d \cdot 2^{-\lfloor\log_2 d\rfloor}$$

Stosuje się także zrównoważoną redukcję, w tym przypadku wynik jest nie mniejszy od $$\frac{1}{\sqrt{2}}$$, a mniejszy od $$\sqrt{2}$$. Definiuje się ją za pomocą zwykłej redukcji:

$$\text{reb}(d)=\frac{1}{\sqrt{2}} \text{red}(\sqrt{2} \cdot \text{red}(d))$$

To praktycznie wszystko, co musisz wiedzieć – zaczynajmy więc!

## <a name="lesson_1">Lekcja 1: Strój pitagorejski</a>

Pewnie myślisz, że gdy pozbyliśmy się z pięciolinii równoważności enharmonicznej, możemy teraz zanotować o wiele szerszą paletę wysokości – i myślisz słusznie. Jednak zabieg lobotomii enharmonicznej sam w sobie nie spowoduje, że będzie można przedstawić każdy strój naturalny w logiczny sposób. Jedną z zalet strojów naturalnych jest możliwość zakodowania drobnych różnic w wysokościach dźwięków, by nadać poszczególnym interwałom unikatowe brzmienie.

Rozważmy następujące naturalne interwały: 11/10, 10/9, 9/8 i 8/7. Posłuchaj, jak brzmią:

<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>

Wszystkie cztery dają się usłyszeć jako „jakieś” sekundy wielkie, ale błędem byłoby zapisać każdy z nich tą samą sekundą wielką. To daleko różniące się od siebie interwały, a zduszanie różnorodności tam, gdzie ona stanowi wyróżniającą cechę, zaprzecza założeniom JI.

W takim razie może ci się zdawać, że istnieje jakiś rodzaj kompromisu – podzbiór JI dający się przedstawić na pięciolinii pozbawionej wymian enharmonicznych bez przekręceń. I i tym razem miałbyś rację. Tym kompromisem jest nic innego niż tzw. 3-limit (strój oparty na liczbach rozkładających się na liczby pierwsze nie większe niż 3), czyli strój pitagorejski.

To oznacza, że oktawie pięcioliniowej przypisujemy interwał 2/1 – dokładnie taki sam, jak w 12-EDO – a kwincie przypisujemy 3/2. W ten sposób każdemu interwałowi przypisaliśmy dokładnie jeden 3-limitowy interwał – jest to bijekcja (odwzorowanie wzajemnie jednoznaczne).

To właśnie taką metodą *definiujemy* diatoniczne wysokości: *f*, *c*, *g*, *d*, *a*, *e* i *h* zostały tak dostrojone, by *f*–*c* = 3/2, *c*–*g* = 3/2 itd. Zauważ, że w ten sposób *h*–*f* będzie wynosić 1024/729 – interwał bliski 3/2, ale mniejszy. Dorzucamy więc krzyżyk lub bemol, którego wartość kalibruje tę różnicę: *h*–*fis* = *b*–*f* = 3/2. W dalszej części kursu spostrzeżesz, że FJS poszerza zakres działania tego schematu – kalibrowania różnic alteracjami.

Nie omieszkam wspomnieć, że taki system wymaga czegoś, czego niektórzy muzycy mogą nie być świadomi: konieczności występowania w niektórych miejscach więcej niż dwóch naraz znaków chromatycznych. Choć rzadko stosuje się potrójnych alteracji w muzyce klasycznej, potrzebujemy ich, by pozwolić szeregowi kwint ciągnąć się w nieskończoność w obie strony. FJS zezwala na dowolną ilość krzyżyków i bemoli. Nie chcę przez to powiedzieć, że jest to częsta konieczność – po prostu nie spanikuj, kiedy spotkasz się z sytuacją, w której będziesz musiał wielokrotnych alteracji użyć.

Czas najwyższy, by nauczyć się pierwszych dwóch technik FJS-owych:

> ### Technika FJS-owa nr 1: Zamiana ułamka pitagorejskiego na FJS.
> 
> 1. Rozłóż ułamek na czynniki pierwsze.
> 2. Na chwilę porzuć potęgi dwójki.
> 3. Jeżeli trójka podniesiona jest do potęgi dodatniej, zrób tyle kwintowych kroków w górę, ile wykładnik; jeżeli jest on ujemny, idź w dół. Zamień wynik na interwał.
> 4. Jeżeli trzeba, dostosuj oktawy.
>
> **Przykład.** By zamienić 9/8 na FJS, rozkładamy: 2<sup>−3</sup> 3<sup>2</sup>. Ignorujemy czynnik z 2. Trójkę podniesiono do +2, więc robimy dwa kroki w górę: *c*–*g*–*d*, uzyskując sekundę wielką. Nie musimy poprawiać oktaw, więc otrzymujemy wynik: sekunda wielka.

> ### Technika FJS-owa nr 2: Zamiana FJS-owego przedstawienia interwału pitagorejskiego na odpowiedni ułamek.
> 
> 1. Na chwilę pomiń oktawy.
> 2. Zamień interwał na ilość kroków kwintowych.
> 3. Podnieś 3 do takiej potęgi i zredukuj.
> 4. Jeżeli trzeba, dostosuj oktawy.
>
> **Przykład.** By zamienić tercję małą z FJS-u na 3-limit, wyszukujemy najpierw ilość kroków kwintowych odpowiadającą temu interwałowi. Jest to −3: *c*–*f*–*b*–*es*. Podnosimy 3 do −3 i uzyskujemy 1/27. Ponieważ chcemy zredukować ten interwał – czyli wsunąć go do przedziału \[1, 2) – mnożymy go przez 2<sup>5</sup>, uzyskując ostateczny wynik: 32/27.

Poniższa tabela wylicza kilka pierwszych interwałów i ułamków:

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

Nie musisz uczyć się tej tabeli na pamięć. Do opanowania FJS-u nie potrzeba żadnego zapamiętywania. Zamiast tego warto poćwiczyć płynną zamianę, tak jakbyś liczył w głowie. W ostateczności powinieneś być w stanie samemu uzyskać te ułamki, mając podany interwał (i vice versa), w oparciu o te dwie techniki. Nie krępuj się używać w tym celu kalkulatora – przyda ci się on, dopóki nie masz przyswojonych częstych wartości, których znajomość z czasem przyjdzie do Ciebie sama.

### Ćwiczenia – zestaw 1

1. Znajdź FJS-owe interwały odpowiadające wymienionych ułamkom stroju pitagorejskiego: 2187/2048, 1024/729, 8192/6561.
2. Znajdź wartości pitagorejskich interwałów odpowiadające następującym FJS-owym reprezentacjom: 7>, 5<, 3>>. (Zauważ, że pierwszy interwał to septyma zmniejszona, nie mała).
3. Oblicz interwały pitagorejskie pomiędzy kolejnymi stopniami tej skali: <img src="../assets/exercise_1.png" alt="e–fis–a–h–d–e">
4. Zapisz tę skalę w FJS-ie, przyjmując za tonikę *d*: 1/1, 81/64, 4/3, 3/2, 243/128, 2/1.
5. Znajdź wartość tzw. komatu pitagorejskiego, czyli FJS-owego 2>>.
6. (Trudne!). Pewien wyjątkowo mały interwał w stroju pitagorejskim, o wielkości tylko ok. 3,6¢, to ułamek 3<sup>53</sup>/2<sup>84</sup>. Wynajdź jego odpowiednik w FJS-ie.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="lesson_2">Lekcja 2: Interwały pierwsze</a>

A więc umiesz zapisać wszystko, co pitagorejskie. To na razie całkiem nudna umiejętność, ponieważ strój pitagorejski wcale nie odbiega tak daleko od 12-EDO (oprócz tego, że jego sekunda zmniejszona nie równa się prymie czystej). Przede wszystkim nie daje nam to jeszcze możliwości zapisania każdego JI-owego stroju.

Następnym krokiem przybliżającym nas do naturalnego oświecenia jest omówienie tzw. interwałów pierwszych. Są to interwały występujące w szeregach alikwotowych oparte na liczbach pierwszych. By je wynaleźć, wypisz kilka liczb pierwszych:

> 2, 3, 5, 7, 11, 13, 17, 19, ...

Następnie zredukuj je:

> 1/1, 3/2, 5/4, 7/4, 11/8, 13/8, 17/16, 19/16, ...

Już wiemy, jak zapisać te dwa pierwsze ułamki – to odpowiednio oktawa i kwinta. Te już porządnie omówiliśmy. Co więcej, jeżeli w dalszej części tego kursu odniosę się do „interwałów pierwszych”, to będę miał na myśli tylko te, które odpowiadają liczbom pierwszym większym od 3.

Jeżeli zetknąłeś się kiedyś z JI, poznasz w 5/4 „naturalną tercję wielką”, a w 7/4 „harmoniczną septymę” (rodzaj septymy małej). Prawdopodobnie te określenia nie wydały Ci się na początku obce. Przecież brzmią one jak rozszerzenia pojęć „tercji wielkiej” i „septymy małej”, zamykające w sobie interwały, które są bliskie tych nam znanych.

Ale jeżeli popatrzymy na to z technicznego punktu widzenia, zaczyna robić się dziwnie.

Załóżmy, że przyjmiemy 5/4 za rodzaj tercji wielkiej. Zapiszemy więc ją jako tercję wielką, ale *z towarzyszącym symbolem sygnalizującym tę różnicę*. Od pitagorejskiej tercji wielkiej – 81/64 – 5/4 różni się tylko o 81/80, czyli ok. 22¢. Dobrze, ale dlaczego taki wybór może nie pasować? Otóż interwał pitagorejskiej kwarty zmniejszonej – 8192/6561 – jest *jeszcze* bliżej 5/4 niż tercja wielka. Różnicą między 8192/6561 a 5/4 jest tylko 32805/32768, czyli jedynie 2¢!

Posłuchaj, jak różnią się 81/64 i 5/4:

<audio controls><source src="../assets/audio_2.mp3" type="audio/mpeg"></audio>

A teraz 8192/6561 i 5/4:

<audio controls><source src="../assets/audio_3.mp3" type="audio/mpeg"></audio>

Dlaczego więc mielibyśmy wybrać tercję wielką zamiast kwarty zmniejszonej dla 5/4? Prostota, mówisz. Tercja wielka to tylko +4 kwinty, a kwarta zmniejszona to przerażające −8 kwint. Ale w takim razie dlaczego nie posłużylibyśmy się tercją *małą* dla 5/4? Przecież jest ona jeszcze prostsza – −3 kwinty, w porównaniu do +4. Ach, to teraz jest znowu za daleko? Za kogo *ty* się uważasz, by decydować, kiedy stawiać na prostotę, a kiedy na wierność przybliżenia?

Spokojnie, to był paszkwil. Parodiowałem konkurencyjne systemy JI, które wybierają sobie te przybliżenia wedle własnego uznania. FJS na pytanie „Jakie przybliżenia powinienem wybrać dla każdego interwału pierwszego?” odpowiada: w ogóle. Zamiast tego używamy uzgodnionej wcześniej stałej, nazywanej **promieniem tolerancji**, do tego celu. Po dłuższym eksperymentowaniu z różnymi promieniami tolerancji i rozważaniu ich zalet i wad, doszedłem do wniosku, że w standardowym FJS-ie będziemy używać *λ*, zdefiniowanej następująco:

$$\displaystyle \lambda =\sqrt{\frac{33}{31}}$$

Dlaczego taka wartość, wyjaśnię później.

Co robimy z tą liczbą? To, co teraz nastąpi, jest jednym z najważniejszych szczegółów FJS-u – to szczegół, który wyróżnia FJS spośród wachlarza systemów JI. Chodzi o **główny algorytm FJS**. Oto i on, w postaci zrozumiałej dla człowieka. Na tej stronie znajdują się implementacje programistyczne, a także zdatny do użycia kalkulator. 

**Główny algorytm FJS** wylicza tzw. **funkcję generującą** dla każdej podanej liczby pierwszej i pewnego promienia tolerancji. Poniżej wyjaśniam, co algorytm robi, po co, i do czego potrzebna jest nam funkcja generująca.

> ### Główny algorytm FJS
> 
> 1. Dany jest interwał pierwszy, *p*.
> 2. Niech *k* = 0.
> 3. Rozważ interwał złożony z *k* skoków o pitagorejską kwintę, *P*.
> 4. Czy różnica między *p* a *P* jest mniejsza niż promień tolerancji?
> 5. Jeżeli tak: *k* to funkcja generująca. Zwróć *k*. Koniec.
> 6. Jeżeli nie: weź następne *k* w kolejności z (0, 1, −1, 2, −2, 3, −3, …) i wróć do kroku 3.
>
> **Przykład.** Poniżej: demonstracja działania algorytmu dla 5, przy promieniu tolerancji λ = sqrt(33/31). „Komaty” to testowe wartości komatu, obliczane poprzez podzielenie 5/4 przez testowe przybliżenia „pitagorejskie”.
>
> | Generator | Pitagorejskie |   Komat   |                     Wnioski   |
> |----------:|:-------------:|:---------:|------------------------------:|
> |       0   |      1/1      |    5/4    |  386.31¢   ≥ λ; kontynuujemy. |
> |      +1   |      3/2      |    5/6    |  315.64¢   ≥ λ; kontynuujemy. |
> |      −1   |      4/3      |   15/16   |  111.73¢   ≥ λ; kontynuujemy. |
> |      +2   |      9/8      |   10/9    |  182.40¢   ≥ λ; kontynuujemy. |
> |      −2   |     16/9      |   45/32   |  590.22¢   ≥ λ; kontynuujemy. |
> |      +3   |     27/16     |   20/27   |  519.55¢   ≥ λ; kontynuujemy. |
> |      −3   |     32/27     |  135/128  |   92.18¢   ≥ λ; kontynuujemy. |
> |    **+4** |   **81/64**   | **80/81** | **21.51¢** < λ; kończymy.     |

Jak widzisz, sam algorytm jest na tyle prosty, że mógłbyś go przeprowadzić w myślach, oprócz kroku 4, który opierając się na całkiem trudnych do wykonania w głowie obliczeniach, wymagałby zdolności szybkiego przybliżania wielkości wielu interwałów w pamięci – centami lub wyobraźnią.

W kroku 4 dobierasz tak oktawy *p* i *P*, żeby zminimalizować "różnicę", czyli rozmiar testowej wartości komatu (**wartość bezwzględna** jego rozmiaru w centach). Tylko w tym kroku np. 16/15 i 15/16 się nie różnią. Jak mowa o różnicy, formalnie chodzi o $$\text{reb}\left( \frac{p}{3^k} \right)$$.

Chociaż algorytm może wyglądać na mozolny, liczy się go bardzo szybko, także w głowie. 5/4 na pewno jest za daleko od oktawy, kwinty, kwarty, sekundy wielkiej, septymy małej, i seksty wielkiej. Wątpliwość jest tylko przy tercji małej. Jeśli odpada ona, to będzie to tercja wielka.

Główny algorytm FJS wynajduje najprostsze możliwe przybliżenie pitagorejskie podanego interwału pierwszego, które jest mniej daleko od tego pożądanego interwału niż o promień tolerancji. Różnicą pomiędzy nimi dwoma nazywamy **komatem formalnym** i zapisujemy go nową FJS-ową alteracją. W ten sposób liczy się komat formalny:

> ### Komat formalny
> 
> Komat formalny dla liczby pierwszej *p* i funkcji generującej *g* wynosi:
>
> $$\text{comma} (p)=\text{reb}\left( \frac{p}{3^g} \right)$$

Można by też pójść od drugiej strony: wyznaczyć funkcję generującą dla danej liczby pierwszej, znając przydzielony jej komat formalny, nie używając głównego algorytmu czy znając wielkość promienia tolerancji. (To się może kiedyś przydać, ale na pewno nie będziesz tego robił często). Wystarczy, że podzielisz zredukowany interwał pierwszy przez komat formalny, by uzyskać pitagorejskie przybliżenie. Teraz gdy rozłożysz je na czynniki pierwsze, wykładnik przy trójce będzie funkcją generującą. Na przykład: dane jest nam, że komatem formalnym dla 7 jest 63/64. Dzielimy więc redukcję 7, czyli 7/4, przez 63/64, otrzymując 16/9, czyli przybliżenie pitagorejskie. Rozkładamy 16/9 na 2<sup>4</sup> 3<sup>−2</sup>. Ponieważ 3 podniesione jest do potęgi −2, funkcją generującą dla 7 musi być też −2.

Tak, jak krzyżyk i bemol, alteracja o taki komat formalny może być dodania lub ujemna. Znak dla tej alteracji to sama liczba pierwsza, dla której komat formalny zbudowano; dokładne nazewnictwo zależy od tego, czy nuty nazywamy czy zapisujemy na pięciolinii:

- Nuty nazywamy, zapisując dodatnie alteracje w indeksie górnym, a ujemne – w dolnym.
- Nuty zapisujemy, dodając same liczby pierwsze dla dodatnich alteracji, a dla ujemnych – te liczby pierwsze, ale poprzedzone minusem.

Może zauważyłeś, że użyłem tu słów „dodatni” i „ujemny” zamiast „w górę” i „w dół” – to dlatego, że FJS-owe alteracje dodatnie wcale nie zawsze przenoszą w górę, ani ujemne zawsze w dół; zamiast tego **dodatniość zawsze odpowiada otonalności, a ujemność utonalności**. To oznacza – co jest bardzo ważne – że *FJS-owa alteracja, gdy dodatnia, jest zawsze w kierunku, w którym przybliżenie pitagorejskie staje się interwałem docelowym*. Na przykład by zapisać dźwięk o 5/4 od *c*, najpierw zapisujemy pitagorejskie przybliżenie *e* (81/64), a potem przenosimy je do 5/4 poprzez dodanie <sup>5</sup>. Ta zmiana *obniża* o 81/80 – z *e* do *e*<sup>5</sup>.

Ci, którzy znają zapis naturalny Bena Johnstona, zauważą podobieństwa. Dla całej reszty:

Na pierwszy rzut oka taka decyzja może się wydawać niepotrzebnie myląca, ale ona tak naprawdę upraszcza system. Dodatnia alteracja – na przykład +17 – zawsze oznacza dodanie czynnika pierwszego (tu 17) do licznika ułamka, a więc jeżeli wiesz, jaki pitagorejski interwał jest bliski 17/16 (podpowiedź: to 2>), będziesz wiedzieć i to, że 17/16 to po prostu 2> z doczepioną +17. Nie musisz wiedzieć, czy przybliżenie jest wyżej czy niżej od docelowego interwału. Ta reguła, przenosząca ciężar naszej uwagi na utonalność i otonalność zamiast na kierunek alteracji, upraszcza zapisy różnych skal i strojów i czyni je bardziej intuicyjnymi. Tak naprawdę +5 przedstawia skok o 80/81, nie 81/80. Jeżeli przyjrzysz się liście komatów formalnych dla kolejnych liczb pierwszych, zauważysz, że każdy komat formalny będzie zawierał odpowiedni czynnik pierwszy w liczniku. To stąd pochodzi również nazwa systemu: **Funkcyjny** System Naturalny, czyli taki, który przywiązuje wagę do *funkcji* (zastosowania) bardziej niż do pozycji wysokości.

Posłużę się teraz anegdotą. Gdy badałem prototyp Funkcyjnego Systemu Naturalnego – wtedy, gdy jeszcze nie miał przydzielonej nazwy – na początku wymuszałem, by wszystkie komaty były skierowane w górę – tak, by dodatnio zawsze było do góry, a ujemnie w dół. Pewnego razu rozważałem 5- i 7-limitowe stroje, aż nagle spostrzegłem, że używanie takich zawsze skierowanych w górę komatów tylko komplikuje sprawy, i z miejsca zmieniłem je na zawsze utonalne. Gdy to zrobiłem, w FJS-ie zacząłem myśleć płynniej i prościej, więc tak to zostawiłem. (FJS miał też wiele innych niedogodności, które od tego czasu zdołałem uprościć, odsłaniając niepokomplikowany system, który znamy dzisiaj…).

Oto seria alikwotów zbudowana na *a*, aż do ósmego alikwotu, zapisana za pomocą FJS-u:

> *a*, *a*, *e*, *a*, *cis*<sup>5</sup>, *e*, *g*<sup>7</sup>, *a*.

To samo, zapisane na pięciolinii:

<img src="../assets/example_3.png" alt="a–a–e–a–cis5–e–g7–a">

To samo, w wersji audio:

<audio controls><source src="../assets/audio_4.mp3" type="audio/mpeg"></audio>

Czego pewnie się domyśliłeś, wszystkie alteracje w całym (nieskończonym) szeregu alikwotowym są dodatnie (otonalne). Nie wygląda to zgrabnie – bardziej, niż gdybyśmy przejmowali się kierunkami? Rozumiem, że ten wybór może cię z początku mylić, ale z czasem zauważysz, jak logiczniejszy i łatwiejszy w użyciu staje się dzięki niemu cały FJS. (Możesz jeszcze posłużyć się inną analogią: zamiast pojmować krzyżyk jako podwyższenie i bemol jako obniżenie, pomyśl o nich jako o dodawaniu i obniżaniu kwint).

Teraz chciałbym wyjaśnić, jak te alteracje oddziałują na siebie nawzajem na pięciolinii.

> ### Przenoszenie FJS-owych alteracji
>
> - Jak wiadomo, zwykłe (pitagorejskie) znaki przygodne przydzielają pola i linie na pięciolinii (*cdefgah*) odpowiednim pitagorejskim wysokościom, a więc działają na wysokości tego pola czy linii (w tej samej oktawie) aż do końca taktu.
> - Podobnie, FJS-owe alteracje przydzielają wysokościom pitagorejskim (*c*, *des*, *cis*, *d*, itp.) dokładne naturalne wysokości, a więc działają na tej pitagorejskiej wysokości w tej oktawie aż do końca taktu.

Dlaczego akurat tak? Ponieważ ta reguła w tej formie jest o wiele bardziej spójna i przez to o wiele bardziej użyteczna. Oto krótka demonstracja:

<img src="../assets/example_4.png" alt="c♯5–c, c♯5–c1, c♯5–c♮, c♯5–c♮5">

- W pierwszym takcie mamy *c*♯5, po którym następuje gołe *c*. Ponieważ druga nuta jest na tym samym polu, co pierwsza, dziedziczy ona krzyżyk ♯, a ponieważ jest to teraz *cis* w tej samej oktawie, dziedziczy również +5. W takim razie mamy *cis*<sup>5</sup>, *cis*<sup>5</sup>.
- W drugim takcie mamy *c*♯5, po którym następuje *c*1. **+1 to FJS-owy odpowiednik kasownika – kasuje wszystkie FJS-owe alteracje, ale nic oprócz tego.** W takim razie mamy *cis*<sup>5</sup>, *cis*.
- W trzecim takcie mamy *c*♯5, po którym następuje *c*♮. Ponieważ drugie *c* jest różną wysokością od pierwszego *cis*, nie dziedziczy alteracji +5. W takim razie mamy *cis*<sup>5</sup>, *c*.
- W czwartym takcie mamy *c*♯5, po którym następuje *c*♮5. W takim razie mamy *cis*<sup>5</sup>, *c*<sup>5</sup>. To najrzadsza opcja.

Jeszcze jedna rzecz: FJS także pozwala na dostawianie indeksów górnych i dolnych do interwałów. Tak naprawdę to w ten sposób FJS zapisuje JI-owe interwały. Na przykład 5/4 formalnie nazywa się 3<sup>5</sup> (tercja wielka +5) – to oznacza, że ten interwał znajdziemy pomiędzy *c* a *e*<sup>5</sup>, *f* a *a*<sup>5</sup>, *g* a *h*<sup>5</sup>, itd.

To wszystko, czego potrzebujesz, by zanotować interwały pierwsze. Czas na jeszcze jedną technikę. Nie potrzebujesz znać promienia tolerancji (jedyne miejsce, w którym jest on używany, to główny algorytm – do obliczania funkcji generujących).

> ### Technika FJS-owa nr 3: Zapisanie dowolnego otonalnego interwału pierwszego w FJS-ie.
> 
> 1. Wylicz funkcję generującą dla tej liczby pierwszej.
> 2. Zapisz interwał generowany przez tę ilość kwint.
> 3. Dopisz dodatnią alterację tej liczby pierwszej – na przykład jeżeli zapisujesz 23/16, dopisz +23.
>
> **Przykład.** Aby zapisać 7/4 w FJS-ie, wyliczamy funkcję generującą dla 7: −2. Zapisujemy interwał generowany przez −2 kwinty: *c*–*f*–*b*, a zatem 7 (septyma mała). Ostatecznie dopisujemy +7, uzyskując 7<sup>7</sup>. (Tak, wiem, wygląda to całkiem dziwnie, ale właśnie takie jest).

(Wynajdywanie odwrotnej informacji – tożsamości interwału z jego FJS-owego przedstawienia, wiedząc, że jest to otonalny interwał pierwszy – jest trywialne: to po prostu liczba pierwsza z indeksu górnego (tylko zredukowana)!).

### Ćwiczenia – zestaw 2

(Od tego momentu zakładamy, że promieniem tolerancji zawsze jest λ).

1. Znajdź funkcje generujące dla 11 i 13.
2. Jeżeli funkcją generującą dla 19 jest −3, jaki jest komat formalny dla 19?
3. Znajdź funkcję generującą dla 47, wiedząc, że jej komatem formalnym jest 47/48.
4. Zapisz następującą skalę, przyjmując *e* za tonikę: 1/1, 9/8, 5/4, 4/3, 3/2, 7/4, 2/1.
5. Zapisz szereg alikwotowy od *a* aż do czternastego alikwotu.
6. (Trudne!). Zapisz *utonalny* szereg alikwotowy (czyli szereg alikwotów dolnych) od *a* aż do ósmego alikwotu dolnego.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="lesson_3">Lekcja 3: Składanie alteracji</a>

Teraz wiesz, jak przedstawić dużą część JI w FJS-ie. Potrafisz zapisać każdą wysokość stroju pitagorejskiego oraz każdy interwał pierwszy. Ale to wciąż nie wszystko – co na przykład z interwałami złożonymi z więcej niż jednej liczby pierwszej (włączając 3), takimi jak 15/8 czy 25/16? A co z tymi, które nie występują jako alikwoty, takimi jak 5/3, 6/5 czy 9/7?

Na potrzeby tego intensywnego kursu podzieliłem te interwały, których jeszcze nie omówiliśmy, na dwie grupy:

- te, które składają się z interwału pitagorejskiego oraz jedno otonalnego lub utonalnego interwału pierwszego; oraz
- te, do skonstruowania których potrzeba więcej niż jednego interwału pierwszego.

Te z pierwszej grupy już potrafisz zapisać, tylko tego jeszcze nie wiesz. To dlatego, że FJS-em rządzi kilka przydatnych własności, które często pozwolą ci pominąć już poznane przez ciebie mozolne obliczenia i techniki i przejść od razu do wyniku. (Pamiętaj, że interwały składa się, wymnażając je przez siebie).

> ### Skrótowe własności FJS-u
>
> - Sumą FJS-owych przedstawień dwóch JI-owych interwałów jest FJS-owe przedstawienie iloczynu tychże interwałów.
> - Różnicą między FJS-owymi przedstawieniami dwóch JI-owych interwałów jest FJS-owe przedstawienie ilorazu tychże interwałów.
> - Odwrotnością FJS-owego przedstawienia JI-owego interwału jest FJS-owe przedstawienie odwrotności multyplikatywnej tegoż interwału.

Z tych własności wynika parę interesujących wniosków, które dla płynności warto trzymać z tyłu głowy. Na przykład dwie wysokości z dokładnie tym samym zestawem alteracji FJS-owym będą różniły się o interwał pitagorejski. *E*<sup>5</sup> i *fis*<sup>5</sup>? Możesz nie mieć zielonego pojęcia, czym są w *B*<sub>7</sub>, ale będziesz i tak wiedział, że interwał pomiędzy nimi jest pitagorejski – czyli 9/8. Fajne, nie?

Te własności można użyć właśnie, by zapisać interwały z pierwszej grupy. Rozważ 15/8. Rozbij je na część pitagorejską i „resztę” – odpowiednio 3/2 i 5/4. Zapisz obydwie te części osobno FJS-em, a potem dodaj je do siebie. 3/2 zapiszemy jako 5, a 5/4 jako 3<sup>5</sup>. Ich sumą będzie więc 7&lt;<sup>5</sup> – po prostu dodajesz pitagorejskie części tak, jakbyś dodawał zwykłe interwały, a następnie łączysz ze sobą FJS-owe alteracje. Właśnie takie jest przedstawienie 15/8 w FJS-ie!

Możesz też myśleć o tym na inny sposób: 15. alikwot jest jak 5. alikwot w tonacji dominanty. A zatem żeby zapisać 15/8 w, powiedzmy, *C*-dur, zacząłbyś od niby-modulacji do *G*-dur – tak więc twoim celem staje się po prostu piąty alikwot, czyli *h*<sup>5</sup>. To też jest więc poprawny sposób dotarcia do zapisu 15/8 w *C*-dur.

Jeszcze inna metoda: możesz nie wiedzieć, czym 15/8 jest w *C*-dur, ale wiesz, czym jest 5/4 – to *e*<sup>5</sup>. Wiesz też, że pomiędzy 5/4 a 15/8 jest 3/2, interwał pitagorejski. To jednoznacznie przedstawia poprawny wynik *h*<sup>5</sup>.

Spróbuj użyć tych wszystkich metod, by poradzić sobie z następnym zestawem ćwiczeń.

### Ćwiczenia – zestaw 3

1. Zapisz w FJS-ie następujące interwały: 5/3, 6/5, 7/6, 9/5.
2. Znajdź wartości następujących FJS-owych interwałów: 2<sup>5</sup>, 3<sub>7</sub>, 7<sup>11</sup>.
3. Zapisz skalę diatoniczną Ptolemeusza od *c* w FJS-ie. Oto ułamki: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (Trudne!). Rozważ zapisaną poniżej skalę. Czy to tryb skali powyżej? <img src="../assets/exercise_2.png" alt="c–d–es_5–f–g–as_5–b_5–c">

Rozwiązania znajdziesz [tutaj](solutions.html).

(Na końcu tej lekcji będziesz miał przyswojone metody na tłumaczenie *dowolnych* ułamków na FJS i na odwrót. Jednak warto mieć na uwadze i te metody powyżej, ponieważ są one o wiele szybsze i prawdopodobnie sam zauważysz, że będziesz wybierał jednak nie. To tak, jak rozkładać równanie kwadratowe na jednomiany zamiast rozwiązywać wzorami na pierwiastki funkcji kwadratowej – jest to o wiele szybsze, jeżeli się tego nauczysz).

Kiedy używałeś własności, by stawić czoło ćwiczeniom, może zadałeś sobie takie pytanie: „Jak dodać na przykład dwie 3<sup>5</sup> do siebie? Co by powstało?” Może 5&lt;<sup>5</sup>? Nie – to byłoby 3 + 3<sup>5</sup>. W naszym przypadku jest inaczej, ponieważ próbujemy znaleźć 3<sup>5</sup> + 3<sup>5</sup>.

Odpowiedzią na to pytanie akurat jest naraz sposób, na który w FJS-ie zapisujemy drugą wyróżnioną przeze mnie grupę interwałów. To *złożone alteracje*.

Każda wysokość czy interwał w FJS-ie może mieć dołączone nie tylko jedną, ale dowolną ilość alteracji FJS-owych. Otonalne i utonalne alteracje nigdy nie są ze sobą mieszane, ale jeżeli dwie alteracje tego samego rodzaju (obydwie otonalne lub obydwie tonalne) mają być zastosowane naraz, są ze sobą łączone poprzez mnożenie. Dlaczego tak? Ponieważ każda alteracja jest liczbą pierwszą, więc przez mnożenie – w przeciwieństwie do np. dodawania czy pisania jedna po drugim – nie tracimy informacji o czynnikach, ponieważ każdą liczbę dodatnią można rozłożyć na dokładnie jeden sposób, a kolejność nie gra roli.

Jeżeli iloczyn alteracji jest na tyle duży, że trudno szybko odczytać z niego czynniki (np. 119 = 7 ⋅ 17), możesz zapisać te alteracje jedna po drugiej, przedzielając przecinkami. Na przykład *d*<sup>7,17</sup> znaczy to samo, co *d*<sup>119</sup>. Powinieneś pisać te czynniki od najmniejszego do największego, ale każda kolejność jest poprawna. Możesz też przemnożyć częściowo – na przykład *g*<sup>11,125</sup>.

Odpowiem więc na zawieszone pytanie: sumą dwóch 3<sup>5</sup> jest 5&lt;<sup>25</sup>, co zgrabnie pasuje jako FJS-owa nazwa na 25/16. Podobnie, jeżeli dane Ci jest, że 7/4 to interwał 7<sup>7</sup>, od razu zauważysz, że 49/32 to będzie 6><sup>49</sup>, a 35/32 – 2<sup>35</sup>.

Jak powiedziałem, otonalne i utonalne alteracje nie wchodzą w interakcję, więc jeżeli do wysokości *ges* dodamy i +7, i −5, uzyskamy *ges*<sup>7</sup><sub>5</sub>. Oto dokładne reguły:

- Nazywając wysokości, użyj jednego indeksu górnego dla wszystkich dodatnich alteracji, po czym jednego indeksu dolnego dla wszystkich ujemnych.
- Zapisując wysokości, najpierw zapisujemy wszystkie dodatnie alteracje (jeżeli występują), następnie wszystkie ujemne, poprzedzone minusem „−” (jeżeli występują), po czym zwykłe znaki przygodne i sama główka nutowa.

Zatem wysokości *ges*<sup>7</sup><sub>5</sub> i *fis*<sup>5</sup><sub>7</sub> (odpowiednio 7/5 i 10/7 od *c*) zapisalibyśmy następująco:

<img src="../assets/example_5.png" alt="ges7_5–fis5_7">

A brzmią one następująco:

<audio controls><source src="../assets/audio_5.mp3" type="audio/mpeg"></audio>

Jak już zdefiniowaliśmy złożone alteracje, możemy dokonać o wiele więcej dzięki FJS. W szczególności możemy dodawać, odejmować i odwracać dowolne interwały. Możemy też dodać (zastosować) interwał do wysokości (np. *g* + 3<sup>5</sup> = *h*<sup>5</sup>) i odjąć wysokość od wysokości (czyli wyliczyć interwał spomiędzy nich – np. *f*<sup>7</sup> − *c* = 4<sup>7</sup>). W ten sposób możesz używać już poznanych własności dodawania, odejmowania i odwracania, by znaleźć FJS-owe odpowiedniki interwałów, których wcześniej po prostu nie byłeś w stanie przekonwertować.

> ### Arytmetyka interwałowa w FJS-ie
>
> - By dodać dwa FJS-owe interwały, dodaj ich pitagorejskie części (części odpowiadające zwykłym interwałom) i połącz alteracje.
> - By odjąć dwa FJS-owe interwały od siebie, odejmij ich pitagorejskie części, potem zamień w drugim interwale otonalne i utonalne alteracje ze sobą, potem połącz. Odejmowanie to dodawanie odwrotności.
> - By odwrócić FJS-owy interwał, odwróć część pitagorejską i zamień utonalne i otonalne alteracje ze sobą.
> - Analogicznie dodaje się interwał do wysokości i odejmuje jedną wysokość od drugiej.

Przy łączeniu alteracji identyczne czynniki po dwóch stronach kasują się. Na przykład dodanie 3<sup>5</sup> (5/4) do 3><sub>5</sub> (6/5) daje „5<sup>5</sup><sub>5</sub>”, co skraca się do samej „5”, czyli 3/2, co się zgadza. 2><sup>49</sup> (49/48) + 2<sub>7</sub> (8/7) = „3><sup>49</sup><sub>7</sub>”, co z powodu wspólnego czynnika skraca się do 3><sup>7</sup> (7/6).

Z pomocą arytmetyki interwałowej możesz teraz tak naprawdę przedstawić *każdy* ułamek JI w FJS-ie oraz odszyfrować FJS-owe interwały z powrotem na ułamki. Możesz użyć jedną z metod poniżej, jeżeli ułamki nie zawierają wielu liczb pierwszych.

Aby zamienić prosty ułamek JI na FJS: rozłóż licznik na interwał pitagorejski i liczby pierwsze; zbuduj interwał pitagorejski, następnie do tego kolejne interwały pierwsze; powtórz dla mianownika; ostatecznie znajdź różnicę pomiędzy ułamkiem zbudowanym z licznika a tym z mianownika. Na przykład dla 36/25: najpierw budujemy licznik – 36 – czyli 9/8, czyli sekunda wielka; rozkładamy mianownik na 5 ⋅ 5, a więc dwa razy 3<sup>5</sup>, a więc 5&lt;<sup>25</sup>; teraz odejmujemy 2 − 5&lt; = 5\>, 0 − +25 = −25; zatem ostateczny wynik to 5><sub>25</sub>.

Podobnie możesz łatwo zamienić prosty interwał FJS z powrotem na JI: spróbuj $$\frac{\text{alteracje otonalne}}{\text{alteracje utonalne}}$$. (Nie ma potrzeby, byś rozkładał alteracje na czynniki – to zaleta używania wymnażania). Jeżeli wynik jest błędny, to jedynie o interwał pitagorejski – dostosuj więc wynik odpowiednio. Na przykład mamy dane 1&lt;<sup>5</sup><sub>7</sub>; próbujemy 5/7, czyli po redukcji 10/7; po sprawdzeniu metodą powyżej otrzymujemy 4&lt;<sup>5</sup><sub>7</sub>, co nie jest wcale aż tak daleko; poprawiamy zatem o jedną pitagorejską kwintę w górę – wynik w takim razie brzmi 3/2 ⋅ 5/7 = 15/14.

Te metody starczą, by w 99% przypadków poprawnie przeczytać i zapisać coś w FJS-ie – jak sam widzisz, są one całkiem proste. Tak naprawdę nawet i z nich nie musisz korzystać – wystarczy przejrzeć serię alikwotową, by tłumaczyć w tę i we w tę w kilka sekund. Wyrazić 14/13 w FJS? Wiesz, że 13 to 6>, a 14 to 7, więc 14/13 musi być 2. Z powodu 14 w liczniku dodajesz +7, a z powodu 13 w mianowniku – −13, i voilà – właśnie znalazłeś prawidłowy zapis: 2<sup>7</sup><sub>13</sub>.

Jednak jedną z zalet FJS-u jest to, że może on być całkowicie zautomatyzowany. Techniki powyżej polegają na intuicji, która nie przydaje się zbytnio dla skomplikowanych interwałów. W bardziej złożonych przypadkach możesz *zawsze* wykonać konwersje za pomocą tych ostatnich dwóch technik poniżej:

> ### Technika FJS-owa nr 4: Automatyczna zamiana dowolnego ułamka na FJS.
>
> 1. Rozłóż ułamek na czynniki pierwsze.
> 2. Dla każdej liczby pierwszej *p* > 3 połóż α<sub>*p*</sub> = wykładnik przy p i pomnóż wyjściowy ułamek przez:
>
> 	$$(\text{comma} (p))^{-\alpha _p},$$
>
>	gdzie \\(\text{comma}(p)\\) to komat formalny dla *p*.
>
> 3. Wynik będzie pitagorejski – zapisz go w FJS-ie.
> 4. Teraz dodaj α<sub>*p*</sub> jako alteracje – jeżeli dodatnie, to otonalnie; jeżeli ujemne, to utonalnie.
> 5. Zredukuj i dostosuj oktawy.
>
> **Przykład.** Zamieńmy tzw. słaby naturalny półton chromatyczny – 25/24 – na FJS za pomocą tej techniki. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. Mamy 5<sup>2</sup>, więc zapamiętaj α<sub>5</sub> = 2 i pomnóż przez (80/81)<sup>−2</sup>. Uzyskujemy 2187/2048 – pitagorejskie 1&lt;. Teraz dodajemy +5 dwa razy (= α<sub>5</sub>) i otrzymujemy wynik: 1&lt;<sup>25</sup>.

> ### Technika FJS-owa nr 5: Automatyczna zamiana FJS-owego interwału na ułamek.
>
> 1. Zamień część pitagorejską FJS-owego interwału na ułamek pitagorejski.
> 2. Dla każdego otonalnej (utonalnej) alteracji *p*, pomnóż (podziel) przez komat formalny dla *p*.
> 3. Zredukuj i dostosuj oktawy.
>
> **Przykład.** Jednym z kultowych współbrzmień występujących w *Dobrze Nastrojonym Fortepianie* („Well-Tuned Piano”) La Monte Younga jest z zapisie FJS-owym 3><sup>49</sup>. By znaleźć odpowiadający temu zapisowi ułamek, zaczynamy od zamiany pitagorejskiego interwału 3> na 32/27. Następnie +49 oznacza, że mnożymy przez komat formalny siódemki dwa razy, zatem 32/27 ⋅ (63/64)<sup>2</sup> = 147/128.

Ostatnią sprawą wartą wspomnienia jest wymowa i ASCII. Jeżeli chcesz przekazywać dźwięki FJS-em, powinieneś być w stanie dokonać tego przez więcej niż jedno medium. Oto proste i logiczne reguły wymowy:

> ### Wymowa FJS
>
> 1. Wymów pitagorejską (zwykłą) nazwę wysokości czy interwału.
> 2. Następnie wypowiedz alteracje otonalne (jeżeli występują), ewentualnie poprzedzając je słowem „nad”.
> 3. Następnie wypowiedz alteracje utonalne (jeżeli występują), poprzedzając je słowem „pod”.

Na przykład *e*<sup>5</sup> wymawiamy „e pięć” (lub ew. „e nad pięć”), *es*<sub>5</sub> – „es pod pięć”. Interwał 4<sup>7</sup><sub>11</sub> wymawiamy „kwarta czysta (nad) siedem pod jedenaście”, gdzie „nad” w nawiasach służy jedynie do wyraźnego oddzielenia FJS-owych alteracji od pitagorejskiej nazwy i jest oprócz tego opcjonalna.

Nic się nie zmienia, jeżeli alteracje nie są do końca wymnożone: *a*<sup>5,17</sup><sub>13</sub> wymawiamy „a (nad) pięć siedemnaście pod trzynaście”. Słowo „pod” służy zamknięciu wyliczenia otonalnych alteracji i otwarciu wyliczenia tych utonalnych.

W ASCII nie da się zapisać indeksów górnych czy dolnych, więc w przypadku, w którym nie możesz zastosować takiego formatowania, użyj znaku podkreślenia (\_) dla utonalnych alteracji. Otonalne alteracje możesz zacząć znakiem karetki (^), który można zwykle pominąć, chyba że po nazwie interwału – wtedy potrzeba go, by oddzielić nazwę interwału pitagorejskiego od alteracji FJS-owych. Toteż *e*<sup>5</sup> można zapisać jako `e^5` albo po prostu `e5`, natomiast 3<sup>5</sup> można zapisać tylko jako `3^5` (nie `35`, bo to by była „35-ola wielka”, czyli cztery oktawy plus septyma wielka, czyli 243/8).

**To wszystko!**

To wszystko, co musisz wiedzieć, by wykorzystywać FJS w *całości* oraz być w stanie przedstawić *dowolny* strój JI! Bez żadnego wyuczania się na pamięć, drukowania tabelek, nic z tych rzeczy! Jedną z największych korzyści płynących z tego systemu jest to, że jest on całkowicie mobilny – jedyne, czego potrzebujesz, by się rozłożyć, to odpowiednie kalkulacje i wybrany przez ciebie promień tolerancji. Wszystkie techniki, które poznałeś, mogą być zautomatyzowane, wyręczając cię od żmudnych kalkulacji.

FJS posiada wiele pięknych własności, które powodują, że jest on niewiarygodnie spójny. Najważniejszą cechą jest to, że FJS jest *bijekcją* do JI – każdy dodatni ułamek ma dokładnie jedno FJS-owe przedstawienie, a każde FJS-owy interwał ma jednego reprezentanta wśród liczb wymiernych. Inną własnością jest *izomorfia* – nie ma znaczenia, czy najpierw przemnożymy ułamki, a następnie zamienimy je do FJS, czy najpierw przeniesiemy je do FJS, a potem dodamy – wynik jest ten sam. Te własności zezwalają na prostą transpozycję w FJS-ie: żeby przenieść o np. 2<sup>5</sup>, najpierw przeniósłbyś wszystko o 2 (bez zmiany FJS-owych znaków chromatycznych), a potem dodałbyś +5 to każdej nuty, łącząc po drodze (tak więc +5 zmieniłoby się na +25, +7 na +35, a −5 na 1).

Jeszcze jedna rzecz, zanim wypróbujesz swoich nagromadzonych sił przy następnym ćwiczeniu. To tylko dla odniesienia – mógłbyś sam wyliczyć sobie tę tabelę, jeżeli byś sobie życzył (czego byś i tak nie zrobił, dlatego ja zrobiłem dla ciebie).

| Pierwsza | Generator | Komat formalny |
|---------:|:---------:|:--------------:|
| 5        | +4        | 80/81          |
| 7        | −2        | 63/64          |
| 11       | −1        | 33/32          |
| 13       | −4        | 1053/1024      |
| 17       | −5        | 4131/4096      |
| 19       | −3        | 513/512        |
| 23       | +6        | 736/729        |
| 29       | −2        | 261/256        |
| 31       | +5        | 248/243        |

Teraz możesz w końcu dowiedzieć się, dlaczego to właśnie pierwiastek kwadratowy z 33/31 wybrałem na λ. To średnia geometryczna 33/32 i 32/31, a więc większa od pierwszego, a mniejsza od drugiego. 33/32 jest więc dozwolonym komatem, dając przybliżenie kwarty czystej dla 11/8 (inaczej musielibyśmy posługiwać się absurdalnym 5>). Ale naraz 32/31 nie jest dozwolone, przez co uniemożliwiając przybliżenie oktawy czystej dla 31/16. Sprytne, nie?

### Ćwiczenia – zestaw 4

1. Zamień następujące ułamki na FJS, używając dowolnej techniki: 28/27, 15/13, 33/25.
2. Zamień następujące FJS-owe interwały na ułamki, używając dowolnej techniki: 6<sub>7</sub>, 4><sup>13</sup><sub>5</sub>, 3><sub>25</sub>.
3. Zanotuj tę JI-ową interpretację słynnej durowej kadencji S<sub>II</sub> D T w tonacji *B*, mając dane następujące ułamki (wszystkie od *b*, bez oktaw):
	- S<sub>II</sub>: 10/9, 5/4, 4/3,   5/3,   1/1
	- D:              3/2,  9/8, 21/16, 27/16, 15/8
	- T:              1/1,  9/8, 5/4,   3/2,   15/8
4. Zapisz następującą sekwencję akordów jako ułamki – interwały od *es*, czyli toniki:
	
	<img src="../assets/exercise_3.png" alt="es–b–g5–es, c5–c5–g5–es, as–c5–as–f5, b–b–f1–d5, es–b–g5–es">
	
5. Wiedząc, że wysokością bazową jest *a*, zapisz pierwszy przykład muzyczny z tego kursu w FJS-ie. Dla przypomnienia: jest to 11/10, 10/9, 9/8, 8/7.
	
	<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>
	
6. (Trudne!). Tak zwany „ruch 432-hercowy” uparcie twierdzi, że przestrajanie *a* z 440 na 432 Hz poprawia fizyczny i duchowy aspekt muzyki. (Nie ma tu znaczenia, czy mają rację). Wynajdź FJS-owy interwał odpowiadający temu przestrojeniu.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="da_capo_al_fine">Da capo al fine: Co dalej?</a>

To już *wszystko*, co potrzebujesz wiedzieć, by korzystać z FJS-u. Teraz możesz napisać dowolny utwór naturalny z użyciem właśnie niego. Pozostały jedynie pewne skrótowe metody zapisu, które wymyśliłem, by ułatwić sobie zapis – na przykład klucze i chwilowe transpozycje. Nie są one opisane tutaj – zamiast tego spójrz do [pełnego formalnego opisu](rules.html), by się o nich nauczyć (tam też powinieneś sięgać po reguły dla odniesienia).

Oprócz tego to wszystko! Już nauczyłeś się całego FJS-u w kilka minut. Teraz idź w świat – niech FJS pomoże Ci ułatwić myślenie o JI, gdy je na swojej drodze napotkasz.

**Koniec.**
