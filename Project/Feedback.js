function sendMessage(){
		(function(){
			emailjs.init("M4FHC6JNdl6JqxTL0");
		})();

		var serviceID = "service_7j1n5zo";
		var templateID = "template_043d87n";

		var params = {
			sendername: document.getElementById("name").value,
			senderemail: document.getElementById("email").value,
			subject: document.getElementById("subject").value,
			message: document.getElementById("message").value
		};

		emailjs.send(serviceID, templateID, params)
		.then( res => {
			Swal.fire({
			  title: "Success!",
			  text: "Message sent succesfully",
			  icon: "success"
		});
	})
	.catch();
}