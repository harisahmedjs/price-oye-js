function goHome() {
    window.location='index.html'
   
}
const parent=document.getElementById('parent')
const total=document.getElementById("total")

 let dataa =localStorage.getItem('cartArry')
    let array =JSON.parse(dataa) 
   
    function render() {
        let Totals=0
        total.innerHTML=""
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                Totals+= array[i].price * array[i].quantity;
        parent.innerHTML +=`<div>
             <div class = "second">
             <h2> ${array[i].brand}</h2>
             <img class="image3" src = "${array[i].img}" alt="">
             <h4><b>Quantity</b>: ${array[i].quantity}</h4>
             <h4><b>Price</b>: ${array[i].price}</h4>
             <h4><b>Total price</b>: ${array[i].price * array[i].quantity}</h4>
             <button onclick = "sub(${i})" class = "but">-</button>
             <h4> ${array[i].quantity}</h4>
             <button onclick = "add(${i})" class = "but">+</button><br>
             <button  onclick = "del(${i})" class = "cart">Delete</button>
             </div> 
             </div>
            `
         
            total.innerHTML = `<h4 class="new">Grand total Price:${Totals} </h4>`;
    }
   
} 
else {
            parent.innerHTML=`<h2 class="empty">No item found...</h2>`
        }
    }
    render()


    
        function sub(i) {
            parent.innerHTML = "";
            array[i].quantity -= 1
            render()
            if (array[i].quantity === 0) {
                parent.innerHTML = ""
                array.splice(i,  1)
                render()
            }
        }
        function del(i) {
            parent.innerHTML = "";
            array.splice(i, 1)
            render()
        }
        function add(i) {
            parent.innerHTML = ''
           array[i].quantity += 1
           render()
        }