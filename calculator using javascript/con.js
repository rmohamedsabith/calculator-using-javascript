function display()
{
    var a=parseInt(document.getElementById("first").value);
    var b=document.getElementById("symbols").value;
    alert(b);
    var c;
    var count=0;
    var num =[];
    if(b=="bin")
    {
     
            for(var i=0;i<50;i++)
            { if( a >  0)
            { num[i]=a%2;
                if(num[i]==1)
                {
                    a-=1;
                    a=a/2;
                    count++;
                }
                
                else{
                    a=a/2;
                count++;
                }
            
            }
            else{
                break;
            }
            }
    
            document.querySelector("span").style.color="darkgreen",document.querySelector("span").innerHTML="Binary Value:- ";
        }
    else if(b=="hex")
    {
       
        for(var i=0;i<50;i++)
            { if( a>0)
                { num[i]=a%16;
                a=Math.trunc(a/16);
                
                count++;
                
                
                }
                else{
                    break;
                }
            
        
        }
        document.querySelector("span").style.color="pink",document.querySelector("span").innerHTML="Hexa Value:- ";
    }
    else if(b=="oct")
    {
       
            for(var i=0;i<50;i++)
                { if( a>0)
                { num[i]=a%8;
                    a=Math.trunc(a/8);
                    
                    count++;
                
                
                }
                else{
                    break;
                }
                }
                document.querySelector("span").style.color="red",document.querySelector("span").innerHTML="Octal Value:- ";
                

        }
    for(var j=count;j>=0;j--)
        {  
            document.getElementById("second").value+=num[j]; 
        
        }
    

}