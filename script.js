
document.querySelectorAll('button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.innerText.includes('Add')){
      btn.innerText='Added ✓'
    }
  })
})
