import Bathroom from "../assets/imgs/herobath.jpg"
import Logo1 from "../assets/logos/logo1.svg"
import Logo2 from "../assets/logos/logo2.svg"
import Logo3 from "../assets/logos/logo3.svg"
import Logo4 from "../assets/logos/logo4.svg"
import Grid from "../assets/imgs/grid.png"
import { FaArrowRight } from "react-icons/fa6";
import Photo1 from "../assets/imgs/photo1.png"
import videoCall from "../assets/imgs/videocall.png"
import Renovator from "../assets/imgs/renovator.png"
import Text from "../assets/imgs/Frame 28.png"
import Star from "../assets/imgs/star.png"
import Review1 from "../assets/logos/reviewlogo1.svg"
import Review2 from "../assets/logos/reviewlogo2.svg"
import WhiteLogo1 from "../assets/logos/white1.svg"
import WhiteLogo2 from "../assets/logos/whitte2.svg"
import WhiteLogo3 from "../assets/logos/white3.svg"
import WhiteLogo4 from "../assets/logos/white4.svg"
import ModernCollection from "../assets/imgs/moderncollections.png"
import HeritageCollection from "../assets/imgs/heritagecollections.png"
import ArtisansCollection from "../assets/imgs/Artisans Collection.png"
import { HiMail } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import Logo from "../assets/logos/mainwhite.svg"


const Home = () => {
    return(
        <div className="flex flex-col h-fit overflow-x-hidden">
            <div id="page1" className="page1 flex flex-col gap-y-10 justify-center items-center h-[90vh] sm:h-[85vh]">
                <h1 className="sm:text-7xl text-4xl text-center tracking-tighter font-[Helvetica-Bold]">Bathroom Renovations,<br/> Made Easy</h1>
                <p className="text-center text-base sm:text-lg mx-3 max-w-sm text-gray-500">We Combine design, construction drawings, premium materials and certified contractors for all-in-one experience.</p>
                <button className="bg-black px-3 py-2 rounded-lg text-xl h-[3.5rem] text-white">Get An Estimate</button>
            </div>
            <div id="page2" className="page2 flex flex-col h-[110vh]">
                <img className="h-[70vh] w-full object-cover" src={Bathroom} alt="" />
                <div className="h-[40vh] my-10 sm:my-0 mx-10 gap-5 sm:flex sm:justify-around grid grid-cols-2">
                <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                    <img src={Logo1} className="sm:w-[15vw]" alt="" />
                    <p className="text-center font-semibold text-zinc-700 text-sm">"Sit back while neglected <br/> bathrooms are remade"</p>
                </div>
                <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                    <img src={Logo2} className="sm:w-[15vw]" alt="" />
                    <p className="text-center font-semibold text-zinc-700 text-sm">"Its Not like your typical <br/> general contractor"</p>
                </div>
                <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                    <img src={Logo3} className="sm:w-[15vw]" alt="" />
                    <p className="text-center font-semibold text-zinc-700 text-sm">"Handles the full remodel<br/>from start to finish"</p>
                </div>
                <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                    <img src={Logo4} className="sm:w-[15vw]" alt="" />
                    <p className="text-center font-semibold text-zinc-700 text-sm">"A Sans Francisco based<br/> renovation startup"</p>
                </div>
                
            </div>
            </div>
            <div className="page3 h-fit" id="page3">
                <h1 className="text-center tracking-tighter sm:text-6xl text-4xl mt-5 font-[Helvetica-Bold]">We've Reimagined the Home <br/> Renovation Experience.</h1>
                <div className="h-fit flex mt-10 flex-col sm:flex-row justify-center items-center">
                    <div className="h-[70vh] sm:h-screen my-5 sm:my-0 sm:w-[50%] w-full flex flex-col sm:gap-y-0 gap-y-10 sm:justify-around items-center sm:items-start">
                        <div className="h-fit w-full flex flex-col gap-3 justify-center sm:items-center ">
                            <div className="flex flex-col w-full sm:w-fit gap-3 sm:justify-normal justify-center">
                            <p className="sm:text-4xl text-3xl sm:text-start font-semibold mx-5">01 All in One Experience</p>
                            <p className="mx-5 sm:text-start flex items-center text-gray-500 max-w-sm">You share your ideas and we handles the rest - from design and construction drawing to material procurements and construction set up. Sit back and relax, you’ve got it Made.</p>
</div>
                        </div>
                        <div className="h-fit w-full flex flex-col gap-3 justify-center sm:items-center items-center">
                            <div className="flex flex-col w-full sm:w-fit gap-3 sm:justify-normal justify-center">
                            <p className="sm:text-4xl  sm:text-start text-3xl font-semibold mx-5">02 Stunning Designs</p>
                            <p className="mx-5 flex sm:text-start items-center max-w-sm text-gray-500">Collaborate with a dedicated team of industry leading designers to help you find the perfect solutions to bring your dream bathroom to life.</p>
</div>
                        </div>
                        <div className="h-fit w-full ml-2 flex flex-col gap-3 justify-center sm:items-center items-center">
                            <div className="flex flex-col w-full sm:w-fit gap-3 sm:justify-normal justify-center">
                            <p className="sm:text-4xl sm:text-start text-3xl font-semibold mx-5">03 Quality Materials</p>
                            <p className="mx-5 max-w-sm flex sm:text-start items-center text-gray-500">Whether it's a tile, lighting or fixtures, we provide you with the highest quality products available from brands you know and trust like Kohler, Toto, Daltile, Ann Sacks etc.</p>
</div>
                        </div>
                        <div className="h-fit flex flex-col gap-3 w-fit sm:pl-32">
                           <button className="px-7 rounded-md text-white py-3 flex items-center gap-x-2 bg-black font-semibold">See More < FaArrowRight className="text-xl"/></button>
                        </div>

                    </div>
                    <div className="sm:h-screen h-[55vh] flex justify-center sm:w-[50%] w-full">
                        <img src={Grid} className="sm:h-screen w-[90%]" alt="" />
                    </div>
                </div>
            </div>
            <div className="min-h-screen py-5 max-h-fit mt-5 flex flex-col gap-y-4">
            <h1 className="text-center tracking-tighter text-5xl  mt-5 font-[Helvetica-Bold]">How It Works</h1>
            <p className="text-center text-gray-500">Our unique build process gives you peace of mind <br/> from design building</p>
            <div className="h-fit sm:h-[80vh] flex-wrap gap-y-20 mt-10 sm:flex-nowrap sm:px-28 w-full flex justify-around items-center">
                <div className="sm:h-[75%] h-fit gap-y-5 sm:w-[33.3vw] flex flex-col items-center justify-around sm:px-0 px-10">
                    <p className="sm:text-4xl text-3xl sm:px-0 sm:pl-10 px-10 tracking-tighter">01.<br/>Get an Estimate Project</p>
                    <p className="text-lg px-10">Schedule a call with a Made Project Consultant</p>
                    <img className="w-[75%]" src={Photo1} alt=""/>
                </div>
                <div className="sm:h-[75%] h-fit gap-y-5 sm:w-[33.3vw] flex flex-col items-center justify-around sm:px-0 px-10">
                    <p className="sm:text-4xl text-3xl sm:px-0 sm:pl-10 px-10 tracking-tighter">02.<br/>Meet Your Project Consultancy Virtually</p>
                    <p className="text-lg px-10">Our Representative will virtually meet you via call.</p>
                    <img className="w-[75%]" src={videoCall} alt="" />
                </div>
                <div className="sm:h-[75%] h-fit gap-y-5 sm:w-[33.3vw] flex flex-col items-center justify-around sm:px-0 px-10">
                    <p className="sm:text-4xl text-3xl sm:px-10 px-10 tracking-tighter">03.<br/>Relax as Your Bathroom is Made</p>
                    <p className="text-lg px-10">Made renovation works, so you fon't have to.</p>
                    <img className="w-[75%]" src={Renovator} alt="" />
                </div>
            </div>
            <div className="h-fit flex flex-col gap-y-5 mt-10 justify-center items-center">
                <p className="text-xl font-semibold">Ready to get a new Bathroom?</p>
                <button className="px-7 rounded-md text-white py-3 flex items-center gap-x-2 bg-black">Get an instant Estimate</button>
            </div>
            </div>
            <div className="min-h-screen mt-10 bg-[#F3F3F3] flex sm:flex-row flex-col">
                <div className="sm:w-[50%] my-5 mx-3 h-fit sm:h-screen flex justify-center items-center">
                    <img className="sm:w-[75%] sm:ml-10 ml-0" src={Text} alt="" />
                </div>
                <div className="sm:w-[50%] gap-y-10 py-10 mx-10 sm:h-screen flex flex-col justify-center ">
                    <p className="text-6xl w-[75%] tracking-tighter font-[Helvetica-Bold]">Your Renovation Sidekick</p>
                    <p className="text-2xl w-[75%] tracking-tight text-gray-500">Construction can get complicated, but we’ll always have your back. With Made, you get a support team you can email with any questions from start to finish.</p>
                    <div className="flex sm:w-[75%] my-5">
                        <div className="w-[50%] gap-y-1 flex flex-col">
                             <img className="w-[55%]" src={Star} alt="" />
                             <img className="w-[60%]" src={Review1} alt="" />
                        </div>
                        <div className="w-[50%] flex gap-y-1 flex-col">
                             <img className="w-[55%]" src={Star} alt="" />
                             <img className="w-[60%]" src={Review2} alt="" />
                        </div>
                    </div>
                    <button className="px-7 rounded-md text-white py-3 flex w-fit items-center gap-x-2 bg-black ">Lets start a Project < FaArrowRight className="text-xl"/></button>
                </div>
            </div>
            <div className="h-[40vh] flex flex-col items-center justify-center bg-black">
                <p className="text-center mb-5 text-white text-2xl ">Our Project Partners</p>
                <div className="flex w-full h-[25vh] items-center justify-evenly flex-wrap gap-y-2 gap-x-3">
                    <img src={WhiteLogo1}  alt="" />
                    <img src={WhiteLogo2} alt="" />
                    <img src={WhiteLogo3} alt="" />
                    <img src={WhiteLogo4} alt="" />
                </div>
            </div>
            <div className="my-5 sm:h-screen h-fit py-3 flex flex-col justify-around">
                <p className="text-center tracking-tighter text-5xl mt-5 mb-10 font-[Helvetica-Bold]">Our Project</p>
                <div className="h-[90%] mx-24 gap-y-14 justify-evenly items-center flex sm:flex-row flex-col">
                    <div className="h-[90%] hovercard sm:w-[30%] w-[90vw] flex flex-col justify-center items-center gap-y-1 relative group">
                        <img className="w-[90%] transition duration-300 ease-in-out brightness-50 group-hover:brightness-100 rounded-lg" src={ModernCollection} alt="" />
                        <div  className="absolute inset-0 group-hover:text-black flex transition-all group-hover:-bottom-56 sm:group-hover:-bottom-56 flex-col items-center justify-center text-white">
                            <p className="text-3xl font-semibold">Modern Collections</p>
                        </div>
                        <div className="absolute text-gray-100 bottom-16 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="h-[90%] hovercard sm:w-[30%] w-[90vw] flex flex-col justify-center items-center gap-y-1 relative group">
                        <img className="w-[90%] transition duration-300 ease-in-out brightness-50 group-hover:brightness-100 rounded-lg" src={HeritageCollection} alt="" />
                        <div  className="absolute inset-0 group-hover:text-black flex transition-all group-hover:-bottom-52 sm:group-hover:-bottom-56 flex-col items-center justify-center text-white">
                            <p className="text-3xl font-semibold">Heritage Collections</p>
                        </div>
                        <div className="absolute text-gray-100 bottom-16 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="h-[90%] hovercard sm:w-[30%] w-[90vw] flex flex-col justify-center items-center gap-y-1 relative group">
                        <img className="w-[90%] transition duration-300 ease-in-out brightness-50 group-hover:brightness-100 rounded-lg" src={ArtisansCollection} alt="" />
                        <div className="absolute inset-0 group-hover:text-black transition-all flex group-hover:-bottom-56 sm:group-hover:-bottom-56 flex-col items-center justify-center text-white">
                            <p className="text-3xl font-semibold">Artisans Collections</p>
                        </div>
                        <div className="absolute text-gray-100 bottom-16 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:h-screen pb-5 h-fit bg-gray-100 flex flex-col justify-center items-center gap-y-5">
                <p className="sm:text-7xl text-4xl text-center sm:w-[70%] mx-5 mt-5 font-[Helvetica-Bold] tracking-tighter">Renovating is hard, we’ve got your back.</p>
                <p className="text-xl px-5 text-center ext-gray-500">You're on the way to the easiest renovation ever.</p>
                <button className="px-7 my-5 rounded-md text-white py-3 flex items-center gap-x-2 bg-black">Get an instant estimate.</button>
                <div className="w-full flex sm:flex-row flex-col mt-6 gap-y-5 justify-around items-center">
                    <div className="sm:w-[30%] w-[90%] bg-black text-white sm:h-[30vh] h-[25vh] flex flex-col rounded-xl justify-evenly">
                        <HiMail className="text-7xl mt-3 ml-5"/>
                        <p className="text-4xl ml-5">Email Us :</p>
                        <p className="mb-3 text-xl ml-5">founder@trustmillenia.agency</p>
                    </div>
                    <div className="sm:w-[30%] w-[90%] bg-black text-white sm:h-[30vh] h-[25vh] flex flex-col rounded-xl justify-evenly">
                        <IoCallSharp  className="text-7xl mt-3 ml-5"/>
                        <p className="text-4xl ml-5">Call Us :</p>
                        <p className="mb-3 text-xl ml-5">+91 3636363636</p>
                    </div>
                </div>
            </div>
            <footer className="bg-black text-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div>
            <img src={Logo} alt="" />
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
          Made Provides an all-in-one renovation solution that combines high-quality designs, material and constructions.
        </p>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="."
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="."
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="."
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="."
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">GitHub</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="."
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Dribbble</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="." className="text-white transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="." className="text-white transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="." className="text-white transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="." className="text-white transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="." className="text-white transition hover:opacity-75"> Hiring Statistics </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500">&copy; 2024. Trust Millennia. All rights reserved.</p>
  </div>
</footer>
        </div>
    )
}
export default Home