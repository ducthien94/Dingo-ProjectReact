import Layout from "../components/Layout";
import firebase from "../firebase";
import Reservation from "../components/reservation_form";
import Food from "../components/menu_filter";
const Index = ({ chefs }) => {
  return (
    <>
      <div>
        <Layout title="Home">
          {/* banner part start*/}
          <section className="banner_part">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h5>Expensive but the best</h5>
                      <h1>Deliciousness jumping into the mouth</h1>
                      <p>
                        Together creeping heaven upon third dominion be upon
                        won't darkness rule land behold it created good saw
                        after she'd Our set living. Signs midst dominion
                        creepeth morning
                      </p>
                      <div className="banner_btn">
                        <div className="banner_btn_iner">
                          <a href="#" className="btn_2">
                            Reservation{" "}
                            <img src="/img/icon/left_1.svg" alt="icon" />
                          </a>
                        </div>
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=_Up9g2iRkxE"
                          className="popup-youtube video_popup"
                          alt="true"
                        >
                          <span>
                            <img src="/img/icon/play.svg" alt="true" />
                          </span>{" "}
                          Watch our story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* banner part start*/}
          {/*::exclusive_item_part start::*/}
          <section className="exclusive_item_part blog_item_section">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="section_tittle">
                    <p>Popular Dishes</p>
                    <h2>Our Exclusive Items</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/food_item/food_item_1.png" alt="true" />
                    </div>
                    <div className="single_blog_text">
                      <h3>Indian Burger</h3>
                      <p>
                        Was brean shed moveth day yielding tree yielding day
                        were female and{" "}
                      </p>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_2.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/food_item/food_item_2.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <h3>Cremy Noodles</h3>
                      <p>
                        Was brean shed moveth day yielding tree yielding day
                        were female and{" "}
                      </p>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_2.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/food_item/food_item_3.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <h3>Honey Meat</h3>
                      <p>
                        Was brean shed moveth day yielding tree yielding day
                        were female and{" "}
                      </p>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_2.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/food_item/food_item_1.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <h3>Cremy Noodles</h3>
                      <p>
                        Was brean shed moveth day yielding tree yielding day
                        were female and{" "}
                      </p>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_2.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*::exclusive_item_part end::*/}
          {/* about part start*/}
          <section className="about_part">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-sm-4 col-lg-5 offset-lg-1">
                  <div className="about_img">
                    <img src="/img/about.png" alt />
                  </div>
                </div>
                <div className="col-sm-8 col-lg-4">
                  <div className="about_text">
                    <h5>Our History</h5>
                    <h2>Where The Food’s As Good As The Root Beer.</h2>
                    <h4>Satisfying people hunger for simple pleasures</h4>
                    <p>
                      May over was. Be signs two. Spirit. Brought said dry own
                      firmament lesser best sixth deep abundantly bearing, him,
                      gathering you blessed bearing he our position best ticket
                      in month hole deep{" "}
                    </p>
                    <a href="#" className="btn_3">
                      Read More <img src="/img/icon/left_2.svg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about part end*/}
          {/* intro_video_bg start*/}
          <section className="intro_video_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="intro_video_iner text-center">
                    <h2>Expect The Best</h2>
                    <div className="intro_video_icon">
                      <a
                        target="_blank"
                        id="play-video_1"
                        className="video-play-button popup-youtube"
                        href="https://www.youtube.com/watch?v=A9DLJKU0YGw"
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
          {/* food_menu start*/}
          <Food></Food>
          {/* food_menu part end*/}
          {/*::chefs_part start::*/}
          <section className="chefs_part blog_item_section section_padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="section_tittle">
                    <p>Team Member</p>
                    <h2>Our Experience Chefs</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {chefs.map((chef) => (
                  <div key={chef.id} className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                      <div className="single_blog_img">
                        <img src={chef.avatar} alt />
                      </div>
                      <div className="single_blog_text text-center">
                        <h3>{chef.name}</h3>
                        <p>{chef.roll}</p>
                        <div className="social_icon">
                          <a href="#">
                            {" "}
                            <i className="ti-facebook" />{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <i className="ti-twitter-alt" />{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <i className="ti-instagram" />{" "}
                          </a>
                          <a href="#">
                            {" "}
                            <i className="ti-skype" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*::chefs_part end::*/}
          {/*::regervation_part start::*/}
          <Reservation />
          {/*::regervation_part end::*/}
          {/*::review_part start::*/}
          <section className="review_part gray_bg section_padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="section_tittle">
                    <p>Testimonials</p>
                    <h2>Customers Feedback</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11">
                  <div className="client_review_part owl-carousel">
                    <div className="client_review_single media">
                      <div className="client_img align-self-center">
                        <img src="/img/client/client_1.png" alt />
                      </div>
                      <div className="client_review_text media-body">
                        <p>
                          Also made from. Give may saying meat there from heaven
                          it lights face had is gathered god dea earth light for
                          life may itself shall whales made they're blessed
                          whales also made from give may saying meat. There from
                          heaven it lights face had amazing place
                        </p>
                        <h4>
                          Mosan Cameron, <span>Executive of fedex</span>
                        </h4>
                      </div>
                    </div>
                    <div className="client_review_single media">
                      <div className="client_img align-self-center">
                        <img src="/img/client/client_1.png " alt />
                      </div>
                      <div className="client_review_text media-body">
                        <p>
                          Also made from. Give may saying meat there from heaven
                          it lights face had is gathered god dea earth light for
                          life may itself shall whales made they're blessed
                          whales also made from give may saying meat. There from
                          heaven it lights face had amazing place
                        </p>
                        <h4>
                          Mosan Cameron, <span>Executive of fedex</span>
                        </h4>
                      </div>
                    </div>
                    <div className="client_review_single media">
                      <div className="client_img align-self-center">
                        <img src="/img/client/client_1.png" alt />
                      </div>
                      <div className="client_review_text media-body">
                        <p>
                          Also made from. Give may saying meat there from heaven
                          it lights face had is gathered god dea earth light for
                          life may itself shall whales made they're blessed
                          whales also made from give may saying meat. There from
                          heaven it lights face had amazing place
                        </p>
                        <h4>
                          Mosan Cameron, <span>Executive of fedex</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*::review_part end::*/}
          {/*::exclusive_item_part start::*/}
          <section className="blog_item_section blog_section section_padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="section_tittle">
                    <p>Recent News</p>
                    <h2>Latest From Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/blog/blog_1.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <div className="date">
                        <a href="#" className="date_item">
                          Apr 06, 2019{" "}
                        </a>
                        <a href="#" className="date_item">
                          {" "}
                          <span>#</span> Food News{" "}
                        </a>
                      </div>
                      <h3>
                        <a href="blog.html">
                          Adama kind deep gatherin first over fter his great
                        </a>
                      </h3>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_1.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/blog/blog_2.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <div className="date">
                        <a href="#" className="date_item">
                          Apr 06, 2019{" "}
                        </a>
                        <a href="#" className="date_item">
                          {" "}
                          <span>#</span> Food News{" "}
                        </a>
                      </div>
                      <h3>
                        <a href="blog.html">
                          Adama kind deep gatherin first over fter his great
                        </a>
                      </h3>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_1.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/blog/blog_3.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <div className="date">
                        <a href="#" className="date_item">
                          Apr 06, 2019{" "}
                        </a>
                        <a href="#" className="date_item">
                          {" "}
                          <span>#</span> Food News{" "}
                        </a>
                      </div>
                      <h3>
                        <a href="blog.html">
                          Adama kind deep gatherin first over fter his great
                        </a>
                      </h3>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_1.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/img/blog/blog_1.png" alt />
                    </div>
                    <div className="single_blog_text">
                      <div className="date">
                        <a href="#" className="date_item">
                          Apr 06, 2019{" "}
                        </a>
                        <a href="#" className="date_item">
                          {" "}
                          <span>#</span> Food News{" "}
                        </a>
                      </div>
                      <h3>
                        <a href="blog.html">
                          Adama kind deep gatherin first over fter his great
                        </a>
                      </h3>
                      <a href="#" className="btn_3">
                        Read More <img src="/img/icon/left_1.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*::exclusive_item_part end::*/}
        </Layout>
      </div>
    </>
  );
};
Index.getInitialProps = async function () {
  let menu = await firebase
    .firestore()
    .collection("foods")
    .limit(3)
    .orderBy("title", "asc")
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    });
  let chef = await firebase
    .firestore()
    .collection("chefs")
    .limit(3)
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });
  return {
    foods: menu,
    chefs: chef,
  };
};
export default Index;
