import React, { useEffect, useState } from 'react';
import Polygon from '../component/Polygon';
import axios from 'axios';
import logoImage from '../Images/logo.jpeg';
import loadingGif from '../Images/loading.gif';
import PointData from '../component/PointData';


export default function Sln() {
    const [slndata,setslnData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredPlot, setHoveredPlot] = useState(null);
    const [hoveredStatus, setHoveredStatus] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });


    useEffect(()=>{
        fetchSlnData();
    },[])
    const handleMouseMove = (e, plotno, status) => {
        setHoveredPlot(plotno);
        setHoveredStatus(status);
        console.log(e);
        setPopupPosition({ x: e.target.animatedPoints[0].x, y: e.target.animatedPoints[0].y-30});
        console.log(e.target.animatedPoints[0].x);
        console.log(e.target.animatedPoints[0].y);
      };
    
      const handleMouseLeave = () => {
        setHoveredPlot(null);
        setHoveredStatus(null);
      };

    const fetchSlnData = async() =>{
        try{
            const pointdata=PointData;
            const url=process.env.REACT_APP_BACKEND_URL;
            const res=await axios.get(url);
            const sortedData = res.data.data.sort((a, b) => b["Plot No"] - a["Plot No"]);
            const dataWithPoints = sortedData.map((item, index) => ({
                ...item,
                points: pointdata[index]
            }));
            setslnData(dataWithPoints);
            setIsLoading(false);
        }catch(e){
            console.error('Error fetching data: ',e.message);
            setIsLoading(false);
        }
    }
    
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={loadingGif} alt="Loading..." />
            </div>
        );
    }
    return (
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <svg 
            viewBox="0 0 1500 1050"
            width="100%" 
            style={{ display: 'block', margin: 'auto' }}
           
            > 
            {/* Define linear gradient for page and Heading */}
            <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#B1D6F8" />
                    <stop offset="40%" stopColor="#ADF5BD" />
                    <stop offset="75%" stopColor="#E8F5C1" />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F3159F" />
                    <stop offset="20%" stopColor="#8D019E" />
                    <stop offset="75%" stopColor="#51035A" />
                </linearGradient>
            </defs>

            {/* Given the color to SVG */}
            <rect width="100%" height="100%" fill="url(#backgroundGradient)" />

            {/* Given Title and decscribtion to SVG */}
            <text x={820} y={60} fontSize={40} fontWeight='bold' fill='url(#textGradient)'>SLN ELITE @ MEDCHAL</text>
            <image href={logoImage} x="1000" y="80" width="250" height="50" /> 
            <text x="1040" y="150" fontSize="10" fontWeight="bold" fill="black">LP NO:000061/LO/Plg/HMDA/2023</text>

            {/* Adding Compass */}
            <polygon points="1350,170 1360,180 1360,100" stroke='black' strokeWidth={1} />
            <polygon points="1360,180 1370,170 1360,100" fill='none' stroke='black' strokeWidth={1} />
            <text x={1360} y={90} fontSize="30" fontWeight='bold' textAnchor="middle" fill="#C52417">N</text>
            <polygon points="1360,180 1420,180 1370,170" stroke='black' strokeWidth={1} />
            <polygon points="1420,180 1370,190 1360,180" fill='none' stroke='black' strokeWidth={1} />
            <text x={1435} y={190} fontSize="30" fontWeight='bold' textAnchor="middle" fill="#C52417">E</text>
            <polygon points="1350,190 1360,180 1360,260" fill='none' stroke='black' strokeWidth={1} />
            <polygon points="1360,180 1370,190 1360,260" stroke='black' strokeWidth={1} />
            <text x={1360} y={290} fontSize="30" fontWeight='bold' textAnchor="middle" fill="#C52417">S</text>
            <polygon points="1360,180 1300,180 1350,170" fill='none' stroke='black' strokeWidth={1} />
            <polygon points="1300,180 1350,190 1360,180" stroke='black' strokeWidth={1} />
            <text x={1280} y={190} fontSize="30" fontWeight='bold' textAnchor="middle" fill="#C52417">W</text>
            
            {/* First Road */}
            <polygon points="270,299 330,299 330,572 270,572" fill="#373737" />
            <polygon points="270,588 330,588 330,921 270,921" fill="#373737" />
            <polygon points="270,570 1200,570 1200,650 270,650" fill="#373737" />
            <text x={400} y={600} fontSize="12" textAnchor="middle" fill="#C1C0C0">PROPOSED 30' WIDE ROAD</text>
            <text x={15} y={375} fontSize="24" textAnchor="middle" fill="#C1C0C0" transform="rotate(-90, 300,375)">PROPOSED 30' WIDE ROAD</text>
            
            {/* Second Road */}
            <polygon points="490,299 550,299 550,572 490,572" fill="#373737" />
            <polygon points="490,588 550,588 550,921 490,921" fill="#373737" />
            <polygon points="490,570 1200,570 1200,650 490,650" fill="#373737" />
            <text x={610} y={600} fontSize="12" textAnchor="middle" fill="#C1C0C0">PROPOSED 30' WIDE ROAD</text>
            <text x={15} y={600} fontSize="24" textAnchor="middle" fill="#C1C0C0" transform="rotate(-90, 300,375)">PROPOSED 30' WIDE ROAD</text>
            
            {/* Third Road */}
            <polygon points="690,299 750,299 750,572 690,572" fill="#373737" />
            <polygon points="690,588 750,588 750,921 690,921" fill="#373737" />
            <polygon points="690,570 1200,570 1200,650 690,650" fill="#373737" />
            <text x={820} y={600} fontSize="12" textAnchor="middle" fill="#C1C0C0">PROPOSED 30' WIDE ROAD</text>
            <text x={15} y={800} fontSize="24" textAnchor="middle" fill="#C1C0C0" transform="rotate(-90, 300,375)">PROPOSED 30' WIDE ROAD</text>
           
            {/* Fourth Road */}
            <polygon points="910,310 970,345 970,572 910,572" fill="#373737" />
            <polygon points="910,588 970,588 970,921 910,921" fill="#373737" />
            <polygon points="910,570 1200,570 1200,590 910,590" fill="#373737" />
            <text x={1050} y={600} fontSize="12" textAnchor="middle" fill="#C1C0C0">PROPOSED 30' WIDE ROAD</text>
            <text x={15} y={1020} fontSize="24" textAnchor="middle" fill="#C1C0C0" transform="rotate(-90, 300,375)">PROPOSED 30' WIDE ROAD</text>
           
            {/* Fifth Road */}
            <polygon points="1130,405 1200,430 1200,572 1130,572" fill="#373737" />
            <polygon points="1130,588 1200,588 1200,921 1130,921" fill="#373737" />
            <text x={1} y={1190} fontSize="24" textAnchor="middle" fill="#C1C0C0" transform="rotate(-90, 340,360)">PROPOSED 30' WIDE ROAD</text>

            {/* Rest of the polygons */}
            <line x1={770} y1={240} x2={810} y2={215}stroke='green' strokeWidth={2} />

            {/* Some Curve for Triangle, Open Area, Social Infra */}
            {/* Utility */}
            <polygon points='1200,430, 1200,580 1280,580' fill='#AEEE8F' stroke='green' strokeWidth={2}/>
            <text x="1220" y="520" fontSize="8" fill="#000000" textAnchor="middle" dominantBaseline="middle" transform='rotate(-10,1230,520)'>UTILITY</text>
            <text x="1230" y="530" fontSize="8" fill="#000000" textAnchor="middle" dominantBaseline="middle" transform='rotate(-10,1230,540)'>AREA : 120.00</text>
            {/* Social Infra */}
            <polygon points='1200,580 1280,580 1320,740 1200,740' fill='#F8F4A0' stroke='black'/>
            <text x="1250" y="650" fontSize="12" fill="#000000" textAnchor="middle" dominantBaseline="middle">SOCIAL INFRA</text>
            <text x="1250" y="670" fontSize="12" fill="#000000" textAnchor="middle" dominantBaseline="middle">358.810 SQ YDS</text>
            {/* Open Area */}
            <polygon points='1200,740, 1320,740 1380,861 1386,921 1200,921' fill='#13AC03' stroke='green' strokeWidth={2}/>

            {/* Text, Line for Utlity Curve  */}

            <line x1={1200} y1={585} x2={1220} y2={585} stroke="black" strokeWidth="2" />
            <text x="1220" y="585" fontSize={6} fill="#000000" dominantBaseline="middle">18.034 [59'-2"]</text>
            <line x1={1260} y1={585} x2={1280} y2={585} stroke="black" strokeWidth="2" />
            <line x1={1210} y1={426} x2={1235} y2={474} stroke="black" strokeWidth="2" />

            <line x1={1280} y1={585} x2={1285} y2={575} stroke="black" strokeWidth="2" />
            <text x="1235" y="476" fontSize={6} fill="#000000" dominantBaseline="middle" transform='rotate(60,1235,476)'>21.764 [71'-5"]</text>
            <line x1={1255} y1={510} x2={1285} y2={575} stroke="black" strokeWidth="2" />
            <line x1={1200} y1={430} x2={1210} y2={427} stroke="black" strokeWidth="2" />

            <text x="1194" y="528" fontSize={8} fill="#ffffff" dominantBaseline="middle" transform='rotate(-90,1194,528)'>12.184 40'</text>

            {/* Text, Line for Social Infra */}
            <line x1={1285} y1={574} x2={1300} y2={620} stroke="black" strokeWidth="2" />
            <text x="1300" y="622" fontSize={6} fill="#000000" dominantBaseline="middle" transform='rotate(70,1300,622)'>18.760 [61'-7"]</text>
            <line x1={1315} y1={660} x2={1334} y2={734} stroke="black" strokeWidth="2" />
            <line x1={1320} y1={738} x2={1334} y2={734} stroke="black" strokeWidth="2" />

            <line x1={1200} y1={735} x2={1240} y2={735} stroke="black" strokeWidth="2" />
            <text x="1240" y="736" fontSize={6} fill="#000000" dominantBaseline="middle">32.588 [106'-11"]</text>
            <line x1={1286} y1={735} x2={1320} y2={735} stroke="black" strokeWidth="2" />
            <line x1={1320} y1={740} x2={1320} y2={732} stroke="black" strokeWidth="1" />

            <text x="1194" y="680" fontSize={8} fill="#ffffff" dominantBaseline="middle" transform='rotate(-90,1194,680)'>11.838 [38'-10"]</text>

            {/* Text and Line for Open Area */}
            <line x1={1334} y1={734} x2={1350} y2={770} stroke="black" strokeWidth="2" />
            <text x="1368" y="760" fontSize={6} fill="#000000" dominantBaseline="middle" transform='rotate(64,1350,752)'>18.662 [61'-3"]</text>
            <line x1={1369} y1={808} x2={1390} y2={856} stroke="black" strokeWidth="2" />
            <line x1={1369} y1={808} x2={1390} y2={856} stroke="black" strokeWidth="2" />

            <line x1={1380} y1={861} x2={1390} y2={855} stroke="black" strokeWidth="2" />
            <line x1={1380} y1={861} x2={1398} y2={858} stroke="black" strokeWidth="2" />
            <line x1={1396} y1={858} x2={1396} y2={854} stroke="black" strokeWidth="2" />
            <text x="1394" y="915" fontSize={8} fill="#000000" dominantBaseline="middle" transform='rotate(-98,1394,915)'>8.663 [28'-4"]</text>
            <line x1={1386} y1={921} x2={1400} y2={916} stroke="black" strokeWidth="2" />
            <line x1={1400} y1={916} x2={1400} y2={920} stroke="black" strokeWidth="2" />

            <line x1={1200} y1={940} x2={1200} y2={921} stroke="black" strokeWidth="2" />
            <line x1={1190} y1={921} x2={1200} y2={921} stroke="black" strokeWidth="2" />
            <line x1={1200} y1={940} x2={1270} y2={940} stroke="black" strokeWidth="2" />
            <text x="1272" y="940" fontSize={8} fill="#000000" dominantBaseline="middle">49.438 [162'-2"]</text>
            <line x1={1328} y1={940} x2={1386} y2={940} stroke="black" strokeWidth="2" />
            <line x1={1386} y1={940} x2={1386} y2={921} stroke="black" strokeWidth="2" />

            <text x="1194" y="855" fontSize={8} fill="#ffffff" dominantBaseline="middle" transform='rotate(-90,1194,855)'>20.980 [68'-10"]</text>

            {/* To add Text in the empty Space */}
            <text x="900" y="280" fontSize={20} fill="#727272" dominantBaseline="middle"  transform='rotate(24,900,280)'>ROAD EFFECTED AREA</text>

            {/* Added Border and Text for Cycle Track and also bring the text of Open Area and Sq Yds here */}
            <polygon points='1212,752, 1308,752 1368,861 1374,909 1212,909' fill='#13AC03' stroke='#096CEB' strokeWidth={2}/>
            <text x="1232" y="746" fontSize={8} fill="#000000" dominantBaseline="middle">CYCLE TRACK</text>
            <text x="1270" y="916" fontSize={8} fill="#000000" dominantBaseline="middle">CYCLE TRACK</text>
            <text x="1206" y="854" fontSize={8} fill="#000000" dominantBaseline="middle" transform='rotate(-90,1206,854)'>CYCLE TRACK</text>
            <text x="1336" y="790" fontSize={8} fill="#000000" dominantBaseline="middle" transform='rotate(60,1336,790)'>CYCLE TRACK</text>

            <text x="1270" y="810" fontSize="14" fill="#000000" textAnchor="middle" dominantBaseline="middle">OPEN AREA</text>
            <text x="1270" y="830" fontSize="14" fill="#000000" textAnchor="middle" dominantBaseline="middle">1076.432'' SQ YDS</text>

            {/* Adding text from the Bottom of PDF */} 
            <text x="600" y="980" fontSize="16" fill="#000000" fontWeight='bold' textAnchor="middle" dominantBaseline="middle">PLAN SHOWING THE PROPOSED DRAFT LAYOUT OPEN PLOT IN SY.NOS: 7/P</text>
            <text x="600" y="1000" fontSize="16" fill="#000000" fontWeight='bold' textAnchor="middle" dominantBaseline="middle">SITUATED AT KONAIPALLE(V), MEDCHEL(M),MEDCHEL - MALKAJGIRI(DIST)</text>
            
            {/* Adding a small section in Utility */}
            <polygon points='1210,550 1220,550 1220,565 1210,565' fill='none' stroke='black' strokeWidth={0.5} />
            <text x="1211" y="558" fontSize={3}>SUMP</text>
            <polygon points='1250,550 1260,548 1265,563 1255,565' fill='none' stroke='black' strokeWidth={0.5} />
            <text x="1253" y="558" fontSize={3} transform='rotate(-15,1253,558)'>Septic</text>
            <text x="1256" y="562" fontSize={3} transform='rotate(-15,1256,562)'>tank</text>
            <polygon points='1205,460 1213,460 1213,475 1205,475' fill='none' stroke='black' strokeWidth={0.5} />
            <text x="1211" y="471" fontSize={6} transform='rotate(-90,1211,471)'>T.F</text>

            
            {/* Long Curve Road with text */}
            <path d='M 510 118
                    C 810,150 810,150 810 150, 
                    L 810 215
            '/>
            <polygon points="280,185 280,115 360,115 290,65 330,25 520,120 810,215 810,214" fill="black" />
            <path
                d="M 804 181 C 950 202, 1250 400, 1260 405 S 1420,500 1420 740"
                fill="none"
                stroke="black"
                strokeWidth="66"
                />
            <polygon points='1387,736 1454,740 1387,770' />
            <text x="290" y="165" fontSize="14" fontWeight="bold" fill="#ffffff">KANUKUNTA - DUNDIGAL ROAD</text>
            <text x="340" y="75" fontSize="18" fontWeight="bold" fill="#ffffff" transform="rotate(30, 340,75)">TOOPRAN</text>
            <text x="1280" y="428" fontSize="36" fontWeight="bold" fill="#ffffff" transform="rotate(54, 1280,428)">MEDCHAL</text>

            {/* All Polygon with info */}
         
            {slndata.map((item, index) => (
                    <Polygon 
                        key={index} 
                        plotno={item["Plot No"]}
                        points={item.points} 
                        sqyds={item["Sq Yards"]}
                        top={item["Top"]}
                        bottom={item["Bottom"]}
                        left={item["Left"]}
                        right={item["Right"]}
                        top2={item["Top2"]}
                        status={item["Status"]}
                        hoveredPlot={hoveredPlot}
                        hoveredStatus={hoveredStatus}
                        popupPosition={popupPosition}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
        </svg>
    </div>
    );
}
