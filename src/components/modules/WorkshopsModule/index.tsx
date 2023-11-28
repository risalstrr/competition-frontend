import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { Vendor, WorkshopInterface } from './interface'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { WorkshopCard } from './module-elements/WorkshopCard'

export const WorkshopsModule: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopInterface[] | null>()
  const { jwt, user, loading }: IAuthContext = useAuthContext()

  useEffect(() => {
    axios
      .get('https://growbiz-api.fly.dev/workshops/workshop/')
      .then((response) => {
        console.log(response.data)
        setWorkshops(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [workshops, loading])

  return (
    <>
      <div className="flex flex-col bg-blue-light relative justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                Galeri Seni Indonesia
              </h1>
              <br />
              <p className="text-left lg:text-xl md:text-xl text-lg">
                Memberikan pelatihan dan pembelajaran kepada pemilik UMKM (Usaha
                Mikro, Kecil, dan Menengah) serta karyawan mereka. Ini merupakan
                bagian penting dari upaya GrowBiz untuk meningkatkan
                keterampilan dan pengetahuan dalam rangka mendukung pertumbuhan
                bisnis UMKM
              </p>
              <br />
              <br />
              <Button
                className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
                href="#about"
              >
                Yuk
              </Button>
            </div>
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/workshop.svg"
              alt="workshop"
            />
          </div>
        </div>

        <div className="w-full mt-14">
          <h1 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Daftar Workshops
          </h1>
          <p className="text-center lg:text-xl md:text-xl lg:px-32 px-10 text-lg mt-5">
            Fitur "Workshop" di GrowBiz memiliki potensi besar untuk
            memberdayakan UMKM dengan pengetahuan dan keterampilan yang
            diperlukan untuk mengembangkan bisnis mereka. Ini merupakan langkah
            penting dalam mendukung pertumbuhan ekonomi dan pencapaian tujuan
            pembangunan berkelanjutan.
          </p>
          <div className="grid grid-cols-1 gap-10 my-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
            {workshops ? (
              workshops?.map((workshop: WorkshopInterface, key: number) => (
                <WorkshopCard
                  key={key}
                  workshop={workshop}
                  handler={toast.error}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
