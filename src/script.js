var menuItems = 
    ["Television","Rocking Chair","Mango","Sneakers"];
00
var menuPrices = [244.89,68.99,1.99,88.99];

for (i = 0; i < menuItems.length; i++) {
  document.getElementsByClassName('itemName')[i].textContent = menuItems[i];
  document.getElementsByClassName('price')[i].textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(menuPrices[i]);
};

var buttons = document.getElementsByClassName('addItem');
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    getSubtotal();
  });
};

function getSubtotal() {
  var vals = document.getElementsByClassName('input');
  var subtotal = 0;
  for (i = 0; i < vals.length; i++) {
    subtotal += vals[i].value * menuPrices[i];
  }
  document.getElementById('subTot').innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(subtotal);
  document.getElementById('final').addEventListener('click', function() {
    var salesTax = subtotal * 0.06;
    var total = subtotal + salesTax;
    document.getElementById('tax').innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salesTax);
    document.getElementById('saleTax').style.display = "table-row";
    document.getElementById('tot').innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(total);
    document.getElementById('total').style.display = "table-row";
  });
};
