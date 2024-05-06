import React from 'react';

export default function Polygon({points,
  plotno,
  sqyds,
  top,
  right,
  bottom,
  left,
  top2,
  status,
  hoveredPlot,
  hoveredStatus,
  popupPosition,
  onMouseMove,
  onMouseLeave
}) {
  let statusColorClass;

  switch (status) {
    case 'Available':
      statusColorClass = '#FFFFFF'; 
      break;
    case 'Booked':
      statusColorClass = '#ffff00'; 
      break;
    case 'Hold':
      statusColorClass = '#800080'; 
      break;
    case 'Sold':
      statusColorClass = '#ffc0cb'; 
      break;
    default:
      statusColorClass = '#808080'; 
  }
  const pointArray = points.split(" ").map(point => point.split(","));
  const numPoints = pointArray.length;
  const firstX = parseInt(pointArray[0][0]);
  const firstY = parseInt(pointArray[0][1]);
  const width = parseInt(pointArray[1][0])-firstX
  const lastY = parseInt(pointArray[numPoints - 1][1]);
  let sumX = 0;
    let sumY = 0;
    pointArray.forEach(point => {
      sumX += parseInt(point[0]);
      sumY += parseInt(point[1]);
    });
  
    const centerX = sumX / numPoints;
    const centerY = sumY / numPoints;
  return (
    <>
        <polygon points={points} fill={statusColorClass} stroke='green' strokeWidth={2} onMouseMove={(e) => onMouseMove(e, plotno, status)}
                onMouseLeave={onMouseLeave}
 />
            {plotno === "1" && (
              <>
                <text x={centerX} y={centerY} fontSize="18" textAnchor="middle" fill="red">{plotno}</text>
                <text x={centerX} y={centerY+10} fontSize="10" textAnchor="middle" fill="black">{sqyds}</text>
                <text x={centerX} y={firstY + 27} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(22 ${centerX},${firstY+27})`}>{top}</text>
                <text x={centerX} y={lastY-10} fontSize="8" textAnchor="middle" fill="black">{bottom}</text>
                <text x={firstX+8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+8},${centerY})`}>{left}</text>
                <text x={firstX+width-8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+width-8},${centerY})`}>{right}</text>
              </>
            )}
            {plotno === "9" && (
                <>
                  <text x={centerX} y={centerY} fontSize="18" textAnchor="middle" fill="red">{plotno}</text>
                  <text x={centerX} y={centerY+10} fontSize="10" textAnchor="middle" fill="black">{sqyds}</text>
                  <text x={centerX} y={firstY+27} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(20 ${centerX},${firstY+27})`}>{top}</text>
                  <text x={centerX} y={lastY-30} fontSize="8" textAnchor="middle" fill="black">{bottom}</text>
                  <text x={firstX+8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+8},${centerY})`}>{left}</text>
                  <text x={firstX+width-8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+width-8},${centerY})`}>{right}</text>
                </>
            )}
            {plotno === "10" && (
                <>
                  <text x={centerX} y={centerY} fontSize="18" textAnchor="middle" fill="red">{plotno}</text>
                  <text x={centerX} y={centerY+10} fontSize="10" textAnchor="middle" fill="black">{sqyds}</text>
                  <text x={centerX} y={firstY+29} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(22 ${centerX},${firstY+29})`}>{top}</text>
                  <text x={centerX} y={lastY-5} fontSize="8" textAnchor="middle" fill="black">{bottom}</text>
                  <text x={firstX+8} y={centerY-10} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+8},${centerY-10})`}>{left}</text>
                  <text x={firstX+width-8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+width-8},${centerY})`}>{right}</text>
                </>
            )}
            {plotno === "21" && (
               <>
                <text x={centerX+5} y={centerY-10} fontSize="18" textAnchor="middle" fill="red">{plotno}</text>
                <text x={centerX+5} y={centerY} fontSize="10" textAnchor="middle" fill="black">{sqyds}</text>
                <text x={centerX+8} y={firstY+16} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(22 ${centerX+8},${firstY+16})`}>{top}</text>
                <text x={centerX-22} y={firstY+4} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-22 ${centerX-22},${firstY+4})`}>{top2}</text>
                <text x={centerX} y={lastY-70} fontSize="8" textAnchor="middle" fill="black">{bottom}</text>
                <text x={firstX+8} y={centerY-15} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+8},${centerY-15})`}>{left}</text>
                <text x={firstX+width+50} y={centerY-15} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+width+52},${centerY-15})`}>{right}</text>
              </>
            )}
        {(plotno !== "1" && plotno !== "9" && plotno !== "10" && plotno !== "21") && (
        <>
          <text x={centerX} y={centerY} fontSize="18" textAnchor="middle" fill="red">{plotno}</text>
          <text x={centerX} y={centerY + 10} fontSize="10" textAnchor="middle" fill="black">{sqyds}</text>
          <text x={centerX} y={firstY + 12} fontSize="8" textAnchor="middle" fill="black">{top}</text>
          <text x={centerX} y={lastY - 10} fontSize="8" textAnchor="middle" fill="black">{bottom}</text>
          <text x={firstX + 8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+8},${centerY})`}>{left}</text>
          <text x={firstX + width - 8} y={centerY} fontSize="8" textAnchor="middle" fill="black" transform={`rotate(-90 ${firstX+width-8},${centerY})`}>{right}</text>
        </>
      )}
      {hoveredPlot && (
        <g>
            <rect
                x={popupPosition.x}  
                y={popupPosition.y}  
                width="120"              
                height="44"              
                fill="#343434"           
                stroke="#343434"            
                strokeWidth="1" 
                rx="10"
                ry="10"     
            />
            <text
                x={popupPosition.x+60}
                y={popupPosition.y+16}
                fontSize="10"
                fontWeight="bold"          
                fill="#ffffff"
                textAnchor="middle"        
                dominantBaseline="middle" 
            >
                {`Plot No: ${hoveredPlot}`}
            </text>
            <text
                x={popupPosition.x+60}
                y={popupPosition.y+31}
                fontSize="10"
                fontWeight="bold"           
                fill="#ffffff"
                textAnchor="middle"        
                dominantBaseline="middle" 
            >
                {`Status: ${hoveredStatus}`}
            </text>
        </g>
      )}
    </>
  )
}
