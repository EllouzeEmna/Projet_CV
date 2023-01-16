var i=0;
// let myform=document.getElementById('form1');
// // var disabled = document.getElementById("name").disabled;
// myform.addEventListener('submit',function(e){
//     if((form1.q1ch1.checked) ==false  && (form1.q1ch2.checked) ==false && (form1.q1ch3.checked) ==true && (form1.q1ch4.checked) ==false)
 
//     {i +=1.25; }
// else{
//     let v=document.getElementById('errorname');
//      v.innerHTML="Veuillez entrez un nom valide";   
//      v.style.color='red';
//      e.preventDefault();
//  }
// });
const fr=document.getElementById('form1')
function reponse1(form1) {
if((form1.q1ch1.checked) ==false  && (form1.q1ch2.checked) ==false && (form1.q1ch3.checked) ==true && (form1.q1ch4.checked) ==false)
 
    {i +=1.25; }
// else{
//     const v=document.getElementById('errorname');
//      v.innerHTML="<p>Veuillez entrez un nom valide</p>";   
//      v.style.color='red';
//  }
}
function reponse2(form1) {
    if((form1.q2ch1.checked) ==false  && (form1.q2ch2.checked) ==false && (form1.q2ch3.checked) ==true && (form1.q2ch4.checked) ==false)
     
          {i +=1.25; }
}
function reponse3(form1) {
    if((form1.q3ch1.checked) ==false  && (form1.q3ch2.checked) ==false && (form1.q3ch3.checked) ==true && (form1.q3ch4.checked) ==false)
     
          {i +=1.25; }
}
function reponse4(form1) {
    if((form1.q4ch1.checked) ==false  && (form1.q4ch3.checked) ==false && (form1.q4ch2.checked) ==true && (form1.q4ch4.checked) ==false)
     
          {i +=1.25; }
}
function reponse5(form1) {
    if((form1.q5ch1.checked) ==false  && (form1.q5ch3.checked) ==false && (form1.q5ch4.checked) ==true && (form1.q5ch2.checked) ==false)
     
          {i +=1.25; }
}
function reponse6(form1) {
    if((form1.q6ch1.checked) ==false  && (form1.q6ch3.checked) ==false && (form1.q6ch4.checked) ==true && (form1.q6ch2.checked) ==false)
     
          {i +=1.25; }
}
function reponse7(form1) {
    if((form1.q7ch2.checked) ==false  && (form1.q7ch3.checked) ==false && (form1.q7ch1.checked) ==true && (form1.q7ch4.checked) ==false)
     
          {i +=1.25; }
}
function reponse8(form1) {
    if((form1.q8ch1.checked) ==false  && (form1.q8ch3.checked) ==false && (form1.q8ch4.checked) ==true && (form1.q8ch2.checked) ==false)
     
          {i +=1.25; }
}
function reponse9(form1) {
    if((form1.q9ch1.checked) ==false  && (form1.q9ch3.checked) ==false && (form1.q9ch4.checked) ==true && (form1.q9ch2.checked) ==false)
     
          {i +=1.25; }
}
function reponse10(form1) {
    if((form1.q10ch1.checked) ==false  && (form1.q10ch3.checked) ==false && (form1.q10ch2.checked) ==true && (form1.q10ch4.checked) ==false)
     
          {i +=1.25; }
}
function reponse11(form1) {
    if((form1.q11ch1.checked) ==false  && (form1.q11ch3.checked) ==false && (form1.q11ch2.checked) ==true)
     
          {i +=1.25; }
}
function reponse12(form1) {
    if((form1.q12ch2.checked) ==false  && (form1.q12ch3.checked) ==false && (form1.q12ch1.checked) ==true)
     
          {i +=1.25; }
}
function reponse13(form1) {
    if((form1.q13ch1.checked) ==false  && (form1.q13ch3.checked) ==false && (form1.q13ch2.checked) ==true)
     
          {i +=1.25; }
}
function reponse14(form1) {
    if((form1.q14ch1.checked) ==false  && (form1.q14ch3.checked) ==false && (form1.q14ch2.checked) ==true)
     
          {i +=1.25; }
}
function reponse15(form1) {
    if((form1.q15ch3.checked) ==false  && (form1.q15ch2.checked) ==false && (form1.q15ch1.checked) ==true)
     
          {i +=1.25; }
}
function reponse16(form1) {
    if((form1.q16ch2.checked) ==false  && (form1.q16ch1.checked) ==false && (form1.q16ch3.checked) ==true)
     
          {i +=1.25; }
}
function validQCM()
  {
      reponse1(form1);
      reponse2(form1);
      reponse3(form1);
      reponse4(form1);
      reponse5(form1);
      reponse6(form1);
      reponse7(form1);
      reponse8(form1);
      reponse9(form1);
      reponse10(form1);
      reponse11(form1);
      reponse12(form1);
      reponse13(form1);
      reponse14(form1);
      reponse15(form1);
      reponse16(form1);
      alert("Votre score est de " + i + "/20");
        fr.innerHTML=`<section>
        <form name="form1" id="form1">
        <table class="quizz">
            <tr>
                <td>
                    <fieldset>
                        <!-- Langage de balisage -->
                    <legend>HTML est considéré comme ______ ?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q1ch1">
                        <label for="q1ch1">Langage de programmation</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q1ch2">
                        <label for="q1ch2">Langage POO</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q1ch3" checked>
                        <label for="q1ch3">Langage de balisage</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q1ch4">
                        <label for="q1ch4">Langage de haut niveau</label>
                    </div>
                    <div>
                        <span id="errorname"></span>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- Balises fixes définis par le langage -->
                     <legend>HTML utilise des ______?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q2ch1">
                        <label for="q2ch1">Balises définis par l’utilisateur</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q2ch2">
                        <label for="q2ch2">Balises prédéfinis</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q2ch3"  checked>
                        <label for="q2ch3">Balises fixes définis par le langage</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q2ch4">
                        <label for="q2ch4">Balises uniquement pour les liens</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- id -->
                     <legend>Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?</legend>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q3ch1"  checked>
                        <label for="q3ch1">id</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q3ch2">
                        <label for="q3ch2">text</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q3ch3">
                        <label for="q3ch3">class</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q3ch4">
                        <label for="q3ch4">name</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- style -->
                     <legend>La balise HTML qui spécifie un style CSS intégré dans un élément est appelée __________?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q4ch1">
                        <label for="q4ch2">Design</label>
                    </div>
                     <div class="choix" id="vrai">
                        <input type="checkbox" id="q4ch2"  checked>
                        <label for="q4ch2">Style</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q4ch3">
                        <label for="q4ch3">Modify</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q4ch4">
                        <label for="q4ch4">Define</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- p {color: red;} -->
                     <legend>Comment rendre tous les paragraphes en «ROUGE» ?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q5ch1" >
                        <label for="q5ch1">p.all {color: red;}</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q5ch2">
                        <label for="q5ch2">p.all {color: #AA0000;}</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q5ch3">
                        <label for="q5ch3">all.p {color: #0000FF;}</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q5ch4"  checked>
                        <label for="q5ch4">p {color: red;}</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- Pour identifier un nom ou une ressource sur Internet. -->
                     <legend>En HTML, Uniform Resource Locator (URL) est utilisé _____</legend>
                    <div class="choix">
                        <input type="checkbox" id="q6ch1" >
                        <label for="q6ch1">Pour créer un document frame.</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q6ch2">
                        <label for="q6ch2">Pour créer une image map dans une page Web.</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q6ch3" >
                        <label for="q6ch3">Pour personnaliser l’image dans une page Web</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q6ch4"  checked>
                        <label for="q6ch4">Pour identifier un nom ou une ressource sur Internet.</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- Cascading Style Sheet -->
                     <legend>CSS est un acronyme pour _____</legend>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q7ch1"  checked>
                        <label for="q7ch1">Cascading Style Sheet</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q7ch2" >
                        <label for="q7ch2">Costume Style Sheet</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q7ch3" >
                        <label for="q7ch3">Cascading System Style</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q7ch4">
                        <label for="q7ch4">Aucune de ces réponses n’est vraie.</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- Tout les réponses sont vrais -->
                     <legend>La balise Head est utilisée pour?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q8ch1">
                        <label for="q8ch1">Écrire des styles CSS</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q8ch2" >
                        <label for="q8ch2">Écrire du Javascript</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q8ch3" >
                        <label for="q8ch3">Inclure des fichiers CSS et JS</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q8ch4"  checked>
                        <label for="q8ch4">Tout les réponses sont vrais</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- Body {color: Black} -->
                     <legend>Quelle est la syntaxe correcte du code CSS suivant?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q9ch1" >
                        <label for="q9ch1">Body:color=black</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q9ch2">
                        <label for="q9ch2">{body;color:black}</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q9ch3" >
                        <label for="q9ch3">{body:color=black(body}</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q9ch4"  checked>
                        <label for="q9ch4">Body {color: Black}</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- a {text-decoration:none;} -->
                     <legend>Les liens sont affichés avec un soulignement.Comment pouvez-vous le supprimer en utilisant CSS?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q10ch1" >
                        <label for="q10ch1">a {text: no-underline;}</label>
                    </div>
                     <div class="choix" id="vrai">
                        <input type="checkbox" id="q10ch2"  checked>
                        <label for="q10ch2">a {text-decoration:none;}</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q10ch3" >
                        <label for="q10ch3">a {text-style: no-underline;}</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q10ch4">
                        <label for="q10ch4">a {text-decoration: no-underline;}</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- 34 -->
                     <legend>Quel serait le résultat de 1 + 2 + « 4 »?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q11ch1" >
                        <label for="q11ch1">erreur</label>
                    </div>
                     <div class="choix" id="vrai">
                        <input type="checkbox" id="q11ch2"  checked>
                        <label for="q11ch2">34</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q11ch3" >
                        <label for="q11ch3">124</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!-- a parseInt("1A6E", 16); -->
                     <legend>Comment convertir une chaîne d’une base en un nombre entier en JavaScript?</legend>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q12ch1"  checked>
                        <label for="q12ch1">parseInt("1A6E", 16);</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q12ch2" >
                        <label for="q12ch2">parseInt(16,"1A6E",);</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q12ch3" >
                        <label for="q12ch3">convertInt(16,"1A6E",);</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- A -->
                     <legend>Quelle est la sortie de cette ligne : String.fromCharCode(65) ?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q13ch1" >
                        <label for="q13ch1"> 1</label>
                    </div>
                     <div class="choix" id="vrai">
                        <input type="checkbox" id="q13ch2"  checked>
                        <label for="q13ch2">A</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q13ch3" >
                        <label for="q13ch3">false</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!--menu -->
                     <legend> Lequel des éléments suivants n’est pas une propriété de l’objet window?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q14ch1"  >
                        <label for="q14ch1">document</label>
                    </div>
                     <div class="choix" id="vrai">
                        <input type="checkbox" id="q14ch2"  checked>
                        <label for="q14ch2">menu</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q14ch3" >
                        <label for="q14ch3">navigator</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <!-- return -->
                     <legend>Quelle déclaration fournit la valeur d’une fonction?</legend>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q15ch1"  checked>
                        <label for="q15ch1"> return</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q15ch2" >
                        <label for="q15ch2">cancel</label>
                    </div>
                    <div class="choix">
                        <input type="checkbox" id="q15ch3" >
                        <label for="q15ch3">valueOf</label>
                    </div>
                    </fieldset>
                </td>
                <td>
                    <fieldset>
                        <!--La balise script -->
                     <legend> Dans quel balise HTML plaçons-nous le code JavaScript?</legend>
                    <div class="choix">
                        <input type="checkbox" id="q16ch1"  >
                        <label for="q16ch1">La balise js</label>
                    </div>
                     <div class="choix">
                        <input type="checkbox" id="q16ch2" >
                        <label for="q16ch2">La balise javascript</label>
                    </div>
                    <div class="choix" id="vrai">
                        <input type="checkbox" id="q16ch3"  checked>
                        <label for="q16ch3">La balise script</label>
                    </div>
                    </fieldset>
                </td>
            </tr>
            
        </table>
        
    </form>
    </section>
        
        `
  }