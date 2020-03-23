class Box
{
    constructor()
    {
        this.hoverMessage = "Click me for more detail";
    }
}

class Templates extends Box
{
    constructor()
    {
        super();
    }
}
class Activities extends Box
{
    constructor()
    {
        super();
    }
}



var boxes = document.getElementsByClassName("top-box")
console.log(boxes);

var box_obj = new Box();
console.log(boxes[0]);
boxes[0].title = box_obj.hoverMessage;

// var template_obj = new Templates();
// console.log(boxes[0]);
// boxes[1].innerHTML = template_obj.typeMessage;

// var activity_obj = new Activities();
// console.log(boxes[0]);
// boxes[2].innerHTML = activity_obj.typeMessage;
