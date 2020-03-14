import React from 'react';
import Layout from "../components/Layout";
import Category from "../components/blogcomp/category";
import firebase from '../firebase'
import Link from 'next/link'
import Moment from 'react-moment';
import 'moment-timezone';

const Blog = ({ articles,items }) => {
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
                {articles.map(post => (
                  <article key={post.id} className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src={post.thumbnail}
                        alt
                      />
                      <a href="#" className="blog_item_date">
                        <h3>{post.date.slice(5, 7)}</h3>
                        <p><Moment format="MMM" >{post.date}</Moment></p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" href="[id]" as={`${post.slug}`}>
                        <h2>{post.title}</h2>
                      </Link>
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
                <Category category={items} />
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

Blog.getInitialProps = async function () {
  let article = await firebase.firestore().collection("articles")
  .orderBy("date", "desc")
    .get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })
  let item = await firebase.firestore().collection("categories")
    .get()
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
  return { 
    articles: article,
    items:item
  };
};

export default Blog;