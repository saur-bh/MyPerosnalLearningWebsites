

// Self inovking function to add Date in my website!
(function(){

    document.getElementById('datetime').innerHTML = setDate().toLocaleDateString()+" "+setDate().toLocaleTimeString();
})();

function setDate(){
   
    return new Date();
}




