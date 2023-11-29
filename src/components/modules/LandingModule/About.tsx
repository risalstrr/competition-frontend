import Image from 'next/image'

export default function About() {
  return (
    <>
      <div
        className="relative flex flex-col md:flex-row gap-10 justify-center items-center min-h-[45vw]"
        id="about"
      >
        <Image
          height={320}
          width={320}
          className="relative lg:-ml-0 md:-mx-16 -mx-3 2xl:w-[30vw] 2xl:h-[30vw] xl:w-[35vw] xl:h-[35vw] md:w-[40vw] md:h-[40vw] w-0 h-0 rounded-lg"
          src="/assets/images/about.svg"
          alt=""
        />
        <div className="lg:pl-32 md:pl-16 pl-3">
          <h1 className="text-center md:text-left relative lg:text-display-medium mb-10 md:text-display-small text-display-small font-bold leading-none text-purple-light">
            Keanekaragaman Etnis dan Bahasa
          </h1>
          <a
            href="#2"
            className="block relative text-center md:text-left group-hover:text-purple-500 transition-colors duration-200 2xl:pr-[30vw] lg:pr-32 md:pr-8 pr-3"
          >
            Indonesia dikenal sebagai negara dengan keanekaragaman etnis dan
            bahasa yang luar biasa. Dengan lebih dari 300 suku bangsa dan lebih
            dari 700 bahasa daerah, kekayaan budaya Indonesia tercermin dalam
            adat istiadat, upacara tradisional, dan keberagaman bahasa yang
            membuatnya menjadi salah satu warisan budaya terkaya di dunia.
          </a>
          <button className="mt-5 bg-purple-light hover:bg-pink-200 hover:text-purple-light text-white font-bold py-2 px-4 border-b-4 border-red-400 hover:border-red-400 rounded">
            Jelajah lebih lanjut!
          </button>
        </div>
      </div>
      <div
        className="relative flex flex-col md:flex-row gap-10 justify-center items-center mb-10 min-h-[45vw]"
        id="about"
      >
        <Image
          height={320}
          width={320}
          className="relative lg:-ml-0 md:-mx-16 -mx-3 2xl:w-[30vw] 2xl:h-[30vw] xl:w-[35vw] xl:h-[35vw] md:w-[40vw] md:h-[40vw] w-0 h-0 rounded-lg"
          src="/assets/images/about1.svg"
          alt=""
        />
        <div className="lg:pl-32 md:pl-16 pl-3">
          <h1 className="text-center md:text-left relative lg:text-display-medium mb-10 md:text-display-small text-display-small font-bold leading-none text-purple-light">
            Seni dan Kerajinan Tradisional
          </h1>
          <a
            href="#2"
            className="block relative text-center md:text-left group-hover:text-purple-500 transition-colors duration-200 2xl:pr-[30vw] lg:pr-32 md:pr-8 pr-3"
          >
            Keindahan budaya Indonesia juga tercermin dalam seni dan kerajinan
            tradisional yang mengagumkan. Mulai dari wayang kulit, batik, ukiran
            kayu, hingga seni pahat dan seni rupa, setiap karya seni ini
            mengandung nilai-nilai sejarah dan kearifan lokal, menciptakan
            warisan seni yang unik dan tak ternilai.
          </a>
          <button className="mt-5 bg-purple-light hover:bg-pink-200 hover:text-purple-light text-white font-bold py-2 px-4 border-b-4 border-red-400 hover:border-red-400 rounded">
            Jelajah lebih lanjut!
          </button>
        </div>
      </div>
    </>
  )
}
