
import {BsFillMoonStarsFill,BsFillTelephoneFill,BsMessenger,BsFacebook,BsTelegram,BsWhatsapp,BsTwitter} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import luffy from '../public/assets/Monkey-D.png'
import kaws from '../public/assets/kaws.png'
import videoEdit from '../public/assets/vdedit.png'
import web from '../public/assets/website.png'
import web1 from '../public/assets/web1.png'
import web2 from '../public/assets/web2.png'
import web3 from '../public/assets/web3.png'
import web4 from '../public/assets/web4.png'
import web5 from '../public/assets/web5.png'
import web6 from '../public/assets/web6.png'
import { useState } from 'react';


export default function Home() {
  let [dark,setDark] = useState(false);

  
  return (
    <div>
      <title>heintothehtet's portfolio</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Vollkorn&display=swap" rel="stylesheet"></link>
      <main className={`px-10  md:px-20 lg:px-40 ${ dark ? 'bg-black' : 'bg-whitebrown'}`}>
        <section className=' min-h-screen'>
          <nav className=' py-10 mb-6 flex justify-between'>
            <h1 className={`text-2xl font-vollkorn font-bold${dark ? ' text-cgrey':''}`}>heintothehtet</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill type='button' className={`text-2xl cursor-pointer ${dark ? 'text-cgrey':''}`} onClick={() => setDark(!dark)}/>
              </li>
              <li>
                <a href='#' className=' bg-darkbrown px-4 py-2 text-white rounded-md ml-8'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className=' text-dchocolate text-5xl font-medium py-2 font-lilita md:text-6xl'>Hein Htet</h2>
            <h3 className={` text-xl py-2 font-vollkorn md:text-2xl ${dark ? 'text-whitebrown':''}`}>Developer & Video Editor</h3>
            <p className=' text-md py-5 leading-8 text-gray-500 md:text-lg max-w-xl mx-auto'>Hello, I'm a freelance developer who also enjoys doing video editing and 3D animations from time to time. Let's get to know more about me!🧳</p>
          </div>
          <div className='flex text-4xl justify-center gap-8 py-3 text-gray-700'>
            <AiFillGithub/>
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          <div className=' relative bg-gradient-to-b from-wchoco rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden lg:h-96 lg:w-96 md:w-80 md:h-80'>
            <Image src={luffy} layout='fill' objectFit='cover'/>
          </div>
        </section>

        {/* Service Section */}
        <section>
          <div className=' text-left mt-8 mb-8 md:text-center '>
            <h3 className={`text-3xl py-2 ${ dark ? 'text-card':'text-black'}`}>Services I offer</h3>
            <p className='text-md py-1 leading-8 text-gray-500'>I have done a lot of <span className=' text-dpink'>websites</span> 
            and <span className=' text-dpink'>graphic design projects</span> as a freelance developer.
             I have done a lot of <span className=' text-dpink'>websites</span> and <span className=' text-dpink'>
              graphic design projects</span> as a freelance developer.</p>
            <p className='text-md py-1 leading-8 text-gray-500'>I have done a lot of <span className=' text-dpink'>websites</span> and <span className=' text-dpink'>graphic design projects</span> as a freelance developer.</p>
          </div>

          <div className='md:flex gap-7 justify-around'>
            <div className={`text-center shadow-xl p-10 rounded-xl my-4 bg-card md:mx-4 ${dark ? 'bg-wchoco':''}`}>
              <Image src={kaws} width={100} height={100} className='pt-5 mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
              <p className='py-2 text-gray-700'>Creating design for your best branding</p>
              <h4 className='py-4 text-dpink'>Design tools I use</h4>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Photoshop</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Illustrator</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Blender</p>   
            </div>
            <div className={`text-center shadow-xl p-10 rounded-xl my-4 bg-card md:mx-4 ${dark ? 'bg-wchoco':''}`}>
              <Image src={videoEdit} width={100} height={100} className='pt-5 mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Creative Video Content</h3>
              <p className='py-2 text-gray-700'>Creating design for your best branding</p>
              <h4 className='py-4 text-dpink'>Design tools I use</h4>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>DaVinci Resolve</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Cap Cut</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Premier Pro</p>  
            </div>
            <div className={`text-center shadow-xl p-10 rounded-xl my-4 bg-card md:mx-4 ${dark ? 'bg-wchoco':''}`}>
              <Image src={web} width={100} height={100} className='pt-5 mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Developing websites</h3>
              <p className='py-2 text-gray-700'>Creating design for your best branding</p>
              <h4 className='py-4 text-dpink'>Design tools I use</h4>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>DaVinci Resolve</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Cap Cut</p>
              <p className={`text-gray-500 py-1 ${dark ? 'text-whitebrown':''}`}>Premier Pro</p> 
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div>
            <h3 className={`text-3xl py-2 ${ dark ? 'text-card':'text-black'}`}>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-500'>I have done a lot of <span className=' text-dpink'>websites</span> 
            and <span className=' text-dpink'>graphic design projects</span> as a freelance developer.
             I have done a lot of <span className=' text-dpink'>websites</span> and <span className=' text-dpink'>
              graphic design projects</span> as a freelance developer.</p>
            <p className='text-md py-2 leading-8 text-gray-500'>I have done a lot of <span className=' text-dpink'>websites</span> and <span className=' text-dpink'>graphic design projects</span> as a freelance developer.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/4 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='' />
            </div>
            <div className=' basis-1/4 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'auto'} layout='responsive' alt='' />
            </div>
            <div className=' basis-1/4 flex-1 object-fill'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='' />
            </div>
            <div className=' basis-1/4 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='' />
            </div>
            <div className=' basis-1/4 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='' />
            </div>
            <div className=' basis-1/4 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='' />
            </div>

          </div>
        </section>
        
       
      </main>
        {/* footer */}
        <section>
          <div className={`${dark ? ' bg-gray-900':''} bg-dgreen px-10 py-10 md:px-20 lg:px-40`}>
            <div className={`flex justify-around items-center md:justify-between `}>
            <div>
              <h3 className={` text-lg font-lilita py-1 text-whitebrown `}>Contact me</h3>
              <p className='flex space-x-2 py-1 font-vollkorn text-card'>+959964238343</p>
              <p className='flex space-x-2 py-1 font-vollkorn text-card'>heinhtet14120@gmail.com</p>
              <div className='text-xl py-4 flex space-x-4 md:text-2xl'>
              <BsFacebook className='text-card'/>
              <BsTelegram className='text-card'/>
              <BsWhatsapp className='text-card' />
              <BsTwitter className='text-card'/>
              </div>
              
            </div>
            <div>
              <p className={` text-sm text-gray-500 ${dark ? ' text-wchoco':''} md:text-md `}>©  heitothehtet.</p>
            </div>
            </div>
          </div>
        </section>
    </div>
   
  )
}
