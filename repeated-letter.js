// Task-1:
// Count how many times a string has the letter a
let str = 'amar shonar bangla ami tomai valobashi.';
console.log(str.includes('a'));
 let count=0;
for(let i=0;i<=str.length;i++)
{
    if(str[i]==='a')
    {
        count++;
        
    }
    
}
console.log('Total letters :'+' '+str.length);
console.log('The string has the letter a :'+' '+count+' '+'times');

