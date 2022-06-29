export default function VideoContainer() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[360px] h-[580px] mb-16 md:mb-0">
          <video
            autoPlay
            className="block object-cover object-center w-full h-full rounded-xl"
            muted
            loop
            playsInline=""
            src="https://cdn.veed.io/render/387d0927-dc2d-4a22-91ee-3b0591d8fcaf.mp4#t=0.001"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center md:py-5">
        <h2 className="text-3xl font-bold text-white sm:text-5xl md:text-7xl">
          Modifications in <span className="text-highlight">one</span> place.
        </h2>
      </div>
      <div className="w-full h-screen bg-black"></div>
    </>
  );
}
