function add()
{
        var a=parseInt(document.getElementById("first").value);
        var b=parseInt(document.getElementById("second").value);
        document.getElementById("answer").value=a+b;
}
function sub()
{
    var a=parseInt(document.getElementById("first").value);
    var b=parseInt(document.getElementById("second").value);
    document.getElementById("answer").value=a-b;
}
function mul()
{
    var a=Number(document.getElementById("first").value);
    var b=Number(document.getElementById("second").value);
    document.getElementById("answer").value=a*b;
}
function div()
{
    var a=parseFloat(document.getElementById("first").value);
    var b=parseFloat(document.getElementById("second").value);
    document.getElementById("answer").value=a/b;
}
