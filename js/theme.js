document.getElementById("theme").addEventListener('click',function (){
    let theme ;
    if(window.document.documentElement.getAttribute("data-theme")==='dark'){
        theme='light';
    }else{
        theme='dark';
    }
    window.document.documentElement.setAttribute('data-theme',theme);
    window.localStorage.setItem('theme',theme);
})
if (window.localStorage.getItem("theme")==='light'){
    window.document.documentElement.setAttribute('data-theme','light');
}else if(window.localStorage.getItem("theme")==='dark'){
    window.document.documentElement.setAttribute('data-theme','dark');
}