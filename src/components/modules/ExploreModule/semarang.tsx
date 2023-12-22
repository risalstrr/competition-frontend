import { Button } from 'flowbite-react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
export const SemarangModule: React.FC = () => {
  return (
    <>
      <div className=" relative bg-rose-200 w-full min-h-screen 2xl:px-[20vw] lg:py-24 md:py-20 py-32 lg:px-24 md:px-12 ">
        <div className=" w-full lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[55%] lg:w-[50%] mx-auto lg:p-12 p-5 md:mt-30 rounded-2xl"
              src="/assets/images/sampookong.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Kirana dan Semarang <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Kirana memulai petualangannya di kota Semarang, tempat di mana
                sejarah dan keindahan budaya menyatu harmonis. Terpesona oleh
                arsitektur kolonial yang megah. Tempat pertama yang di kunjungi
                oleh Kirana adalah Klenteng Sam Poo Kong.
              </p>

              <br />
              <br />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-right text-purple-light lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Sam Poo Kong <p className="inline"></p>
              </h1>
              <p className="text-right lg:text-xl md:text-xl text-lg mt-10">
                Sampookong, atau Klenteng Gedung Batu, adalah klenteng
                bersejarah di Semarang, didirikan pada abad ke-18. Dengan
                arsitektur khas dan ornamen warna-warni, klenteng ini menjadi
                pusat kegiatan keagamaan dan budaya masyarakat Tionghoa. Selain
                sebagai tempat ibadah, Sampookong menyimpan jejak sejarah
                Semarang, menjadi saksi perjalanan waktu dan pusat perayaan Cap
                Go Meh setiap tahunnya.
              </p>

              <br />
              <br />
            </div>
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[70%] lg:w-[40%] mx-auto lg:p-2 p-1 md:mt-2 rounded-2xl"
              src="/assets/images/kiranared.svg"
              alt="Explore"
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[60%] lg:w-[75%] mx-auto lg:p-10 p-4 md:mt-15 rounded-2xl"
              src="/assets/images/kiranadugder.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-left text-purple-light lg:text-display-medium text-display-small font-bold mr-30 md:my-0 my-auto">
                Tradisi Dugderan <p className="inline"></p>
              </h1>
              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Kirana mengeksplorasi kekayaan tradisi budaya Kota Semarang,
                menemukan keunikan Dugderan. Dugderan merupakan tradisi
                akulturasi Arab, Tionghoa, dan Jawa, memikat dengan keragaman
                budaya yang terjalin erat. Kirana tak hanya menyaksikan, tetapi
                juga ikut merasakan kehangatan dan keceriaan setiap tradisi,
                menjadikan petualangannya di Kota Semarang penuh warna dan makna
                budaya.
              </p>

              <br />
              <br />
            </div>
          </div>
        </div>
        <h3 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
          Ditengah perjalanan Kirana lapar dan ingin mencari makanan khas dari
          Kota Semarang <p className="inline"></p>
        </h3>
        <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">
          Kirana merasakan rasa lapar yang menggelora, dan saat ini, hasratnya
          terarah pada cita rasa autentik kota Semarang. Terbayang di pikirannya
          adalah lumpia khas Semarang, dengan isian rebung yang lembut dan
          nikmat. Lumpia ini, selain lezat, juga memiliki sejarah panjang yang
          mencerminkan kekayaan kuliner kota tersebut. Fakta Menarik tentang
          Lumpia adalah makanan ini berasal dari akulturasi budaya Tionghoa dan
          Jawa di kota Semarang.
        </p>
        <Image
          width={550}
          height={450}
          className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[50%] mx-auto lg:p-6 p-2 md:mt-2 rounded-2xl"
          src="/assets/images/lumpia.svg"
          alt="Explore"
        />
        <Button
          className="bg-purple-light hover:text-white hover:bg-purple-lightest md:mx-auto mx-auto w-[20%]"
          href="https://sdnsadeng03.dikdas.semarangkota.go.id/page/kuliner-semarang"
        >
          Ingin tau makanan khas semarang yang lain?
        </Button>

        <div className=" w-12/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative w-[20%] lg:w-[30%] mx-auto lg:p-50 p-1 md:mt-5 rounded-2xl"
              src="/assets/images/kkaget.svg"
              alt="Explore"
            />

            <div className="flex flex-col mt-8">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Tarian Daerah <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Kirana melanjutkan perjalanan dengan menuju ke suatu sanggar
                tari dan melihat orang yang sedang berlatih. Ternyata mereka
                melakukan Tari Semarangan yang merupakan tarian khas daerah
                Semarang. Tapi Kirana juga ingin menunjukkan tarian tersebut
                kepada kalian.
              </p>

              <br />
              <br />
            </div>
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative w-[10%] lg:w-[30%] mx-auto lg:p-50 p-1 md:mt-5 rounded-2xl"
              src="/assets/images/kkaget.svg"
              alt="Explore"
            />
          </div>
          <iframe
            className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl mt-8"
            src="https://www.youtube.com/embed/lftZ50gP7gw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h3 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-10 my-auto">
            Batik Gemawang si Cantik dari Semarang <p className="inline"></p>
          </h3>
          <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">
            Kirana merasa keterpukau oleh keunikan budaya kota ini dan
            memutuskan untuk pulang dengan kenangan yang berkesan. Tidak ingin
            melewatkan peluang untuk membawa pulang potongan budaya Semarang,
            Kirana memutuskan untuk berkunjung ke Batik Gemawang, tempat di mana
            keindahan batik khas Semarang diwujudkan.Batik Gemawang merupakan
            salah satu produsen batik terkemuka di Semarang yang terkenal dengan
            desainnya yang elegan dan khas. Batik Gemawang menciptakan motif
            batik yang menggambarkan kearifan lokal dan sejarah kota Semarang.
            Motif-motifnya yang unik dan warna-warna yang cerah mencerminkan
            keindahan budaya Jawa yang mendalam.
          </p>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative w-[10%] lg:w-[30%] mx-auto lg:p-50 p-1 md:mt-5 rounded-2xl"
              src="/assets/images/gemawang1.svg"
              alt="Explore"
            />
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative w-[10%] lg:w-[30%] mx-auto lg:p-50 p-1 md:mt-5 rounded-2xl"
              src="/assets/images/gemawang2.svg"
              alt="Explore"
            />
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative w-[10%] lg:w-[30%] mx-auto lg:p-50 p-1 md:mt-5 rounded-2xl"
              src="/assets/images/gemawang3.svg"
              alt="Explore"
            />
          </div>
        </div>
        <Button
          className="bg-purple-light hover:text-white hover:bg-purple-lightest md:mx-auto mx-auto w-[30%]"
          href="./"
        >
          AYUK LANJUT KELILING INDONESIA BERSAMA KIRANA!
        </Button>
      </div>
    </>
  )
}
