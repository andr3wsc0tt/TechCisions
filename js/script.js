class Box
{
    constructor()
    {
        this.typeMessage = "I'm a Box";
    }
}

class Templates extends Box
{
    constructor()
    {
        super();
        this.typeMessage = "I'm a Template";
    }
}
class Activities extends Box
{
    constructor()
    {
        super();
        this.typeMessage = "I'm an Activity";
    }
}



var boxes = document.getElementsByClassName("box-class")
console.log(boxes);

var box_obj = new Box();
console.log(boxes[0]);
boxes[0].innerHTML = box_obj.typeMessage;

var template_obj = new Templates();
console.log(boxes[0]);
boxes[1].innerHTML = template_obj.typeMessage;

var activity_obj = new Activities();
console.log(boxes[0]);
boxes[2].innerHTML = activity_obj.typeMessage;
