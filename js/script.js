$button = document.getElementById("add");
$nom = document.getElementById("nom");
$prenom= document.getElementById("prenom");
$numero = document.getElementById("numero");
$resultat = document.getElementById("resultat");


contacts = [{
    prenom: "Julien",
    nom: "Grillot"
}, {
    prenom: "John",
    nom: "Smith"
}, {
    prenom : "Yoan",
    nom: "Dieu"
}, {
    prenom:"Erwan" ,
    nom: "Kezzar"
} , {
    prenom: "Naomi"  ,
    nom: "Ventura"
},  {
    prenom: "Jean" ,
    nom: "Dupond"
}];


function print(){
 $resultat.innerHTML += " " +  contacts.prenom + contacts.nom ;
}

print();
