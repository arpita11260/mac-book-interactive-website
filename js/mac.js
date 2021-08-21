//update mac price:
function updateMacPrice(id,price,stutas) {
    if(stutas == true){
        if(id == 'memory-cost'){
            document.getElementById(id).innerText = price;
        }
        if(id == 'storage-cost'){
            document.getElementById(id).innerText = price;
        }
        if(id == 'delivery-charge'){
            document.getElementById(id).innerText = price;
        }
    }
   calculateTotal();
}


//calculation
function calculateTotal() {
    let bestPrice = document.getElementById('best-price').innerText;
    let memoeyCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    let totalCost = parseInt(bestPrice) + parseInt(memoeyCost)  + parseInt(storageCost) +parseInt(deliveryCharge);

// update on the html
    document.getElementById('total-price').innerText = totalCost;
    document.getElementById('total').innerText = totalCost;
}

//memory part:
document.getElementById('normal-memory').addEventListener('click', function () {
    updateMacPrice('memory-cost', 0, true);
});
document.getElementById('extra-memory').addEventListener('click', function () {
    updateMacPrice('memory-cost', 180, true);
});

//storage part:
document.getElementById('normal-storage').addEventListener('click',function(){
    updateMacPrice('storage-cost', 0, true);
})
document.getElementById('extraSSD-storage').addEventListener('click',function(){
    updateMacPrice('storage-cost', 100, true);
})

document.getElementById('extraTB-storage').addEventListener('click',function(){
    updateMacPrice('storage-cost', 180, true);
})

//delivery part:
document.getElementById('free-delivery').addEventListener('click',function(){
    updateMacPrice('delivery-charge', 0, true);
})
document.getElementById('fast-delivery').addEventListener('click',function(){
    updateMacPrice('delivery-charge', 20, true);
})


// promo part:
document.getElementById('promo-btn').addEventListener('click',function (){
    const promoInput = document.getElementById('promo-input').value;
    console.log(promoInput);
    
    if(promoInput == 'stevekaku'){
        let totalCost = document.getElementById('total-price').innerText;
        let discount = parseInt(totalCost) / 5;
        let discoutAmmount = totalCost - discount;
        document.getElementById('total').innerText = discoutAmmount;

        document.getElementById('promo-input').value= '';
    } 
   else{
       alert('Wrong Promo!!!');

       document.getElementById('promo-input').value= '';
   }

})
