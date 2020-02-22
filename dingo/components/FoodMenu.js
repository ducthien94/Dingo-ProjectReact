import Link from "next/link";

// const FoodMenuNav = ({ food }) => {
//   return (
//     <>
//       <Link href={`/menu?id=${food.foodCategory}`}>
//         <a>{food.foodCategory}</a>
//       </Link>
//     </>
//   );
// };

export default ({ food }) => (
  <>
    <Link href={`/menu?id=${food.foodCategory}`}>
      <a>{food.foodCategory}</a>
    </Link>
  </>
);
