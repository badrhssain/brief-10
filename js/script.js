var globalData;

function bringData(){
    $.get("product.json", function(data){
        console.log(data);
        globalData = data;
        filltable()
    });
}

bringData();


function filltable(){
    globalData.forEach(element => {
        var provider_info = element.fournisseur["RS"] +'<br>' + element.fournisseur["Adresse"];
        $('#tb').append($('<tr>')
        .append($('<td>').append(element.id))
        .append($('<td>').append(element.Désignation))
        .append($('<td>').append(element.prix))
        .append($('<td>').append(element.catégorie))
        .append($('<td>').append(element.disponibilité))
        .append($('<td>').append(provider_info))

    )});
}
$(document).ready(function(){
    $("#search").on("keyup",function(){
        var value =$(this).val().toLowerCase();
        $("#tb tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)

        });
    });
    });