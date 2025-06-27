function fun(op)
  {
    const x=document.getElementById("two");
if (op==="=")
  {
    try{
    x.value=eval(x.value);
      
    }
    catch (e){
      x.value="error";
    }
  }
    else if (op==="C")
      {
        x.value="";
      }
      else if(op=="<-")
      {
        x.value=x.value.slice(0,-1);
      }
       
    else{
     x.value+=op;
      
    } 
  


  }
  document.addEventListener("keydown", function(event) {
    allowed="0123456789+-*/."
    allowed1=["Enter","Delete","Backspace"]
  let k = event.key;
  const x = document.getElementById("two");
    if (allowed.includes(k) || allowed1.includes(k)) 
    {
      
    if (k==="Enter")
      {
        x.value=eval(x.value);
      }
    else if(k==="Backspace") 
    {
    x.value=x.value.slice(0,-1);
    }
    else if(k==="Delete")
      {
        x.value=""
      }
    else{
  x.value += k;
    }
    }
    if(k==="Enter")
      {
        k="=";
      }
    else if(k=="Delete")
      {
        k="C";
      }
      else if(k=="Backspace")
      {
        k="<-";
      }
      const btn=Array.from(document.querySelectorAll(".mybtn"));
  const btn1=btn.find(e=>e.textContent===k)
  if (btn1)
    {
      btn1.classList.add("active");
       setTimeout(()=>btn1.classList.remove("active"), 150);
    }
    
    
});
