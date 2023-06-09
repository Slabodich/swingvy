import React, { useState } from 'react';
import styles from './Burger.module.css';
import cnBind from 'classnames/bind';
import SvgSelector from '../../SvgSelector/SvgSelector';
import { Link } from 'react-router-dom';

const Burger = () => {
  const [nav, setNav] = useState(false);

  const items = [
    { value: 'Профиль', link: '/profile' },
    { value: 'Настройки', link: '#' },
  ];

  const cx = cnBind.bind(styles);
  return (
    <div>
      <div className={cx('menu', { active: nav })}>
        <h3 className={styles.title}>Меню раздела</h3>
        {items.map((item) => (
          <Link onClick={() => setNav(false)} to={item.link}>
            <span>{item.value}</span>
          </Link>
        ))}

        <div className={styles.logo}>
          <SvgSelector id={'logo'} />
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.btn}>
        {nav ? <SvgSelector id={'cross'} /> : <SvgSelector id={'menu'} />}
      </div>
    </div>
  );
};

export default Burger;
