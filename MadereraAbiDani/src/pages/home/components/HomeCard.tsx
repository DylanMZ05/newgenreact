import { Link } from 'react-router-dom';

const HomeCard = ({ title } : { title: string }) => {
  return (
    <Link to={`/${title.toLowerCase()}`}>
      <div className='w-35 h-35 bg-[#866DED] text-white flex justify-center items-center rounded-md transition-all hover:scale-105 hover:bg-[#937de7]'>
        <h3 className='font-bold'>{title}</h3>
      </div>
    </Link>
  )
}

export default HomeCard