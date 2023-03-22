function load_data(query = '')
{
    fetch('/get_data?search_query='+query+'').then(function(response){

        return response.json();

    }).then(function(responseData){

        var html = '<ul class="list-group">';

        if(responseData.length > 0)
        {
            for(var count = 0; count < responseData.length; count++)
            {
                var regular_expression = new RegExp('('+query+')', 'gi');

                html += '<a href="#" class="list-group-item list-group-item-action" onclick="get_text(this)">'+responseData[count].country_name.replace(regular_expression, '<span class="text-primary fw-bold">$1</span>')+'</a>';
            }
        }
        else
        {
            html += '<a href="#" class="list-group-item list-group-item-action disabled">No Data Found</a>';
        }

        html += '</ul>';

        document.getElementById('search_result').innerHTML = html;

    });
}

var search_element = document.getElementById("autocomplete_search");

search_element.onkeyup = function(){

    var query = search_element.value;

    load_data(query);

};

search_element.onfocus = function(){

    var query = search_element.value;

    load_data(query);

};

function get_text(event)
{
    var country_name = event.textContent;

    console.log(country_name);

    document.getElementById('autocomplete_search').value = country_name;

    document.getElementById('search_result').innerHTML = '';
}