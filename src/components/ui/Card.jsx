import React from 'react'
import { 
  FaUser, FaStar, FaCrown, FaRocket,
  FaBuilding, FaGraduationCap, FaCalendar, FaBriefcase 
} from "react-icons/fa";

const icons = {
  FaUser,
  FaStar,
  FaCrown,
  FaRocket,
  FaBuilding,
  FaGraduationCap,
  FaCalendar,
  FaBriefcase
};
const Card = ({ singleCard}) => {
     const Icon = icons[singleCard.icon];
  return (
   <div className="card  bg-base-100 shadow-sm ">
  <div className="card-body  ">
    <div className='flex justify-between'>
       <span>{Icon && <Icon />}</span>

        <span className={`badge badge-xm ${singleCard.tagType==="new" ? "badge-warning":""} ${singleCard.tagType==="popular" ? "badge-info":""} ${singleCard.tagType==="best" ? "badge-success":""}`}>{singleCard.tagType}</span>
    </div>
     <h2 className="text-3xl font-bold">{singleCard.name}</h2>
    <p className='text-[#627382]'>{singleCard.description}</p>
      <span className="text-2xl font-bold">${singleCard.price}/{singleCard.period}</span>
    
    <ul className="mt-2 flex flex-col gap-2 text-xs">
        {
            singleCard.features.map((feature,ind)=>{
                return <li key={ind}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
            })
        }
      
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-4xl">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card