

    function cal()
    {
    var a=parseFloat(document.getElementById("first").value);
    var b=parseFloat(document.getElementById("second").value);
    var c;
    var operator=document.getElementById("operator").value;
    
    if(operator=="+")
    {
    c=a+b;
    
    }
    else if(operator=="-")
    {
    c=a-b;
    
    }
    else if(operator=="*")
    {
    c=a*b;
    
    }
     else if (operator=="/")
    {
    c=a/b;
    
    }
    
    document.getElementById("answer").value=c;
    
    
    }
    