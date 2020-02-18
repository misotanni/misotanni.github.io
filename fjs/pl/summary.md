# Podsumowanie FJS

System Funkcyjny Stroju Naturalnego (FJS) jest systemem notacji, który za pomocą dodatkowych symboli zapisuje wszystkie stroje naturalne (JI). Tak, jak również notacja Helmholtza-Ellisa, a także Johnstona, FJS w tym celu używa listy dodatkowych alteracji. Za pomocą deterministycznego procesu, FJS zamienia więc każdy możliwy ułamek JI **jednoznacznie** na interwał (np. 2, 3>, 4<, itd.) z dodatkowymi alteracjami FJS-owymi.

Cele FJS-u są następujące:

- Sprawić, żeby proces zamiany z ułamków JI na notację muzyczną (i na odwrót) był w pełni zautomatyzowany, w przeciwieństwie do ręcznie wybranych alteracji u Helmholtza-Ellisa albo u Johnstona. Nie ma żadnych nieregularnie wymyślonych symboli dla alteracji, ani nieregularnej listy ich wartości. Całość FJS-u można obliczyć na miejscu, zarówno kalkulatorami do tego przeznaczonymi, jak i po prostu licząc w głowie.
- Móc zapisać wszystkie stroje naturalne z nieskończoną precyzją, nie tylko do jakiegoś ustalonego limitu (np. 61-limit dla Helmholtza-Ellisa, albo 31-limit dla Johnstona) albo z maksymalną granicą precyzji (Sagittal).
- Być dużo łatwiejszym w użyciu (zarówno w czytaniu, jak i pisaniu) niż reszta systemów notacji dla strojów naturalnych.
- Pasować do użycia w programach do notacji muzycznej, jako że wszystkie alteracje mogą być automatycznie wygenerowane.

Sercem FJS-u jest **główny algorytm FJS**, który za pomocą **promienia tolerancji** (stałej, której wartość standardowo wynosi 65/63, czyli medianta 33/32 i 32/31) wylicza z dowolnej liczby pierwszej większej niż 3 jej najprostsze przybliżenie, które jest oddalone o mniej niż promień tolerancji, wśród ułamków 3-limitowych (*najprostsze* oznacza, że wartość bezwzględna **przeniesienia kwintowego**, czyli potęgi 3, jest jak najmniejsza). Różnica między nimi wtedy staje się tzw. **komatem formalnym** dla tej liczby pierwszej, zawsze w pierwotnym kierunku, czyli z liczbą pierwszą w liczniku.

Wtedy stroje naturalne zapisuje się następująco:

- Wszystkie interwały 3-limitowe zapisuje się bezpośrednio niezmienionymi interwałami, ponieważ istnieje bijekcja między strojem pitagorejskim a zapisem pięcioliniowym.
- Dla interwałów 5-limitowych oraz wyższych:
	- Każda liczba pierwsza ma dokładnie jeden komat formalny dla każdego promienia tolerancji (jest to wynik głównego algorytmu FJS dla tej liczby pierwszej). Każdy komat formalny ma dwie odpowiadające mu alteracje, otonalną i utonalną.
	- Każdy ułamek począwszy od 5-limitowych można zapisać jednoznacznie jako ułamek 3-limitowy pomnożony przez tzw. liczby mosty podniesione do potęg całkowitych, gdzie każda liczba pierwsza większa od trzech ma dokładnie jedną liczbę most. Liczba most to interwał, który równa się 2 do potęgi całkowitej razy 3 do potęgi całkowitej razy jedna inna liczba pierwsza do potęgi +1.
	- Każdy komat formalny jest liczbą mostem, ponieważ każdy komat formalny jest różnicą między interwałem pierwszym a interwałem 3-limitowym.
	- Zatem każdy ułamek począwszy od 5-limitowych można zapisać jako ułamek 3-limitowy, któremu odpowiada zwykły interwał, pomnożony przez całkowite potęgi komatów formalnych, którym odpowiadają alteracje FJS-owe.

Każdej liczbie pierwszej FJS przypisuje dwie wartości: przeniesienie kwintowe oraz komat formalny. Obie są przydatne, aby FJS w pełni opisać, ale tylko jedna jest potrzebna, żeby drugą obliczyć bez potrzeby użycia głównego algorytmu ani promienia tolerancji (zobacz [opis formalny](rules.html)).

Poniżej znajduje się główny algorytm FJS.

> 1. Dany jest interwał pierwszy, *p*.
> 2. Niech *k* = 0.
> 3. Rozważ interwał złożony z *k* skoków o pitagorejską kwintę, *P*.
> 4. Czy różnica między *p* a *P* jest mniejsza niż promień tolerancji?
> 5. Jeżeli tak: *k* to przeniesienie kwintowe. Zwróć *k*. Koniec.
> 6. Jeżeli nie: weź następne *k* w kolejności z (0, 1, −1, 2, −2, 3, −3, …) i wróć do kroku 3.
>
> W kroku 4 przez „różnicę” rozumiemy **wartość bezwzględną** rozmiaru centowego interwału stworzonego przez takie oktawy *p* i *P*, żeby zminimalizować tę różnicę. Ten proces jest opisany szczegółowo w [intensywnym kursie](crash.html).
