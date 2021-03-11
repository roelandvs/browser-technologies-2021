# Opdracht 2: Breek het web

# Afbeeldingen
![Screenshot 2021-03-11 at 12 30 36](https://user-images.githubusercontent.com/59770136/110781309-0bbad200-8266-11eb-9210-7b8742df35ab.png)

### Feature uitzetten
Om images uit te zetten in Google Chrome is vrij eenvoudig. Het pad binnen de instellingen dat je moet volgen om afbeeldingen uit te zetten is: `Settings` => `Privacy an dsecurity` => `Site settings` => `Images` => `Do not show any images`. Hier kun je ook nog aageven op welke specifieke websites je wel of geen afbeeldingen wil tonen.

### Veroorzaakte problemen
Het niet laden van afbeeldingen kan voor problemen/verwarring zorgen. Zo kunnen afbeeldingen belangrijk zijn voor het ondersteunen wat er in de tekst verteld wordt. Ook kunnen afbeeldingen dienen als achtergrond, en zonder deze achtergrond kan text verdwijnen. Dit kan zelfs zo erg worden dat er helemaal geen content meer zichtbaar is op de pagina.

### Site voorbeelden
Een goed voorbeeld van een site die niet duidelijk is zonder afbeeldingen is [trouw.nl](https://www.trouw.nl/): 

<img width="1819" alt="Screenshot 2021-03-11 at 15 18 41" src="https://user-images.githubusercontent.com/59770136/110803998-0cf8f880-8280-11eb-972d-5e871428f381.png">  

Er zijn op deze pagina meerdere fouten gemaakt. Ten eerste is helemaal niks zichtbaar van sommige artikelen. Dit komt doordat ze witte tekst gebruiken en ook een witte achtergrond hebben, dus als de afbeeldingen niet laden is er niks zichtbaar. Daarnaast maken ze ook geen gebruik van `alt text`. Je weet dus niet wat de afbeelding toont en wat de titel is. Er is momenteel niets zichtbaar.

Hetzelfde geld voor bijvoorbeeld [het Parool](https://www.parool.nl/):

<img width="1819" alt="Screenshot 2021-03-11 at 15 44 14" src="https://user-images.githubusercontent.com/59770136/110804742-bc35cf80-8280-11eb-8043-821aafe5795b.png">

Het kan zelfs zo erg zijn dat er niks zichtbaar is omdat de content bestaat uit afbeeldingen ([Getty Images](https://www.gettyimages.nl/)):

<img width="2386" alt="Screenshot 2021-03-11 at 16 05 42" src="https://user-images.githubusercontent.com/59770136/110808234-14220580-8284-11eb-8dd5-2f072f437c12.png">

### Oorzaak problemen
**Er zijn een aantal mogelijkheden waarom afbeeldingen niet laden:**
- `Het pad naar de img is fout`
- `Het bestandsnaam is incorrect`
- `De website die de afbeeldingen host is down`
- `De server kan niet alles versturen voordat de request time voorbij is`
- `Er kunnen problemen zijn met de database`

### Voorkom problemen
Het meest belangrijke is:
- `gebruik alt tags om content duidelijk te maken`
- `laat de structuur van de site duidelijk zijn`

<br/>





















# Muis / Trackpad
### Gebruiker zonder muis
De mensen die gebruik maken van het navigeren via een keyboard is op te delen in grofweg 4 groepen:
- Gebruikers met motorische problemen, en daardoor geen muis gebruiken
- Gebruikers met zicht problemen en die klikbare elementen niet kunnen zien
- Power users, die het fijner vinden om links te vinden via het keyboard

Het is moeilijk om in te schatten hoe hoog het percentage is van de gebruikers die alleen keyboard gebruiken om te navigeren. Ik heb niet veel cijfers kunnen vinden die hier meer over te zeggen hebben. Het is ook lastig in te schatten aangezien er ook gebruikers die gebruik maken van een trackball, joystick etc. 

Eigenlijk maakt het ook niet uit hoe veel mensen het nou exact zijn en of ze exclusief een keyboard gebruiken. Voor de mensen die gedeeltelijk of compleet gebruik maken van een keyboard om te navigeren moet een site toegankelijk zijn.

### Site voorbeelden
#### Goed
Laat ik beginnen met dat ik redelijk verbaasd was. Sommige sites zijn goed ingesteld op het gebruik van een toetsenbord. Wat ik voornamelijk een fijne feature vond voor de keyboard gebruikers is dit:

<img width="1482" alt="Screenshot 2021-03-11 at 13 24 55" src="https://user-images.githubusercontent.com/59770136/110787232-660b6100-826d-11eb-8a94-77650572772d.png">

De `skip to main content` knop die je krijgt na de eerste tab. Door deze knop bespaar je veel tijd door niet door de hele navigatie te tabben. Dit brengt wel de vraag op: "Waarom heeft niet elke site deze knop". Deze vraag wordt ook gesteld door [Chris Ashton](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/).

Je zou namelijk zeggen dat dit native behavior kan zijn van browsers. Je hebt namelijk al de `<main>` tag of de `role="main"` attribute, dus waarom zou je niet gelijk naar het begin van de main kunnen gaan? 

#### Slecht

##### Hva
Wat opviel bij het testen is dat er op bijna elke site wel links of buttons waren waarbij het niet zichtbaar was als je er `:focus` op hebt. Dit was op meerdere plekken een probleem. Bijvoorbeeld hier op de Hva site: 

<img width="868" alt="Screenshot 2021-03-11 at 13 39 20" src="https://user-images.githubusercontent.com/59770136/110789113-cdc2ab80-826f-11eb-9fb0-c0bab5a25fa9.png">

Maar de Hva is zeker niet de enige. Het viel ook erg op binnen Spotify.

##### Figma

Een probleem wat mij ook opgevallen was was op de Figma website. Onderaan de pagina heb je een formulier om je aan te melden: 

<img width="868" alt="Screenshot 2021-03-11 at 13 46 18" src="https://user-images.githubusercontent.com/59770136/110789444-2c882500-8270-11eb-9b97-cf5860341230.png">

Zodra je in dit formulier terecht komt zit je vast. Je kon tabben wat je wil maar je blijft binnen dit formulier zitten. Je kon dus niet terug naar de content er boven en ook niet naar de footer er onder meer. Om dus in de footer te komen moest je de pagina refreshen en  `Shift + Tab` gebruiken om de pagina vanaf beneden te bekijken.

##### Trouw

Verder waren popups die het hele scherm overnemen ook een hel: 

<img width="2541" alt="Screenshot 2021-03-11 at 14 02 29" src="https://user-images.githubusercontent.com/59770136/110791590-ade0b700-8272-11eb-8cca-2a78bf6fe19c.png">

Zulke popups zijn erg vervelend. Het kruisje rechtsboven is vrijwel niet te vinden via tab. Je tabs namelijk rustig door de gehele site achter de popup. Daarbuiten heeft het kruisje geen `:focus` waardoor je ook nniet weet wanneer je op het kruisje zit. Ik heb hem niet weg gekregen.

### Veroorzaakte problemen
Een aantal problemen heb ik al behandeld onder het kopje 'Site voorbeelden', Maar ik zal ze samengevat hier nog even behandelen.

De voornaamste problemen die ik tegenkwam waren:
- `Geen focus zichtbaarheid op links of buttons`
- `Geen browser support voor navigate to main`
- `Popups`
- `Vast komen te zitten in formulier`

Ook las ik dat dropdown menu's een probleem kunnen zijn, maar dit heb ik persoonlijk niet ervaren.

### Oorzaak problemen
De oorzaak van naviagtie problemen komt voornamelijk doordat developers native behavior van de browser omzetten naar hun eigen behavior. Zoals het aanpassen van de`:focus`. Ook weet je vaak niet waar je bent doordat links buiten de `zichtbare elementen` vallen. Developers plaatsen soms elementen buiten hun parent met `overflow: hidden` omdat ze niet willen dat het zichtbaar is op dat moment. Echter kom je nog steeds bij deze elementen door het gebruik van tab.

Verder kwam [Chris Ashton](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/) in zijn artikel ook het probleem tegen dat sommige links (`<a>`) geen `href` attributre bevatten. Als dit het geval is kun je er niet op focussen. Bij popups is dit voornamelijk een groot probleem.

### Voorkom problemen
**De belangrijkste is:**
- `disable niet de native behavior zonder een vervanging`

Er zijn te veel elementen zonder er focus zichbaarheid. dit maakt het gebruik zonder muis erg lastig.

**Verder is belangrijk:**
- `schrijf semantische code`

Vergeet bijvoorbeeld geen `href` in een link. Als je wil dat hij nergens heen gaat moet je er een # in stoppen.

**Ten slotte:**
- `voeg een skip to main content deel toe`
