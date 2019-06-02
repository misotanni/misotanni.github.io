# Matematyka FJS

Tutaj umieściłem twierdzenia matematyczne, dzięki którym zapewnione jest, że FJS działa i może się chwalić tymi wymienionymi właściwościami, ale które poza kontekstem FJS nie występują. Większość tej matematyki to jedna wielka misja udowodnienia, że FJS posiada bijekcję, czyli że każdy interwał FJS-owy przedstawia dokładnie jeden ułamek JI, i na odwrót.

## Twierdzenie 1.

**Aby dodać dwa interwały, mnoży się ich wartości.**

Rozpatrzmy trzy dźwięki o częstotliwościach:

$$f_1, f_2, f_3$$

Rozpatrzmy między nimi dwa sąsiadujące interwały:

$$d_{1,2}=\frac{f_2}{f_1}, d_{2,3}=\frac{f_3}{f_2}$$

Z definicji, ich sumą jest:

$$d_{1,3}=\frac{f_3}{f_1}$$

Ale jest to również:

$$\frac{f_3}{f_1}=\frac{f_2 \cdot f_3}{f_1 \cdot f_2}=\frac{f_2}{f_3} \cdot \frac{f_1}{f_2}=d_{1,2} \cdot d_{2,3} \quad \blacksquare$$

**Następstwo.** Różnicą interwałów jest iloraz ich wartości.

## Twierdzenie 2.

**Każdą dodatnią liczbę wymierną można tylko na jeden sposób rozłożyć na czynniki pierwsze o potęgach całkowitych.** („Zasadnicze twierdzenie harmonii”)

Dowód rozpoczyna rzecz jasna od zasadniczego twierdzenia arytmetyki, czyli istnienia niepowtarzalnego rozkładu na czynniki pierwsze o potęgach naturalnych każdej dodatniej liczby całkowitej. Notacja p(*n*) oznacza tu jak zwykle *n*-tą liczbę pierwszą, czyli $$\text{p}(1)=2$$.

$$\displaystyle a=\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}, a\in \mathbb{Z}_+, n, \alpha _i \in \mathbb{N}$$

Rozpatrzmy teraz interwał JI, który – jako że jest dodatnią liczbą wymierną – musi się dać przedstawić jako iloraz dwóch dodatnich liczb całkowitych. Obie rozkładamy w jedyny sposób na czynniki pierwsze.

$$\frac{a}{b}=\frac{\prod_{i=1}^{n} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{m} \text{p}(j)^{\beta _j}}$$

Teraz co najwyżej jeden z tych rozkładów musimy przedłużyć, żeby oba miały długość $$t=\text{max}(n,m)$$. (Po prostu mnożymy przez liczby pierwsze do potęgi zerowej). Na koniec upraszczamy.

$$\frac{a}{b}=\frac{\prod_{i=1}^{t} \text{p}(i)^{\alpha _i}}{\prod_{j=1}^{t} \text{p}(j)^{\beta _j}}=\prod_{k=1}^{t} \text{p}(k)^{\gamma _k}$$

Zasadnicze twierdzenie arytmetyki głosi, że nowymi potęgami będą różnice dwóch liczb naturalnych. Liczby naturalne z operacją odejmowania nie tworzą grupoidu, natomiast ich najmniejszy nadzbiór o tej właściwości to liczby całkowite. Zatem dla każdego interwału JI istnieje dokładnie jeden rozkład na czynniki pierwsze do potęg całkowitych, a twierdzenie jest prawdziwe.&nbsp;∎

## Twierdzenie 3.

**Dla dwóch różnych liczb pierwszych *p*, *q*, $$p^n\neq q^m$$ dla dowolnych niezerowych liczb całkowitych *n*, *m*.**

Dowód nie wprost. Załóżmy, że jednak istnieją dwie różne liczby pierwsze *p*, *q* oraz dwie liczby całkowite *n*, *m* które spełniają warunek:

$$p^n=q^m$$

Jako że *p* i *q* już są pierwsze, jest to także już rozkład na czynniki pierwsze według zasadniczego twierdzenia arytmetyki.

Jest to także od razu sprzeczność, ponieważ ono głosi, że każda dodatnia liczba całkowita da się przedstawić jako iloczyn liczb pierwszych tylko na jeden sposób, a tutaj mamy dwa różne iloczyny liczb pierwszych przedstawiające tę samą liczbę całkowitą. Nie jest to sprzeczne, jeżeli *n* i *m* oba są zerowe, wtedy rozpatrujemy liczbę 1. To z kolei jednak jest sprzeczne z założeniem, że *n* i *m* oba są niezerowe.&nbsp;∎

**Następstwo.** Dla *p* = 2, *q* = 3, twierdzenie jest prawdziwe dla oktaw i duodecym czystych, czyli dla oktaw i kwint czystych. To oznacza, że nie istnieje „koło” kwintowe z kwint naturalnych 3/2.

## Twierdzenie 4.

**Istnieje bijekcja między zapisem pięcioliniowym a strojem pitagorejskim.**

Rozpatrzmy skalę *C*-dur, w kolejności poszczególnych kwint:

*f*, *c*, *g*, *d*, *a*, *e*, *h*

Jest ona fragmentem ciągu kwint rozpoczynającego się od D:

−3, −2, −1, 0, +1, +2, +3

Te liczby całkowite przedstawiają liczbę kroków kwintowych w tej nieskończonej „spirali” kwintowej; dodatnie są krokami według wskazówek zegara (dodają kwinty), a ujemne na odwrót.

Ale zauważ, że już wiemy przecież, jak ten ciąg przedłużyć. Krzyżyk i bemol są właśnie zdefiniowane tak, że *b*–*f* = *h*–*fis* = kwinta czysta. Dodajemy więc kopię z bemolami i z krzyżykami, przedłużając przez to łańcuch kwint aż do −10 po lewej i +10 po prawej:

*fes*, *ces*, *ges*, *des*, *as*, *es*, *b*, *f*, *c*, *g*, *d*, *a*, *e*, *h*, *fis*, *cis*, *gis*, *dis*, *ais*, *eis*, *his*

−10, −9, −8, −7, −6, −5, −4, −3, −2, −1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9, +10

Podwójne krzyżyki i bemole rozciągną go aż do 17, potrójne – do 24, itd.

*Łańcuch nigdy się nie zamknie i nie stworzy koła kwintowego*, bo to udowodniliśmy w twierdzeniu 3. Zatem jest w obu kierunkach nieskończony, czyli każda nuta pasuje dokładnie do jednej liczby całkowitej, która z kolei odpowiada liczbie kroków kwintowych.&nbsp;∎

**Następstwo.** Każdy ułamek pitagorejski odpowiada dokładnie jednemu interwałowi, w ten sam sposób, jak FJS kojarzy strój pitagorejski z interwałami na pięciolinii.

## Twierdzenie 5.

**Definicja:** *Liczbą-mostem* dla *p* jest liczba o postaci $$2^a\cdot 3^b\cdot p$$ gdzie *p* jest liczbą pierwszą większą niż 3, a *a*, *b* są liczbami całkowitymi.

**Twierdzenie: Dla dowolnej nieskończonej listy liczb-mostów, gdzie dana jest dokładnie jedna dla każdej liczby pierwszej, można przedstawić dowolny interwał JI jako interwał pitagorejski pomnożony przez liczby-mosty do potęg całkowitych.** (Główne twierdzenie FJS)

Używamy indukcji matematycznej.

Niech $$C_p=2^{a_p}\cdot 3^{b_p}\cdot p$$ będzie liczbą-mostem wybraną dla liczby pierwszej *p*, posiadająca określone liczby całkowite *a*<sub>*p*</sub>, *b*<sub>*p*</sub>. Jest to dowolny, ale znany, interwał.

Rozpatrzmy początkowo liczbę-most dla 5: $$C_5=2^{a_5}\cdot 3^{b_5}\cdot 5$$, oraz interwał 5-limitowy ze znanym rozkładem na czynniki pierwsze: $$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$.

$$d=2^{\alpha _2} \cdot 3^{\alpha _3} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 + \alpha_5 a_5 - \alpha_5 a_5} \cdot 3^{\alpha _3 + \alpha_5 b_5 - \alpha_5 b_5} \cdot 5^{\alpha _5}$$

$$d=2^{\alpha _2 - \alpha_5 a_5} \cdot 2^{\alpha _5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5} \cdot 3^{\alpha _5 b_5} \cdot 5^{\alpha _5}$$

$$d=(2^{a_5} \cdot 3^{b_5} \cdot 5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

$$d=(C_5)^{\alpha _5} \cdot 2^{\alpha _2 - \alpha_5 a_5} \cdot 3^{\alpha _3 - \alpha_5 b_5}$$

Jest to niepowtarzalna postać tego interwału jako ułamek pitagorejski (całkowita potęga 2 i 3) pomnożona przez daną liczbę-most dla 5 podniesioną do potęgi całkowitej. Zatem twierdzenie jest prawdziwe dla *p* = 5.

Teraz zakładamy, że jest prawdziwe dla $$\text{p}(n)$$ i dowodzimy, że z tego wynika również prawda dla $$\text{p}(n+1)$$.

Niech *g* będzie interwałem JI o czynnikach aż do $$\text{p}(n+1)$$ włącznie. Zatem można go niepowtarzalnie rozłożyć na czynniki pierwsze aż do tej liczby pierwszej:

$$\displaystyle g=\prod_{i=1}^{n+1} \text{p}(i)^{\alpha _{\text{p}(i)}}$$

Rozłączamy ten iloczyn na dwie części. Niech $$\text{p}(n+1)$$ będzie *q*:

$$\displaystyle g=\prod_{i=1}^n \text{p}(i)^{\alpha _{\text{p}(i)}} \cdot q^{\alpha _q}$$

Dzięki hipotezie indukcyjnej możemy teraz całość po lewej zamienić na liczby-mosty. Niech *x*, *y* będą tutaj określonymi liczbami całkowitymi wynikającymi z tej zamiany aż do $$\text{p}(n)$$.

$$\displaystyle g=(2^x \cdot 3^y \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot q^{\alpha _q}$$

Niech iloczyn tych liczb-mostów będzie γ, czyli:

$$g=2^x \cdot 3^y \cdot \gamma \cdot q^{\alpha _q}$$

Rozpatrzmy teraz znaną liczbę-most dla *q*: $$C_q=2^{a_q}\cdot 3^{b_q}\cdot q$$. Przedstawimy *g* za pomocą niej.

$$g=\gamma \cdot 2^x \cdot 3^y \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x + \alpha _q a_q - \alpha _q a_q} \cdot 3^{y + \alpha _q b_q - \alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot 2^{x - \alpha _q a_q} \cdot 2^{\alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot 3^{\alpha _q b_q} \cdot q^{\alpha _q}$$

$$g=\gamma \cdot (2^{a_q} \cdot 3^{b_q} \cdot q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

$$g=\gamma \cdot (C_q)^{\alpha _q} \cdot 2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q}$$

Zamieniając z powrotem γ i *q*:

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^n (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}) \cdot (C_{\text{p}(n+1)})^{\alpha _{\text{p}(n+1)}}$$

$$g=2^{x - \alpha _q a_q} \cdot 3^{y - \alpha _q b_q} \cdot \prod_{i=3}^{n+1} (C_{\text{p}(i)})^{\alpha _{\text{p}(i)}}$$

Mamy zatem niepowtarzalną postać tego interwału JI z czynnikami aż do $$\text{p}(n+1)$$ wynikającą z czynników do $$\text{p}(n)$$.

Jako że twierdzenie także zostało udowodnione dla $$\text{p}(n)=5$$, jest według indukcji matematycznej również prawdziwe dla wszystkich liczb pierwszych większych niż 3.&nbsp;∎

**Następstwo.** Jako że każdy komat formalny jest liczbą-mostem, dla każdej danej listy komatów formalnych (jeden dla każdej liczby pierwszej) można dowolny ułamek JI przedstawić w tylko jeden sposób jako ułamek pitagorejski pomnożony przez komaty formalne podniesione do potęg całkowitych. Tak właśnie działa FJS.
