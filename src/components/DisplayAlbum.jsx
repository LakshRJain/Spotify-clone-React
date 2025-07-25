import React, { useContext } from 'react'
import Navbar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';
const DisplayAlbum = () => {

    const {id} = useParams();
    const albumdata=albumsData[id];
    const {playWithId} = useContext(PlayerContext);
  return (
    <>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumdata.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlisy</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
                <h4>{albumdata.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5' src={assets.spotify_logo } alt="" />
                    <b>Spotify</b>
                    • 3,423,424 likes
                    • <b>50 songs</b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7a]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item,index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white '>
                        <b className='mr-4 text-[#a7a7a7] '>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumdata.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 Days Ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum