import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const FoodMenu = ({ data }) => {
  return (
    <Layout>
      {data.dishes.map((food, index) => {
        return (
          <>
            <div
              className="tab-pane fade show single-member"
              id="Special"
              role="tabpanel"
              aria-labelledby="Special-tab"
            >
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div className="single_food_item media">
                    <img
                      src={food.srcImg}
                      className="mr-3"
                      alt={food.nameFood}
                    />
                    <div className="media-body align-self-center">
                      <h3>{food.nameFood}</h3>
                      <p>{food.contentFood}</p>
                      <h5>${food.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Layout>
  );
};

FoodMenu.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:4000/foodMenu/${query.id}`);

  const data = await response.json();
  return { data };
};

export default FoodMenu;
