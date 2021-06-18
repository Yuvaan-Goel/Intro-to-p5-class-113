function preload()
{
    
}

function setup()
{
    canvas = createCanvas(640, 480);
    img = createCapture(VIDEO);
    img.hide();
    color = "";
}

function draw()
{
    image(img, 0, 0, 640, 480);
    tint(color);
}

function take_snapshot()
{
    save('person.jpeg');
}

function applyfilter()
{
    color = document.getElementById("input").value;
}