import react, {Component} from 'react'
import { render } from 'react-dom'
const Category=({category})=>{
    return(
    <aside className="single_sidebar_widget post_category_widget">
    <h4 className="widget_title">Category</h4>
    <ul className="list cat-list">
        {category.map(myItem=>(
                  <li key={myItem.id}>
        <a href="#" className="d-flex">
          <p>{myItem.category}</p>
        </a>
      </li>
        ))}
    </ul>
  </aside>
    )
}

export default Category;
  