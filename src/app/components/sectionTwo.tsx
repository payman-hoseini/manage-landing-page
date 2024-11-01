export default function SectionTwo(){
    return (
    <div className="mt-16 font-Vietnam flex flex-col md:flex-row justify-between">
      <div className="basis-1/2 mr-28">
          <p className="text-5xl font-bold text-Dark-Blue">What’s different about Manage?</p>
          <p className="text-Dark-Grayish-Blue mt-10 w-[60%]">Manage provides all the functionality your team needs, without 
            the complexity. Our software is tailor-made for modern digital 
            product teams.</p>
      </div>
      <div className="basis-1/2">
          <div className="flex items-start">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2">01</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter">Track company-wide progress</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance">See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
          </div>
          <div className="flex items-start mt-8">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2">02</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter">Advanced built-in reports</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance">Set internal delivery estimates and track progress toward company 
                goals. Our customisable dashboard helps you build out the reports 
                you need to keep key stakeholders informed.</p>
            </div>
          </div>
          <div className="flex items-start mt-8">
            <div className="bg-Bright-Red px-5 text-white font-medium rounded-full text-sm py-2">03</div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-Dark-Blue tracking-tighter">Everything you need in one place</p>
              <p className="mt-4 text-Dark-Grayish-Blue text-balance">Stop jumping from one service to another to communicate, store files, 
              track tasks and share documents. Manage offers an all-in-one team 
              productivity solution.</p>
            </div>
          </div>
      </div>
    </div>
    )
}