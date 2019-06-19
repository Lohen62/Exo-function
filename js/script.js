//Liste des choses à faire
// Parametrée le bouton pour deux prompt
 // demander chaqu'une des informations ( Prenom et Age) dans les prompt
 // créer une ligne dans le Tbody, ID tableau
 //envoyer les informations dans cette ligne (prenom collone 1, nom collone 2)
 // en fonction de l'age, ajoutté un message dans la 3ème collone


// la je parametre le bouton HTML pour faire apparaitre 2 prompt et stocker les informations
function add(){

var prenom = prompt("Quel est ton prénom ?");
var age = prompt("Quel age à tu ? ne met que le chiffre :)");

console.log(prenom);
console.log(age);


// je récupère mon Tbody via GEt ELement et je lui demande de créer une ligne via insertRow ( par default -1)

 var newRow = document.getElementById('tableau').insertRow(-1); 

 //je demande d'inserée une celulle à la ligne précedemment insérée, contenant ma var prénom
 var newCell = newRow.insertCell(0); 
 newCell.innerHTML =(prenom); 

 // même chose mais avec l'age

 newCell = newRow.insertCell(1); 
 newCell.innerHTML = (age+ " ans"); 


 // je vais maintenant comparée l'age , et en fonction de celle ci, donner différents message dans une var "Message "

 var message = "";
 if (age<= 12 ) {
     message = "tu est bien trop jeune petit.e";
 }
 else if (age>12 && age<= 15){
     message = "travail bien pour ton brevet! c'est important!"
 }
 else if (age >15 && age < 20){
     message = "bientôt la vingtaine ! il n'y a que ça de vrai"
 }
 else if ( age >=20 && age <30){
     message = "la vingtaine ! ta de la chance ! c'est les meilleures années!"
 }
 else if ( age >=30 && age<40) {
     message = " les trentenaires sont les meilleurs !"
 }
 else if ( age >=40 && age <50 ){
     message = "tu commence à devenir vieux... la 50ène aproche à grand pas"
 }
 else if (age>=50 && age < 80){
     message = " tu commence à être trop vieux pour jouer..."
 }else {
     message = " tu as un pied dans la tombe, ou tu y est déja ! Courage dans l'autre monde"
 }

 // ici j'aimerais ajouter une var qui en fonction de l'age donneras un résultat différents.

 newCell = newRow.insertCell(2); 
 newCell.innerHTML = (message); 

 //je veux créer un boutton servant à supprimer
 

   } function delet(){

     var ligne = prompt("quel numéro de ligne veut tu supprimer ?");
     document.getElementById('tableau').deleteRow(ligne-1)

 }