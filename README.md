# Vstupní úkol 

Vytvořit stránku s jednoduchou sekcí - přehled lektorů - dle zadaného designu. 

## Poznámky ke zpracování:

* Pokud by ses na čemokliv zasekla, dej mi určitě vědět. Účelem úkolu je primárně ověřit, jak se nám bude efektivně spolupracovat. Až v druhé řadě si chci ověřit, jestli jseš nový Dan Abramov :).
* Toto repo by mělo být připraveno tak, aby stačilo si ho stáhnout z gitu, nainstalovat balíčky (`yarn` nebo `npm i`) a spustit (`yarn dev` nebo `npm run dev`).
* Design je dostupný na `zpl.io/VO4doXr` - v zeplinu si budeš muset vytvořit účet a pak tě musím pozvat ke spolupráci (napiš mi prosím, na který e-mail ses v zeplinu zaregistrovala).
* Jakmile bude hotovo, pushnout v samostatné branchi (např. `inteview-task`) do tohoto repozitáře. Pak mi napiš abych si udělal codereveiw.  
* Data pro lektory - je nutné si je vyžádat pomocí API callu z adresy `/api/lecturers` (doporučuju využít axios).

### Preferované npm packages

Tyto balíčky ber jako doporučené, máš jinak volnou ruku ohledně využitých technologií :)

Preference:
* Axios (Dokumentace - https://github.com/axios/axios)
* Styled-components (již znáš :)
* Lodash/Fp (nemusí být ani potřeba)

### Bonusové úkoly (pouze dobrovolné)
* Responzivita (není v návrhu designu, proto lze responzivní verzi zpracovat libovolně)
* Zobrazení všech lektorů - při kliknutí na tlačítko pod lektory by se seznam rozbalil a zobrazilo se dalších 8 lektorů (tj. 16). Po kliknutí dalších 8 lektorů (tj. 24 celkem) a po polsedním kliknutí zbývající lektoři (28 lektorů).
* TypeScript - natypovat props některých components :)
