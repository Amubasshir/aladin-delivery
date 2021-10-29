import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Booking = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch('/service.json')
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const filterService = booking.filter((sr) => sr.id == bookingId);
  const sd = filterService[0];
  console.log(sd);

  return (
    <div className="pb-5   ">
      <div className="booking-form">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div class="row  ">
            <div class="col-md-12 login-form-1">
              <h3>Book Your Product</h3>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Address"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  placeholder="selected date"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder=" short description"
                  value=""
                />
              </div>

              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Booking" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Booking;
