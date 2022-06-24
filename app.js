function makeGif(res) {
let numResults = res.data.length;
let randNum = Math.floor(Math.random()*numResults)+1;

 $('tr').append($('<td>').append($('<img>').attr('src',res.data[randNum].images.original.url)))



//$('#gifNet').append($('<img>').attr('src',res.data[randNum].images.original.url))
//}
}





$('#giphy').on('submit', async function(e){ e. preventDefault();
    const term = $('#term').val();
    //console.log(term);
    
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
        );
        $('#term').val('')
        

    makeGif(res.data)
}

 );

 $('#remove').on('click', ()=> $('img').remove())
 



   
