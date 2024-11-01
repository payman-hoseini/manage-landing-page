export default function SectionTwo(){
    return (
    <div className="mt-16 font-Vietnam flex flex-col md:flex-row justify-between">
      <div className="basis-1/2 lg:mr-28 md:mr-5 text-center md:text-left">
          <p className="text-5xl font-bold text-Dark-Blue">What’s different about Manage?</p>
          <p className="text-Dark-Grayish-Blue mt-10 lg:w-[60%]">Manage provides all the functionality your team needs, without 
            the complexity. Our software is tailor-made for modern digital 
            product teams.</p>
      </div>
      <div className="basis-1/2 mt-10 md:mt-0">
          <div className="flex items-baseline">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2 z-50">01</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter bg-Very-Pale-Red md:bg-transparent -ml-8 md:-ml-0 py-2 md:py-0 px-8 md:px-0">Track company-wide progress</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance -ml-16 md:-ml-0 leading-7 md:leading-normal">See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
          </div>
          <div className="flex items-baseline mt-8">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2 z-50">02</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter bg-Very-Pale-Red md:bg-transparent -ml-8 md:-ml-0 py-2 md:py-0 px-8 md:px-0">Advanced built-in reports</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance -ml-16 md:-ml-0 leading-7 md:leading-normal">Set internal delivery estimates and track progress toward company 
                goals. Our customisable dashboard helps you build out the reports 
                you need to keep key stakeholders informed.</p>
            </div>
          </div>
          <div className="flex items-baseline mt-8">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2 z-50">03</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter bg-Very-Pale-Red md:bg-transparent -ml-8 md:-ml-0 py-2 md:py-0 px-8 md:px-0">Everything you need in one place</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance -ml-16 md:-ml-0 leading-7 md:leading-normal">Stop jumping from one service to another to communicate, store files, 
              track tasks and share documents. Manage offers an all-in-one team 
              productivity solution.</p>
            </div>
          </div>
      </div>
    </div>
    )
}