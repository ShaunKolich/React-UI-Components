import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImgThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (<div className='MainContainer' >
        <section class="HeaderContainer" >
            <section class='LogoImg'><ImgThumbnail/></section>
            <section class='ContentMain'><HeaderContent/></section>
            </section>
    </div>

    )

}
export default HeaderContainer;