import { css } from '@/styled-system/css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Hello 🐼!</h1>
      <Link href="/location">location으로 이동합니다.</Link>
    </div>
  )
}

const testStyles = css({
  backgroundColor: 'red',
})
