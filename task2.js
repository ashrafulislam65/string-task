// Count how many times a string has the letter a or A
let str = 'amar shonAr banglA';
let count=0;
for(let i=0;i<=str.length;i++)
{
    if(str[i]==='a'||str[i]==='A')
    {
        count++;
        
    }
    
}
console.log('The string has the letter a or A :'+' '+count+' '+'times');
let count2=0;
for(let j=0;j<=str.length;j++)
{
    if(str[j]==='a')
    {
        count2++;
        
    }
    
}
console.log('The string has the letter a :'+' '+count2+' '+'times');
let count3=0;
for(let k=0;k<=str.length;k++)
    {
        if(str[k]==='A')
        {
            count3++;
            
        }
        
    }
    console.log('The string has the letter A :'+' '+count3+' '+'times');