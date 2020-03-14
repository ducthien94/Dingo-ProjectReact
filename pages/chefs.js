import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import firebase from '../firebase'
const Chefs = ({chefs}) => {
  console.log(chefs)
  return (
    <Layout>
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
            {chefs.map(chef => {
              return (
                <div key={chef.id} className="col-sm-6 col-lg-4">
                <div className="single_blog_item">
                  <div className="single_blog_img">
                    <img src={chef.avatar} alt={chef.name} />
                  </div>
                  <div className="single_blog_text text-center">
                    <h3>{chef.name}</h3>
                    <p>{chef.level}</p>
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
              )
            })}
            <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
              <div className="single_blog_item">
                <div className="single_blog_img">
                  <img src="img/team/chefs_1.png" alt />
                </div>
                <div className="single_blog_text text-center">
                  <h3>Justin Stuard</h3>
                  <p>Chef Master</p>
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
          </div>
        </div>
      </section>
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
}

Chefs.getInitialProps = async function() {
  let chef = await firebase.firestore().collection("chefs").limit(3).get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });
  return { chefs: chef};
};

export default Chefs;
