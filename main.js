$(document).ready(function(){

  $("#search").click(function(){

     var searchTerm = $("#searchTerm").val();

     var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";



    $.ajax({
      type:"GET",
      url : url,
      sync : false,
      dataType : "json",
      success : function(data){


        $("#outPut").html(' ');

         for(var i = 0; i < data[1].length;i++){

         $("#outPut").hide().fadeIn(100).append("<li><a target='blank'href=" + data[3][i] + ">" + data[1][i] + "<p></a>"+data[2][i]+"</p></li></li>");
         $("#searchTerm").val(' ');

           console.log(url);
          }

      },
      error: function(errorMessage){
        alert("Error");
      }


    });


   });
  $("#searchTerm").keypress(function(e){
    if(e.which==13){
      $("#search").click();
    }
  });


  });
