# webbtjanst
Den andra delen av uppgiften var att nu konsumera det API jag tidigare skapat
för att dels läsa ut värden mot en databas men också möjligheten att lägga till värden
via ett enklare formulär.

![Alt Text](http://studenter.miun.se/~joem1800/writeable/Moment5/getdata.jpg)

Den första funktionen jag bygger i min index.html är den som kommer hämta data från mitt api, se ovan.
Med "FETCH" hämtar jag det PHP-script innehållande denna funktion, lägger till felmeddelanden utifall
datan inte hämtas som den ska och med hjälp av JSON konverterar jag datan till en array som jag sedan smalnar
av och passerar som argument till nästa funktion för att läsa ut datan till skärmen, se nedan.

![Alt Text](http://studenter.miun.se/~joem1800/writeable/Moment5/display.jpg)

Nu har jag samtliga värden redan passerade från föregående funktion så inledningsvis staterar
jag att den variabel som jag har kopplat till området i HTML-filen där datan ska skrivas ut (courselistEl),
ska vara tom från början.
Sedan med en forEach-loop säger jag åt programmet att skriva ut datan med lämpliga div-klasser, rubriker osv 
och att göra detta en gång för varje värde i arrayen, vilket resulterar i att mina värden skrivs ut enligt 
den struktur jag statuerat. 

Slutligen är det dags att skapa min funktion för att lägga till värden till min databas, se nedan.

![Alt Text](http://studenter.miun.se/~joem1800/writeable/Moment5/create.jpg)

Först skapar jag strukturen av de värden som ska in som om jag gjorde en vanlig SQL-fråga innehållande
de fyra värden som ska matas in. Dessa fyra värden är kopplade till mitt formulär med ett ID så att när
formuläret fylls i vet programmet att den inmatade datan ska kopplas till respektive värde innan publicering
till databasen. Dessa värden lagrar jag sedan i en egen variabeln med konverterar dessa med JSON.stringify till en
JSON-sträng. 
Sen med FETCH precis som i föregående moment hämtar jag rätt PHP-script innehållande själva funktionen från mitt API. 
Jag statuerar att metoden är av typen POST och kopplar sen min variabel för de samlade JSON-värdena så att dessa matas
in till databasen. Jag lägger även in funktionen för att hämta data i denna funktion så att hemsidan automatiskt laddas
om när värdena har lagts till databasen så att den nya kursinformationen direkt dyker upp utan att behöva uppdatera sidan. 
