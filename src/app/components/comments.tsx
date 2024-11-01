import Image from "next/image";
import Anisha from './../../../public/images/avatar-anisha.png'
import Bravo from './../../../public/images/avatar-ali.png'
import Shanai from './../../../public/images/avatar-shanai.png'


export default function Comments(){
    return (
        <div className="grid place-items-center">
          <p className="text-center text-4xl font-Vietnam font-bold text-Dark-Blue">What they’ve said</p>
          <div className="mt-28 grid grid-cols-3 gap-x-8">
            <div className="bg-Very-Light-Gray rounded grid place-items-center font-Vietnam pb-8">
              <div className="-mt-12">
                <Image src={Anisha} alt="Anisha" className="w-24"/>
              </div>
              <p className=" my-6 font-bold text-lg text-Dark-Blue">Anisha Li</p>
              <p className="text-Dark-Grayish-Blue text-center px-5">“Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>
            <div className="bg-Very-Light-Gray rounded grid place-items-center font-Vietnam pb-8">
              <div className="-mt-12">
                <Image src={Bravo} alt="Bravo" className="w-24"/>
              </div>
              <p className=" my-6 font-bold text-lg text-Dark-Blue">Ali Bravo</p>
              <p className="text-Dark-Grayish-Blue text-center px-5">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
              </p>
            </div>
            <div className="bg-Very-Light-Gray rounded grid place-items-center font-Vietnam pb-8">
              <div className="-mt-12">
                <Image src={Shanai} alt="Shanai" className="w-24"/>
              </div>
              <p className=" my-6 font-bold text-lg text-Dark-Blue">Shanai Gough</p>
              <p className="text-Dark-Grayish-Blue text-center px-5">“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
            </div>
          </div>
          <button className="bg-Bright-Red text-sm font-medium text-white px-10 py-4 rounded-full shadow-xl shadow-Very-Pale-Red mt-10 hover:duration-300 hover:bg-opacity-70">Get Started</button>
      </div>
    )
}