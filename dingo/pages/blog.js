import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';


const Blog= ({posts}) => {
return (
  <Layout title="Blog">
  {/* breadcrumb start*/}
  <section className="breadcrumb breadcrumb_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb_iner text-center">
            <div className="breadcrumb_iner_item">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb start*/}
  {/*================Blog Area =================*/}
  <section className="blog_area section_padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-5 mb-lg-0">
          <div className="blog_left_sidebar">
            {posts.map(post=>(
              <article key={post.id} className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src={post.thumbnail}
                  alt
                />
                <a href="#" className="blog_item_date">
                  <h3>{post.date}</h3>
                  <p>{post.month}</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>{post.title}</h2>
                </a>
                <p>
                  {post.preview}
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="far fa-user" /> {post.author}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-comments" /> {post.comment} Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            ))}
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <i className="ti-angle-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <i className="ti-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Keyword"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Keyword'"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="button">
                        <i className="ti-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_4"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </aside>
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Category</h4>
              <ul className="list cat-list">
                <li>
                  <a href="#" className="d-flex">
                    <p>Resaurant food</p>
                    <p>(37)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Travel news</p>
                    <p>(10)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Inspiration</p>
                    <p>21</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Health Care (21)</p>
                    <p>09</p>
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget popular_post_widget">
              <h3 className="widget_title">Recent Post</h3>
              <div className="media post_item">
                <img src="img/post/post_1.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>From life was you fish...</h3>
                  </a>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/post/post_2.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/post/post_3.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/post/post_4.png" alt="post" />
                <div className="media-body">
                  <a href="single-blog.html">
                    <h3>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </aside>
            <aside className="single_sidebar_widget tag_cloud_widget">
              <h4 className="widget_title">Tag Clouds</h4>
              <ul className="list">
                <li>
                  <a href="#">project</a>
                </li>
                <li>
                  <a href="#">love</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">travel</a>
                </li>
                <li>
                  <a href="#">restaurant</a>
                </li>
                <li>
                  <a href="#">life style</a>
                </li>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">illustration</a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget instagram_feeds">
              <h4 className="widget_title">Instagram Feeds</h4>
              <ul className="instagram_row flex-wrap">
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_5.png"
                      alt
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_6.png"
                      alt
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_7.png"
                      alt
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_8.png"
                      alt
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_9.png"
                      alt
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="img/post/post_10.png"
                      alt
                    />
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget newsletter_widget">
              <h4 className="widget_title">Newsletter</h4>
              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email'"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_4"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Blog Area =================*/}
</Layout>
  );
}
Blog.getInitialProps = async function() {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  return {
    posts:data
  };
};
export default Blog;