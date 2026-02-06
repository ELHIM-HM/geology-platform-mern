/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter , faXmark } from '@fortawesome/free-solid-svg-icons'

const CollectionOverlay = ({
  modelURL,
  description,
  onClose,
}) => {
  const mountRef = useRef(null)
  const infoRef = useRef(null) // Reference for the info section
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!modelURL) {
      console.error('Model URL is undefined')
      return
    }

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      5,
      mountRef.current.clientWidth /
        mountRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight,
    )
    renderer.setPixelRatio(
      window.devicePixelRatio < 2
        ? window.devicePixelRatio
        : 2,
    ) // Cap pixel ratio
    renderer.setClearColor(0xf3f2ed) // Set clear color to desired background color
    mountRef.current.appendChild(renderer.domElement)

    // Add a single ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 2) // Adjust intensity for better lighting
    scene.add(ambientLight)

    // Set up OrbitControls
    const controls = new OrbitControls(
      camera,
      renderer.domElement,
    )
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.minDistance = 1
    controls.maxDistance = 500
    controls.maxPolarAngle = Math.PI

    // Load and add the GLTF model from AWS S3
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      modelURL,
      (gltf) => {
        const model = gltf.scene
        model.position.set(0, 0, 0)
        scene.add(model)

        // Ensure the materials are physically correct and responsive to light
        model.traverse((node) => {
          if (node.isMesh) {
            node.material.envMapIntensity = 1.5 // Increase environment map intensity
            node.material.needsUpdate = true
          }
        })

        // Center the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        // the loading state
        setIsLoading(false)
      },
      undefined,
      (error) => {
        console.error('Error loading the model:', error)
      },
    )

    // Set camera position
    camera.position.set(0, 0, 2)
    controls.update()

    // Throttle the render loop to limit frame rate
    let isAnimating = true
    const animate = () => {
      setTimeout(() => {
        if (isAnimating) {
          requestAnimationFrame(animate)
          controls.update()
          renderer.render(scene, camera)
        }
      }, 1000 / 30) // Limit to 30 FPS
    }

    // Start the animation loop
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth /
        mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      )
    }
    window.addEventListener('resize', handleResize)

    // Clean up on unmount
    return () => {
      isAnimating = false // Stop the animation loop
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [modelURL])

  const toggleFullScreen = () => {
    const container = mountRef.current
    if (container.requestFullscreen) {
      if (!document.fullscreenElement) {
        container.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }
  }



  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-75 overflow-auto flex justify-center items-center'>
      <div
        className='bg-white rounded-lg p-8 max-w-3xl w-full relative md:max-w-6xl'
        style={{ height: '90vh' }}
      >
        <div className='flex flex-col h-full overflow-y-auto'>
          <div className='flex-1 flex flex-col md:flex-row gap-6'>
            <div
              className='w-full md:w-3/4 overflow-hidden relative' // Added 'relative' for positioning
              ref={mountRef}
              style={{ height: '70vh' }}
            >
              {isLoading && (
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25'>
                  <h1 className='text-xl md:text-7xl font-bold flex items-center'>
                    L
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      className='animate-spin'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z'></path>
                    </svg>
                    ading
                    <span className='ml-2'></span>
                    <div className='flex items-end space-x-2 mt-6'>
                      <div
                        className='h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce'
                        style={{ animationDelay: '-0.3s' }}
                      ></div>
                      <div
                        className='h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce'
                        style={{ animationDelay: '-0.15s' }}
                      ></div>
                      <div className='h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce'></div>
                    </div>
                  </h1>
                </div>
              )}

              <span
                className='absolute bottom-2 right-2 z-10  p-2 shadow-md cursor-pointer '
                onClick={toggleFullScreen}
              >
                <FontAwesomeIcon
                  icon={faUpRightAndDownLeftFromCenter}
                />
              </span>
            </div>
           
            <div
              className='w-full md:w-1/4 overflow-y-auto md:overflow-auto md:h-full flex flex-col  items-start justify-around'
              ref={infoRef}
            >
              {/* Information Display */}
              <h2 className='text-lg font-bold '>
                Model Information
              </h2>

              <div className='flex  justify-between  items-center w-full'>
                <p className='font-bold'> Name:</p>
                <p  className='mr-6'>{description.name}</p>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='font-bold'>Type:</p>
                <p className='mr-6'>{description.type}</p>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='font-bold'>Subtype:</p>
                <p className='mr-6'>{description.subtype}</p>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='font-bold'>Category:</p>
                <p className='mr-6'>{description.category}</p>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='font-bold'>Origin:</p>
                <p className='mr-6'>{description.origine_geologique}</p>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='font-bold'>Chemical formula:</p>
                <p className='mr-6'>{description.formule_chimique}</p>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h2 className='text-lg font-bold mb-2'>
              Description
            </h2>
            {description.description}
          </div>
        </div>
        <button
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-800'
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} style={{ color: 'red', fontSize: '32px' }}/>

        </button>
      </div>
    </div>
  )
}

export default CollectionOverlay
