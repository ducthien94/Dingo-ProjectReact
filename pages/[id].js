import Layout from "../components/Layout";
import firebase from "../firebase";


const singleBlog = ({ articles}) => {
  return (
    <Layout>
      <div>
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_iner text-center">
                  <div className="breadcrumb_iner_item">
                    <h2>Blog Single</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb start*/}
        {/*================Blog Area =================*/}
        <section className="blog_area single-post-area section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img className="img-fluid" src={articles.thumbnail} alt />
                  </div>
                  <div className="blog_details">
                    <h2>{articles.title}</h2>
                    <ul className="blog-info-link mt-3 mb-4">
                      <li>
                        <a href="#">
                          <i className="far fa-user" />
                          {articles.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" /> {articles.comments} Comments
                        </a>
                      </li>
                    </ul>
                    <div
                      dangerouslySetInnerHTML={{ __html: articles.content }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        
      </div>
    </Layout>
  );
};

singleBlog.getInitialProps = async function(context) {
  const { id } = context.query;
  let article = await firebase
    .firestore()
    .collection("articles")
    .where("slug", "==", id)
    .get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })
    .catch(() => {
      return {};
    });
  return {
    articles: article[0]
  };
};

export default singleBlog;
