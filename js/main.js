
import {Personne,Lieux,Ingredients,Outil,Panier,Food} from "./modules/classes.mjs";

let fanny=new Personne("Fanny","maison",50,[],[]); //nom,lieu,argent,mainDroite,mainGauche
let maison=new Lieux("maison",[]);
let oignon=new Ingredients("oignon","entier",0,5);
let oeuf=new Ingredients("oeuf","coquille",0,4);
let epices=new Ingredients("epices","moulu",1);
let fromage=new Ingredients("fromage","entier",3);
let panier1=new Panier("premier panier",[]);
let panier2=new Panier("deuxième panier",[]);
let panier3=new Panier("troisième panier",[]);
let epicerie=new Lieux("épicerie",[],[panier1,panier2,panier3],[oignon,oeuf,epices,fromage]);
let couteau=new Outil("couteau","coupé");
let poele=new Outil("poele","cuit",[]);
let bol=new Outil("bol","",[]);
let omelette=new Food("omelette","crue");

// #  


// #  

// >- Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
// >- attributs : nom, etats ( entier,coupé, moulu), prix

// #  

// >- Créer un lieu "epicerie" qui a comme propriétés :
// >- nom, personnes = [], paniers (plusieurs objets paniers avec le type de panier et le contenu du panier),
// >- Les "ingrédients" créés juste au dessus contenus dans un tableau.

// #  

// >- Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)

// #  

// >- Créer un bol avec un tableau comme contenu
// >- ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

// #  

// ># DEBUT DE L'OMELETTE
// >>1. Pour dire que le personnage est à la maison :
// >>1. Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// >>1. Afficher un message tel que :
// >>1. console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
fanny.seDeplacer(maison);
console.log(`${fanny.nom} est actuellement à la ${fanny.lieu}`);

// >>1. Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

fanny.seDeplacer(epicerie);
console.log(`${fanny.nom} se rend à l'${fanny.lieu}`);

// >>1. Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.
let indexRandom=Math.round(Math.random()*epicerie.paniers.length);
let panierFinal=epicerie.paniers[indexRandom];
fanny.mainDroite.push(panierFinal);
epicerie.paniers.splice(indexRandom,1);
console.log(`${fanny.nom} prend dans sa main droite le ${fanny.mainDroite[0].nom}`);
console.log(`Il reste dans la boîte à paniers de l'${epicerie.nom}: le ${epicerie.paniers[0].nom} et le ${epicerie.paniers[1].nom}`);
// >>1. Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
// >>1. console.log(`${personnage.nom} a pris un ${personnage.mainDroite.type}`);

// console.log(`${fanny.nom} a pris un ${fanny.mainDroite[0].nom}`);

// >>1. Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// >>1. Afficher un message à chaque ingrédient pris
let incr=0;

do{
    fanny.mainDroite[0].contenu.unshift(epicerie.rayons[incr]);
    console.log(`${fanny.nom} a pris dans les rayons le(s) ${fanny.mainDroite[0].contenu[0].nom} et le met dans le ${fanny.mainDroite[0].nom}`);
    incr++;
}while(incr<epicerie.rayons.length);
console.log(`Il y a donc finalement dans le ${fanny.mainDroite[0].nom}: le(s) ${fanny.mainDroite[0].contenu[0].nom},${fanny.mainDroite[0].contenu[1].nom},${fanny.mainDroite[0].contenu[2].nom},${fanny.mainDroite[0].contenu[3].nom}`);
// console.log(`${fanny.nom} a dans son panier ${fanny.mainDroite[0].contenu[0].nom},${fanny.mainDroite[0].contenu[1].nom},${fanny.mainDroite[0].contenu[2].nom},${fanny.mainDroite[0].contenu[3].nom}`);
// >>1. Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
// >>1. Afficher un message de ce qu'il reste d'argent sur le personnage.
console.log(`${fanny.nom} possède ${fanny.argent} €`);
console.log(`${fanny.nom} passe à la caisse.`);
let incr3=0;
do{
    fanny.payer(fanny,fanny.mainDroite[0].contenu[incr3]);
    incr3++;
}while(incr3<fanny.mainDroite[0].contenu.length)
console.log(`Il reste ${fanny.argent} € à ${fanny.nom} après être passé(e) à la caisse!`);
// >>1. rentrer à la maison (comme ça on pourra cuisiner)
console.log(`${fanny.nom} quitte l'${fanny.lieu}`);
fanny.seDeplacer(maison);
console.log(`${fanny.nom} est actuellement à la ${fanny.lieu}`);
// >>1. mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

let incr1=0;
do{
    bol.contenu.unshift(fanny.mainDroite[0].contenu[0]);
    console.log(`${fanny.nom} a mis le(s) ${fanny.mainDroite[0].contenu[0].nom} dans le ${bol.nom} `);
    fanny.mainDroite[0].contenu.splice(0,1);
    incr1++;
}while(incr1<epicerie.rayons.length);

// >>1. Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

console.log(`Que reste-t-il dans le panier (qu'on a volé à l'${epicerie.nom}!!!)? ${fanny.mainDroite[0].contenu.length}`);


// >>1. Afficher un petit message de chaque ingrédient qu'on met dans le bol.
// >>1. Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
// >>1. Afficher un petit message
console.log(`On va donc rendre le ${fanny.mainDroite[0].nom} à l' ${epicerie.nom}`);
console.log(`${fanny.nom} est actuellement à la ${fanny.lieu}`);
fanny.seDeplacer(epicerie);
console.log(`${fanny.nom} se rend à l'${fanny.lieu}`);
epicerie.paniers.unshift(fanny.mainDroite[0]);

console.log(`Il y a dans la boîte à paniers de l'${epicerie.nom}: le ${epicerie.paniers[0].nom},${epicerie.paniers[1].nom} et le ${epicerie.paniers[2].nom}`);
fanny.mainDroite.shift();
console.log(`Main de ${fanny.nom}: ${fanny.mainDroite.length}`);

// >>1. Retourner à la maison pour continuer l'omelette
// >>1. Afficher un petit message
console.log(`${fanny.nom} quitte à nouveau l'${fanny.lieu}`);
fanny.seDeplacer(maison);
console.log(`${fanny.nom} est actuellement à la ${fanny.lieu}`);

// >>1. Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
let incr2=0;

do{
console.log(`Dans mon bol, il y a le(s) ${bol.contenu[incr2].nom}`);
fanny.couper(bol.contenu[incr2],couteau.nom);
incr2++;
}while(incr2<bol.contenu.length);

// >>1. Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
fanny.melanger(bol,omelette);

// >>1. Afficher un message avec le nouveau mélange
console.log(`Après avoir tout mélangé, nous obtenons : une ${bol.contenu[0].nom} ${bol.contenu[0].etat}`);
// >>1. vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
console.log(`${fanny.nom} met l'${bol.contenu[0].nom} ${bol.contenu[0].etat} dans la ${poele.nom}`);
console.log(`${fanny.nom} lance la cuisson!`);


setTimeout(function(){
    fanny.cuire(omelette);
    console.log(`L'${bol.contenu[0].nom} dans la ${poele.nom} est maintenant ${bol.contenu[0].etat}!`);
    console.log("Bon appetit!");
}, 4000);


// >>1. Afficher un message final, notre omelette est cuite :)
