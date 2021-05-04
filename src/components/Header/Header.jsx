import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header__inner}>
                    <nav className={classes.nav}>
                        <div className={classes.logo}>FRONTEND <span>JOB</span></div>
                        <ul className={classes.nav__list}>
                            <li className={classes.['nav__list-items']}><button type='button' className={classes.['header-btn']}>Поиск вакансий</button></li>
                            <li className={classes.['nav__list-items']}><button type='button' className={classes.['header-btn']}>Избранные вакансии</button></li>
                        </ul>
                        <div className={classes.burger}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;