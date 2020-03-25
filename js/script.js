
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

    popUp = (name) =>
    {
        var filename = name;
        filename = filename.replace(/\s+/g, '-').toLowerCase();
        var newName = window.open();
        
        var heading1 = newName.document.createElement("h1");
        var heading2 = newName.document.createElement("h2");
        var text = ' Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dolorem. ';
        heading1.innerHTML = name;
        heading2.innerHTML = text;
        newName.document.body.appendChild(heading1);
        newName.document.body.appendChild(heading2);

        var heading3 = newName.document.createElement("h3");
        var heading4 = newName.document.createElement("h3");
        var dlLink = newName.document.createElement('a');
        var tempLink = newName.document.createElement('a');

        heading3.innerHTML = "Download: ";
        heading3.style.display = "inline";
        dlLink.innerHTML = name;
        dlLink.href = `downloads.${filename}.html`;
        dlLink.style.display = "block";
        newName.document.body.append(heading3);
        newName.document.body.append(dlLink);

        heading4.innerHTML = `Knowledge base - ${name} : `;
        heading4.style.display = "inline";
        tempLink.innerHTML = `knowledge-base.${filename}.com`;
        tempLink.href = `knowledge-base.${filename}.com`;
        newName.document.body.append(heading4);
        newName.document.body.append(tempLink);
        
        /*  
            New Window
            Description of the template
            Download Link - provided by client / Subscription Box
            A link to the page in the knowledge base
            Editable by client admin.

        */
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

    popUp = (name) =>
    {
        var filename = name;
        filename = filename.replace(/\s+/g, '-').toLowerCase();
        var newName = window.open();
        
        var heading1 = newName.document.createElement("h1");
        var heading2 = newName.document.createElement("h2");
        var text = ' Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dolorem. ';
        heading1.innerHTML = name;
        heading2.innerHTML = text;
        newName.document.body.appendChild(heading1);
        newName.document.body.appendChild(heading2);
        
        var unorder = newName.document.createElement("ul");
        var unLabel = newName.document.createElement('h3');
        var tempLink = newName.document.createElement('a');

        unLabel.innerHTML = "Other Templates:";
        newName.document.body.append(unLabel);
        newName.document.body.appendChild(unorder);
        
        for (let i = 0; i < 5; i++)
        {
            var listItem = newName.document.createElement("li");
            listItem.innerHTML = `Template ${i}`;
            unorder.appendChild(listItem);
        }

        tempLink.innerHTML = name;
        tempLink.href = `www.${filename}.html`;
        newName.document.body.append(tempLink);
        


        /*
            New Window
            Description of the activity
            List of templates related to the activity with links / Subscription Box
            Link to page in knowledge base
            All links editable
        */
    }
}

init_Templates = () =>
{
    var boxes = document.getElementsByClassName("plan");
    var box_obj = new Templates();
    console.log(boxes);
    var img_dim = "90px";
    for (let i = 0; i < boxes.length; i++)
    {
        /* CSS AND HTML INITIALIZATION */
        boxes[i].title = box_obj.retHovMsg();
        boxes[i].style.backgroundImage = "url('./resources/plan.png')";
        boxes[i].style.backgroundSize = `${img_dim} ${img_dim}`;
        boxes[i].style.mixBlendMode = "multiply";
        boxes[i].style.height = img_dim;
        boxes[i].style.width = img_dim;
        boxes[i].style.border = "none";
        boxes[i].parentElement.style.position = "relative";
        boxes[i].parentElement.style.textAlign = "center";

        boxes[i].addEventListener("click", () => {box_obj.popUp(boxes[i].textContent);}, false);
    }
}
init_Tools = () =>
{
    var boxes = document.getElementsByClassName("tool");
    var box_obj = new Templates();
    console.log(boxes);
    var img_dim = "90px";
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].title = box_obj.retHovMsg();
        boxes[i].style.backgroundImage = "url('./resources/tool.png')";
        boxes[i].style.backgroundSize = `${img_dim} ${img_dim}`;
        boxes[i].style.mixBlendMode = "multiply";
        boxes[i].style.height = img_dim;
        boxes[i].style.width = img_dim;
        boxes[i].style.border = "none";
        boxes[i].parentElement.style.position = "relative";
        boxes[i].parentElement.style.textAlign = "center";

        boxes[i].addEventListener("click", () => {box_obj.popUp(boxes[i].textContent);}, false);
    }
}
init_Activitives = () =>
{
    var boxes = document.getElementsByClassName("instruction");
    var box_obj = new Activities();
    console.log(boxes);
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].title = box_obj.retHovMsg();
        boxes[i].addEventListener("click", () => {box_obj.popUp(boxes[i].textContent);}, false);
    }
}

init_Templates();
init_Tools();
init_Activitives();
