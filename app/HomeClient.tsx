"use client"

import { useState, useEffect } from "react"

export default function HomeClient({ posts }: any) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => c + 1)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold">Latest Notices</h1>

      {posts.map((post: any) => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>
      ))}
    </div>
  )
}