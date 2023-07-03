import { useState } from "react"
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-center"

  return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo}/>
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                            page="Home"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                            />
                            <Link page="Benefits"  setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}/>
                            <Link page="Our Classes"  setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}/>
                            <Link page="Home"  setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}/>

                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign in</p>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    </nav>
  )

}

export default Navbar