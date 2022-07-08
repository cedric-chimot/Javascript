/*convertir un tableau en une chaine de valeurs de tableau*/
const etudiant = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table1").innerHTML = etudiant.toString();

/*même méthode que "toString" mais permet l'ajout d'un séparateur*/
const etudiant1 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table2").innerHTML = etudiant1.join(" * ");

/*supprimer le dernier élément d'un tableau et la renvoyer ensuite*/
const etudiant2 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table3").innerHTML = etudiant2.pop();
document.getElementById("table4").innerHTML = etudiant2;

/*ajouter un nouvel élément au tableau*/
const etudiant3 = ["Cédric", " Perrine", " Stéphane", " Jimmy"];
document.getElementById("table5").innerHTML = etudiant3;
etudiant3.push(" Greg");
document.getElementById("table6").innerHTML = etudiant3;

