import VerticalSlider from "../../components/VerticalSlider";

export default function Home() {

  return (
    <main className="bg-[#FAF6F9]">
      <div className="grid grid-cols-2 gap-6">
        <div className="pl-10">
          <div className="pl-16 pr-5 pt-14">
            <h2 className="text-4xl font-semibold leading-[40px] mt-10">OVER 500 <br/> WEBSITES 🚧 ✨</h2>
            <p className="text-xl mt-5">With this much experience, you can trust us to take care of your website project.</p>
          </div>
        </div>
        <div>
          <img src="/images/saly2.svg" alt="girl_with_laptop" width='80%' className="bounce" />
        </div>
      </div>
      {/* ----- services section ----- */}
      <div className="p-10">
        <div className="text-center">
          <h1 className="text-[#001E43] font-semibold uppercase relative tracking-widest">Our Services
            <span className="text-stroke">Our Services</span>
          </h1>
        </div>
        <div className="flex m-16">
          <div className="w-1/3 h-[356px] overflow-hidden">
            <div className="h-full p-4 flex items-center gap-2 justify-center pt-24">
              <img src="/images/services2.png" alt="services_image" className="grayscale" />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <VerticalSlider />
          </div>
        </div>
      </div>
    </main>
  )
}
