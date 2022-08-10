
//第一題：
/*var arr="shu";

for(i=1;i<2;i++)
{
    if("A"<=arr.charCodeAt(0)&& >="Z")
    {
        alert("首寫字母為大寫");
    }
    else
    {
        alert("首寫字母微小寫");
    }
}*/

//第二題：
/*var arr=1;

while(true)
{
    alert("哈哈關不掉!");
}*/

//第三題：
/*var S=prompt("輸入層級");

for(let i=1;i<=S;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write("★");
    }
    document.write("<br>");

}*/

/*var S=prompt("輸入層級");

for(let i=S;i>=1;i--)
{
    for(let j=i;j>=1;j--)
    {
        document.write("★");
    }
    document.write("<br>");

}*/

//第四題：
/*var s=prompt("輸入星座");
switch (new Date().getDay())
{
    case 0:
        document.write("不錯");
    break;
    case 1:
        document.write("不錯");
    break;
    case 2:
        document.write("不錯");
    break;
    case 3:
        document.write("不錯");
    break;
    case 4:
        document.write("不錯");
    break;
    case 5:
        document.write("不錯");
    break;
    case 6:
        document.write("不錯");
    break;

}*/

//第五題：
/*var arr=[1,5,2,6,4,3,7,8,9,2,1,5,4,6];
var sum=0;
for(i=0;i<=arr.length;i++)
{
    if(arr[i]<3)
    {
        document.write(arr[i]);
        sum+=1;
        document.write("<br>");
    }
    
}
document.writeln("計算器："+sum);*/


function chechPrime(number)
{
    for(i=2;i<n;i++)
    {
        if(n%i==0)
        {
            sum+=1;
        }
        if(sum!=0)
        {
            pr_bool=false;
        }
        
    }
    return;
}

function sum(arrSum)
{
    var Sum=0;
    for(i=0;i<arrSum.length;i++)
    {
        Sum+=arrSum[i];
    }
    return Sum;
}

//第六題：
while(true)
{   
    var sum=0;
    var pr_bool=true;

    while(true)
    {
        var n=prompt("輸入數字，並查詢此數字是否為質數?");
        if(n!="")
        {
            break;
        }
    }
   
    chechPrime(n);
    alert(pr_bool);

}

//第七題：
/*
var arr01=[1,2,3];
var arr02=[-1,1,2,-2,3,-3];
var Arrsum01=sum(arr01);
var Arrsum02=sum(arr02);

alert("arr01："+Arrsum01+"\narr02："+Arrsum02);
*/
