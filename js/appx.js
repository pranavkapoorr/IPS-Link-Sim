
$(document).ready(function(e){
    function boom(){
        alert("boom")
    }
    function connect(){
        var serverip =  $('#serverip').val();
        var serverport = $('#serverport').val();
        if(serverip === '' || serverport === ''){
            alert('Server Ip and Port cannot be empty!')
        }else{
            alert(serverip+serverport);
        }
     }
     function payment(){

     }
     function reversal(){

     }
     function refund(){

     }
     function reprintReceipt(){

     }
     function pedbalance(){

     }
     function endofday(){

     }
     function firstdll(){

     }
     function updatedll(){

     }
     function probeped(){
         
     }
    $('#start').on('click',function(){
        connect();
    });
  });

  //const net = require('net');
//const connection;
//function connect(){
   //const serverip =  $('#serverip').val();
   //const serverport = $('#serverport');
   //alert(serverip);

//}
