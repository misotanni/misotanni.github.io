---
title: FJS (Funkcyjny System Stroju Naturalnego)
---

> *Zaletą dobrze skonstruowanego języka jest to, że jego uproszczona notacja często staje się źródłem znaczących teorii.*
>
> — Pierre-Simon Laplace

---

<img src="../assets/impression.png" alt="Tak wygląda FJS!">

# Witamy

Witamy na stronie Funkcyjnego Systemu Stroju Naturalnego (FJS)!

## Czym jest FJS?

**Funkcyjny System Stroju Naturalnego** (lub: „Funkcyjny System Naturalny”; ang. „Functional Just System”, w skrócie **FJS**) to nowa, rewolucyjna notacja dla muzyki w strojach naturalnych (ang. „Just Intonation”, w skrócie **JI**). By móc odzwierciedlić dowolny taki strój, rozszerza ona tradycyjny zapis nutowy. Swoim pięknem, pomysłem i prostotą przewyższa istniejące systemy notacji dla JI – w to włączając te Helmholtza-Ellisa i Bena Johnstona – co jest moim dotychczas największym osiągnięciem w dziedzinie muzyki mikrotonalnej.

FJS:

- jest środkiem **wyrażenia** nieokiełznanych ułamków i proporcji występujących w strojach naturalnych za pomocą języka muzycznego, który rozumieją wszyscy muzycy – zapisu nutowego na pięciolinii;
- **wyjątkowo łatwo** nauczyć się go czytać i pisać, a jego prostota przerasta inne notacje JI-owe;
- stanowi **bijekcję**, względnie izomorfizm – czyli odwzorowanie jednoznaczne w obie strony – pomiędzy symbolem a dźwiękiem; każdemu dźwiękowi odpowiada dokładnie jeden zapis, który przedstawia dokładnie ten jeden dźwięk;
- pozwala zapisać **cały bezmiar** strojeń naturalnych – bez narzuconego z góry ograniczenia – przez co można w nim sformułować nie tylko to samo, ale i **więcej** niż to, co umożliwiają inne notacje;
- jest **nieskończenie dokładny**, tzn. każdy dźwięk odzwierciedla jedną liczbę wymierną, a nie liczbę o skończonej ilości cyfr po przecinku;
- jest **wygenerowany proceduralnie** przez algorytm, więc otwiera możliwości zapisu komputerowego, który może być w zupełności zautomatyzowany – niepotrzebne są tabele czy odgórne dane. (Na tej stronie znajdują się przeznaczone do tego kalkulatory).

## Czym jest strojenie naturalne?

Jeżeli zadajesz takie pytanie, dobrej odpowiedzi prawdopodobnie nie znajdziesz tu!

Przeważająca większość współczesnej (a także nowożytnej) muzyki opiera się na **(dwunastostopniowym) stroju równomiernie temperowanym**, czyli takim, który dzieli oktawę na 12 równych interwałów. **Stroje naturalne** są metodami strojenia i wyrażania wysokości dźwięków, które znacząco różnią się od tego ogólnie przyjętej równomiernej temperacji; opierają się one na seriach alikwotowych oraz nieodłącznych właściwościach akustycznych dźwięku. I choć JI nie używa się już w muzyce klasycznej (czy w większości nurtów muzyki współczesnej), nadal ma wagę dla teorii muzyki, ponieważ naturalne stroje były w kręgach dawnych kultur i w średniowieczu codzienną rzeczą, a dalej stanowią podstawę muzyki tradycyjnej poza Europą. Znajdują też swoje miejsce w muzyce awangardowej. (Nie wspominam już o aspekcie estetycznym tak strojonej muzyki).

By zrozumieć i móc sprawnie posługiwać się FJS, potrzebna jest podstawowa znajomość strojów naturalnych (oprócz niezaawansowanych zasad muzyki). **Im większe doświadczenie** ze strojami naturalnymi i muzyką tworzoną w tych strojach posiądziesz, **tym sprawniej i płynniej** będziesz operował FJS-em.

Jeżeli życzysz sobie zapoznać się z podstawową teorią strojenia naturalnego, polecam [„Just Intonation Explained”](https://www.kylegann.com/tuning.html) autorstwa Kyle'a Ganna, twórcy wielu utworów w JI.

## Jak prosty jest FJS?

Te siedem reguł wystarczy, by móc zapisać dowolny utwór strojony naturalnie w FJS-ie. Tak jest – tylko siedem.

1. Wszystkie nuty bez FJS-owych alteracji (czyli liczb) przedstawiają strój pitagorejski – wszystkie oktawy są wielkości 2/1, a kwinty czyste – 3/2.

2. Każdemu interwałowi alikwotowemu związanego z liczbą pierwszą ponad 3 (tj. 5/4, 7/4, 11/8, itd.) przypisujemy dokładnie jedno przybliżenie pitagorejskie za pomocą „głównego algorytmu FJS”, który wynajduje najprostsze przybliżenie, które jest nie dalej niż o narzucony promień tolerancji (ang. „radius of tolerance”) od danego interwału. Alteracji odpowiadającej różnicy pomiędzy jednym a drugim przypisujemy znak chromatyczny, notowany właśnie tą liczbą pierwszą.

3. Dodatnie FJS-owe alteracje odpowiadają skokom od pitagorejskiego przybliżenia do podstawowych interwałów pierwszych, a ujemne – w drugą stronę. Dodatniość nie jest związana z kierunkiem skoku – dodatnie alteracje są zawsze otonalne, a ujemne są utonalne.

4. Alteracje składa się, wymnażając ze sobą osobno otonalne i utonalne skoki – +5 po podwojeniu stanie się więc +25. Otonalne i utonalne części zawsze są zapisywane osobno. Jeżeli iloczyn jest za duży, można zapisać po prostu same czynniki, przedzielając je przecinkami.

5. Wysokości nazywa się zwyczajnymi nazwami nutowymi, po których następują alteracje otonalne w indeksie górnym i utonalne w dolnym.

6. Na pięciolinii przed nutą i zwyczajnym znakiem przygodnym zapisuje się najpierw otonalne alteracje (jeżeli występują), następnie znak minus razem z utonalnymi alteracjami (jeżeli te występują).

7. Cała reszta to dodatkowe udogodnienia.

## Czemu FJS?

Skąd potrzeba na taką notację, jak FJS? Co zmotywowało mnie do zaprojektowania jej? Jaką korzyść muzykom mogłaby przynieść? Po co jej używać, i jak mogłaby pomóc kompozytorom i teoretykom JI? Dlaczego w ogóle by próbować przełożyć JI na zapis nutowy? W końcu ta została stworzona szczególnie na potrzeby muzyki, która opiera się na kole kwintowym i skalach diatonicznych, kiedy muzyka „naturalna” to jedynie ułamki związane ze sobą na piękne, choć muzycznie obce sposoby. Stroje naturalne operują inaczej niż te, do zapisywania których przyzwyczailiśmy się, więc mogłoby się wydawać, że wszelki wysiłek przedstawienia ich w takiej postaci doprowadziłby do czegoś niezgrabnego i nienaturalnego.

Dlaczego więc podjąłem się takiego zadania pomimo tych trudności? To dlatego, że zapis nutowy jest językiem, którym komunikują się muzycy, i pomimo, że nie jest on pozbawiony wad, jest uniwersalny – każdy potrafi się nim porozumiewać. Poza tym jesteśmy z nim obyci jako muzycy. Nie opłaciłoby się przenieść piękny, systematyczny, choć trochę nieintuicyjny język JI na grunt znajomego języka pięcioliniowego? Nie pozwoliłoby to zrozumieć JI intuicyjnie i poszerzyć jego narzędzia po wszystkie działania podejmowane w kręgach muzyki klasycznej – tworzenie, badanie i wykonawstwo?

**Tak – pozwoliłoby.**

FJS to coś więcej niż metoda zapisu dla strojów naturalnych. Nie tylko ułatwiła mi ona zrozumienie na głębszym poziomie tego bezkształtnego rozgardiaszu, którym wydawało mi się na początku JI, ale również uświadomiła mi, że notacja pięcioliniowa jest o wiele bardziej uporządkowana i powiązana z FJS-em, niż mogłem sobie wyobrazić. Zachęcam i Ciebie do odkrycia drzemiącego w FJS-ie piękna i prostoty oraz pojęcia płynnego współdziałania dzięki niemu dwóch inaczej niemożliwych do pogodzenia idei.

Chciałbym porównać FJS do Lożbanu – języka sztucznego, który stworzono, by sprawdzić, jak posługiwanie się logicznym i spójnym językiem wpłynęłoby na procesy myślowe. Uważam, że FJS jest jak Lożban mikrotonalnej muzyki. Tak samo, jak dzięki Lożbanowi zacząłem myśleć przejrzyście i logicznie, FJS może pomóc Tobie myśleć *w* JI, a Twoim kompozycjom, analizom i wykonaniom muzyki naturalnie strojonej zazębiać się gładko z już nabytą wiedzą teoretyczną, gdyż FJS przeplata elementy teorii klasycznej i JI-owej.

## Co teraz?

- Tu znajdziesz [intensywny kurs](crash.html), dzięki któremu nawet z powierzchownym zrozumieniem JI nauczysz się FJS-u w kilkanaście minut.
- Jeżeli nie jesteś pewien, jak dokładnie brzmi dana reguła, odwołaj się do [szczegółów technicznych](rules.html).
- Poznaj [matematyczne zaplecze](math.html) FJS-u. Tam znajdziesz dowód wzajemnej jednoznaczności FJS-u, a także innych ciekawych własności.
- [Tu](compare.html) porównuję FJS z dwoma konkurencyjnymi notacjami: Helmholtza-Ellisa i Bena Johnstona, wykazując, że FJS przewyższa je obie.
- Skorzystaj z [kalkulatorów](calc.html), by pomóc sobie z FJS-owymi obliczeniami. **Porada:** dodaj je od razu do zakładek.
- Przestudiuj wiele [przykładów](examples.html) zastosowania FJS-u.

**Czym FJS będzie dla Ciebie?**
