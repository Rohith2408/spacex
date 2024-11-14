import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import coingecko_icon from '../images/Section1/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import image from '../images/Section1/image.png'
import insta_icon from '../images/Section1/instagram.png'
import VideoComponent from "./Videocomponent";
// import vid_2 from '../images/Section1/2.mp4'
// import vid_3 from '../images/Section1/3.mp4'
// import vid_4 from '../images/Section1/4.mp4'
import img1 from '../images/Section1/1.jpg'
import gif1 from '../images/Section1/1.gif'
import gif2 from '../images/Section1/2.gif'
import gif3 from '../images/Section1/3.gif'
import gif4 from '../images/Section1/4.gif'
import gif5 from '../images/Section1/5.gif'
import gif6 from '../images/Section1/6.gif'
import gif7 from '../images/Section1/7.gif'
import gif8 from '../images/Section1/8.gif'
import gif9 from '../images/Section1/9.gif'
import gif10 from '../images/Section1/10.gif'
import gif11 from '../images/Section1/11.gif'

const Section1=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "" },
        { src: twitter_icon, link: "" },
        { src:dex_icon, link: "" },
        { src: dextools_icon, link: "" }
    ]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()
    const ca=useRef("TBA").current
    const [load,setLoad]=useState(false);
    const images=useRef([gif1,img1,gif2,img1,gif3,img1,gif4,img1,gif5,img1,gif6,img1,gif7,img1,gif8,img1,gif9,img1,gif10,img1,gif11,img1,img1,img1]).current

    useEffect(()=>{

    },[currentbg])

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(true)
        },500)
    },[])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    <p className={styles.title}>$SpaceX</p>
                    <div className={styles.socialWrapper}>
                    {
                        socialIcons.map((icon) => (
                            <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                <img
                                    className={styles.socialicons}
                                    loading="lazy"
                                    alt=""
                                    src={icon.src}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={styles.cawrapper}>
                        <p className={styles.caHeading}>CA</p>
                        <p className={styles.ca} >{ca}</p>
                        <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                    </div>
                    <div className={styles.background} style={{position:'absolute',zIndex:-1}}>
                    {
                        images.map((image)=>
                            <img src={image} style={{width:"100%",height:"100%",objectFit:"cover"}}></img>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1