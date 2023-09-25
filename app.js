const first = document.querySelector('#father')


const phones = [
    {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:159000,
    },
    {
        brand: 'Xiomi',
        img:"https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 31999,
    },
    {
        brand: 'Infinix',
        img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        Ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 34999,
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 39999 ,
    },
    {
        brand: 'Iphone',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 234999,
    },
    {
        brand: 'Oppo',
        img:"https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img:"https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price:26999 ,
    },
    {
        brand: 'Huawei',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price:26999 ,
    },
    {
        brand: 'Xaomi',
        img:"https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price:26999 ,
    },


]



for(let i = 0; i<phones.length;i++){
    first.innerHTML+=`<div class="second"><h2>${phones[i].brand}</h2>
    <img src="${phones[i].img}" class="image3">
    <h4>Model:${phones[i].model}</h4>
    <h4>Ram:${phones[i].ram} Gb</h4>
    <h4>Rom:${phones[i].rom}Gb</h4>
    <h4>Camera:${phones[i].camera}</h4>
    <h4>Price: ${phones[i].price}</h4>
    <button  onclick="addcart(${i})" class="cart">Add To Cart</button>
    </div>`
}

 const cartArry=[]

function addcart(index) {
    if (cartArry.includes==phones[index]) {
        
        for (let i = 0; i < cartArry.length; i++) {
            if(cartArry[i]===phones[index]){
                cartArry[i].quantity+=1
            }
            
        }
    } else {
        
             Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
        phones[index].quantity=1
        cartArry.push(phones[index])
    }
    console.log(cartArry);
}



function gotoCart() {
    const cartItems = JSON.stringify(cartArry);
    localStorage.setItem('cartArry', cartItems)
    window.location = "./cart.html";
}
