document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();


    // Check login
    let loggedInUser = localStorage.getItem("loggedInUser");


    // If user is not logged in
    if (!loggedInUser) {

        alert("Please login first to book the hotel.");

        window.location.href = "login.html";

        return;
    }


    // Get booking data

    let hotelName = document.getElementById("hotelName").value;
    let guestName = document.getElementById("guestName").value;
    let email = document.getElementById("email").value;
    let checkIn = document.getElementById("checkIn").value;
    let checkOut = document.getElementById("checkOut").value;
    let guests = document.getElementById("guests").value;
    let rooms = document.getElementById("rooms").value;


    // Create booking object

    let booking = {

        hotelName: hotelName,
        guestName: guestName,
        email: email,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        rooms: rooms,
        bookingDate: new Date().toLocaleDateString()

    };


    // Get old bookings

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];


    // Add new booking

    bookings.push(booking);


    // Save booking

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );


    alert("Hotel booked successfully!");


    // Open profile

    window.location.href = "profile.html";

});