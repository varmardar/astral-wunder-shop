const PRODUCTS = [
  {
    "id": "aluhut",
    "name": "Aluhut „Signal Shield Pro“",
    "price": 49.99,
    "img": "images/aluhut.svg",
    "desc": "Aus 7-fach gefaltetem Bio-Aluminium, in Vollmondnächten von Hand geknittert. Blockiert 5G, 6G und die Gedanken deiner Schwiegermutter. Getestet von meinem Cousin, der seitdem nie wieder Werbung gesehen hat (er hat auch keinen Fernseher mehr).",
    "stars": 7,
    "cat": "schutz"
  },
  {
    "id": "kristall",
    "name": "Quanten-WLAN-Kristall",
    "price": 89.0,
    "img": "images/kristall.svg",
    "desc": "Dieser Bergkristall wurde 3 Wochen lang neben einem Router gelagert und hat dabei die Frequenz des Internets absorbiert. Einfach unters Kopfkissen legen und du träumst in 4K. Ersetzt angeblich auch dein Glasfaserkabel – frag aber nicht deinen Provider.",
    "stars": 5,
    "cat": "kosmos"
  },
  {
    "id": "mondwasser",
    "name": "Mondwasser „Luna Classic“ 0,5 l",
    "price": 34.5,
    "img": "images/mondwasser.svg",
    "desc": "Gewöhnliches Leitungswasser, das wir ehrfürchtig in eine Richtung gehalten haben, in der wir den Mond vermuteten. Die Wassermoleküle erinnern sich dank Wassergedächtnis an alles – auch an das, was du letzten Sommer getan hast.",
    "stars": 5,
    "cat": "heilung"
  },
  {
    "id": "reptiloid",
    "name": "Reptiloiden-Detektor 3000",
    "price": 199.99,
    "img": "images/reptiloid.svg",
    "desc": "Piept immer, wenn sich ein Echsenmensch im Raum befindet. Piept außerdem, wenn die Batterie fast leer ist. Wir können den Unterschied auch nicht hören. Lieferung erfolgt in einer neutralen Box, damit DIE es nicht merken.",
    "stars": 7,
    "cat": "wahrheit"
  },
  {
    "id": "pyramide",
    "name": "Pyramiden-Energie-Mütze",
    "price": 59.0,
    "img": "images/pyramide.svg",
    "desc": "Exakte Nachbildung der Cheops-Pyramide im Maßstab 1:9000 zum Aufsetzen. Bündelt kosmische Energie direkt ins Stirnchakra. Nebenwirkungen: plötzliches Wissen über Atlantis, Verlangen nach Falafel.",
    "stars": 5,
    "cat": "kosmos"
  },
  {
    "id": "erdstrahlen",
    "name": "Erdstrahlen-Abwehrteppich",
    "price": 129.0,
    "img": "images/erdstrahlen.svg",
    "desc": "Gewebt aus den Haaren von 12 schweigenden Lamas aus Peru. Lenkt Erdstrahlen, Wasseradern und unangenehme Montage zuverlässig in die Wohnung des Nachbarn um. Waschbar bei 33,3 °C (heilige Temperatur!).",
    "stars": 5,
    "cat": "schutz"
  },
  {
    "id": "chakra",
    "name": "Chakra-USB-Stick 7 GB",
    "price": 77.77,
    "img": "images/chakra.svg",
    "desc": "Jedes Gigabyte ist einem Chakra geweiht. Einfach einstecken und dein Laptop ist endlich spirituell ausgeglichen. Achtung: Windows erkennt den Stick nicht, weil es noch nicht erleuchtet ist.",
    "stars": 7,
    "cat": "technik"
  },
  {
    "id": "chemtrail",
    "name": "Chemtrail-Filter-Räucherstäbchen",
    "price": 19.99,
    "img": "images/chemtrail.svg",
    "desc": "Duftrichtung „Ungesehener Himmel“. Der Rauch steigt auf und neutralisiert alle Kondensstreifen im Umkreis von 4 km – sofern du nicht hinschaust. Mit Geheimzutat (Lavendel).",
    "stars": 5,
    "cat": "schutz"
  },
  {
    "id": "flacherde",
    "name": "Flache-Erde-Globus (Scheibe)",
    "price": 64.0,
    "img": "images/flacherde.svg",
    "desc": "Endlich ein ehrlicher Globus! Wird flach geliefert, ganz ohne die Lügen der Kugel-Lobby. Mit Eiswand-Rand und Warnschild „Ab hier nur noch Pinguine“.",
    "stars": 5,
    "cat": "wahrheit"
  },
  {
    "id": "zirbeldruese",
    "name": "Zirbeldrüsen-Entkalker",
    "price": 44.44,
    "img": "images/zirbeldruese.svg",
    "desc": "Entkalkt dein drittes Auge wie eine Kaffeemaschine. Danach siehst du Auren, Geister und die versteckten Gebühren in deinem Handyvertrag. Nicht zur Anwendung bei echten Kaffeemaschinen.",
    "stars": 7,
    "cat": "heilung"
  },
  {
    "id": "vibes",
    "name": "Positive Vibes in der Dose",
    "price": 9.99,
    "img": "images/vibes.svg",
    "desc": "Eine luftdicht verschlossene Dose voller guter Schwingungen, abgefüllt auf einem Festival 2019. Öffnen nur im Notfall – nach dem Öffnen verfliegen die Vibes in ca. 0,3 Sekunden.",
    "stars": 5,
    "cat": "heilung"
  },
  {
    "id": "horoskop",
    "name": "Personalisiertes Quanten-Horoskop",
    "price": 29.0,
    "img": "images/horoskop.svg",
    "desc": "Unser KI-Schamane berechnet dein Schicksal aus Sternzeichen, Lieblingspizza und Akkustand. Bisherige Trefferquote: 100 % (Wir haben nur die Treffer gezählt).",
    "stars": 5,
    "cat": "kosmos"
  },
  {
    "id": "einhorn",
    "name": "Einhorn-Tränen-Serum 10 ml",
    "price": 149.0,
    "img": "images/einhorn.svg",
    "desc": "Gesammelt von einem Einhorn, als es zum ersten Mal die Preise in München gesehen hat. Eine Anwendung pro Tag lässt Falten in eine andere Zeitlinie verschwinden. Vegan, da das Einhorn freiwillig geweint hat.",
    "stars": 7,
    "cat": "heilung"
  },
  {
    "id": "atlantis",
    "name": "Atlantis-Grundstück (1 m², unter Wasser)",
    "price": 999.0,
    "img": "images/atlantis.svg",
    "desc": "Sichere dir jetzt Bauland im legendären Atlantis, bevor es wieder auftaucht und die Preise explodieren. Besichtigung nur mit Schnorchel. Grundbucheintrag erfolgt im Akasha-Archiv.",
    "stars": 5,
    "cat": "wahrheit"
  },
  {
    "id": "handystrahlung",
    "name": "Handy-Strahlen-Aufkleber „Karma Patch“",
    "price": 14.99,
    "img": "images/handystrahlung.svg",
    "desc": "Hinten aufs Handy kleben und die Strahlung kehrt um. Statt dich zu verstrahlen, strahlt das Handy jetzt nur noch Liebe aus. Funktioniert auch mit Nokia 3310 (die waren ja schon immer erleuchtet).",
    "stars": 5,
    "cat": "schutz"
  },
  {
    "id": "zeitreise",
    "name": "Zeitreise-Sanduhr „Gestern 2.0“",
    "price": 88.88,
    "img": "images/zeitreise.svg",
    "desc": "Einmal umdrehen und du reist 60 Minuten in die Zukunft. Langsam. In Echtzeit. Klingt unspektakulär, ist aber durch die Quantenphysik zu 100 % belegt.",
    "stars": 5,
    "cat": "kosmos"
  },
  {
    "id": "ufo",
    "name": "UFO-Lockpfeife",
    "price": 24.0,
    "img": "images/ufo.svg",
    "desc": "Spielt die geheime Melodie, die Außerirdische anlockt (Frequenz: 432 Hz plus Rückwärts-Schlager). Bisher sind nur Nachbarshunde gekommen. Die sind aber vielleicht getarnt.",
    "stars": 7,
    "cat": "kosmos"
  },
  {
    "id": "schwingungsbrot",
    "name": "Schwingungs-Dinkelbrot",
    "price": 12.5,
    "img": "images/schwingungsbrot.svg",
    "desc": "Gebacken in einem Ofen, der rechtsdrehend aufgestellt wurde. Jede Scheibe wurde vom Bäcker persönlich angeschwiegen. Hebt deine Frequenz und senkt nebenbei deinen Kontostand.",
    "stars": 5,
    "cat": "heilung"
  },
  {
    "id": "bermuda",
    "name": "Bermuda-Dreieck-Socken",
    "price": 19.33,
    "img": "images/bermuda.svg",
    "desc": "Endlich weißt du, wohin die einzelnen Socken aus der Waschmaschine verschwinden: genau hierher. Im Doppelpack, wobei ein Socken nach dem ersten Waschen in eine andere Dimension wandert.",
    "stars": 5,
    "cat": "wahrheit"
  },
  {
    "id": "matrix",
    "name": "Matrix-Ausstiegspille (rot)",
    "price": 66.6,
    "img": "images/matrix.svg",
    "desc": "Wach auf aus der Simulation! Besteht aus 100 % reinem Traubenzucker und Entschlossenheit. Die blaue Pille ist ausverkauft, weil sie alle anderen genommen haben.",
    "stars": 5,
    "cat": "wahrheit"
  },
  {
    "id": "mondlandung",
    "name": "Mondlandungs-Studiokulisse (Miniatur)",
    "price": 299.0,
    "img": "images/mondlandung.svg",
    "desc": "Eine originalgetreue Nachbildung des Hollywood-Studios, in dem SIE es angeblich gedreht haben. Inklusive Spielzeug-Astronaut und Wackel-Flagge. Nicht von der NASA lizenziert (sie streiten alles ab).",
    "stars": 7,
    "cat": "wahrheit"
  },
  {
    "id": "aura",
    "name": "Aura-Weichspüler „Regenbogen-Frisch“",
    "price": 27.77,
    "img": "images/aura.svg",
    "desc": "Wäscht deine Aura bei 30 Grad flauschig weich. Entfernt hartnäckige Flecken wie Neid, Montagsmüdigkeit und schlechte Ex-Energie. Bitte nicht mit der normalen Wäsche mischen.",
    "stars": 5,
    "cat": "heilung"
  },
  {
    "id": "drittauge",
    "name": "Drittes-Auge-Brille",
    "price": 39.9,
    "img": "images/drittauge.svg",
    "desc": "Eine Brille mit drei Gläsern, das dritte für deine Stirn. Endlich ist die spirituelle Sicht 20/20/20. Optiker hassen diesen Trick, und wir verstehen auch warum.",
    "stars": 5,
    "cat": "technik"
  },
  {
    "id": "vollmondakku",
    "name": "Vollmond-Powerbank",
    "price": 59.95,
    "img": "images/vollmondakku.svg",
    "desc": "Lädt sich ausschließlich bei Vollmond auf, also etwa 12 Mal im Jahr. Dafür ist der Strom zu 100 % lunar und mondzertifiziert. Bei Wolken erfolgt die Ladung durch reinen Glauben.",
    "stars": 5,
    "cat": "technik"
  }
];
