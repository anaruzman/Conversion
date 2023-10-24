   const content=document.getElementById("text")
const btn=document.getElementById("btn")
const translated=document.getElementById("translated")
btn.onclick=function(){ 
console.log('clicked') 

let x=convert(content.value)
translated.innerHTML=x
}
function convert(txt){
    let bits=[]
    
    for(let i=0;i<txt.length;i++){
             let bit
            if(txt[i]==" "){
                bit="  "
                bits.push(bit)
            }else{
           
            bit=txt.charCodeAt(i).toString(2)
            bits.push(bit)
            }
            
        
    
     }
     let final=bits.join('')
     return final
}