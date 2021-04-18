alert('welcome to TFED store');
  document.write("<pre>");

function username (user_name)
{
var user_name = prompt('please enter your name')
  document.write('welcom ' + user_name);
   console.log('welcom ' + user_name);
}
username('');
document.write("<pre>");
//var user_name = prompt('please enter your name')
  //document.write('welcom ' + user_name);
  // console.log('welcom ' + user_name);
  // document.write("<pre>");
//

var your_device = prompt('please enter a device type (TV Screen , Labtop)?')

while (your_device !== 'TV Screen' && your_device !== 'Labtop') {
  your_device = prompt('please enter a device type (TV Screen , Labtop)?');
}
console.log(your_device);

var txt;
var r = confirm("Press 'OK' if you want to see the product 'cancel' if not  ");
if (r == true) {
  txt = "contact us on 078000000";

var devices_number= prompt('how many device do you want to Buy?');
for (var i = 1; i <= devices_number ; i++) 
{ 
  if(your_device =='TV Screen')
  {
    var image = '<img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2073/2073039_xcv1a.jpg" alt= "TV"/>';
    document.write("<pre>");
    document.write(image);
    document.write("<pre>");
    var price_factor= 400;
        
  }  
   else if(your_device =='Labtop')
  {
   var image2 = '<img src="image/images.jpg" alt= "Labtop"/>';
   document.write("<pre>");
   document.write(image2);
    document.write("<pre>");
    var price= 700;
  }

}

function total_price(price)
{
var price= price_factor*devices_number;
document.write('The Total Price is ' +  price + 'JD');
document.write("<pre>");
document.write('<h3> if want to buy go to contact us  </h3>');
}
total_price();

} else {
  txt = "welcom at our stor";
  document.write('<p1> ^_^ You are Losing Us ^_^  </p1>');
}

  
