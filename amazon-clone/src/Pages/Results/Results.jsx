import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
function Results() {
  const [results, setResults] = useState([])
  const { categoryName } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  console.log(categoryName)
  useEffect(() => {
  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=> {
    console.log(res)
    setResults(res.data) 
  }).catch((err)=> {
    console.log(err)
  })
  }, [])
   return (
     <Layout>
       <section>
         <h1 style={{ padding: "30px" }}>Results</h1>
         <p style={{ padding: "30px" }}>Catagory / {categoryName}</p>
         <hr />
         {isLoading? (<Loader />
         ):
         (<div className={classes.products__container}>
           {results?.map((product) => (
             <ProductCard 
             key={product.id} 
             product={product}
              renderDesc={false}
              renderAdd={true}
              />
           ))}
         </div>
          )}
       </section>
     </Layout>
   );
}

export default Results