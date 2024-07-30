// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useCategory from "../hooks/useCategory";
// import Layout from "../components/Layout/Layout";

// //We are getting all the categories
// //and displaying all the categories
// const Categories = () => {
//   const categories = useCategory();
//   return (
//     <Layout title={"All Categories"}>
//       <div className="container">
//         <div className="row">
//           {categories.map((c) => (
//             <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
//               <Link to={`/category/${c.slug}`} className="btn btn-primary">
//                 {c.name}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Categories;


import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import '../styles/Categories.css' // Import the custom CSS file

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 col-lg-4 col-xl-3 mt-5 mb-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="card category-card">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
