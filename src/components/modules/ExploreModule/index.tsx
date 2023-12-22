import { Button } from 'flowbite-react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
export const ExploreModule: React.FC = () => {
  return (
    <>
      <div className="relative bg-blue-light w-full min-h-screen 2xl:px-[20vw] lg:py-24 md:py-20 py-32 lg:px-24 md:px-12 ">
      <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
          <Image
              width={550}
              height={450}
              className="rounded-t-lg relative drop-shadow-md w-[55%] lg:w-[60%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/kiranaHai.svg"
              alt='Explore'  
            />
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                JelajahBudaya Explore <p className="inline"></p>
              </h1>

              <h1>Mari ikuti petualangan menyenangkan Kirana dalam menjelajahi Indonesia dan budayanya...</h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
              Kirana, seorang wanita pemberani, memulai perjalanan tak terlupakan melintasi keindahan alam dan keanekaragaman budaya Indonesia. Dari Sabang sampai Merauke, Kirana mengeksplorasi setiap sudut negeri ini dengan mata penuh kekaguman dan hati yang gembira.
            Bersama Kirana, kita akan menyusuri warisan sejarah, menikmati kelezatan kuliner lokal, dan menjalin pertemanan
              </p>

              <br />
              <br />

            </div>
            
          </div>

        </div>
        <h1 className="text-grey-dark text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Petualangan Pertama Kirana: Ke Kota Semarang <p className="inline"></p></h1>
            <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">Kirana memulai perjalanan serunya dengan mengunjungi kota Semarang, sebuah kota yang kaya akan sejarah dan keindahan budaya. Di tengah arsitektur kolonial yang memukau, Kirana menemukan kisah-kisah menarik dan pesona yang tak terlupakan.Bersama Kirana, kita akan menyusuri jalan-jalan bersejarah, menikmati kelezatan kuliner khas Semarang, dan melihat tradisi yang ada. Saksikan bagaimana petualangan pertama Kirana di kota Semarang menjadi awal dari serangkaian pengalaman luar biasa yang akan membawa kita mengenal lebih dalam pesona Indonesia!</p>
            <Image
              width={550}
              height={450}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[50%] mx-auto lg:p-6 p-2 md:mt-2 rounded-2xl"
              src="/assets/images/Semarang.svg"
              alt='Explore'  
            />
            <Button
                className="bg-purple-light hover:text-purple-light hover:bg-purple-lightest md:mx-auto mx-auto w-[30%]"
                href="./Explore/Semarang">Yuk, ikuti kirana di Semarang!</Button>


<h1 className="text-grey-dark text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Petualangan Kedua Kirana: Ke Kota Medan <p className="inline"></p></h1>
            <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">
            Kirana melanjutkan kisah petualangannya dengan langkah-langkah yang penuh semangat menuju ke Medan, kota yang terkenal dengan kekayaan kuliner dan keindahan alamnya. Di bawah langit biru Sumatra, Kirana membenamkan diri dalam pengalaman yang menggoda selera dan memukau mata.
            Bersama Kirana, kita akan menjelajahi pasar tradisional yang ramai, mencicipi kuliner khas Medan seperti rendang dan soto, serta menyaksikan keindahan Danau Toba yang mempesona. Petualangan kedua Kirana di Medan mengajak kita untuk mengeksplorasi kekayaan budaya dan alam Indonesia yang begitu beragam.</p>
        
            <Image
              width={550}
              height={450}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[50%] mx-auto lg:p-6 p-2 md:mt-2 rounded-2xl"
              src="/assets/images/medan.svg"
              alt='Explore'  
            />
            <Button
                className="bg-purple-light hover:text-purple-light hover:bg-purple-lightest md:mx-auto mx-auto w-[30%]"
                href="./Explore/Medan">Yuk, ikuti kirana di Medan!</Button>

<h1 className="text-grey-dark text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Petualangan Ketiga Kirana: Ke Kota Tana Toraja <p className="inline"></p></h1>
            <p className="text-left text-center lg:text-xl md:text-xl text-lg mt-2">Petualangan ketiga Kirana membawanya menuju ke Tana Toraja, di mana keajaiban alam dan tradisi budaya saling berpadu. Di tengah perbukitan Sulawesi, Kirana menikmati keunikan adat dan kehangatan masyarakat Toraja. Dengan mata yang penuh kekaguman, ia menyaksikan upacara adat yang kaya makna, merasakan kehidupan sehari-hari yang sarat dengan kebersamaan. Melalui jelajahannya di Tana Toraja, Kirana tidak hanya mengeksplorasi pemandangan indah dan situs bersejarah, tetapi juga mendalami makna mendalam dari warisan budaya yang melekat erat di hati masyarakat setempat.</p>
            <Image
              width={550}
              height={450}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[50%] mx-auto lg:p-6 p-2 md:mt-2 rounded-2xl"
              src="/assets/images/tanatoraja.svg"
              alt='Explore'  
            />
            <Button
                className="bg-purple-light hover:text-purple-light hover:bg-purple-lightest md:mx-auto mx-auto w-[30%]"
                href="./Explore/Tanatoraja">Yuk, ikuti kirana di Tana Toraja!</Button>
      </div>
    </>
  )
}
