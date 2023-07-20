var dec=parseInt(document.getElementById("firstb").value); 
function binary()
{
 
    var sum=0,rem; 
    while(dec>0)
    {     rem=dec%10;
          dec=dec/10;
        for(var i=1;i<=n;i++)
        {
            if(i==1)
            {
                rem=rem*1;
            }
            else{
                rem=rem*2;
            }
        }
        sum+=rem;
    }
    document.getElementById("secondb").value=sum;
}