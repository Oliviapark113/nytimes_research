console.log("hello")


var appID = "uJG398J1Dyvcn0SqhP7v12oPhX3VwQx3"
   

var nyUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+appID;

    $.ajax({
        url: nyUrl,
        method:"GET"

      }).then(function(data){
          console.log(data)
      })


     console.log("hello")
      





