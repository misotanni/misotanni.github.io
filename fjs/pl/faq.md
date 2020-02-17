# Często zadawane pytania

<style>h2 { font-weight: normal; font-size: 100%; }</style>

## Czy FJS się nadaje do zapisu utworów w temperacjach równomiernych?

Krótka odpowiedź brzmi: nie.

Stroje naturalne – a przez to i FJS – oparte są na prostocie, którą rządzą się prawa manipulacji ułamkami. Znajomości matematyki wyższej nie potrzeba, żeby zrozumieć teorię strojów naturalnych. Niczego poza programem gimnazjum – żadnych logarytmów, pierwiastków ani, nie daj Boże, całek. (Logarytmy są tylko przydatne w liczeniu centów, co samo w sobie nie jest częścią systemu, tylko wygodnym dodatkiem). Większość możesz obliczyć w głowie, a resztę powierzyć swojemu kalkulatorowi z czterema działaniami – nie zauważysz nawet na nim przycisku pierwiastka kwadratowego.

Całkiem inną sprawą jest temperacja równomierna, oparta na równym podziale (najczęściej) oktawy. Ale ostrożnie z uogólnianiem: 1200¢ / 12 = 100¢ może ci się wydawać aż za proste, ale pamiętaj, że centy nie są bezpośrednim przedstawieniem prawdziwych proporcji między wysokościami dźwięków. Większość z nas więcej teorii nie potrzebuje, ale jak tylko pojawia się potrzeba zamienienia tych ładnych, prostych wartości centowych na częstotliwości, musisz wszystko przepuścić przez funkcję wykładniczą, która zwróci wartości niewymierne dla (prawie) każdej wymiernej danej. To nie wspominając, że czysty, harmonijny dla ucha (z definicji) dźwięk kwinty czystej w stroju naturalnym (3/2) – podstawa całej harmonii nowożytnej – ma niewymierną wartość 701.95500086…¢. Temperacja równomierna zaradza temu, przybliżając tę wartość w sposób mniej lub bardziej surowy. (Nie mówię, że temperacje równomierne są złe, tylko że wmieszanie ich w strukturę JI-ową doprowadziłoby do niewyobrażalnego chaosu).

Dlatego nie uważam, żeby EDO potrzebowało FJS-u. *n*-EDO dla małego *n* można zapisać w całości bez żadnych kompromisów na najzwyklejszej pięciolinii, pod warunkiem, że i wysokości, i alteracje są dobrze zdefiniowane. Dla trochę większego *n* zdefiniuj parę nowych alteracji; przy *n* w okolicy setek – albo dla różnych wartości *n* naraz – [posłuż się](http://musictheory.zentral.zone/huntsystem1.html) pracą [innych](http://sagittal.org/). Albo wymyśl nową notację muzyczną…

Tak czy inaczej, w końcu przekonasz się, że FJS wcale by ci nie pomógł… Chyba że prosisz się o frankenstrój.

## A gdzie tabela przeniesień i komatów formalnych?

Nie potrzebujesz tabeli – od tego masz [kalkulator](calc.html).

## Czemu 3/2 zostało wybrane jako interwał domyślny, nie np. 5/4?

Na ten temat wypowiedziałem się na stronie [porównania](compare.html).

## Dlaczego promień tolerancji wynosi akurat 65/63?

Wyjaśnienie ogólnej motywacji umieściłem na końcu [kursu intensywnego](crash.html): chodziło mi o liczbę mieszczącą się pomiędzy 33/32 a 32/31. Wybór dokładnie liczby 65/63 pochodzi stąd, że jest to medianta tych dwóch liczb, a medianta dwóch ułamków jest najprostszą liczbą znajdującą się między nimi. Przez długi czas promieniem tolerancji była jednak nie ich medianta, a średnia geometryczna, czyli pierwiastek kwadratowy z 33/31. Kite Giedraitis, autor [notacji kolorów](http://tallkite.com/), wskazał mi prostszą możliwość, którą jest medianta, za co jestem mu wdzięczny. Różnica niczego nie psuje, zresztą jest tak mała, że niezauważalna. Najmniejsza liczba pierwsza, której postać FJS-owa się przez to zmienia, to 35617 (wcześniej 2&gt;<sup>35617</sup>, teraz 1&lt;<sup>35617</sup>). W centach, wcześniej promień wynosił 54.1**1**868538…¢, a teraz 54.1**0**546743…¢.

Ale nawet średnia geometryczna była lepsza od innych koszmarów, które używałem jako promień tolerancji w jeszcze dalszej przeszłości FJS-u: takie liczby jak 256/243 albo jej pierwiastek kwadratowy… fuj! Oczywiście, każda z nich miała swoje wytłumaczenie, natomiast na chwilę obecną 65/63 wydaje mi się najbardziej racjonalnym wyborem (nieprzetłumaczalna gra słów; ang. „rational” oznacza zarówno „wymierny”, jak i „racjonalny”).

## Skąd tyle zachodu, skoro mogę wszystkie wysokości zdefiniować na początku partytury?

Owszem, możesz, ale przez to utracisz parę dogodności:

- możliwość modulacji do dowolnej „tonacji”, kiedy tylko zechcesz, bez potrzeby zawiłych adnotacji albo zmiany przypisań nut do wysokości;
- uniwersalnego podejście, dzięki któremu mała liczba dodatkowych symboli daje ci możliwość wykorzystywania tego samego systemu do *dowolnej części* JI, a co z tego wynika – możliwość pogłębienia intuicji FJS-owej i JI-owej, łącznie ze skrótami myślowymi;
- zachowanie arytmetyki interwałów – dodawanie działa tak, jak powinno, co nie jest pewne przy chaotycznym przydzieleniu wysokości wszerz dostępnej przestrzeni na papierze;
- zanurzenie w systemie – u innych ułamki zamienia się na nuty tylko po to, żeby w ogóle móc je zapisać, natomiast całe myślenie wykonuje się drogą okrężną (od nut do ułamków i z powrotem), kiedy w FJS-ie można działać już na nutach, co dużo ułatwia i przyspiesza – to tak, jakbyś dodawał dwie liczby w systemie dwójkowym, zamiast najpierw je przeliczyć na dziesiętny, wtedy dodać, a potem wynik znowu przekonwertować na dwójkowy;
- szybkie czytanie a vista różnych partytur.

Jeśli nie przekonują Cię te atuty, być może FJS nie pasuje do twoich potrzeb. Proponuję jednak, byś spróbował go użyć.

## Co to są te „stroje naturalne”, na których ci tak zależy? Czy to ma coś wspólnego z ruchem New Age?

Nie.

Stroje naturalne są matematyką, a także teorią dźwięku bazującą na jego dających się udowodnić właściwościach. Jest to także gatunek muzyki wykorzystujący tę teorię jako paletę chromatyczną kompozycji muzycznej, w przeciwieństwie do np. równomiernego podziału oktawy. FJS jest formalnym systemem ułatwiającym intuicyjne zrozumienie tej teorii strojów naturalnych.

New Age za to nie jest ani nauką, ani teorią. Zainteresowani powinni zaczytać się w takie „nauki” i „teorie” jak [ten oto](https://attunedvibrations.com/432hz/) alternatywny strój, który jest „matematycznie” „zgodny” z „wibracją wszechświata”… a może lepiej nie.
