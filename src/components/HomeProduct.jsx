import React,{useState} from 'react'
import style from './HomeProduct.css'
import { Row } from 'react-bootstrap'
import AnimatedItem from './AnimatedItem'
import { productInput } from '../data/DummyData'


const HomeProduct = () => {

    const [proData, setProData] = useState(productInput)

  return (
    <div className="secondbg col-12">
        
    <div className='container-fluid col-12'>
        
    <div className="secondbg">
    <div className='container-fluid'>
    <div className='--home-dashline-box'>
<svg class="--home-dashline" viewBox="0 0 200 200">
  <path class="cls-1" d="m10.57,109.69s-.05,0-.08,0c-3.39-.32-6.73-1.01-9.92-2.04-.43-.14-.67-.6-.53-1.03.14-.43.6-.66,1.03-.53,3.08.99,6.3,1.65,9.57,1.97.45.04.78.44.74.89-.04.42-.4.74-.81.74Zm9.95-.11c-.41,0-.76-.31-.81-.72-.05-.45.27-.86.72-.91,3.27-.38,6.48-1.12,9.52-2.19.43-.15.89.08,1.04.5.15.43-.08.89-.5,1.04-3.16,1.11-6.48,1.87-9.87,2.27-.03,0-.06,0-.1,0Zm18.64-6.59c-.27,0-.53-.13-.69-.37-.25-.38-.14-.89.24-1.13.73-.47,1.44-.97,2.12-1.48,1.85-1.38,3.62-2.93,5.43-4.73.32-.32.84-.32,1.16,0,.32.32.32.84,0,1.16-1.86,1.86-3.7,3.46-5.6,4.89-.71.53-1.46,1.05-2.21,1.54-.14.09-.29.13-.44.13Zm14.24-13.82c-.18,0-.35-.06-.5-.17-.36-.28-.42-.79-.14-1.15,1.79-2.28,3.55-4.68,5.26-7l.71-.96c.27-.36.78-.44,1.14-.17.36.27.44.78.17,1.14l-.7.96c-1.71,2.33-3.48,4.74-5.29,7.04-.16.21-.4.31-.64.31Zm12.03-15.9c-.18,0-.37-.06-.52-.19-.35-.29-.4-.8-.11-1.15,2.38-2.9,4.62-5.32,6.86-7.38.33-.3.85-.29,1.16.05.31.33.29.85-.05,1.16-2.18,2.01-4.37,4.37-6.7,7.22-.16.2-.4.3-.63.3Zm14.73-13.28c-.28,0-.55-.14-.7-.39-.23-.39-.11-.89.27-1.12,2.73-1.66,5.77-3.17,9.04-4.49.42-.17.9.03,1.06.45.17.42-.03.9-.45,1.06-3.18,1.28-6.14,2.75-8.8,4.37-.13.08-.28.12-.42.12Zm18.37-7.58c-.36,0-.69-.24-.79-.6-.12-.44.14-.89.57-1.01,2.95-.81,6.14-1.56,9.76-2.28.44-.09.87.2.96.64.09.44-.2.87-.64.96-3.58.72-6.74,1.45-9.65,2.25-.07.02-.15.03-.22.03Zm19.52-4.03c-.39,0-.74-.28-.81-.68-.07-.45.23-.87.67-.94l1.16-.19c2.84-.48,5.77-.97,8.65-1.5.44-.09.87.21.95.66.08.44-.21.87-.66.95-2.89.53-5.83,1.03-8.68,1.51l-1.16.19s-.09.01-.14.01Zm19.58-3.76c-.37,0-.7-.25-.79-.62-.11-.44.16-.88.6-.99,3.48-.86,6.57-1.78,9.47-2.82.42-.15.89.07,1.05.49.15.42-.07.89-.49,1.05-2.95,1.06-6.1,2-9.63,2.86-.07.02-.13.02-.2.02Zm18.66-6.86c-.29,0-.57-.16-.72-.43-.21-.4-.07-.89.33-1.11.35-.19.7-.38,1.04-.58,2.48-1.4,4.85-3.06,7.05-4.92.34-.29.86-.25,1.15.09.29.34.25.86-.09,1.15-2.28,1.93-4.73,3.65-7.3,5.1-.36.2-.71.4-1.07.59-.12.07-.26.1-.39.1Zm15.07-12.83c-.17,0-.34-.05-.49-.16-.36-.27-.43-.78-.16-1.14,2.03-2.7,3.64-5.55,4.8-8.46.17-.42.64-.62,1.06-.46.42.17.63.64.46,1.06-1.21,3.04-2.89,6.02-5.01,8.84-.16.21-.41.33-.65.33Z" fill='#e7b387'/>
  <path class="cls-1" d="m178.38,6.53s-.02,0-.03,0c-.45-.02-.8-.4-.78-.85.07-1.59-.01-3.18-.24-4.74-.06-.45.25-.86.69-.93.44-.07.86.25.92.69.24,1.66.32,3.36.25,5.04-.02.44-.38.78-.82.78Z" fill='#e7b387'/>
</svg>
<svg class="--home-dashline1" viewBox="0 0 300 300">
  <path class="cls-1" d="m1.3,10.23s-.08,0-.13,0c-.71-.07-1.23-.7-1.17-1.41C.26,6.15.74,3.51,1.42.96,1.61.27,2.32-.14,3.01.04c.69.19,1.1.9.91,1.59-.65,2.41-1.1,4.91-1.34,7.42-.07.67-.63,1.17-1.29,1.17Z" fill='#e7b387'/>
  <path class="cls-1" d="m239.29,337.58c-.27,0-.54-.08-.77-.26-.57-.43-.69-1.24-.27-1.81,3.02-4.07,5.88-8.37,8.5-12.77.37-.62,1.16-.82,1.77-.45.61.37.82,1.16.45,1.77-2.66,4.48-5.57,8.85-8.64,12.99-.25.34-.64.52-1.04.52Zm15.79-26.57c-.18,0-.37-.04-.55-.12-.65-.3-.93-1.07-.63-1.72,2.15-4.61,4.09-9.4,5.78-14.22.24-.67.98-1.04,1.65-.79.68.24,1.03.97.79,1.65-1.72,4.9-3.69,9.76-5.88,14.45-.22.47-.69.75-1.17.75Zm10.23-29.17c-.1,0-.2-.01-.31-.04-.69-.17-1.12-.87-.95-1.57,1.21-4.97,2.19-10.04,2.9-15.07.1-.71.75-1.19,1.46-1.1.71.1,1.2.76,1.1,1.46-.73,5.12-1.72,10.27-2.95,15.32-.14.59-.67.99-1.26.99Zm4.33-30.6s-.04,0-.05,0c-.71-.03-1.27-.63-1.24-1.35.08-2.06.13-4.14.13-6.19,0-3.05-.09-6.13-.28-9.15-.04-.71.5-1.33,1.21-1.37.72-.03,1.33.5,1.37,1.21.19,3.08.29,6.21.29,9.31,0,2.08-.04,4.19-.13,6.29-.03.7-.6,1.24-1.29,1.24Zm-1.92-30.84c-.62,0-1.17-.45-1.27-1.08-.54-3.18-1.19-6.38-1.95-9.5-.44-1.81-.92-3.65-1.43-5.45-.2-.69.2-1.4.89-1.6.69-.2,1.4.2,1.6.89.52,1.84,1.01,3.71,1.46,5.55.77,3.18,1.43,6.43,1.98,9.67.12.71-.36,1.37-1.06,1.49-.07.01-.15.02-.22.02Zm-8.43-29.72c-.51,0-1-.31-1.2-.81-1.9-4.7-4.08-9.38-6.48-13.9-.34-.63-.09-1.42.54-1.75.63-.34,1.41-.09,1.75.54,2.44,4.61,4.66,9.36,6.59,14.15.27.66-.05,1.42-.72,1.69-.16.06-.32.09-.48.09Zm-14.46-27.31c-.42,0-.83-.2-1.08-.58-2.82-4.23-5.89-8.38-9.13-12.33-.45-.55-.37-1.37.18-1.82.55-.45,1.37-.37,1.82.18,3.29,4.02,6.42,8.24,9.29,12.54.4.59.24,1.4-.36,1.8-.22.15-.47.22-.72.22Zm-19.6-23.91c-.33,0-.66-.13-.92-.38-3.61-3.62-7.43-7.09-11.36-10.32-.55-.45-.63-1.27-.18-1.82.45-.55,1.27-.63,1.82-.18,3.99,3.28,7.88,6.81,11.55,10.49.51.51.5,1.32,0,1.83-.25.25-.58.38-.91.38Zm-23.88-19.62c-.25,0-.5-.07-.72-.22-4.25-2.84-8.69-5.48-13.18-7.86-.63-.33-.87-1.12-.54-1.75.33-.63,1.12-.87,1.75-.54,4.57,2.41,9.08,5.1,13.4,7.99.59.4.75,1.2.36,1.8-.25.37-.66.58-1.08.58Zm-27.33-14.43c-.16,0-.32-.03-.48-.09-3.68-1.47-7.44-2.8-11.18-3.94-1.11-.34-2.23-.67-3.35-.98-.69-.19-1.09-.91-.9-1.6.19-.69.91-1.09,1.6-.9,1.14.32,2.27.65,3.4,1,3.81,1.16,7.64,2.51,11.38,4.01.66.27.99,1.02.72,1.68-.2.51-.69.81-1.2.81Zm-29.71-8.52c-.08,0-.17,0-.25-.02-4.53-.89-9.51-1.74-15.2-2.58-.71-.1-1.2-.76-1.09-1.47.1-.71.76-1.2,1.47-1.09,5.74.85,10.75,1.69,15.32,2.6.7.14,1.16.82,1.02,1.52-.12.62-.66,1.04-1.27,1.04Zm-30.6-4.67c-.06,0-.11,0-.17-.01l-.98-.13c-4.72-.61-9.59-1.25-14.38-1.94-.71-.1-1.2-.76-1.1-1.47.1-.71.77-1.19,1.47-1.1,4.77.69,9.64,1.32,14.35,1.93l.98.13c.71.09,1.21.74,1.12,1.45-.08.65-.64,1.13-1.28,1.13Zm-30.61-4.59c-.08,0-.16,0-.25-.02-5.48-1.06-10.45-2.19-15.18-3.48-.69-.19-1.1-.9-.91-1.59.19-.69.9-1.1,1.59-.91,4.67,1.27,9.57,2.39,14.99,3.44.7.14,1.16.81,1.03,1.52-.12.62-.66,1.05-1.27,1.05Zm-29.8-8.25c-.16,0-.31-.03-.47-.09-5.05-1.96-9.82-4.19-14.17-6.62-.62-.35-.85-1.14-.5-1.76.35-.63,1.14-.85,1.76-.5,4.26,2.38,8.92,4.55,13.85,6.47.67.26,1,1.01.74,1.68-.2.51-.69.83-1.21.83Zm-26.84-15.17c-.29,0-.58-.09-.82-.29-4.05-3.29-7.77-7.05-11.08-11.17-.45-.56-.36-1.37.2-1.82.56-.45,1.37-.36,1.82.2,3.19,3.98,6.78,7.6,10.69,10.77.55.45.64,1.27.19,1.82-.26.31-.63.48-1.01.48ZM7.27,40.2c-.48,0-.94-.27-1.16-.72-2.39-4.87-4.13-9.88-5.17-14.89-.15-.7.3-1.39,1-1.53.7-.14,1.38.3,1.53,1,1,4.8,2.67,9.6,4.96,14.28.32.64.05,1.42-.59,1.73-.18.09-.38.13-.57.13Z" fill='#e7b387'/>
  <path class="cls-1" d="m223.93,355.12c-.34,0-.68-.13-.93-.39-.5-.51-.49-1.33.03-1.83,1.82-1.77,3.63-3.62,5.38-5.51.48-.52,1.3-.56,1.83-.07.53.49.56,1.3.07,1.83-1.78,1.93-3.62,3.81-5.48,5.61-.25.24-.58.37-.9.37Z" fill='#e7b387'/>
</svg>
    </div>

        <h1 className='spacing text-center catpaw'>Borrow Me</h1>
        <div className="--rank-allcards row spacing mt-5">

        {/* <svg  viewBox="0 0 1000 1000">
        <path className='cicle-transform1' d="m97.88,91.4c0,1.42-.15,3.55-.46,6.38-.31,2.84-.46,5-.46,6.48s-.03,3.81-.09,6.99-.09,5.54-.09,7.08-1.02,2.31-3.05,2.31c-.74,0-3.64-.59-8.7-1.76-5.61-1.23-16.1-1.85-31.46-1.85-4.75,0-11.87.26-21.37.79-9.5.52-16.56.79-21.19.79-1.6,0-2.5-.77-2.68-2.31-.19-2.1-.65-5.21-1.39-9.35-1.54-6.29-2.31-9.9-2.31-10.83,0-1.36,2.59-2.37,7.77-3.05,6.05-.8,9.93-1.91,11.66-3.33,6.23-5.24,12.61-11.87,19.15-19.89,8.33-10.12,12.49-17.7,12.49-22.76,0-4.38-1.59-8.07-4.77-11.06-3.18-2.99-6.95-4.49-11.33-4.49-4.93,0-9.84.99-14.71,2.96-3.27,1.23-6.69,3.02-10.27,5.37-3.02,1.91-4.69,2.87-5,2.87-2.1,0-3.15-2.47-3.15-7.4,0-3.82-.15-6.6-.46-8.33-.12-.8-.59-2.47-1.39-5-.74-2.16-1.11-3.76-1.11-4.81,0-.8.52-1.57,1.57-2.31,5.12-3.64,11.97-6.51,20.54-8.6,7.65-1.85,15.08-2.78,22.3-2.78,11.72,0,21.53,2.59,29.42,7.77,9.31,6.05,13.97,14.65,13.97,25.81,0,14.87-11.26,32.23-33.77,52.09,15.98-.8,28.5-1.2,37.57-1.2,1.85,0,2.78,1.14,2.78,3.42Z" fill="#236e82" stroke="#f2e4c2" strokeMiterlimit="10" stroke-width="7px" transform="translate(180, 35)"/>
        <path className='cicle-transform3' d="m555.32,279c0,153.42-124.37,277.78-277.78,277.78-368.48-14.63-368.37-540.99,0-555.57,153.41,0,277.78,124.37,277.78,277.79h0Z" fill="none" stroke="#e7b387" stroke-width="4px" stroke-miterlimit="10"  transform="translate(250, 50)"/>
        <path className='cicle-transform2' d="m555.32,279c0,153.42-124.37,277.78-277.78,277.78-368.48-14.63-368.37-540.99,0-555.57,153.41,0,277.78,124.37,277.78,277.79h0Z" fill="none" stroke="#e7b387" stroke-width="4.5px" stroke-miterlimit="10" stroke-dasharray="0 0 38.45 26.45" transform="translate(220, 85)"/>
        </svg> */}

         {/* <svg  className='cls-1' viewBox="0 0 1000 1000">
         <path class="cicle-transform5" d="m173.53,189.6c0,1.93-.86,3.7-2.58,5.32-1.72,1.62-3.6,2.43-5.62,2.43-4.86,0-12.16.05-21.89.15-9.73.1-17.03.15-21.89.15-3.75,0-5.57-1.62-5.47-4.86l.15-1.67c1.42-38.72,2.13-62.18,2.13-70.39v-45.15c0-2.84-.66-4.26-1.98-4.26-2.03,0-5.09.61-9.2,1.82s-7.22,1.82-9.35,1.82c-3.14,0-4.71-1.88-4.71-5.62,0-3.45-.05-8.61-.15-15.51-.1-6.89-.15-12.11-.15-15.66,0-2.03,1.27-3.55,3.8-4.56,14.9-6.18,26.6-14.49,35.12-24.93,1.72-2.13,3.19-3.19,4.41-3.19.2,0,.81.1,1.82.3,3.85.81,9.58,2.08,17.18,3.8,4.05.51,9.98,1.42,17.79,2.74,1.42.41,2.13,1.52,2.13,3.34,0,.61-.1,1.67-.3,3.19-1.11,8.92-1.67,30.76-1.67,65.52,0,11.66.08,29.19.23,52.6.15,23.41.23,40.95.23,52.6Z" transform="translate(50, 35)" fill="#236e82" stroke="#f2e4c2" stroke-miterlimit="10" stroke-width="11px"/>
         <path class="cicle-transformheart" d="m39.25,61.2s-22.96-36.74-35.08.15c-12.12,36.89,45.13,40.47,69.5,46.58,0,0,12.61-56.58-2.25-81.54-5.57-9.35-33.71-15.25-32.17,34.81Z" transform="translate(50, 35)" fill="#f79cb8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5px"/>
         <path className='cicle-transform2' d="m555.32,279c0,153.42-124.37,277.78-277.78,277.78-368.48-14.63-368.37-540.99,0-555.57,153.41,0,277.78,124.37,277.78,277.79h0Z" fill="none" stroke="#e7b387" stroke-width="4.5px" stroke-miterlimit="10" stroke-dasharray="0 0 38.45 26.45" transform="translate(220, 85)"/>
    </svg> */}

    {/* <svg  className='cls-1' viewBox="0 0 1000 1000">
         <path className='cicle-transform6' d="m555.32,279c0,153.42-124.37,277.78-277.78,277.78-368.48-14.63-368.37-540.99,0-555.57,153.41,0,277.78,124.37,277.78,277.79h0Z" fill="none" stroke="#e7b387" stroke-width="4px" stroke-miterlimit="10"  transform="translate(190, 50)"/>
         <path className='cicle-transform7' d="m555.32,279c0,153.42-124.37,277.78-277.78,277.78-368.48-14.63-368.37-540.99,0-555.57,153.41,0,277.78,124.37,277.78,277.79h0Z" fill="none" stroke="#e7b387" stroke-width="4.5px" stroke-miterlimit="10" stroke-dasharray="0 0 38.45 26.45" transform="translate(220, 85)"/>
         <path class="cicle-transform1" d="m93.16,89.06c0,11.74-4.85,20.78-14.56,27.12-8.25,5.46-18.56,8.18-30.93,8.18-9.52,0-17.35-.67-23.51-2-13.39-2.79-20.08-5.27-20.08-7.42,0-.38.13-.95.38-1.71.89-2.35,2.19-5.87,3.9-10.56.51-2.35,1.4-5.84,2.66-10.47.57-1.59,1.52-2.38,2.85-2.38-.19,0,2.65,1.05,8.52,3.14s10.67,3.14,14.42,3.14c12.43,0,18.65-4.16,18.65-12.47,0-6.66-5.9-9.99-17.7-9.99-1.59,0-3.68.06-6.28.19-2.6.13-4.31.19-5.14.19-3.87,0-6-.03-6.38-.1-2.79-.32-4.19-1.4-4.19-3.24,0-9.71.38-15.8,1.14-18.27.51-1.59,1.52-2.38,3.05-2.38,2.16,0,5.35.27,9.56.81,4.22.54,7.38.81,9.47.81,2.73,0,5-.9,6.8-2.71,1.81-1.81,2.71-4.11,2.71-6.9,0-7.49-5.46-11.23-16.37-11.23-4.57,0-10.75,1.24-18.56,3.71-.32.06-.6.1-.86.1-.82,0-1.52-.89-2.09-2.66-.13-2.66-.32-5.71-.57-9.14-.06-.76-.25-2.28-.57-4.57-.25-1.84-.38-3.33-.38-4.47,0-3.36,5.2-5.96,15.61-7.8,7.17-1.27,14.12-1.9,20.84-1.9,10.79,0,20.24,2.38,28.36,7.14,9.83,5.71,14.75,13.61,14.75,23.7,0,11.61-5.27,20.43-15.8,26.46,6.22,2.09,11.15,5.61,14.8,10.56,3.65,4.95,5.47,10.66,5.47,17.13Z" fill="#236e82" stroke="#f2e4c2" stroke-miterlimit="10" stroke-width="8px"  transform="translate(200, 35)"/>
         </svg> */}





        {productInput.filter((product) => product.topSales === true).map((data) =>
            <div class="--rank_card col">
                <div class="circle">
                </div>
                <div class="content">
                <h2>{data.title}</h2>
                <p> Age: {data.age} <br/> 
                    Gender: {data.gender} <br/> 
                    Weight: {data.weight}<br/> 
                    Breed: {data.breed}<br/>            
                </p>
                <a href="#">Borrow Now</a>
                </div>
                <img src={data.images[1]} alt=""></img>
            </div>
        )}

        


       
            
        
       
        </div>
        </div>
        </div>
       
   
 
        </div>
        
        </div>
            


     
  )
}

export default HomeProduct