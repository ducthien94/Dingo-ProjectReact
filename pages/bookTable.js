import Layout from "../components/Layout";
import FormExample from "../components/reservation_form";
export default function Booking() {
  return (
    <Layout>
   <div className="mt-6">
        <section className="contact-section section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ">
                <FormExample></FormExample>
              </div>
              <div className="col-lg-4">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home" />
                  </span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet" />
                  </span>
                  <div className="media-body">
                    <h3>00 (440) 9865 562</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email" />
                  </span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
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
