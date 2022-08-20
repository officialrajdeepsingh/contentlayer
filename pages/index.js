import { NextSeo } from 'next-seo';
import Post from '../components/Post'
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar"
import { sortByDate, ImageUrl, pageCount } from '../utils'
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import Pagnation from '../components/Pagnation';
import { show_per_page } from "../config"
import Login from '../components/login';
import { useSession, getProviders } from "next-auth/react"


export default function Home({ posts, totalPostCount, providers }) {

//  get session from next-auth
  const { data: session, status } = useSession()

//  check status is looding or not 
  if (status === "loading") {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  } else if (!session) {
    //  if session is not avilable the render login page
    return <Login providers={providers} />
  } else if (session) {
    // main component
    return (
      <>
        <NextSeo
          title="Welcome to my blog home page"
          description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
          openGraph={{
            url: 'http://officialrajdeepsingh.dev',
            title: 'Welcome to my blog home page',
            description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
            images: [
              {
                url: `${ImageUrl('banner.png')}`,
                width: 1224,
                height: 724,
                alt: 'banner',
                type: 'image/jpeg',
              },
            ],
            site_name: 'Rajdeep Singh',
          }}
        />
        <Banner />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts.map(post => {
                return <Post key={post.slug} post={post} />
              }
              )}
            </div>

            <Sidebar />

          </div>
        </div>
        <Pagnation totalPostCount={totalPostCount} />
      </>
    )
  }


}

// fetch first ten posts 
export async function getStaticProps() {

  // get provider from next-auth
  const providers = await getProviders()


  //  help of pick get require filter value
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "draft", "image", "tags", "categories"]));


  // sort article base on  date
  let postSortByDate = posts.sort(sortByDate)


  // filter publish posts
  const publish = postSortByDate.filter(
    (post, i) => {
      return post.draft === false
    }
  )

  // count how many pages
  let totalPostCount = pageCount(allPosts.length)

  //  get only first ten post
  let totalPosts = publish.slice(0, show_per_page)



  return {
    props: {
      posts: totalPosts,
      totalPostCount,
      providers
    },
  }

}



// export async function getServerSideProps(context) {

//   const session = await unstable_getServerSession(context.req, context.res, authOptions)
//   const providers = await getProviders()

//   return {
//     props: {
//       session,
//       providers
//   },
//   }
// }

