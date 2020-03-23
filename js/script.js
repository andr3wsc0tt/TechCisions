class Box
{
    constructor()
    {
        this.hoverMessage = "Click me for more detail";
    }
    retHovMsg()
    {
        return this.hoverMessage;
    }
}

class Templates extends Box
{
    constructor()
    {
        super();
    }

    retHovMsg ()
    {
        return super.retHovMsg();
    }
}
class Activities extends Box
{
    constructor()
    {
        super();
    }
    retHovMsg ()
    {
        return super.retHovMsg();
    }
}


init_Templates = () =>
{
    var boxes = document.getElementsByClassName("plan");
    var box_obj = new Templates();
    console.log(boxes);
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].title = box_obj.retHovMsg();
        boxes[i].style.backgroundImage = "url('./resources/plan.png')";
        boxes[i].style.backgroundSize = "100px 100px";
        boxes[i].style.mixBlendMode = "multiply";
        boxes[i].style.height = "100px";
        boxes[i].style.width = "100px";
        boxes[i].style.border = "none";
        boxes[i].parentElement.style.position = "relative";
        boxes[i].parentElement.style.textAlign = "center";
    }
}
init_Tools = () =>
{
    var boxes = document.getElementsByClassName("tool");
    var box_obj = new Activities();
    console.log(boxes);
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].title = box_obj.retHovMsg();
        boxes[i].style.backgroundImage = "url('./resources/tool.png')";
        boxes[i].style.backgroundSize = "100px 100px";
        boxes[i].style.mixBlendMode = "multiply";
        boxes[i].style.height = "100px";
        boxes[i].style.width = "100px";
        boxes[i].style.border = "none";
        boxes[i].parentElement.style.position = "relative";
        boxes[i].parentElement.style.textAlign = "center";
    }
}

// var child = boxes[0].parentElement.childNodes;
// child[3].textContent = "Business Case";
// child[3].title = box_obj.retHovMsg();
// child[3].style.userSelect = "none";

// var template_obj = new Templates();
// console.log(boxes[0]);
// boxes[1].innerHTML = template_obj.typeMessage;

// var activity_obj = new Activities();
// console.log(boxes[0]);
// boxes[2].innerHTML = activity_obj.typeMessage;

init_Templates();
init_Tools();