const hour = new Date().getHours();
    let message;
    if(hour < 10)
    {
        message = "Good Morning!";
    }
    else if(hour <= 16)
    {
        message = "Good Afternoon!";
    }
    else
    {
        message = "Good Evening";
    }
    document.getElementById("if").innerHTML = message;

    function myFunction() {
        alert("Thank you, your message has been sent. I will get back to you as soon as I can. Click OK to go back.");
      }
      /*
      R158	1.4.13 (AA)	Popup-funktioner ska kunna hanteras och stängas av alla
      Här tydliggjorde jag hur detta popup-fönster hanteras och på vilket sätt man kommer tillbaka till sidan.
      */

    