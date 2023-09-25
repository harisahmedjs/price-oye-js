const cartAdditem = document.getElementById('father');
const totalCartPrice = document.getElementById('totalBill');



let retString = localStorage.getItem("cartArry")
let retArray = JSON.parse(retString)

render()

function render() {
    cartAdditem.innerHTML = ""
    for (let i = 0; i < retArray.length; i++) {

        retArray[i].TotalPrice = + `${retArray[i].price * retArray[i].Quantity}`
        

        cartAdditem.innerHTML += `<div class="second"><h3>${retArray[i].brand}</h3>
        <img src="${retArray[i].img}" class="image3">
        <h4>Model:${retArray[i].model}</h4>
        <h4>Ram:${retArray[i].ram} Gb</h4>
        <h4>Rom:${retArray[i].rom}Gb</h4>
        <h4>Camra:${retArray[i].camera}</h4>
        <h4>Price: ${retArray[i].price}</h4>
        <h4>Quantity: ${retArray[i].Quantity}</h4>
        <h4>TotlePrice: ${retArray[i].TotalPrice}</h4>
        <button onclick="delte(${i})" class="cart">Delete</button>
        <button onclick="add(${i})" class="less">+</button>
        <span class="whi">${retArray[i].Quantity}</span>
        <button onclick="sub(${i})" class="less">-</button>
        </div>
        `
    }
    console.log(retArray);
}

function add(index) {
    retArray[index].Quantity += 1
    render()
}
function sub(index) {
    retArray[index].Quantity -= 1
    if(retArray[index].Quantity===0){
        retArray.splice(index,1)
    }
    render()
}




function delte(index) {

    retArray.splice(index, 1);

    
    render()
}


function gotohome() {
    window.location = "./index.html";

}