'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';

const links = [
  { href: '/about-me', label: 'About me', pos: 'aboutMe' },
  { href: '/engineering', label: 'Engineering', pos: 'engineering' },
  { href: '/community', label: 'Community', pos: 'community' },
  { href: '/research', label: 'Research', pos: 'research' },
  { href: '/hobby', label: 'Hobby', pos: 'hobby' },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const isHome = pathname === '/';

  return (
    <header className={`${styles.nav} ${isHome ? '' : styles.white}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          DO HAI NAM
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burger} aria-hidden="true" />
        </button>

        <ul
          id="nav-menu"
          className={`${styles.list} ${open ? styles.open : ''}`}
        >
          {links.map(({ href, label, pos }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  // Đang ở trang này mà bấm lại thì về trang chủ
                  href={isActive ? '/' : href}
                  onClick={close}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${styles.link} ${styles[pos]} ${
                    isActive ? styles.active : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}