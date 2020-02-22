import fetch from "isomorphic-unfetch";

const FoodMenu = ({ data }) => {
//   <div
//     className="tab-pane fade show active single-member"
//     id="Special"
//     role="tabpanel"
//     aria-labelledby="Special-tab"
//   >
//     <div className="row">
//       <div className="col-sm-6 col-lg-6">
//         {/* <div className="single_food_item media">
//           <img
//             src="img/food_menu/single_food_1.png"
//             className="mr-3"
//             alt="..."
//           />
//           <div className="media-body align-self-center">
//             <h3>Pork Sandwich</h3>
//             <p>They're wherein heaven seed hath nothing</p>
//             <h5>$40.00</h5>
//           </div>
//         </div> */}


        
//       </div>
//     </div>
//   </div>;
<div>{data.name}</div>
};

FoodMenu.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:4000/menu/1`);

  const data = await response.json();
  return { data };
};

export default FoodMenu;
