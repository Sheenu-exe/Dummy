import { IoMenu } from "react-icons/io5";
import Logo from "../assets/logos/main.svg"




export const Header = () => {
    return(
        <div className=" flex sm:h-[15vh] h-[10vh] sm:justify-around justify-between">
            <div className="h-full logobox w-fit flex justify-center mx-3 items-center">
                <img className="sm:w-[13vw] w-[27vw]" alt="" src={Logo}/>
            </div>
            <div className="nav w-fit hidden sm:flex">
                <ul className="flex gap-x-5 text-xl font-semibold items-center">
                    <li>
                        <a href=".">How it Works</a>
                    </li>
                    <li>
                        <a href=".">Review</a>
                    </li>
                    <li>
                        <a href=".">Virtual Tour</a>
                    </li>
                    <li>
                        <a href=".">Gallery</a>
                    </li>
                    <li>
                        <a href=".">Get 1000$ OFF</a>
                    </li>
                </ul>
            </div>
            <div className="hidden sm:flex font-semibold text-xl items-center">
                <a href="tel:+913636363636">+91 3636363636</a>
            </div>
            <div className="sm:hidden flex items-center mx-3">
                <button className="bg-white border-2 border-black rounded-lg  flex justify-center items-center h-[5vh] w-[5vh] "><IoMenu className="text-xl"/></button>
            </div>
        </div>
    )
}
