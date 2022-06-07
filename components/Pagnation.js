import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

function Pagnation({pages}) {
 let router = useRouter()

/*
 pages give number,base on never we create a array. base on array we create a list elements
 pages= 3
 conver into array [0,1,2]
 base on array create list in array
 
*/

  let pageIntoArray = Array.from(Array(pages).keys())
  

  return (

    <nav aria-label=" my-6">
      <ul className="pagination justify-content-center">
        {
          pageIntoArray.map(page => {
            return <li  key={page} className="page-item p-2">
              <Link href={ page === 0 ? "/" : `/page/${page + 1}` }>
                <a className="page-link" >{page + 1}</a>
              </Link>
            </li>
          })
        }

      </ul>
    </nav>
  )
}

export default Pagnation