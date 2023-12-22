import { Button } from 'flowbite-react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
export const MedanModule: React.FC = () => {
  return (
    <>
      <div className=" relative bg-rose-200 w-full min-h-screen 2xl:px-[20vw] lg:py-24 md:py-20 py-32 lg:px-24 md:px-12 ">
        <div className=" w-full">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[55%] lg:w-[60%] mx-auto lg:p-12 p-5 md:mt-30 rounded-2xl"
              src="/assets/images/kiranaagamhai.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Kirana dan Medan <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Kirana melanjutkan kisah petualangannya dengan langkah-langkah
                penuh semangat, kali ini diiringi oleh temannya, Agam, orang
                asli Medan. Medan, dengan kekayaan kuliner dan keindahan
                alamnya, menjadi destinasi yang tak terlupakan bagi pasangan
                petualang ini. Di bawah langit biru Sumatra, Kirana dan Agam
                membenamkan diri dalam pengalaman yang menggoda selera dan
                memukau mata.
              </p>

              <br />
              <br />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-right text-purple-light lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Tentang Medan <p className="inline"></p>
              </h1>
              <p className="text-right lg:text-xl md:text-xl text-lg mt-10">
                Kota Medan, sebagai pusat ekonomi dan budaya di Sumatra Utara,
                Indonesia, memancarkan keberagaman dalam segala aspek kehidupan.
                Dengan penduduk yang heterogen, kota ini menjadi cermin harmoni
                antara berbagai elemen budaya, suku, dan agama.
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
              src="/assets/images/taritortor.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-left text-purple-light lg:text-display-medium text-display-small font-bold mr-10 md:my-0 my-auto">
                Budaya yang Beragam <p className="inline"></p>
              </h1>
              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Kota Medan memeiliki berbagai keanekaragaman. Hal ini tercermin
                dalam seni, musik, tarian, dan kuliner khas kota. Salah satunya
                adalah Tari Tor-Tor. Tarian tradisional suku Batak yang berasal
                dari Sumatra Utara. Tarian ini umumnya dipertunjukkan dalam
                berbagai acara adat, upacara pernikahan, dan festival budaya.
                Tor-Tor melibatkan gerakan yang anggun dan simbolik yang
                menggambarkan berbagai aspek kehidupan
              </p>

              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="w-10/12 lg:pt-10 md:pt-28 pt-24 mx-auto">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="lg:w-1/2 flex flex-col mt-8">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Tari Tor-tor <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Tari Tor-tor adalah tarian tradisional yang berasal dari Sumatra
                Utara, tepatnya dari suku Batak. Tarian ini sudah ada sejak abad
                ke-13 dan biasanya dilakukan pada ritual-ritual tertentu,
                seperti pesta pernikahan, kematian, syukuran, hingga upacara
                penyembuhan orang sakit.Tari Tor-tor biasanya ditampilkan oleh
                sekelompok penari pria atau wanita, dengan jumlah penari bisa
                bervariasi. Penari mengenakan pakaian adat Batak yang lengkap,
                termasuk ulos, kain sarung, dan topi khas Batak.Gerakan tari
                Tor-tor sangat sederhana, tetapi memiliki makna yang mendalam.
                Gerakan-gerakan tersebut biasanya melambangkan rasa syukur,
                kegembiraan, dan kesedihan.Musik pengiring tari Tor-tor adalah
                gondang, yaitu alat musik tradisional khas Sumatra Utara.
                Gondang biasanya dimainkan oleh sembilan orang pemain, yang
                terdiri dari pemain gong, gendang, suling, dan alat musik
                lainnya. Tari Tor-tor merupakan salah satu kekayaan budaya
                Indonesia yang harus dilestarikan. Tarian ini tidak hanya indah,
                tetapi juga sarat makna.
              </p>

              <br />
              <br />
            </div>
            <div className="lg:w-1/2 flex flex-col mt-8">
              <iframe
                className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl mt-8"
                src="https://www.youtube.com/embed/ej0JZ27m3LY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <h3 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
          Di akhir perjalanan Kirana lapar dan ingin mencari makanan khas dari
          Kota Medan <p className="inline"></p>
        </h3>
        <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">
          Kirana dan Agam merasakan kehangatan matahari Medan yang membangkitkan
          selera makan. Saat lapar mulai menghampiri, Agam dengan antusias
          memberikan rekomendasi kuliner khas Medan yang tak boleh dilewatkan
          yaitu mie gomak. Mie gomak merupakan hidangan khas Batak, dipuji
          karena kelezatannya yang menggoda. Dengan bumbu yang kaya dan rasa
          pedas yang khas, mie gomak adalah jawaban sempurna untuk memuaskan
          hasrat kuliner Kirana. Mereka berdua pun memutuskan untuk mengunjungi
          warung mie gomak terdekat, siap untuk merasakan kelezatan kuliner khas
          Medan ini dan melanjutkan perjalanan dengan energi yang baru
          ditemukan.
        </p>
        <Image
          width={550}
          height={450}
          className="rounded-t-lg relative drop-shadow-md w-[80%] lg:w-[50%] mx-auto lg:p-6 p-2 md:mt-2 rounded-2xl"
          src="/assets/images/miegomak.svg"
          alt="Explore"
        />
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
