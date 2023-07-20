function db(){

   try {
    var bin=parseInt(document.getElementById("first").value);

  

    
    var count=0;
    var num =[];
    for(var i=0;i<50;i++)
        { if( bin>0)
           { num[i]=bin%2;
            if(num[i]==1)
            {
                bin-=1;
                bin=bin/2;
                count++;
            }
            
            else{
                bin=bin/2;
            count++;
            }
           
           }
           else{
               break;
           }
        }
   
    for(var j=count;j>=0;j--)
    {  
                document.getElementById("second").value+=num[j]; 
      
    }
   
    
   } catch (error) {
       alert("error"+Error);
   }  
}
 
function bd()
{   var dec=parseInt(document.getElementById("firstb").value);

    var sum=0,rem,n=1; 
    while(dec>0)
    {     rem=dec%10;
        dec=Math.trunc(dec/10);
       
        for(var i=1; i<=n; i++)
        {
            if(i==1)
            {
                rem=rem*1;
                
            }
            else{
                rem=rem*2;
                
                
                
            }
        }
        n++;
        sum+=rem;
    }
    document.getElementById("secondb").value=sum;
}
function od()
{   var dec=parseInt(document.getElementById("firsto").value);

    var sum=0,rem,n=1; 
    while(dec>0)
    {     rem=dec%10;
        dec=Math.trunc(dec/10);
       
        for(var i=1;i<=n;i++)
        {
            if(i==1)
            {
                rem=rem*1;
                
            }
            else{
                rem=rem*8;
                
                
                
            }
        }
        n++;
        sum+=rem;
    }
    document.getElementById("secondo").value=sum;
}
function dO(){

    try {
     var bin=parseInt(document.getElementById("firstdo").value);
 
   
 
     
     var count=0;
     var num =[];
     for(var i=0;i<50;i++)
         { if( bin>0)
            { num[i]=bin%8;
             bin=Math.trunc(bin/8);
             
             count++;
            
            
            }
            else{
                break;
            }
         }
    
     for(var j=count;j>=0;j--)
     {  
                 document.getElementById("seconddo").value+=num[j]; 
       
     }
    
     
    } catch (err) {
        alert("error"+err);
    }  
 }

 function dh(){

    try {
     var bin=parseInt(document.getElementById("firstdh").value);
 
   
 
     
     var count=0;
     var num =[];
     for(var i=0;i<50;i++)
         { if( bin>0)
            { num[i]=bin%16;
             bin=Math.trunc(bin/16);
             
             count++;
            
            
            }
            else{
                break;
            }
         }
    
     for(var j=count;j>=0;j--)
     {  
                 document.getElementById("seconddh").value+=num[j]; 
       
     }
    
     
    } catch (err) {
        alert("error"+err);
    }  
 }