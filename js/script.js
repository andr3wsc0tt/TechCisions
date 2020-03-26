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

    popUp (name)
    {
        var filename = name;
        filename = filename.replace(/\s+/g, '-').toLowerCase();
        var newName = window.open('https://andr3wsc0tt.github.io/TechCisions/popUp.html');
        // var newName = window.open("./popUp.html");

        newName.onload = function()
        {

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
            dlLink.href = "https://andr3wsc0tt.github.io/TechCisions/login.html";
            // dlLink.href = "./login.html";

            dlLink.style.display = "block";
            newName.document.body.append(heading3);
            newName.document.body.append(dlLink);

            heading4.innerHTML = `Knowledge base - ${name} : `;
            heading4.style.display = "inline";
            tempLink.innerHTML = `knowledge-base.${filename}.com`;
            tempLink.href = `knowledge-base.${filename}.com`;
            newName.document.body.append(heading4);
            newName.document.body.append(tempLink);
            
            newName.console.log(newName.document.body);

            newName.document.close();
                    
        }
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

    popUp (name)
    {
        var filename = name;
        filename = filename.replace(/\s+/g, '-').toLowerCase();
        var newName = window.open('https://andr3wsc0tt.github.io/TechCisions/popUp.html');
        // var newName = window.open("./popUp.html");

        newName.onload = function()
        {

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
        
        for (let k = 0; k < 5; k++)
        {
            var listItem = newName.document.createElement("li");
            listItem.innerHTML = `Template ${k}`;
            unorder.appendChild(listItem);
        }

        tempLink.innerHTML = name;
        tempLink.href = `www.${filename}.html`;
        newName.document.body.append(tempLink);
        
        newName.document.close();
                
    }


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
    for (let r = 0; r < boxes.length; r++)
    {
        /* CSS AND HTML INITIALIZATION */
        boxes[r].title = box_obj.retHovMsg();
        boxes[r].href = "../popUp.html";
        boxes[r].style.backgroundImage = "url('./resources/plan.png')";
        boxes[r].style.backgroundSize = `${img_dim} ${img_dim}`;
        boxes[r].style.mixBlendMode = "multiply";
        boxes[r].style.height = img_dim;
        boxes[r].style.width = img_dim;
        boxes[r].style.border = "none";
        boxes[r].parentElement.style.position = "relative";
        boxes[r].parentElement.style.textAlign = "center";

        boxes[r].addEventListener("click", () => {box_obj.popUp(boxes[r].textContent);}, false);
    }
}
init_Tools = () =>
{
    var boxes = document.getElementsByClassName("tool");
    var box_obj = new Templates();
    console.log(boxes);
    var img_dim = "90px";
    for (let m = 0; m < boxes.length; m++)
    {
        boxes[m].title = box_obj.retHovMsg();
        boxes[m].style.backgroundImage = "url('./resources/tool.png')";
        boxes[m].style.backgroundSize = `${img_dim} ${img_dim}`;
        boxes[m].style.mixBlendMode = "multiply";
        boxes[m].style.height = img_dim;
        boxes[m].style.width = img_dim;
        boxes[m].style.border = "none";
        boxes[m].parentElement.style.position = "relative";
        boxes[m].parentElement.style.textAlign = "center";

        boxes[m].addEventListener("click", () => {box_obj.popUp(boxes[m].textContent);}, false);
    }
}
init_Activitives = () =>
{
    var boxes = document.getElementsByClassName("instruction");
    var box_obj = new Activities();
    console.log(boxes);
    for (let q = 0; q < boxes.length; q++)
    {
        boxes[q].title = box_obj.retHovMsg();
        boxes[q].addEventListener("click", () => {box_obj.popUp(boxes[q].textContent);}, false);
    }
}

init_Templates();
init_Tools();
init_Activitives();
