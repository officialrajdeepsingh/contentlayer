import Link from 'next/link'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";

export default function PostPage({ post }) {
  const date = new Date(post.date)
  const imageMeta= post.images.map(
      image  =>  {
       const imageUrl =  ImageUrl(image)
        return {
        url: imageUrl,
        width: 1224,
        height: 724,
        alt: post.title,
        type: 'image/jpeg',
      }
     }
    )

   
  return (
    <>
     <NextSeo
        title={post.title} 
        description={post.summary}
        openGraph={{
          url: 'https:officialrajdeepsingh.dev',
          title: post.title,
          description: post.summary ,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [
              'https://officialrajdeepsingh.dev/pages/about',
            ],
            tags: post.tags,
          },
          images: imageMeta,
          site_name: 'Rajdeep Singh',
        }}      
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className='card card-page'>
              <a href={`/blog/${post.slug}`} > <img className="card-img-top" src={ImageUrl(post.image)} alt="..." /></a>

              <h1 className='post-title mt-2 p-2'>{post.title}</h1>
              <div className='post-date m-1 p-2'>

                <div><h6>{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`} </h6>  </div>
                <div> {
                  post.categories.map(
                    category => {

                      const slug = slugify(category)

                      return (<Link key={category} href={`/category/${slug}`}>
                        <a className='btn'>
                          <h6 className=' post-title'>#{category}</h6>
                        </a>
                      </Link>)
                    }
                  )
                } </div>
              </div>
              <div className='post-body p-5 m-auto' dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export async function getStaticPaths() {

  
  
  const posts= allPosts.filter(
    (post, i) =>{
      return post.draft===false
    }
    )


  const publish = posts.map((post) => ({ params: { slug: post.slug } }))


    return {
      paths: publish,
      fallback: false,
    }
  

}

export async function getStaticProps({ params: { slug } }) {

  
  // Statically fetch post by slug

  const post = allPosts.find((post) => {
    
   return  post.slug === slug
  
  })




  return { props: { post } }


}