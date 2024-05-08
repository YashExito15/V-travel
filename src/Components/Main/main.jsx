import React, { useEffect } from "react";
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
        {
            id:1,
            imgSrc: img,
            destTitle: 'Taj Mahal',
            location: 'Agra',
            grade: 'Historical Place',
            fees: '1000',
            description:'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.'
        },
        {
            id:2,
            imgSrc: img2,
            destTitle: 'Red Fort (Lal Quila)',
            location: 'Delhi',
            grade: 'Symbol of Mughal Dynasty',
            fees: '2000',
            description:'Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed under the reign of Mughal emperor Shah Jahan for protection against invaders. It is known for its intricate Mughal architecture and floral designs.'
        },
        {
            id:3,
            imgSrc: img3,
            destTitle: 'Golden Temple, Amristar',
            location: 'Amritsar',
            grade: 'Holiest Sikh Shrine',
            fees: '5000',
            description:'Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimage site amongst Sikhs and will leave you in awe with its jaw-dropping gold and marble edifice.'
        },
        {
            id:4,
            imgSrc: img4,
            destTitle: 'Hawa Mahal',
            location: 'Jaipur',
            grade: 'A Five-Storeyed Historic Landmark',
            fees: '2000',
            description:'An iconic landmark of the city, the honeycomb-shaped palace features beautiful jharokhas and windows. This five-storey building has been built without a foundation and is known for its exceptional ventilation, which is also the reason behind its name, Hawa Mahal, which literally translates to ‘Palace of the Winds’. The palace was mainly constructed to enable the ladies of the royal family to see the busy streets from the palace jharokhas.'
        },
        {
            id:5,
            imgSrc: img5,
            destTitle: 'Mysore Palace',
            location: 'Mysore',
            grade: 'Historical Royal Palace',
            fees: '3000',
            description:'The official residence of the erstwhile royal family of Mysore, Mysore Palace is an architectural masterpiece showcasing a blend of Hindu, Muslim, Rajput and Gothic styles.'
        },
        {
            id:6,
            imgSrc: img6,
            destTitle: 'Aguada Fort',
            location: 'Goa',
            grade: 'Beautiful Portuguese architecture',
            fees: '2000',
            description:'The fort overlooks the confluence of Mandovi River and the Arabian Sea. This beautiful red-brown fort houses the Central Jail and a 19th century lighthouse.'
        },
        {
            id:7,
            imgSrc: img7,
            destTitle: 'Meenakshi Temple',
            location: 'Madurai',
            grade: 'Ancient Hindu Temple',
            fees: '5000',
            description:'Set on the banks of the Vaigai River, Meenakshi Temple is dedicated to Goddess Parvati and Lord Shiva. It is widely recognised for its architecture and 14-coloured multi-tiered gopuram.'
        },
        {
            id:8,
            imgSrc: img8,
            destTitle: 'Mudumalai National Park, Tamil Nadu',
            location: 'Ooty',
            grade: 'A Tiger reserve in the northwestern Nilgiri Mountains',
            fees: '4000',
            description:'Located amid the Nilgiri Hills, this national park is segmented into 5 ranges - Masinagudi, Thepakadu, Mudumalai, Kargudi and Nellakota. The protected area is a premier tiger reserve and is home to various other endangered wildlife species too.'
        },
        {
            id:9,
            imgSrc: img9,
            destTitle: 'Bhangarh Fort',
            location: 'Sariska Tiger Reserve',
            grade: 'A Famous Haunted Fort',
            fees: '2000',
            description:'Located on the outskirts of the Sariska Tiger Reserve, this 17th Century fort nestled on the Jaipur-Delhi Highway is regarded as one of the most haunted forts in the country.'
        },
        {
            id:10,
            imgSrc: img10,
            destTitle: 'Nubra Valley',
            location: 'Leh',
            grade: 'High-Altitude Sand Dunes',
            fees: '3000',
            description:'Located about five hours from Leh, Nubra Valley is a high-altitude cold desert formed by the union of Shyok and Siachen rivers. It wins you over with its magnificent sand dunes.'
        },
    ]

const Main=()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">
                    Most Visited Destination
                </h3>
            </div>
            <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                             <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                             </div>

                             <div className="cardInfo">
                                <h4 className="destTitle">
                                {destTitle}
                                </h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className="btn flex">
                                    Details <HiOutlineClipboardCheck className="icon"/>
                                </button>
                             </div>

                        </div>
                    )
                })
            }

            </div>
        </section>
    )
}

export default Main