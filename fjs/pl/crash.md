# Intensywny kurs FJS-u

Zastanawiasz się, co FJS ma Tobie do zaoferowania, i chciałbyś nauczyć się go używać.

Ten kurs stworzyłem z myślą o przyswajalności istoty systemu. Nie skupię się na pewnych udogodnieniach i skrótach, ponieważ nie są one konieczne ani niezbędne. Jeżeli już miałeś kontakt z naturalnymi temperacjami, FJS będzie dla Ciebie igraszką – nauczysz się go naraz, w kilka minut, a jego piękno i prostota będą Tobie w zasięgu ręki.

## Spis treści

* [Wprowadzenie: Koniec z enharmonią](#introduction)
* [Lekcja 0: Wiadomości wstępne](#lesson_0) 
* [Lekcja 1: Strój pitagorejski](#lesson_1)
* [Lekcja 2: Interwały pierwsze](#lesson_2)
* [Lesson 3: Compound Accidentals](#lesson_3)
* [Da Capo Al Fine: What Else?](#da_capo_al_fine)

---

## <a name="introduction">Wprowadzenie: Koniec z enharmonią</a>

Wszyscy jesteśmy zaznajomieni z zapisem nutowym i występującymi w nim znakami chromatycznymi. Możesz jednak nie być świadomy, że notacji tej uczymy się w wersji przystosowanej do wszechobecnej dwunastostopniowej temperacji równomiernej, w której na co dzień myślimy. (Od teraz będziemy nazywać ją skrótem 12-EDO, z angielskiego „12 equal divisions of the octave”, czyli „równomierny podział oktawy na dwanaście”).

Oto na przykład skala dodekafoniczna w 12-EDO:

<img src="../assets/example_1.png" alt="c–cis–d–dis–e–f–fis–g–gis–a–ais–h–c">

Chwileczkę. Właściwie zwykle zapisujemy ją tak:

<img src="../assets/example_2.png" alt="c–cis–d–dis–e–f–fis–g–gis–a–b–h–c">

Oczywiście zamiana *ais* na *b* w tym miejscu nie robi nam różnicy. Wiemy, że to są dwie różne nazwy na tę samą wysokość. To, którą wybierzemy, zależy od naszych potrzeb – od czytelności, konsekwencji czy prostoty – i zależnie od kontekstu, ale są one sobie mimo wszystko synonimami.

Tę własność – przyrównanie sekundy małej do prymy zwiększonej czy sekundy zmniejszonej do prymy czystej – nadano nazwę równoważności enharmonicznej. Co więcej muzycy, którzy nie zetknęli się z niekonwencyjnymi strojami albo nie są ich świadomi, mogą nie pojmować, że własność ta nie jest tautologią – wręcz przeciwnie, 12-EDO to jeden z *niewielu* strojów, które ją posiadają. (Dla kontrastu, 19-EDO-owa pryma czysta jest równa sekundzie *podwójnie* zmniejszonej, czyniąc eis i fes tymi samymi wysokościami).

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
> **Przykład.** By zamienić tercję małą z FJS-u na 3-limit, wyszukujemy najpierw ilość kroków kwintowych odpowiadającą temu interwałowi. Jest to −3: *c*–*f*–*b*–*es*. Podnosimy 3 do −3 i uzyskujemy 1/27. Ponieważ chcemy zredukować ten interwał – czyli wsunąć go do przedziału \[1, 2) – mnożymy go przez 2<sup>6</sup>, uzyskując ostateczny wynik: 32/27.

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

Jeżeli zetknąłeś się kiedyś z JI, poznasz w 5/4 „naturalną tercję wielką”, a w 7/4 „harmoniczną septymę” (rodzaj septymy małej). Prawdopodobnie te określenia wydały Ci się na początku obce. Przecież brzmią one jak rozszerzenia pojęć „tercji wielkiej” i „septymy małej”, zamykające w sobie interwały, które są bliskie tych nam znanych.

Ale jeżeli popatrzymy na to z technicznego punktu widzenia, zaczyna robić się dziwnie.

Załóżmy, że przyjmiemy 5/4 za rodzaj tercji wielkiej. Zapiszemy więc ją jako tercję wielką, ale *z towarzyszącym symbolem sygnalizującym tę różnicę*. Od pitagorejskiej tercji wielkiej – 81/64 – 5/4 różni się tylko o 81/80, czyli ok. 22¢. Dobrze, ale dlaczego miałoby to sprawiać jakieś problemy? Otóż interwał pitagorejskiej kwarty zmniejszonej – 8192/6561 – jest *jeszcze* bliżej 5/4 niż kwarta czysta. Różnicą między 8192/6561 a 5/4 jest tylko 32805/32768, czyli jedynie 2¢!

Posłuchaj, jak różnią się 81/64 i 5/4:

<audio controls><source src="../assets/audio_2.mp3" type="audio/mpeg"></audio>

A teraz 8192/6561 i 5/4:

<audio controls><source src="../assets/audio_3.mp3" type="audio/mpeg"></audio>

Dlaczego więc mielibyśmy wybrać tercję wielką zamiast kwarty zmniejszonej dla 5/4. Prostota, mówisz. Tercja wielka to tylko +4 kwinty, a kwarta zmniejszona to przerażające −8 kwint. Ale w takim razie dlaczego nie posłużylibyśmy się tercją *małą* dla 5/4? Przecież jest ona jeszcze prostsza – −3 kwinty, w porównaniu do +4. Ach, to teraz jest znowu za daleko? Za kogo *ty* się uważasz, by decydować, kiedy stawiać na prostotę, a kiedy na wierność przybliżenia?

Spokojnie, to był paszkwil. Parodiowałem konkurencyjne systemy JI, które wybierają sobie te przybliżenia wedle własnego uznania. FJS na pytanie „Jakie przybliżenia powinienem wybrać dla każdego interwału pierwszego?” odpowiada: w ogóle. Zamiast tego używamy uzgodnionej wcześniej stałej, nazywanej **promieniem tolerancji**, do tego celu. Po dłuższym eksperymentowaniu z różnymi promieniami tolerancji i rozważaniu ich zalet i wad, doszedłem do wniosku, że w standardowym FJS-ie będziemy używać *λ*, zdefiniowanej następująco:

$$\displaystyle \lambda =\sqrt{\frac{33}{31}}$$

Dlaczego taka wartość, wyjaśnię później.

Co robimy z tą liczbą? To, co teraz nastąpi, jest jednym z najważniejszych szczegółów FJS-u – to szczegół, który wyróżnia FJS spośród wachlarza systemów JI. Chodzi o **główny algorytm FJS**. Oto i on, w postaci zrozumiałej dla człowieka. Na tej stronie znajdują się implementacje programistyczne, a także zdatny do użycia kalkulator. 

**Główny algorytm FJS** wylicza tzw. **funkcję generującą** dla każdej podanej liczby pierwszej i pewnego promienia tolerancji. Poniżej wyjaśniam, co algorytm robi, po co, i do czego potrzebna jest nam funkcja generująca.

> ### Główny algorytm FJS
> 
> 1. Dany jest interwał pierwszy, zredukowany.
> 2. Niech *k* = 0.
> 3. Rozważ interwał złożony z *k* skoków o pitagorejską kwintę, zredukowany.
> 4. Czy różnica między tym interwałym a podanym interwałem docelowym jest mniejsza niż promień tolerancji?
> 5. Jeżeli tak: *k* to funkcja generująca. Zwróć *k*. Koniec.
> 6. Jeżeli nie: weź następne *k* w kolejności z (0, 1, −1, 2, −2, 3, −3, …) i wróć do kroku 3.

Jak widzisz, sam algorytm jest na tyle prosty, że mógłbyś go przeprowadzić w myślach, oprócz kroku 4, który opierając się na całkiem trudnych do wykonania w głowie obliczeniach, wymagałby zdolności szybkiego przybliżania wielkości wielu interwałów w pamięci – centami lub wyobraźnią.

Główny algorytm FJS wynajduje najprostsze możliwe przybliżenie pitagorejskie podanego interwału pierwszego, które jest mniej daleko od tego pożądanego interwału niż o promień tolerancji. Różnicą pomiędzy nimi dwoma nazywamy **komatem formalnym** i zapisujemy go nową FJS-ową alteracją. W ten sposób liczy się komat formalny:

> ### Komat formalny
> 
> Komat formalny dla liczby pierwszej *p* i funkcji generującej *g* wynosi:
>
> $$\text{comma} (p)=\frac{\text{red} (p)}{\text{red} (3^g)}$$

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

Czego pewnie się domyśliłeś, wszystkie alteracje w całym (nieskończonym) szeregu alikwotowym są dodatnie (utonalne). Nie wygląda to zgrabnie – bardziej, niż gdybyśmy przejmowali się kierunkami? Rozumiem, że ten wybór może cię z początku mylić, ale z czasem zauważysz, jak logiczniejszy i łatwiejszy w użyciu staje się dzięki niemu cały FJS. (Możesz jeszcze posłużyć się inną analogią: zamiast pojmować krzyżyk jako podwyższenie i bemol jako obniżenie, pomyśl o nich jako o dodawaniu i obniżaniu kwint).

Teraz chciałbym wyjaśnić, jak te alteracje oddziałują na siebie nawzajem na pięciolinii.

> ### Przenoszenie FJS-owych alteracji
>
> - Jak wiadomo, zwykłe (pitagorejskie) znaki przygodne przydzielają pola i linie na pięciolinii (*cdefgah*) odpowiednim pitagorejskim wysokościom, a więc działają na wysokości tego pola czy linii (w tej samej oktawie) aż do końca taktu.
> - Podobnie, FJS-owe alteracje przydzielają wysokościom pitagorejskim (*c*, *des*, *cis*, *d*, itp.) dokładne naturalne wysokości, a więc działają na tej pitagorejskiej wysokości w tej oktawie aż do końca taktu.

Dlaczego akurat tak? Ponieważ ta reguła w tej formie jest o wiele bardziej spójna i przez to o wiele bardziej użyteczna. Oto krótka demonstracja:

<img src="../assets/example_4.png" alt="c♯5–c, c♯5–c1, c♯5–c♮, c♯5–c♮5">

- W pierwszym takcie mamy *c*♯5, po którym następuje gołe *c*. Ponieważ druga nuta jest na tym samym polu, co pierwsza, dziedziczy ona krzyżyk ♯, a ponieważ jest to teraz *cis* w tej samej oktawie, dziedziczy również +5. W takim razie mamy *cis*<sup>5</sup>, *cis*<sup>5</sup>.
- W drugim takcie mamy *c*♯5, po którym następuje *c*1. **+1 to FJS-owy odpowiednik kasownika – kasuje wszystkie FJS-owe alteracje, ale nic oprócz tego.** W takim razie mamy *cis*<sup>5</cis>, *cis*.
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
6. (Trudne!). Zapisz *otonalny* szereg alikwotowy (czyli szereg alikwotów dolnych) od *a* aż do ósmego alikwotu dolnego.

Rozwiązania znajdziesz [tutaj](solutions.html).

## <a name="lesson_3">Lesson 3: Compound Accidentals</a>

You now know how to represent a large portion of Just Intonation using the FJS. You can notate all of Pythagorean tuning and all of the prime intervals. But that still doesn't cover everything; what about intervals built from more than one prime (including 3), like 15/8 or 25/16, and what about intervals that aren't in the harmonic series at all, like 5/3, 6/5, or 9/7?

For the purposes of this crash course, I've divided the intervals not yet covered into two groups:

- Intervals, like 15/8 or 9/7, which consist of a Pythagorean interval plus a single otonal or utonal prime interval.
- Intervals, like 25/16 or 7/5, which require more than one prime interval to be built.

When it comes to the first group, you can already write them – you just don't know that yet. This is because the FJS has a number of really useful identities that will often allow you to skip having to carry out the techniques I've given (remember that intervals are compounded by multiplying their ratios):

> ### FJS Shortcut Identities
>
> - The sum of the FJS representations of two JI ratios is the FJS representation of the product of these ratios.
> - The difference of the FJS representations of two JI ratios is the FJS representation of the quotient of these ratios.
> - The inversion of the FJS representation of a JI ratio is the FJS representation of the reciprocal of the ratio.

These identities have several really nice corollaries that are useful to keep in the back of your mind for fluency. For example, if you have two notes with identical FJS accidentals, you know that the interval between them must be Pythagorean. E<sup>5</sup> and F♯<sup>5</sup>? You may have no idea what they are in the key of B♭<sub>7</sub>, but you know the interval between them is a Pythagorean major second – that is, 9/8. Neat, huh?

These identities can also be used to write the first group of missing intervals. Take 15/8. Break it up into its Pythagorean part and the remainder: 3/2 and 5/4. Write each of these in the FJS in turn, and then add those representations together. 3/2 becomes P5, and 5/4 becomes M3<sup>5</sup>. The sum is M7<sup>5</sup>. You just add the intervals as you normally would, and affix the FJS accidentals at the end. This indeed is the representation of 15/8 in the FJS!

Another way to think about it is like so: the fifteenth harmonic is like the fifth harmonic in the dominant key. So to notate 15/8 in the key of C, you can start with an "imaginary modulation" to the key of G. There, your target is simply the fifth harmonic, which becomes B<sup>5</sup>. This is therefore also the representation of 15/8 in the key of C.

Yet another way to think about it: you may not know what 15/8 is in the FJS in the key of C, but you know what 5/4 is: it's E<sup>5</sup>. You also know that between 5/4 and 15/8 there's 3/2, a Pythagorean interval. So they must have the same FJS accidentals. You also know that this Pythagorean interval between them is a perfect fifth. That uniquely describes the note B<sup>5</sup>, which is correct.

Try using these methods to tackle the next exercise.

### Exercise 3

1. Write the FJS representations of the following: 5/3, 6/5, 7/6, 9/5.
2. Find the JI ratios of the following FJS intervals: M2<sup>5</sup>, M3<sub>7</sub>, m7<sup>11</sup>.
3. Notate Ptolemy's intense diatonic scale in the FJS on C. The ratios are: 1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1.
4. (HARD!) Take the following scale. Is it a mode of the above? <img src="../assets/exercise_2.png" alt="C–D–E♭_5–F–G–A♭_5–B♭_5–C">

You can check your answers [here](solutions.html).

(At the end of this lesson, you will be provided with techniques to translate *any* ratio to an FJS representation and backwards. However it's useful to keep these methods in mind because they are much quicker and you will generally be using them instead. It's like choosing factorization over the quadratic formula to solve quadratics; it's much faster if you can.)

While you were using the identities you were given to tackle these questions, you may have asked yourself a question: "How would I add, for instance, two M3<sup>5</sup> intervals to each other? What would the result be?" Would it be A5<sup>5</sup>? No, that would be the result of adding M3 to M3<sup>5</sup>. Our case is different, it's adding M3<sup>5</sup> to another M3<sup>5</sup>.

The answer to this question happens to simultaneously be the way the FJS notates the second group of remaining JI intervals: *compound accidentals*.

Any FJS note or interval may have not just one, but any number of FJS accidentals appended to it. The otonal and utonal accidentals are always kept separate, but if there is more than one accidental of the same "x-tonality" (otonality or utonality), they are merged. FJS accidentals merge by multiplication. Why? Because they are all primes; multiplying them – as opposed to, say, adding or concatenating the digits in base ten – will never make you lose information about the original primes, because every positive integer can be uniquely factorized back into its primes, and order does not matter.

If the accidentals merge in such a way that you can't easily factorize them in your head (e.g. 119 = 7 × 17), you can write them out as a list with commas between each prime ("commas" being, of course, the punctuation mark, not a tiny musical interval). For example, D<sup>7,17</sup> would mean the exact same thing as D<sup>119</sup>. The convention is to write these primes in non-descending order, but any order is correct. You can also multiply in any combination, so for example you can write G<sup>11,125</sup>, multiplying only some of the factors.

So to answer the original question, the sum of two M3<sup>5</sup> is A5<sup>25</sup>, which neatly fits as the FJS name of the ratio 25/16. Similarly, given that a 7/4 is a m7<sup>7</sup>, you immediately know that a 49/32 will be a m6<sup>49</sup> and a 35/32 will be a M2<sup>35</sup>.

As mentioned, otonal and utonal do not mix. So if a note G♭ happened to have both +7 and −5 accidentals, it would be written as G♭<sup>7</sup><sub>5</sub>. The exact rules are as follows:

- In note naming, use one superscript representing the merged positive accidentals, followed by one subscript representing the merged negative accidentals.
- In music notation, the merged positive accidental is written first (if any), then the merged negative accidental with a minus sign in front (if any), then any conventional accidental, then the note.

So the notes G♭<sup>7</sup><sub>5</sub> and F♯<sup>5</sup><sub>7</sub> (respectively 7/5 and 10/7 in the key of C) would be written in staff notation like this:

<img src="../assets/example_5.png" alt="G♭7_5–F♯5_7">

Here is what they sound like, respectively:

<audio controls><source src="../assets/audio_5.mp3" type="audio/mpeg"></audio>

Once compound accidentals have been defined, you can do a lot more with the FJS. In particular, you can add, subtract, and invert any two FJS intervals. You can also add an interval to a note (e.g. G + M3<sup>5</sup> = B<sup>5</sup>) and you can subtract a note from another note (e.g. F<sup>7</sup> − C = P4<sup>7</sup>). That way, you can use the identities for addition, subtraction and inversion to quickly find many FJS representations of intervals you couldn't represent before.

> ### FJS Interval Arithmetic
>
> - To add two FJS intervals, add their Pythagorean parts (conventional interval classes) and merge the accidentals.
> - To subtract two FJS intervals, subtract their Pythagorean parts, then swap the otonal with the utonal accidental for the second interval, then merge. Subtracting an FJS interval is the same as adding its inverse.
> - To invert an FJS interval, invert its Pythagorean part and swap the otonal with the utonal accidental.
> - You can also add an FJS interval to an FJS note, or subtract an FJS note from another FJS note.

When you combine accidentals, you cancel out identical factors in the otonal and the utonal. For example, adding M3<sup>5</sup> (5/4) to m3<sub>5</sub> (6/5) gives "P5<sup>5</sup><sub>5</sub>" which reduces to P5, as expected (3/2). Adding m2<sup>49</sup> (49/48) to M2<sub>7</sub> (8/7) gives "m3<sup>49</sup><sub>7</sub>" which becomes m3<sup>7</sup> (7/6).

Using interval arithmetic, you can now in fact represent *any* JI ratio using the FJS, and decode any FJS interval back into a ratio. You can use a few simple methods if the ratios in question don't involve many primes.

To convert a simple JI ratio quickly to an FJS representation: Factorize the numerator into a Pythagorean interval plus primes. Build the Pythagorean interval, and each prime as a prime interval, and add them up. Repeat for the denominator. Then, take the difference of numerator's interval and the denominator's interval. For example, to convert 36/25, we first build the numerator: 36, which is 9/8, which is M2. Then we build the denominator: 25. It splits to 5 and 5, which is two M3<sup>5</sup>, which becomes A5<sup>25</sup>. Now we subtract; M2 − A5 = d5, and the accidentals are (0) − (+25) = (−25). So the final answer is d5<sub>25</sub>.

Similarly, you can also easily convert a simple FJS representation back into a JI ratio. Try $$\frac{\text{otonal accidental}}{\text{utonal accidental}}$$. (You don't even need to factorize the accidentals. That's a perk of using multiplication to merge them.) If you are off, then only by a Pythagorean interval. Adjust accordingly. For example, let's try to convert A1<sup>5</sup><sub>7</sub>. We try 5/7, which is 10/7; when we apply the above method to this, we obtain A4<sup>5</sup><sub>7</sub>, which isn't too far off. We only need to adjust by one Pythagorean fifth upwards. So the correct answer is actually (3/2) × (5/7) = 15/14.

These methods will, 99% of the time, be enough to read and write in the FJS, and as you can see, they are easy to use. In fact, much of the time, you don't even have to use these; skimming the harmonic series is often enough to perform forwards and backwards conversions in mere seconds. Want to convert 14/13 into the FJS? You know that 13 is a m6 and 14 is a m7, so 14/13 must be a M2. Then because of 14 in the numerator you stick a +7, and because of 13 in the denominator you stick a −13, and voilà, you have found the correct FJS representation: M2<sup>7</sup><sub>13</sub>.

However, one of the virtues of the FJS is that it can be fully automated. The above methods may rely a little on intuition, and are not very useful for complex intervals. In the case of complex intervals, you can *always* perform the forward and backward conversions using these final two techniques:

> ### FJS Technique \#4: To convert any JI ratio automatically to an FJS representation.
>
> 1. Factorize the ratio.
> 2. For every prime *p* greater than 3 with an exponent of α<sub>*p*</sub>, remember the α<sub>*p*</sub> for every *p* and multiply the initial ratio by
>
> 	$$(\text{comma} (p))^{-\alpha _p}$$
>
>	where $$\text{comma}(p)$$ is the formal comma of *p*.
>
> 3. The result will be Pythagorean. Transform it into FJS form.
> 4. Now add the α<sub>*p*</sub> as accidentals – if positive, then otonal; if negative, then utonal.
> 5. Take the reduced form and adjust octaves as required.
>
> **Example:** Let's convert the weak just chromatic semitone, 25/24, into FJS form using this technique. 25/24 = 2<sup>3</sup> 3<sup>−1</sup> 5<sup>2</sup>. Because of 5<sup>2</sup>, remember 2 and multiply by (80/81)<sup>−2</sup>. The result is 2187/2048, which is Pythagorean and converts to A1. Now we add a double +5 (because of the 2) and we get A1<sup>25</sup>.

> ### FJS Technique \#5: To convert any FJS representation automatically into a JI ratio.
>
> 1. Convert the Pythagorean part of the FJS interval into a Pythagorean ratio.
> 2. For every otonal accidental *p*, multiply by the formal comma of *p*. If utonal, then divide.
> 3. Take the reduced form and adjust octaves as required.
>
> **Example:** One of the most iconic harmonies of La Monte Young's *Well-Tuned Piano* is written m3<sup>49</sup> in the FJS. To find its ratio, we start by converting m3 to 32/27. Then, +49 means multiply by the formal comma of 7 twice. So (32/27) × (63/64)<sup>2</sup> = 147/128.

One final note is on pronunciation and ASCII. If you want to communicate using the FJS, that ought to be possible using more than just one medium. Here are the simple and logical pronunciation rules:

> ### FJS Pronunciation
>
> 1. Pronounce the conventional (Pythagorean) part of the note name, or the conventional (Pythagorean) interval.
> 2. Then, attach the compound otonal accidental (if any) pronounced simply as the number itself, optionally with a "super" prefix.
> 3. Then, attach the compound utonal accidental (if any) pronounced simply as the number itself with a "sub" prefix.

So for example, E<sup>5</sup> is pronounced "E-five" or "E-super-five", and E♭<sub>5</sub> is pronounced "E-flat-sub-five". An interval such as P4<sup>7</sup><sub>11</sub> would be pronounced "perfect fourth (super) seven sub eleven", where the word "super" is optional and is used to emphasize the division between the name of the interval and the start of the FJS accidentals.

If you split, there's no change. So A<sup>5,17</sup><sub>13</sub> is pronounced "A-(super)-five-seventeen-sub-thirteen". The word "sub" is just a terminator for the otonal part, and marks that the utonal part follows.

As for ASCII, it might be problematic to type these names because of the super- and subscripts. You can alternatively indicate a subscript with a preceding underscore, like you usually would, and you can do the same for a superscript using a caret symbol. But you can usually omit the caret; it is only required if you're describing intervals to split the number describing the interval from the FJS accidental. So E<sup>5</sup> can be written E^5 or simply E5, but M3<sup>5</sup> can only be written M3^5 (not M35, obviously, as that would be a "major thirty-fifth", or a major seventh plus four octaves; M35 would be 243/8 in the FJS).

**That's it!**

This is all you need to know to use the *entirety* of the FJS and represent *any* JI you wish! There is no memorization to be done, no lookup tables to be bookmarked, nothing! One of the largest virtues of this system is that it's all completely portable; all you need to set it up anywhere is calculation and your radius of tolerance. The techniques you've just been given can be automated and the entire system can be handled by a computer.

The FJS has a lot of beautiful properties that make it incredibly logical. The most important property is that it is *bijective* to JI; every positive rational number has exactly one FJS representation, and every FJS representation has exactly one rational number it represents. Another property – which has already been given above – is that it is *linear*; it doesn't matter if you combine ratios and then transform them into the FJS, or first transform them, then combine; the result is the same. These properties make transposition in the FJS extremely easy. To transpose by, say, M2<sup>5</sup>, you would first transpose by a M2 (which is exactly the same as a normal transposition by a major second; the FJS accidentals remain unchanged) and then add a +5 accidental to every note, merging as necessary (so that e.g. +5 becomes +25, +7 becomes +35, −5 becomes 1).

There's one last thing that you might want before trying your accumulated skills at the last exercise. Again, this is just for reference; you could have calculated this table yourself if you wanted (which you wouldn't, so that's why I did it for you).

| Prime | Generator | Formal Comma |
|------:|:---------:|:------------:|
| 5     | +4        | 80/81        |
| 7     | −2        | 63/64        |
| 11    | −1        | 33/32        |
| 13    | −4        | 1053/1024    |
| 17    | −5        | 4131/4096    |
| 19    | −3        | 513/512      |
| 23    | +6        | 736/729      |
| 29    | −2        | 261/256      |
| 31    | +5        | 248/243      |

Now you can finally learn why the square root of 33/31 is my preferred choice for the radius of tolerance. This number is the geometric mean of 33/32 and 32/31, being strictly greater than the former and strictly less than the latter. So 33/32 is accepted as a possible formal comma, allowing the representation of 11/8 as a P4 (if this was rejected, the next nearest approximation would be an absurd d5). But at the same time, 32/31 is rejected, disallowing the just as absurd representation of 31/16 as a P8. Clever, huh?

### Exercise 4

1. Convert the following JI ratios into the FJS using any technique you like: 28/27, 15/13, 33/25.
2. Convert the following FJS representations into JI ratios using any technique you like: M6<sub>7</sub>, d4<sup>13</sup><sub>5</sub>, m3<sub>25</sub>.
3. Notate a JI rendition of the famous ii–V–I progression in the FJS in the key of B♭, given the following JI ratios from B♭:
	- ii chord: 10/9, 5/4, 4/3, 5/3, 1/1
	- V chord: 3/2, 9/8, 21/16, 27/16, 15/8
	- I chord: 1/1, 9/8, 5/4, 3/2, 15/8
4. Translate the following chord progression from the FJS back into ratios above E♭, the tonic:
	
	<img src="../assets/exercise_3.png" alt="E♭–B♭–G5–E♭, C5–C5–G5–E♭, A♭–C5–A♭–F5, B♭–B♭–F1–D5, E♭–B♭–G5–E♭">
	
5. Given that the base note is A, notate the first audio example in this crash course using the FJS. Here it is again: 11/10, 10/9, 9/8, 8/7.
	
	<audio controls><source src="../assets/audio_1.mp3" type="audio/mpeg"></audio>
	
6. (HARD!) There are supporters of the "432 Hz movement", which insists that re-tuning A down from 440 Hz to 432 Hz improves the physical and spiritual quality of music. (Whether or not this is true is insignificant here.) Determine the FJS representation of the interval by which a piece of music is transposed in the FJS when such a pitch shift is carried out.

You can check your answers [here](solutions.html).

## <a name="da_capo_al_fine">Da Capo Al Fine: What Else?</a>

This is *all* you need to use the FJS! You can write any JI music using the FJS now. The only remaining parts of the FJS are shorthand methods that I have invented to make you able to cut down on writing many FJS accidentals in common situations. These include FJS key signatures and transposition lines. These elements are not covered in this crash course. Instead, to learn about them, you should check out the [full formal description](rules.html) of the FJS (where you should also go for reference of any rules regarding the system).

Except for those, that's it! You have already learned the entirety of the FJS in mere minutes. Go now, and may the FJS simplify your thinking when you next encounter Just Intonation.

**The End.**
