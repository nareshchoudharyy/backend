import { LiaBookSolid, LiaVideoSolid, LiaSlidersHSolid, LiaUsersSolid } from "react-icons/lia";
import { IoMdPeople } from "react-icons/io";

const sideMenuData = [
    {
        id: 1,
        logo: <LiaBookSolid />,
        item: 'Couses',
        subitem1: 'Add Couse',
        subitem2: 'View Couses',
        link1: '/add_course',
        link2: '/view_courses',
    },
    {
        id: 2,
        logo: <LiaVideoSolid />,
        item: 'Videos',
        subitem1: 'Add Video',
        subitem2: 'View Videos',
        link1: '/add_video',
        link2: '/view_videos',
    },
    {
        id: 3,
        logo: <LiaSlidersHSolid />,
        item: 'Sliders',
        subitem1: 'Add Slide',
        subitem2: 'View Slides',
        link1: '/add_slide',
        link2: '/view_slides',
    },
    {
        id: 4,
        logo: <IoMdPeople />,
        item: 'Team',
        subitem1: 'Add Team',
        subitem2: 'View Teams',
        link1: '/add_team',
        link2: '/view_teams',
    },
    {
        id: 5,
        logo: <LiaUsersSolid />,
        item: 'Users',
        subitem1: 'View Users',
        subitem2: '',
        link1: '/view_users',
        link2: '',
    }
]
module.exports = sideMenuData;