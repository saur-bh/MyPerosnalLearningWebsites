

// Self inovking function to add Date in my website!
(function(){

    document.getElementById('datetime').innerHTML = setDate().toLocaleDateString()+" "+setDate().toLocaleTimeString();
})();

function setDate(){
   
    return new Date();
}

//This function will lock priority section 
function lockpriporitySection(){

    var locktextArea = document.getElementById('alltask0d').setAttribute("readonly","true");

    var dt = document.getElementById('lockDate-id').value;
     

    var currentDate = new Date();
    currentDate = formatDate(currentDate);

    // Check the currentDate and 

}


function formatDate( date){

    var day = date.getDate();
     var year = date.getFullYear();
     var month = date.getMonth()+1;

     return (year+ "-"+month+"-"+day);
}



