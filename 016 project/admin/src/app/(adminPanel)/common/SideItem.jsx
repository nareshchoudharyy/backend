import Link from 'next/link';
import React from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";

function SideItem({ id, logo, item, subitem1, subitem2, link1, link2, openId, setOpenId }) {

    return (
        <div className={`hover:bg-[#4b49ac] rounded-md hover:text-white transition duration-200  ${openId == id ? 'bg-[#4b49ac] text-white' : ""}`}>
            <div className='flex items-center justify-between p-2 cursor-pointer' onClick={() => { openId == id ? setOpenId('') : setOpenId(id); console.log(openId) }}>
                <div className='flex items-center gap-1 text-lg'>
                    {logo}
                    {item}
                </div>
                <div>
                    <LiaAngleRightSolid className={`${openId == id ? 'rotate-90' : ""} transitio duration-300`} />
                </div>
            </div>
            <ul className={`text-sm text-center *:m-1 overflow-hidden h-0 ${openId == id ? 'h-auto' : ""}`}>
                <hr />
                <li>
                    <Link href={link1} className='m-1 hover:underline'>
                        {subitem1}
                    </Link>
                </li>
                {/* {
                    id == 5 ?
                        "" :
                        <Link href={link2} className='m-1 hover:underline'>
                            {subitem2}
                        </Link>
                } */}
                <li>
                    <Link href={link2} className='m-1 hover:underline'>
                        {subitem2}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideItem