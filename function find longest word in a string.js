function findLongestWord(str){

    var strSplit = str.split(' ');
    var longestWord= '';


    for(var i = 0; i < strSplit.length; i++){


      if(strSplit[i].length > longestWord.length){

        longestWord = strSplit[i];
     
    
      }
    }

    return longestWord;
  }
  
  var longestWord =findLongestWord("The quick brown fox jumped over the lazy dog");
  
  console.log(longestWord);
  