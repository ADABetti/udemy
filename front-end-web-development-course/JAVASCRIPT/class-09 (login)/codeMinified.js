// O MESMO CÓDIGO DO EXECÍCIO FOI RESUMIDO EM UMA LINHA
//DESSA FORMA O SITE FICA MAIS LEVE PARA CARREGAR INFORMAÇÕES
// PARA COMPRIMIR CÓDIGOS, USAR SITES "minify code"
var u_name=document.myForm.u_login,message=document.getElementById("message");function login(){u_name.value.length<5?(message.innerHTML="Muito fraco",message.style.color="red",u_name.style.backgroundColor="red",u_name.style.color="white"):5==u_name.value.length?(message.innerHTML="ok",message.style.color="green",u_name.style.backgroundColor="green",u_name.style.color="white"):u_name.value.length>8&&(message.innerHTML=" User name is too long.",message.style.color="orange",u_name.style.backgroundColor="orange",u_name.style.color="white")}