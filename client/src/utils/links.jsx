import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";



const links = [
    {
        text: "add job",
        path: ".",
        icon: <FaWpforms/>,
    },

     {
        text: "all job",
        path: "all jobs",
        icon: <MdQueryStats/>,
    },

     {
        text: "stats",
        path: "stats",
        icon: <IoBarChartSharps/>,
    },

     {
        text: "profile",
        path: "profile",
        icon: <ImProfile/>,
    },

     {
        text: "add job",
        path: ".",
        icon: <FaWpforms/>,
    },

     {
        text: "admin",
        path: "admin",
        icon: <MdAdminPanelSettings/>,
    }
];

export default links;