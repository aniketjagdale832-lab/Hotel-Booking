// ===============================booking=========================================

document.getElementById("bookingForm").addEventListener("submit", function (event) {

    event.preventDefault();

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
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];


    // Add new booking
    bookings.push(booking);


    // Save bookings
    localStorage.setItem("bookings", JSON.stringify(bookings));


    alert("Hotel booked successfully!");


    // Open profile page
    window.location.href = "profile.html";

});




// ===========================Profile=====================================
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

let bookingList = document.getElementById("bookingList");

let profileName = document.getElementById("profileName");

let profileEmail = document.getElementById("profileEmail");


if (bookings.length === 0) {

    bookingList.innerHTML = `
    
        <div class="alert alert-info text-center">

            <h5>No bookings found</h5>

            <p class="mb-3">
                You have not booked any hotel yet.
            </p>

            <a href="booking.html" class="btn btn-primary">
                Book Hotel
            </a>

        </div>
    
    `;

}
else {

    // Show latest user's information

    profileName.textContent = bookings[bookings.length - 1].guestName;

    profileEmail.textContent = bookings[bookings.length - 1].email;


    // Display all bookings

    bookings.forEach(function (booking, index) {

        bookingList.innerHTML += `

            <div class="card shadow-sm border-0 mb-4">

                <div class="card-body p-4">

                    <div class="row">

                        <div class="col-md-8">

                            <h4 class="fw-bold text-primary">
                                ${booking.hotelName}
                            </h4>

                            <p class="mb-2">
                                <strong>Guest:</strong>
                                ${booking.guestName}
                            </p>

                            <p class="mb-2">
                                <strong>Email:</strong>
                                ${booking.email}
                            </p>

                            <p class="mb-2">
                                <strong>Check-in:</strong>
                                ${booking.checkIn}
                            </p>

                            <p class="mb-2">
                                <strong>Check-out:</strong>
                                ${booking.checkOut}
                            </p>

                            <p class="mb-2">
                                <strong>Guests:</strong>
                                ${booking.guests}
                            </p>

                            <p class="mb-2">
                                <strong>Rooms:</strong>
                                ${booking.rooms}
                            </p>

                            <p class="text-muted mb-0">
                                Booked on: ${booking.bookingDate}
                            </p>

                        </div>


                        <div class="col-md-4 text-md-end mt-3 mt-md-0">

                            <span class="badge text-bg-success fs-6">
                                Booking Confirmed
                            </span>

                            <br>

                            <button
                                class="btn btn-outline-danger mt-3"
                                onclick="cancelBooking(${index})">

                                Cancel Booking

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });

}

function cancelBooking(index) {

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.splice(index, 1);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking cancelled successfully!");

    location.reload();

}