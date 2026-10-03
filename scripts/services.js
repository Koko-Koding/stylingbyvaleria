'use strict';

angular.module('myApp')

  .service('services', function() {

    var services1 = [
      {
        name: 'Personal Styling',
        icon: 'assets/images/icon01.png',
        description: 'Binnenkort een speciale gelegenheid, zoals een diner, bruiloft, feestje, sollicitatie of een fotoshoot? Wij helpen je graag',
        description_hide: 'en shoppen voor jou de perfecte outfit. Een stylist nodig bij een evenement of in een kledingwinkel? Wij helpen jouw klanten graag met een stijladvies.'
      },
      {
        name: 'Personal Shopping',
        icon: 'assets/images/icon02.png',
        description: 'Op zoek naar een paar geweldige outfits voor het nieuwe seizoen? Gebrek aan tijd, zin of inspiratie om te shoppen? Lastig om',
        description_hide: 'de juiste keuzes te maken tijdens het winkelen? Wij gaan voor je aan de slag. Samen bespreken wij of we met elkaar of alleen voor jou gaan shoppen.'
      },
      {
        name: 'Garderobe Planning',
        icon: 'assets/images/icon03.png',
        description: 'Wanneer je het lastig vindt om te combineren, er kledingstukken in de kast hangen die je opnieuw wilt ontdekken, of je weet niet meer',
        description_hide: 'wat wel en niet leuk is? Wij kunnen je helpen. Het resultaat van een garderobe planning is een gestructureerde garderobe, nieuwe combinaties, een shoppinglist en een stijladvies.'
      }
    ]

    var services2 = [
      {
        name: 'Workshops',
        icon: 'assets/images/icon04.png',
        description: 'Wat doe ik aan op Casual Friday? Wat zijn de trends en modemusthaves van dit seizoen? Wat doe ik met mijn miskoop? Welke kleding ',
        description_hide: 'past bij mijn figuur? Een aantal voorbeelden van onderwerpen waar wij een workshop voor aanbieden. Workshops worden naar wens vorm gegeven, of dit nu voor een bedrijf, een vrijgezellenfeest of een gezellige avond met vriendinnen is.'
      },
      {
        name: 'Men\'s Styling',
        icon: 'assets/images/icon05.png',
        description: 'Mode speelt een steeds grotere rol in het dagelijkse leven van de man. Een goed verzorgd uiterlijk is een belangrijk',
        description_hide: ' onderdeel van je presentatie en de juiste kleding draagt hier aan bij. Daarom bieden wij ook verschillende services aan op het gebied van styling voor mannen. Geen tijd of zin om te winkelen? Geen inspiratie voor nieuwe outfits? Op zoek naar een andere stijl? Of altijd aan het twijfelen wat je aan doet op Casual Friday? Wij helpen je graag.'
      },
      {
        name: 'Cadeaubon',
        icon: 'assets/images/icon06.png',
        description: 'Wil jij iemand verrassen met een leuk en origineel cadeau? Geef een cadeaubon van Styling by Valeria. Samen kunnen',
        description_hide: 'wij de invulling van de cadeaubon bespreken.'

      }
    ];

    var totalServices = [services1, services2];

    this.getServices = function(){
        return totalServices;
    };
  })
