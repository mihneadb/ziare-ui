var data = [
    {"Publicatie":"Practic in bucatarie","Categorie":"Culinar","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":201,"Total Vanzari":149.368,"Total difuzat":149.538},
    {"Publicatie":"Click","Categorie":"Tabloide","Periodicitate":"Cotidian","Tip":"Platit","Arie":"National","Tiraj brut":155.735,"Total Vanzari":125.634,"Total difuzat":125.981},
    {"Publicatie":"Libertatea","Categorie":"Tabloide","Periodicitate":"Cotidian","Tip":"Platit","Arie":"National","Tiraj brut":130.236,"Total Vanzari":86.299,"Total difuzat":86.668},
    {"Publicatie":"Click! de Duminica","Categorie":"Publicatie de weekend","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":90.45,"Total Vanzari":74.139,"Total difuzat":74.484},
    {"Publicatie":"Libertatea pentru femei","Categorie":"Femei","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":87.626,"Total Vanzari":58.864,"Total difuzat":59.294},
    {"Publicatie":"TVMania","Categorie":"Ghid TV","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":76.654,"Total Vanzari":51.232,"Total difuzat":51.674},
    {"Publicatie":"Femeia de azi","Categorie":"Femei","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":76.028,"Total Vanzari":45.923,"Total difuzat":46.07},
    {"Publicatie":"Click! pentru femei","Categorie":"Femei","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":62.208,"Total Vanzari":44.521,"Total difuzat":44.769},
    {"Publicatie":"Click pofta buna!","Categorie":"Culinar","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":56.167,"Total Vanzari":42.144,"Total difuzat":42.401},
    {"Publicatie":"Libertatea - Editia de duminica","Categorie":"Publicatie de weekend","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":56.563,"Total Vanzari":40.174,"Total difuzat":40.453},
    {"Publicatie":"TV Satelit","Categorie":"Ghid TV","Periodicitate":"Bilunar","Tip":"Platit","Arie":"National","Tiraj brut":51.083,"Total Vanzari":32.811,"Total difuzat":33.251},
    {"Publicatie":"Practic Carticica Practica","Categorie":"Culinar","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":51,"Total Vanzari":31.718,"Total difuzat":31.865},
    {"Publicatie":"Libertatea pentru femei - Retete","Categorie":"Culinar","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":52.962,"Total Vanzari":30.682,"Total difuzat":31.135},
    {"Publicatie":"Gazeta Sporturilor","Categorie":"Sport","Periodicitate":"Cotidian","Tip":"Platit","Arie":"National","Tiraj brut":43.612,"Total Vanzari":26.277,"Total difuzat":27.203},
    {"Publicatie":"Practic - Idei pentru casa, gradina si apartament","Categorie":"Home&Deco","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":40,"Total Vanzari":26.154,"Total difuzat":26.287},
    {"Publicatie":"Sanatatea de azi","Categorie":"Sanatate & ingrijire personala","Periodicitate":"Lunar","Tip":"Platit","Arie":"National","Tiraj brut":37.333,"Total Vanzari":25.525,"Total difuzat":25.688},
    {"Publicatie":"Taifasuri","Categorie":"Interes General","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":32.231,"Total Vanzari":22.738,"Total difuzat":22.738},
    {"Publicatie":"Ziarul Lumina","Categorie":"Religie","Periodicitate":"Cotidian","Tip":"Platit","Arie":"National","Tiraj brut":22.459,"Total Vanzari":22.189,"Total difuzat":22.459},
    {"Publicatie":"Lumina de duminica","Categorie":"Religie","Periodicitate":"Saptamanal","Tip":"Platit","Arie":"National","Tiraj brut":22.223,"Total Vanzari":21.983,"Total difuzat":22.223},
    {"Publicatie":"Romania Libera","Categorie":"Cotidian generalist national","Periodicitate":"Cotidian","Tip":"Platit","Arie":"National","Tiraj brut":28.779,"Total Vanzari":21.83,"Total difuzat":22.146},
    {"Publicatie":"Ioana","Categorie":"Femei","Periodicitate":"Bilunar","Tip":"Platit","Arie":"National","Tiraj brut":37,"Total Vanzari":20.922,"Total difuzat":21.105}
];

var item_template =Handlebars.compile($("#item-template").html());

var $listView = $("#list-view");

data.forEach(function (item) {
    console.log(item);
    var html = item_template({
        title: item["Publicatie"]
    });
    $listView.append(html);
});