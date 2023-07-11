import { COLORS, FONTS } from '@/utils'
import React from 'react'
import Image from 'next/image'

import logo from "../assets/logo.png"
import searchIcon from "../assets/search-lg.png"
import HomeIcon from "../assets/home-line.png"
import DashboardIcon from "../assets/bar-chart-square-02.png"
import ProjectIcon from "../assets/layers-three-01.png"
import TaskIcon from "../assets/check-done-01.png"
import ReportIcon from "../assets/pie-chart-03.png"
import UserIcon from "../assets/users-01.png"
import SupportIcon from "../assets/life-buoy-01.png"
import SettingIcon from "../assets/settings-01.png"
import Avatar from "../assets/Avatar.png"
import LogOut from "../assets/log-out-01.png"
import arrowDown from "../assets/chevron-down.png"


function Layout({ children }: any) {

    const layoutItems = [
        {
            id: 1,
            name: "Home",
            icon: HomeIcon,
            subName: []
        },
        {
            id: 2,
            name: "Dashboard",
            icon: DashboardIcon,
            subName: ["Sender", "Notifications", "Analytics", "Report"]
        },
        {
            id: 3,
            name: "Projects",
            icon: ProjectIcon,
            subName: []
        },
        {
            id: 4,
            name: "Tasks",
            icon: TaskIcon,
            subName: ["Todo", "Updates"]
        },
        {
            id: 5,
            name: "Reporting",
            icon: ReportIcon,
            subName: []
        },
        {
            id: 3,
            name: "Users",
            icon: UserIcon,
            subName: []
        },
    ]

    const layoutItems2 = [
        {
            id: 1,
            name: "Support",
            icon: SupportIcon,
            subName: []
        },
        {
            id: 2,
            name: "Settings",
            icon: SettingIcon,
            subName: []
        },
    ]

    return (
        <div className='row'>
            <div className='sidebar' style={{ background: COLORS.white }}>
                <Image
                    src={logo}
                    alt=''
                />
                <div>
                    <div className='row-div'>
                        <Image
                            src={searchIcon}
                            alt=''
                        />
                        <input className='layout-input' placeholder='Search' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '70vh', flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                            {layoutItems?.map((data, i) => {
                                return <div key={i}>
                                    <div className='row-card' style={{background: data?.name === "Dashboard" ? COLORS.lightPink : ""}}>
                                        <Image
                                            src={data?.icon}
                                            alt=''
                                        />
                                        <div className='info' style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                                            <div style={{ width: 200, fontWeight: 500, color: data?.name === "Dashboard" ? COLORS.pink : COLORS.black }}>{data?.name}</div>
                                           {
                                            data?.subName?.length > 0 &&  <Image
                                            src={arrowDown}
                                            alt=''
                                        />
                                           }
                                        </div>

                                    </div>
                                    <div>
                                        {
                                            data?.subName?.map((info, i )=> {
                                                return <div className='row-card'  key={i}>
                                                    <div className='info2' style={{color: info === "Sender" ? COLORS.pink : COLORS.black, fontWeight: 500}}>{info}</div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end' }}>
                            {layoutItems2?.map((data, i) => {
                                return <div className='row-card'  key={i}>
                                    <Image
                                        src={data?.icon}
                                        alt=''
                                    />
                                    <div className='info'>{data?.name}</div>

                                </div>
                            })}
                        </div>
                    </div>
                    <div>
                        <div className='bottom-div'>
                            <Image
                                src={Avatar}
                                alt=''
                            />
                            <div className='ml'>
                                <div style={{ ...FONTS.h3 }}>Olivia Rhye</div>
                                <div style={{ ...FONTS.body3 }}>olivia@untitledui.com</div>
                            </div>
                            <Image
                                src={LogOut}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ flex: 5, background: COLORS.grey }}>
            {children}
            </div>
        </div>
    )
}

export default Layout
