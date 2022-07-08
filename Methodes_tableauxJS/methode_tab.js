/* Méthode "toString" : convertir un tableau en une chaine de valeurs de tableau*/
const etudiant = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table1").innerHTML = etudiant.toString();

/* Méthode "join" : même méthode que "toString" mais permet l'ajout d'un séparateur*/
const etudiant1 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table2").innerHTML = etudiant1.join(" * ");

/* Méthode "pop" : supprimer le dernier élément d'un tableau et la renvoyer ensuite*/
const etudiant2 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table3").innerHTML = etudiant2.pop();
document.getElementById("table4").innerHTML = etudiant2;

/* Méthode "push" : ajouter un nouvel élément au tableau*/
const etudiant3 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table5").innerHTML = etudiant3;
etudiant3.push(" Greg");
document.getElementById("table6").innerHTML = etudiant3;

/*Méthode "splice" : ajouter élément*/
const etudiant4 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table7").innerHTML = etudiant4;

etudiant4.splice(2, 0, " Greg", " Outman");
document.getElementById("table8").innerHTML = etudiant4;

/*Méthode "splice" : supprimer élément*/
const etudiant5 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table9").innerHTML = etudiant5;

etudiant5.splice(1, 1);                                                         /*1er chiffre : position où on ajoute un élément*/
document.getElementById("table10").innerHTML = etudiant5;                       /*2ème chiffre : nombre d'éléments à supprimer*/

/*Méthode "splice" : tableau d'origine + nouveau tableau + tableau des éléments supprimés*/
const etudiant6 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table11").innerHTML = "Tableau d'origine :<br> " + etudiant6;

let removed = etudiant6.splice(2, 2, " Greg", " Outman"); 
document.getElementById("table12").innerHTML = "Nouveau tableau :<br>" + etudiant6;
document.getElementById("table13").innerHTML = "Eléments supprimés :<br> " + removed; 