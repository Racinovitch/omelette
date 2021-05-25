class Food{
    constructor(nom,etat){
        this.nom=nom;
        this.etat=etat;
    };
};

class Personne{
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom=nom;
        this.lieu=lieu;
        this.argent=argent;
        this.mainDroite=mainDroite;
        this.mainGauche=mainGauche;
        this.seDeplacer=(lieu)=>{
            this.lieu=lieu.nom;
            lieu.personnes.push(this.nom);
        };
        this.payer=(client,article)=>{
            client.argent-=article.prix;
        };
        this.couper=(ingredient,outil)=>{
            if(ingredient.etat=="entier"){
                ingredient.etat="coupé";
                console.log(`${ingredient.nom} est maintenant ${ingredient.etat} grâce au ${outil}!`)
            }else{
                console.log(`${ingredient.nom} n'est pas découpable!`)
            }
        };
        this.melanger=(bol,omelette)=>{
            do{
                bol.contenu.shift();
            }while(bol.contenu.length>0)
            bol.contenu.unshift(omelette);
        };
        this.cuire=(omelette)=>{
            // >- Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
            
            omelette.etat="cuite";
        }
    };
};

// >### Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :

class Lieux{
    constructor(nom,personnes,paniers,rayons){
        this.nom=nom;
        this.personnes=personnes;
        this.paniers=paniers;
        this.rayons=rayons;
    };
};

// >- Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
// >- attributs : nom, etats ( entier,coupé, moulu), prix

class Ingredients{
    constructor(nom,etat,prix){
        this.nom=nom;
        this.etat=etat;
        this.prix=prix;
    };
};

// >- Créer un outil (couteau) pour découper les ingrédients achetés
// >- propriétés : nom et action.
// >- action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)

class Outil{
    constructor(nom,action,contenu){
        this.nom=nom;
        this.action=action;
        this.contenu=contenu;
    };
};

class Panier{
    constructor(nom,contenu){
        this.nom=nom;
        this.contenu=contenu;
    }
}

export{Personne,Lieux,Ingredients,Outil,Panier,Food};
