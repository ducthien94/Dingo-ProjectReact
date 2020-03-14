import react, { Component } from "react";
import { render } from "react-dom";
import firebase from "../firebase";
import moment from "react-moment";
import "moment-timezone";
import uuid from "react-uuid";
class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      NoG: "",
      date: "",
      time: "",
      note: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();

    firebase
      .database()
      .ref(`Reservation/` + uuid())
      .set({
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        NoG: this.state.NoG,
        date: this.state.date,
        time: this.state.time,
        note: this.state.note
      })
      .catch(error => console.log(error));
    console.log(this.state);
  };

  render() {
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
                <form onSubmit={this.submitHandler}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Full Name*"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="E-mail*"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-md-6">
                    <select
                        name="NoG"
                        className="form-control"
                        id="Select2"
                        onClick={this.changeHandler}
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
                        name="phone"
                        onChange={this.changeHandler}
                        placeholder="Phone number *"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <div className="input-group date">
                        <input
                          id="datepicker"
                          type="date"
                          name="date"
                          onChange={this.changeHandler}
                          className="form-control"
                          placeholder="Date *"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        name="time"
                        className="form-control"
                        id="Select2"
                        onClick={this.changeHandler}
                      >
                        <option value selected>
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
                        name="note"
                        onChange={this.changeHandler}
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
}

export default Reservation;
