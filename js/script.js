class Box
{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}

function Templates(height, width)
{
    Box.call(this, height, width);
}
function Activities(height, width)
{
    Box.call(this, height, width);
}