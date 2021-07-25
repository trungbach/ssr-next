import React from 'react';
import styles from './style.module.scss'
import Image from 'next/image'
import HeaderItem from '@/components/HeaderItem'
const Header = () => {
    return (
        <div className={styles.header}>
            <HeaderItem title='HOME' />
            <Image className={styles.img} src='https://links.papareact.com/ua6' alt='' width={200} height={200} />
        </div>
    );
}

export default Header;
