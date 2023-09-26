function goHome() {
    window.location='index.html'
    
}
const parent=document.getElementById('parent')

 let dataa =localStorage.getItem('cartArry')
    let array =JSON.parse(dataa) 
   
    function render() {
        for (let i = 0; i < array.length; i++) {

        parent.innerHTML +=`<div>
             <div class = "second">
             <img class="image3" src = "${array[i].img}" alt="">
             <h3><b>Brand</b>: ${array[i].brand}</h3>
             <h4><b>Model</b>: ${array[i].model}</h4>
             <h4><b>Ram</b>: ${array[i].ram}</h4>
             <h4><b>Rom</b>: ${array[i].rom}</h4>
             <h4><b>Camera</b>: ${array[i].camera}</h4>
             <h4><b>Quantity</b>: ${array[i].quantity}</h4>
             <h4><b>Price</b>: ${array[i].price}</h4>
             <h4><b>Total price</b>: ${array[i].price * array[i].quantity}</h4>
             <button onclick = "sub(${i})" class = "btn2">-</button>
             <h4> <b>Quantity</b>:${array[i].quantity}</h4>
             <button onclick = "add(${i})" class = "btn2">+</button><br>
             <button  onclick = "del(${i})" class = "cart">Delete</button>
             </div> 
             </div>
            `
         
            
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