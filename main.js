menu_list = ["Pepperoni Pizza", "Chocolate Pizza", "Vegetable Pizza", "Cheese Pizza", "Salad Pizza"];
function getmenu()
{
    var mlist = "<ol class = 'menu_list'>";
    menu_list.sort();
    for(var i = 0; i < menu_list.length; i++){
        mlist = mlist + '<li>'+menu_list[i]+'</li>';
    }
    mlist = mlist + '</ol>';
    document.getElementById("display_menu").innerHTML=mlist;
}

function add_item()
{
    var item = document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();
    var htmldata = "<section class = 'cards'>";
    for(var i = 0; i < menu_list.length; i++){
        htmldata = htmldata + '<div class = "card">'+'<img src = "pizzaImg.png"'+menu_list[i]+'</div>';
    }
    htmldata = htmldata + '</section>';
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}