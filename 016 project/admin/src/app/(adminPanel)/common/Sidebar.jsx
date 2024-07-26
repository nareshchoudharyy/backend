import React, { useState } from 'react'
import sideMenuData from '@/app/(adminPanel)/common/(data)/sideMenuData';
import SideItem from './SideItem';

function Sidebar() {

    const [openId, setOpenId] = useState('');

    return (
        <>
            <div className='bg-white *:my-2 sticky top-[10%] left-0'>
                {
                    sideMenuData.map((value, index) => {
                        return <SideItem id={value.id} logo={value.logo} item={value.item} subitem1={value.subitem1} subitem2={value.subitem2} link1={value.link1} link2={value.link2} openId={openId} setOpenId={setOpenId} key={index} />;
                    })
                }
            </div>
        </>
    )
}

export default Sidebar