alert('welcome to TFED store');
  document.write("<pre>")
var user_name = prompt('please enter your name')
  document.write('welcom ' + user_name);
   console.log('welcom ' + user_name);

document.write("<pre>")
  document.write('<h3> if want to buy go to contact us  </h3>');
  document.write("<pre>")
document.write('<p> THIS IS OUR PRODUCT  </p>');
 var your_device = prompt('please enter a device type (TV Screen , Labtop)?')
if(your_device =='TV Screen')
{
  var image = '<img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2073/2073039_xcv1a.jpg" alt= "TV"/>';
    document.write("<pre>")
  document.write(image);
  document.write("<pre>")
  var price= 400;
    document.write('the price is ' + price + 'JD');
}else if(your_device =='Labtop')
{
  var image2 = '<img src="image/images.jpg " alt= "Labtop"/>';
  document.write("<pre>")
  document.write(image2);
    document.write("<pre>")
    var price= 700;
    document.write('the price is ' + price + 'JD');
}
var txt;
var r = confirm("Press 'OK' if you want to see the product 'cancel' if not  ");
if (r == true) {
  txt = "contact us on 078000000";
} else {
  txt = "welcom at our stor";
}
