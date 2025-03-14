import React from 'react'
import { catagoryInfos } from './catagoryFullinfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'
function Catagory() {
  return (
   <section className={classes.catagory__container}>
          {
            catagoryInfos.map((infos,index)=> { 
              
              return  <CatagoryCard key={index} data = {infos}/>
                
            })
          }


   </section>
  )
}

export default Catagory
// catagoryFullinfos.js