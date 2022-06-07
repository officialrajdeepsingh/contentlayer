import Link from 'next/link'

export default function ItemPost({ post }) {
   
  const date = new Date(post.date)

  return (
    <div className="card mb-4">
      <a href={`/blog/${post.slug}`} > <img className="card-img-top" src={ post.image} alt={post.title} /></a>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.summary}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className='btn'>Read More</a>
        </Link>
      </div>
    </div>

    
  )
}