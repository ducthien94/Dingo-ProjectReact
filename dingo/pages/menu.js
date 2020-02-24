import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import FoodMenu from "../components/FoodMenu";

const Menu = ({ infoPage, data }) => {
  const title = infoPage.title;
  const foodMenu = data;

  return (
    <Layout title={title}>
      {/* breadcrumb start*/}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
      {/*::chefs_part start::*/}
      {/* food_menu start*/}
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
                {foodMenu.map((food, index) => {
                  return (
                    
                    // <a
                    //   key={index}
                    //   className={
                    //     useRouter().pathname + food.pathName ===
                    //     food.pathNameFoodCategory
                    //       ? "active"
                    //       : null
                    //   }
                    //   id={food.idFoodCategory}
                    //   data-toggle="tab"
                    //   href={food.pathName}
                    //   role="tab"
                    //   aria-controls={food.foodCategory}
                    //   aria-selected="false"
                    // >
                    //   {food.foodCategory}{" "}
                    //   <img src="img/icon/play.svg" alt="play" />
                    // </a>  

                    

                  <FoodMenu key={index} food={food} />
                    
                    
                    
                    );
                })}

                
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                {/* <div
                  className="tab-pane fade show active single-member"
                  id="Special"
                  role="tabpanel"
                  aria-labelledby="Special-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div
                  className="tab-pane fade single-member"
                  id="Breakfast"
                  role="tabpanel"
                  aria-labelledby="Breakfast-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Launch"
                  role="tabpanel"
                  aria-labelledby="Launch-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Dinner"
                  role="tabpanel"
                  aria-labelledby="Dinner-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Sneaks"
                  role="tabpanel"
                  aria-labelledby="Sneaks-tab"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_1.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pork Sandwich</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_2.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Roasted Marrow</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_3.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Summer Cooking</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_4.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Easter Delight</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_5.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Tiener Schnitze</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="img/food_menu/single_food_6.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chicken Roast</h3>
                          <p>They're wherein heaven seed hath nothing</p>
                          <h5>$40.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* food_menu part end*/}
      {/*::chefs_part end::*/}
      {/* intro_video_bg start*/}
      <section className="intro_video_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro_video_iner text-center">
                <h2>Expect The Best</h2>
                <div className="intro_video_icon">
                  <a
                    id="play-video_1"
                    className="video-play-button popup-youtube"
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  >
                    <span className="ti-control-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro_video_bg part start*/}
    </Layout>
  );
};

Menu.getInitialProps = async function() {
  const res = await fetch("http://localhost:4000/menu/1");
  const res2 = await fetch("http://localhost:4000/foodMenu");
  const infoPage = await res.json();
  const data = await res2.json();

  return {
    infoPage, data
  };
};

export default Menu;
