var nameinput = document.getElementById('name');
var Urlinput = document.getElementById('Url');
var btnadd= document.getElementById('btn');
var tbody = document.getElementById('tbody');
var Book;
if(localStorage.getItem("Book")==null){
  Book=[];
}
else{
  Book = JSON.parse(localStorage.getItem("Book"));
  displayaalprodects();
}
// Functin Vaild Name 
var nameRegex = /^[A-Za-z_]{1,}$/
function nameisvaild(){
  if(nameRegex.test(nameinput.value)){
    return true;
  }
  else{
    return false;
  }
}
// Function Vaild Url
var UrlRegexs = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
function Urlisvaild(){
  if(UrlRegexs.test(Urlinput.value)){
    return true;
  }
  else{
    return false;
  }
}
// vaild Name
nameinput.onkeyup = function(){
  if(nameisvaild() && Urlisvaild()){
    btn.removeAttribute("disabled")
  }
  else{
    btn.disabled ="true";
  }
}
// Vaild Url
Urlinput.onkeyup = function(){
    if(nameisvaild() && Urlisvaild()){
      btn.removeAttribute("disabled")
    }
    else{
      btn.disabled ="true";
    }
}


// Function onclick Button Submit
function submit(){
  var Bookmark ={
    name:nameinput.value,
    URL:Urlinput.value
  }
  Book.push(Bookmark);
  localStorage.setItem("Book", JSON.stringify(Book));
  // Cailing Function Display All Prodects
  displayaalprodects()
  // cailing Function clear Code
  clearncode()
}
// Function Display All Prodects
function displayaalprodects(){
  var cartoone ='';
  for( var i = 0 ; i < Book.length ; i++){
    cartoone+=`
    <tr>
    <td>${[i]}</td>
    <td>${Book[i].name}</td>
    <td><a href="${Book[i].URL}" target="_blank" ><button onclick="vistelement()" class="btn btn-outline-success"><i class="fa-solid fa-eye pe-2"></i>Vist</button></a></td>
    <td> <button class="btn btn-outline-danger" onclick="Deletelement(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
  </tr>`
  } 
  document.getElementById('tbody').innerHTML = cartoone;
}
// Function Delete Element
function Deletelement(index){
  Book.splice(index,1);
  localStorage.setItem("Book", JSON.stringify(Book));
  displayaalprodects();
}
// Function clearn code
function clearncode(){
  nameinput.value="";
  Urlinput.value = "";
}
