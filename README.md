# XT2-Challenge-1
De challenge 1 voor het vak XT2 door Nino Jongmans.

## SpaceX dashboard in opdracht van Elon Musk
Deze code is de basis van een online dashboard die gebruikt gaat worden door Elon Musk op zijn reis naar mars. De bedoeling is om belangrijke en nuttige feiten en informatie te geven tijdens de reis. Zo kan de bemanning optimaal gebruik maken van het dashboard.


### Informatie
Er is gebruik gemaakt van meerdere visualisaties. Waarvan er een onderscheid is gemaakt tussen 'feiten' en 'datavisualisaties'. 

De feiten zijn de 4 blokken bovenaan de pagina. Hierin staan een aantal belangrijke eigenschappen die je in een  ruimteschip snel wilt kunnen uitlezen. Denk hierbij dus aan hoelang de reis nog duurt, maar ook aan huidige snelheid, brandstof en water voorraad.

De data visualisaties bestaan uit vier onderdelen. In de verschillende schermen zijn deze gerangschikt op belangrijkste. Ze bestaan uit; brandstof verbruik, afstand tegen de tijd, stroomgebruik en crew informatie.

Brandstof verbruik laat in een percentage zien hoeveel er al verbruikt is. Aangezien je natuurlijk ook moet weten hoeveel er al precies verbruikt is, staat onder de meter een tekst met daarin precies verteld hoe veel er nog over is. Dit is gemaakt door middel van een gauge libary die op het internet gevonden is. In de map dist staan de gegeven JS bestanden. In het mapje js staat nog een bestand 'gauge.js' waarin de waardes van de gauge staan vermeld. Dit is voor de visualisatie van het stroom gebruik ook gebruikt. Dit staat in het zelfde bestand verwerkt.

De afstand tegen de tijd is verwerkt door middel van chartjs. Hier is ook de voorgegeven bestanden verwerkt en in een eigen js bestand de waardes aangepast. Hier is in te zien hoeveel afstand de raket heeft afgelegd over een tijdsduur van maanden en afstand in miljoenen KM's.

Crew informatie is in de eerste drie schermen erg basis, aangezien er niet veel ruimte is. Er is nu zichtbaar hoe zij eruit zien, hoe zij heten en of ze actief of non actief zijn. Op het grootste scherm is er ook een mogelijkheid om de personen op te roepen. Dit kan gebruikt worden als ze bijvoorbeeld non actief zijn, maar wel nodig zijn. Door middel van een CSS-grid is deze informatie opgesteld. Zo gaat ook met het schalen van de site, de informatie mooi mee.