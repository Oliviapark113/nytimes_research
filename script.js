//SETUP variables.


var appID = "uJG398J1Dyvcn0SqhP7v12oPhX3VwQx3" 

var queryTerm  = "";
var numResults = 0;
var startYear  = 0;
var endYear    = 0;
var searchTerm;
var startYearURL;
var endYearURL; 

var queryURLBase;

//variable to Track number of articles 
var articleCount = 0; 
//Functions 

function runQuery(numArticles, queryURL){

//2.Use those variable to run and AJAX call to the New York Times 
  $.ajax({
    url:queryURL,
    method:"GET"

  }).done(function(NYTData){

    console.log(queryURL);
    console.log(numArticles)
    console.log(NYTData);
    
  })


}

$("#searchBtn").on("click", function(e){
  e.preventDefault()

  //1.Retrieve user input and convert into variables
  searchTerm = $("#search").val().trim()

  queryURLBase ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key="+appID
  
  //Get Number of record 
  numResults = $("#numRecords").val()
 
  //Get start Year 
  startYear = parseInt($("#startYear").val().trim());
  endYear = parseInt($("#endYear").val().trim());
  
  var yearURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+startYear+"&end_date="+endYear+"&q="+searchTerm+"&api-key="+appID
  
  console.log(yearURL)
  
  if (parseInt(startYear)){
    
      startYearURL = queryURLBase+"&begin_date=" + startYear;
    
      console.log(startYearURL)
    }
    else if (parseInt(endYear)){
      
        endYearURL = queryURLBase+"&end_date=" + endYear;
      
      }
      
  runQuery(numResults, queryURLBase);
 
})

// curl \
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20120101&end_date=20121231&q=obama&api-key=[YOUR_API_KEY]' \
//   --header 'Accept: application/json' \
//   --compressed


//3.Break down the NYT Object into useable fields 
//4.Dynamically generate html content 
//5. Dealing wiht "edge case"
    

