import React from 'react'
import { css } from '@/styled-system/css'
import Link from 'next/link'

export default function Header() {
  const menuItems = ['profile', 'blog']

  return (
    <div className={headerStyles}>
      <h1 className={headerTitleStyles}>
        <Link href="/">scyunblog</Link>
      </h1>
      <div className={headerLeftStyles}>
        {menuItems.map((item) => (
          <Link href={`/${item}`} key={item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

const headerStyles = css({
  backgroundColor: 'systemLightGray',
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  borderBottom: '1px solid systemLightGray',
  fontSize: '16px',
  fontWeight: 'bold',
})

const headerTitleStyles = css({
  fontSize: '24px',
  fontWeight: 'bold',
})

const headerLeftStyles = css({
  display: 'flex',
  gap: '20px',
})
