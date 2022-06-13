/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/

/* Sberbank Popup */

function SberPopup() {
    ipayCheckout({
            currency: 'RUB',
            order_number: '',
            description: ''
        },
        function (order) {
            showSuccessfulPurchase(order)
        },
        function (order) {
            showFailurefulPurchase(order)
        })
}


