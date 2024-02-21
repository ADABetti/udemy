function sendEmail (firstName, purchasePrice){
   var shipping = 50;
    console.log(`Hi, ${firstName}, thank you for your purchase.
                                    The final price is $${purchasePrice}.
                                    The shipping price is ${shipping}.
                                    The total is ${purchasePrice+shipping}.`)
}

sendEmail("Lucas", 500)