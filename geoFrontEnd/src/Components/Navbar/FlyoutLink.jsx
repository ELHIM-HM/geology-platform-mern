/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FlyoutLink = ({ children, href, FlyoutContent  , isNavbar=true , style='' , squirePosition='left-1/2 top-0'  , }) => {
  const [open, setOpen] = useState(false)
  const [isSmallScreen , setIsSmallScreen] = useState(false)

  useEffect(()=>{
    const handleResize = ()=>{
      setIsSmallScreen(window.innerWidth <=460);
    }
      
    handleResize();

    window.addEventListener('resize' , handleResize);

    return ()=>{
      window.removeEventListener('resize' , handleResize)
    }
  } , []);


  let styles =  isSmallScreen ?  { x : "-50%" } : { left: "150%", top: "-100%" } ;
  let className = isSmallScreen ? 'absolute left-1/2 top-12 bg-white text-black' : 'absolute bg-white text-black' ;

  
  if(isNavbar){
    styles = { x : "-50%" };
    className = 'absolute left-1/2 top-12  bg-white text-black';
  }
  

  
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`relative h-fit w-fit ${style} `}
    >
      <a className='relative text-white ' href={href}>
        {children}
        <span
          style={{
            transform: open ? 'scaleX(1)' : 'scaleX(0) ',
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 
        origin-left  rounded-full bg-teal-400 transition-transform duration-300 ease-out'
        ></span>
      </a>
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity : 0 , y : 15 }}
          animate={{opacity : 1 ,y : 0 }}
          exit={{ opacity : 0 , y : 15 }}
          transition = {{duration : 0.3 , ease : 'easeOut'}}
    
          
          style={styles}
          className={className}
        
          
        >
          <div className='absolute  -top-6 left-0 right-0 h-6 bg-transparent' />
          <div
            className={`absolute ${isSmallScreen ? 'left-1/2 top-0' : squirePosition}    h-4 w-4 
            -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-300
          `} />
           
          <FlyoutContent />
          {'  '}
        </motion.div>
      )}
      </AnimatePresence>
      
    </div>
  )
}

export default FlyoutLink
