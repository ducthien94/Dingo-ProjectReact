import { useEffect, useState } from "react";
import firebase from "../firebase";
const Food = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("foods")
      .limit(3)
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        setFood(arrData);
      });
  }, []);
  const Filter = (day) => {
      firebase
        .firestore()
        .collection("foods")
        .where("catagory", "==", day)
        .get()
        .then((snapshot) => {
          let arrData = [];
          snapshot.forEach((doc) => {
            arrData.push({ id: doc.id, ...doc.data() });
          });
          setFood(arrData);
        })
  }
  return (
    <section className="food_menu gray_bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="section_tittle">
              <p>Popular Menu</p>
              <h2>Delicious Food Menu</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="nav nav-tabs food_menu_nav"
              id="myTab"
              role="tablist"
            >
              <button
                id="tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Special"
                aria-selected="false"
                value="Special"
                onClick={(e) => Filter(e.target.value)}
              >
                Special
              </button>
              <button
                id="tab"
                data-toggle="tab"
                href="#Breakfast"
                role="tab"
                aria-controls="Breakfast"
                aria-selected="false"
                value="Breakfast"
                onClick={(e) => Filter(e.target.value)}
              >
                Breakfast
              </button>
              <button
                id="tab"
                data-toggle="tab"
                href="#Breakfast"
                role="tab"
                aria-controls="Breakfast"
                aria-selected="false"
                value="Lunch"
                onClick={(e) => Filter(e.target.value)}
              >
                Lunch
              </button>

              <button
                id="tab"
                data-toggle="tab"
                href="#Dinner"
                role="tab"
                aria-controls="Dinner"
                aria-selected="false"
                value="Dinner"
                onClick={(e) => Filter(e.target.value)}
              >
                Dinner
              </button>

              <button
                id="tab"
                data-toggle="tab"
                href="#Sneaks"
                role="tab"
                aria-controls="Sneaks"
                aria-selected="false"
                value="Sneaks"
                onClick={(e) => Filter(e.target.value)}
              >
                Sneaks
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="nav nav-tabs food_menu_nav"
              id="myTab"
              role="tablist"
            ></div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active single-member"
                id="Special"
                role="tabpanel"
                aria-labelledby="Special-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    {food.map((items) => (
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>{items.title}</h3>
                          <p>{items.intro}</p>
                          <h5>${items.price}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Food;
