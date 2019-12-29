# lo fy jy sy terta'a seljmaji

ni'o la fancu ke curve ciste ku to no'u fy jy sy toi cu snici'e te pi'o lo nu sinxa ro cuvyto'aci'e to no'u cy ty toi kei se pi'o lo nu tcena lo fadni zgisnici'e
.i lo snici'e pe la xelmxolts elis ge'u e lo snici'e pe la ben djonston cu jai tai jmina fai fy jy sy fi lo zgisnici'e fe lo'i togystika poi cnino
.i fy jy sy jai ve pruce lo cy ty frinu lo **pa mei po'o** togykuplei to ne mu'u lo pavyto'aku'e a lo relto'aku'e toi ge'u e lo se jmina noi togystika gi'e se steci tu'a fy jy sy

ni'o lo te zukte be tu'a fy jy sy zo'u tu'e

- .i gasnu lo nu lo pruce be lo frinu bei lo zgika'usni be'o soi vo'e vo'i cu mulno zmiku je pavysmu .i se ku'i xy e bu e by jy cu jai cunso cuxna lo togystika .i no cizra cu sinxa lo togystika .i je no liste lo porsi poi jai se xusra ku'o be ty .i pi ro boi fy jy sy cu jai cumki fai lo nu kanji ri lo kunti se pi'o ge lo kajytci gi lo su'u menli kanji
- .i kakne lo ka sinxa lo cuvyto'aci'e be li ci'i gi'e cimni lo ka satci kei gi'e nai sinxa fi'o se cuvyto'aci'e fa'u se satci lo stodi to ne mu'u li xa pa pe xy e bu ge'u e li ci pa pe by jy ge'u fa'u lo se steci pe la sagitl toi
- .i jai frili fai lo nu pilno fi ge lo nu tcidu gi lo nu ciska kei kei se mau lo drata snici'e pe cy ty
- .i mutce lo ka mapti fi lo ka pilno ci'e lo zgifi'i samtci .i ki'u bo jai cumki fai lo nu zmiku zbasu ro togystika

tu'u

ni'o lo jicmu be fy jy sy cu me **la fy jy sy ralju algoritma ku** noi pruce lo dilcysle poi zmadu li ci ku'o lo traji be lo ka sampu bei fo da poi simsa be le dilcysle banzu gi'e se pagbu lo cuvyto'aci'e be li ci ku'o se pi'o lo stodi ne me'e zo crulai zi'e noi fadni du li vei ci ci fi'u ci pa ve'o te'a pi mu lo'o no'u lo pilji midju be li ci ci fi'u ci re lo'o jo'u li ci re fi'u ci pa
.i lo se du'u traji lo ka sampu kei cu smudu'i lo se du'u lo nu'a cu'a be lo **togyfancylei** no'u ca'e lo te tenfa be li ci
.i lo dilcu be lo dilcysle togyku'e bei lo simsa cu se vreji me'e lu lo **togyfancyku'e** pe le dilcysle li'u
.i lo farna cu ro roi jinzi
.i va'i lo dilcysle cu ro roi zvati lo se frinu be lo togyfancyku'e be'o e nai lo te frinu be fi ty

ni'o ja'o lo cuvyto'aci'e cu se sinxa ta'i la'e di'e
.i tu'e

- .i ro togyku'e pe lo cuvyto'aci'e be li ci cu srana lo fadni togykuplei ni'i lo nu lo cistrpitagora cu pavysmu mapti lo zgisnici'e
- .i lo togyku'e pe lo cuvyto'aci'e be li za'u ci zo'u tu'e
	- .i ro da poi crulai ro de poi dilcysle su'o di poi togyfancyku'e zo'u de srana pa di ma'i da .i to di te pruce fi la fy jy sy ralju algoritma fe de toi .i ro togyfancyku'e cu srana re togystika poi pa ke'a cu galto'a zi'e poi pa ke'a cu dzito'a
	- .i ro da poi togyku'e pe lo cuvyto'aci'e be li su'o mu zo'u cumki fa lo nu sinxa da fa lo pilji be lo togyku'e pe lo cuvyto'aci'e be li ci ge'u bei lo ripna'u poi se tenfa fi lo mulna'u bei fi'o cmima pa ripna'u poi srana pa dilcysle poi zmadu li ci

tu'u tu'u

fa'o

- All 3-limit intervals are assigned directly to unchanged interval classes, since Pythagorean tuning is bijective to staff notation (cf. the [mathematics page](math.html)).
- For the 5-limit and above, the following procedure is used:
	- Every prime has exactly one formal comma under any given radius of tolerance (it is the output of the FJS master algorithm for that prime). Every formal comma is assigned exactly two accidentals, an otonal one and a utonal one.
	- Every ratio starting from the 5-limit can be uniquely represented as a 3-limit ratio multiplied by so-called bridge numbers raised to integer exponents, with exactly one bridge interval for every prime above 3 (cf. the [mathematics page](math.html)). A bridge number is an interval equal to an integer power of 2 times an integer power of 3 times exactly one other prime raised to +1.
	- Every formal comma is a bridge number, since they all are the difference between a 3-limit ratio and a prime ratio.
	- Therefore every ratio starting from the 5-limit is represented as a 3-limit ratio, which is given an interval class, multiplied by integer powers of formal commas, which are given FJS accidentals. 

For every prime, the FJS master algorithm outputs two values: the fifth shift, and the formal comma. Both are useful to describe the FJS fully, but only one of them must be known for a given prime for both to be uniquely determined without having to use the FJS master algorithm or the radius of tolerance (cf. the [formal description](rules.html)).

Below is the FJS master algorithm.

> 1. Input the desired prime interval in octave-reduced form.
> 2. Let *k* = 0.
> 3. Consider the interval of *k* Pythagorean fifths, in octave-reduced form.
> 4. Is the difference between this interval and the target prime interval less than the radius of tolerance?
> 5. If so: *k* is the fifth shift. Output. End.
> 6. If not: move to the next *k* in sequence: (0, 1, −1, 2, −2, 3, −3, …) and repeat from step 3.
>
> In step 4, the meaning of “difference” is the **absolute value** of the cent size of the difference, chosen in octaves of *p* and *P* to minimize this absolute difference. For details, see the [crash course](crash.html).
