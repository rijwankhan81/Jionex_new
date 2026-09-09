'use client';

import { PropsWithChildren } from 'react';
import LenisProvider from './LenisProvider';
import styles from './SiteShell.module.scss';

export default function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className={styles.shell}>
      <LenisProvider />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      {children}
    </div>
  );
}
