function cal()
{
    var a=parseFloat(valid(document.getElementById("first").value));//in this case we couldn't take input value we can only propt enetered value.
    var b=parseFloat(valid(document.getElementById("second").value));
    var c=document.getElementById("operator").value;
    document.getElementById("answer").value=op(a,b,c);
}
function op(a,b,c)
{
    if(c=="+")
    {
        return a+b;
    }
    else if(c=="-")
    {
        return a-b;
    }
    else if(c=="*")
    {
        return a*b;
    }
    else if(c=="/")
    {
        return a/b;
    }
}
function valid(p)
{
    if(p==NaN || p=="")
    {
        alert("Ther is no inputs!!!!");
        return prompt("Enter your inputs");
    }
    else
    {
        return p;
    }
}