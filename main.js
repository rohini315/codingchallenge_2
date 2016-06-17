function checkcoupon() {
	var userinput=prompt("Please Enter Your coupon code!")
	var lastchar=userinput.charAt(userinput.length -1)

	if (userinput == 8 && isNaN(lastchar)==false) {
		console.log("Thank you for entering your coupon code!")
	} else {
		alert("Sorry this coupon is not valid!")
		console.log(lastchar)
	}
}

checkcoupon()