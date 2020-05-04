import { useState } from "react";
import firebase from "../firebase";
import Moment from "react-moment";
import { useRouter } from 'next/router'
import "moment-timezone";
function Reservation() {
  const Router = useRouter()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [nog, setNog] = useState("");
  const [date, setDate] = useState("");
  const status="Pending";
  
  const submitHandler = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("reservation")
      .add({
        name: name,
        phone: phone,
        email: email,
        time: time,
        quantity:nog,
        note: note,
        date: date,
        status:status
      })
      .catch(error => console.log(error));
      Router.push("/success")
  };
  return (
    <section className="regervation_part section_padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="section_tittle">
              <p>Reservation</p>
              <h2>Book A Table</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="regervation_part_iner">
              <form onSubmit={submitHandler}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      value={name}
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Full Name*"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      id="inputPassword4"
                      placeholder="E-mail*"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      value={nog}
                      className="form-control"
                      id="Select2"
                      onChange={(e) => setNog(e.target.value)}
                      required
                    >
                      <option value selected>
                        Number of Guests *
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      id="pnone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number *"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <div className="input-group date">
                      <input
                        id="datepicker"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-control"
                        placeholder="Date *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      value={time}
                      className="form-control"
                      id="Select2"
                      onChange={(e) => setTime(e.target.value)}
                      
                    >
                      <option value selected required>
                        Time *
                      </option>
                      <option>8 AM TO 10AM</option>
                      <option>10 AM TO 12PM</option>
                      <option>12PM TO 2PM</option>
                      <option>2PM TO 4PM</option>
                      <option>4PM TO 6PM</option>
                      <option>6PM TO 8PM</option>
                      <option>4PM TO 10PM</option>
                      <option>10PM TO 12PM</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="pnone"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Note"
                    />
                  </div>
                </div>
                <div className="regerv_btn">
                  <button type="submit" className="btn_4">
                    Book A Table
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
