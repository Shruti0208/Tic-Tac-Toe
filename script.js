
var cur=0;
var arr=[0,0,0,0,0,0,0,0,0];
var n=document.querySelectorAll(".cell").length;
for(let i=0;i<n;i++)
{   if(arr[i]==0)
    { document.querySelectorAll(".cell")[i].addEventListener("click",function()
    {
        if(cur%2==0)
        {   
            document.querySelectorAll(".cell")[i].innerHTML="O";
            arr[i]=1;
            cur++;
        }
        else{
           
            document.querySelectorAll(".cell")[i].innerHTML="X";
            arr[i]=-1;
            cur++;
        }
        if(cur>=5)
        {
            win();
        }
    });
}
}

function win()
{
    if(arr[0]==arr[1] && arr[1]==arr[2] || arr[0]==arr[4]&&arr[4]==arr[8] || arr[0]==arr[3] && arr[3]==arr[6])
    {
        if(arr[0]==1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[0]==-1){
            winningMessage.innerHTML="Player 1 wins";
        }
    }
    else if(arr[3]==arr[4] && arr[4]==arr[5])
    {
        if(arr[3]==1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[3]==-1){
            winningMessage.innerHTML="Player 1 wins";
        }
    }
    else if(arr[6]==arr[7]&& arr[7]==arr[8])
    {
        if(arr[6]==1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[6]==-1){
            winningMessage.innerHTML="Player 1 wins";
        }
    }
    else if(arr[1]==arr[4] && arr[4]==arr[7])
    {
        if(arr[1]===1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[1]==-1){
            winningMessage.innerHTML="Player 1 wins";
        }   
    }
    else if(arr[2]==arr[5] && arr[5]==arr[8])
    {
        if(arr[2]===1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[2]==-1){
            winningMessage.innerHTML="Player 1 wins";
        }   
    }
    else if(arr[2]==arr[4] && arr[4]==arr[6])
    {
        if(arr[2]===1)
        {
            winningMessage.innerHTML="Player 2 wins";
        }
        else if(arr[2]==-1){
            winningMessage.innerHTML="Player 1 wins";
        } 
    }

}
document.querySelector(".game-restart").addEventListener("click",restart);
function restart()
{  
    for(let i=0;i<n;i++)
    {   arr[i]=0;
        document.querySelectorAll(".cell")[i].innerHTML="";
        winningMessage.innerHTML="";
    }
}
