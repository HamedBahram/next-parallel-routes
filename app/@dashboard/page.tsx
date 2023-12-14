import { delay } from '@/lib/utils'

export default async function Dashboard() {
  await delay(5000)

  return (
    <div className='h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white'>
      <h2 className='text-xl font-semibold'>Dashboard</h2>
    </div>
  )
}
