
import { Media } from '@/payload-types'
import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image';

import { getPayload } from 'payload'

export default async function TodoPage({ params }: { params: { id: string } }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const todoid = params.id
  const todo_ = await payload.findByID({
    collection: 'todos',
    id: todoid,
  })

  const response= await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/todos/${todoid}`)
 const todo = await response.json()


  return (
    <div>
      <Link href="/"> Back to todos</Link>
      <h1>Todo {todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.completed ? 'Complete' : 'Not Complete'}</p>
      <p>{todo.createdAt}</p>
      <p>{todo.updatedAt}</p>
      {todo.media && (
     <Image
          src={(todo.media as Media).url!}
          alt={(todo.media as Media).alt ?? ''}
          width={100}
          height={100}
         // width={(todo.media as Media).width ?? 0}
         // height={(todo.media as Media).height ?? 0}
        />
      )}
    </div>
  )
}
