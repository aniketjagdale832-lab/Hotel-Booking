document.addEventListener("DOMContentLoaded", function () {

    // Get logged-in user
    let user =
        JSON.parse(localStorage.getItem("loggedInUser"));


    let profileName =
        document.getElementById("profileName");

    let profileEmail =
        document.getElementById("profileEmail");


    // Show profile information
    if (user) {

        profileName.textContent = user.name;

        profileEmail.textContent = user.email;

    } else {

        profileName.textContent = "-";

        profileEmail.textContent = "-";

    }


    // Get bookings
    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];


    let bookingList =
        document.getElementById("bookingList");


    bookingList.innerHTML = "";


    if (bookings.length === 0) {

        bookingList.innerHTML = `
            <div class="alert alert-info">
                No bookings found.
            </div>
        `;

        return;
    }


    // Display bookings
    bookings.forEach(function (booking, index) {

        bookingList.innerHTML += `

            <div class="card shadow-sm mb-4">

                <div class="card-body">

                    <h4 class="fw-bold text-primary">
                        ${booking.hotelName}
                    </h4>

                    <hr>

                    <p>
                        <strong>Guest Name:</strong>
                        ${booking.guestName}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${booking.email}
                    </p>

                    <p>
                        <strong>Check-in:</strong>
                        ${booking.checkIn}
                    </p>

                    <p>
                        <strong>Check-out:</strong>
                        ${booking.checkOut}
                    </p>

                    <p>
                        <strong>Guests:</strong>
                        ${booking.guests}
                    </p>

                    <p>
                        <strong>Rooms:</strong>
                        ${booking.rooms}
                    </p>

                    <span class="badge bg-success">
                        Booking Confirmed
                    </span>

                    <button
                        class="btn btn-danger btn-sm float-end"
                        onclick="cancelBooking(${index})">

                        Cancel Booking

                    </button>

                </div>

            </div>

        `;

    });

});


function cancelBooking(index) {

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.splice(index, 1);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    location.reload();
}