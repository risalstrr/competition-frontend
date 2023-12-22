import { Button } from 'flowbite-react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
export const TanatorajaModule: React.FC = () => {
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
              src="/assets/images/kiranaAnnehai.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Kirana dan Tana Toraja <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Petualangan selanjutnya membawa Kirana dan Anne, temannya dari
                Tana Toraja. Dengan penuh semangat dan mata yang berbinar-binar,
                mereka memulai perjalanan panjang menuju Sulawesi yang indah.
              </p>

              <br />
              <br />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-right text-purple-light lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Tentang Tana Toraja <p className="inline"></p>
              </h1>
              <p className="text-right lg:text-xl md:text-xl text-lg mt-10">
                Tana Toraja menjadi salah satu tujuan wisata atau destinasi
                wisata berlatar budaya di Indonesia, secara khusus di provinsi
                Sulawesi Selatan. Kehidupan masyarakat suku asli yakni suku
                Toraja, juga budaya yang unik, menjadikan kawasan dataran tinggi
                di Sulawesi Selatan ini dipilih wisatawan untuk melihat dan
                belajar budaya Toraja.
              </p>

              <br />
              <br />
            </div>
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[70%] lg:w-[40%] mx-auto lg:p-2 p-1 md:mt-2 rounded-2xl"
              src="/assets/images/anneini.svg"
              alt="Explore"
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <Image
              width={250}
              height={250}
              className="rounded-t-lg relative w-[60%] lg:w-[75%] mx-auto lg:p-10 p-4 md:mt-15 rounded-2xl"
              src="/assets/images/kiranbambu.svg"
              alt="Explore"
            />
            <div className="flex flex-col">
              <h1 className="text-left text-purple-light lg:text-display-medium text-display-small font-bold mr-10 md:my-0 my-auto">
                Budaya yang Unik <p className="inline"></p>
              </h1>
              <p className="text-left lg:text-xl md:text-xl text-lg mt-2">
                Perjalanan mereka menjadi lebih mendalam saat Kirana dan Anneh
                diundang untuk mengikuti upacara Rambu Solo. Upacara adat ini
                menggugah rasa spiritualitas dan memberikan wawasan yang
                mendalam tentang cara hidup dan kepercayaan masyarakat Toraja.
              </p>

              <br />
              <br />
            </div>
          </div>
        </div>

        <h3 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
          Rambu Solo' <p className="inline"></p>
        </h3>
        <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">
          Rambu Solo' adalah tradisi pemakaman ala Suku Toraja. Tradisi ini
          dilakukan untuk menghormati sekaligus mengantarkan arwah menuju alam
          akhirat melalui serangkaian ritual dan doa. Ritual yang dilakukan
          berupa pertunjukan seni, adu kerbau, hingga mengantarkan jenazah.
          Tradisi ini bisa berlangsung selama beberapa hari sesuai dengan status
          sosial keluarga penyelenggara Rambu Solo’. Biayanya pun tidak sedikit.
          Semakin kaya seseorang, semakin mahal biaya pemakamannya{' '}
        </p>

        <div className="w-10/12 lg:pt-10 md:pt-28 pt-24 mx-auto">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="lg:w-1/2 flex flex-col mt-8">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Makam Tebing Kuburan Alam Suku Toraja <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Suku Toraja percaya bahwa kematian bukanlah sesuatu yang datang
                dengan tiba-tiba, tetapi sebuah proses bertahap menuju Puya
                (dunia arwah atau akhirat) Kuburan alam ini dihiasi dengan
                deretan tau-tau (patung) sebagai personifikasi orang yang telah
                meninggal sekaligus lambang prestise dan status sosial yang
                bersangkutan. Badan patung terbuat dari bambu atau kayu nangka,
                matanya dari tulang dan tanduk kerbau. Menurut Hendrik van Der
                Veen dalam The Sa’dan Toradja Chant for The Deceased, tau-tau
                atau tatau bisa dibuat dari tiang bambu yang diikat jadi satu
                dan dibalut dengan kain. Tau-tau dikenakan pakaian yang indah
                dan dihiasi dengan ornamen. Ia diletakkan di atas lumbung padi
                dan ketika jenazah dibawa ke tempat pesta, tau-tau ikut
                dengannya.
              </p>

              <br />
              <br />
            </div>
            <div className="lg:w-1/2 flex flex-col mt-8">
              <iframe
                className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl mt-8"
                src="https://www.youtube.com/embed/yJEZIl2Jcio?si=T6z78dYLe8KGnLb8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-right text-purple-light lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
              Ukiran Tana Toraja <p className="inline"></p>
            </h1>
            <p className="text-right lg:text-xl md:text-xl text-lg mt-10">
              Ukiran Toraja menjadi salah satu ciri khas yang dimiliki oleh Suku
              Toraja, Sulawesi Selatan (Sulsel). Suku Toraja dikenal memiliki
              sejumlah kekayaan alam dan aneka ragam budaya, termasuk karya seni
              rupa ukir yang indah.Setidaknya, ada ratusan jenis ukiran Toraja.
              Setiap ukiran tersebut pun memiliki arti dan makna
              masing-masing.Ragam jenis ukiran ini biasanya ditemui pada dinding
              rumah adat Toraja. Selain itu, ukiran Toraja juga digunakan pada
              bagian luar alang, erong, atau peti jenazah.
            </p>

            <br />
            <br />
          </div>

          <Image
            width={250}
            height={250}
            className="rounded-t-lg relative w-[70%] lg:w-[40%] mx-auto lg:p-2 p-1 md:mt-2 rounded-2xl"
            src="/assets/images/anneini.svg"
            alt="Explore"
          />
          <Button
            className="bg-purple-light hover:text-purple-light hover:bg-purple-lightest md:mx-auto mx-auto w-[30%]"
            href="https://www.detik.com/sulsel/budaya/d-6512516/15-ukiran-toraja-penuh-makna-serta-artinya"
          >
            {' '}
            Ayuk belajar mengenai ukiran khas Toraja
          </Button>
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
