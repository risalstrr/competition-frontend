import React from 'react'
import Image from 'next/image'

export default function Service() {
  const { Client } = require('podcast-api')

  //
  // If apiKey is null, then we will connect to a mock server
  // that returns fake data for testing purposes.
  //
  // To get an apiKey to fetch real data, please visit:
  //     https://www.listennotes.com/api/pricing/
  //
  const client = Client({ apiKey: null })

  client
    .search({
      q: 'jawa barat',
      // sort_by_date: 0,
      // type: 'episode',
      // genre_ids: '',
      only_in: 'title,description',
      // language: 'Indonesian',
    })
    .then((response: { data: any }) => {
      // Get response json data here
      console.log(response.data)
    })
    .catch((error: any) => {
      console.log(error)
    })
  return (
    <div className="relative lg:p-24 md:p-20 sm:p-10 flex flex-col lg:flex-row min-h-[40vw] gap-10 lg:mb-0 md:mb-26 mb-32">
      {' '}
      <a
        href="https://www.listennotes.com/podcasts/the-rough-cut/star-wars-the-force-awakens-S1DtPmEr2e7/"
        title="Star Wars - The Force Awakens | Listen Notes"
      ></a>
      <h1>Podcast Player</h1>
      <audio controls id="podcastAudio">
        <source
          src="https://www.listennotes.com/e/p/42b1898db6a84973b41879618002937b/"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <div className="w-full lg:w-1/2">
        <h1 className="text-center lg:text-left relative lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-purple-light">
          Apa itu JelajahBudaya?
        </h1>
        <p className="my-5 text-center lg:text-left">
          JelajahBudaya adalah platform yang secara khusus dirancang untuk
          memenuhi kebutuhan bisnis Usaha Mikro, Kecil, dan Menengah yang biasa
          disebut UMKM. Dalam JelajahBudaya, Anda dapat memperoleh pengetahuan
          baru, berkolaborasi dengan sesama pengusaha, mengelola keuangan dengan
          lebih efisien, dan bahkan mendapatkan akses ke modal yang diperlukan
          untuk pertumbuhan bisnis Anda, semuanya dalam satu platform yang mudah
          digunakan.
        </p>
        <p className="my-5 text-center lg:text-left">
          Alamat toko: Jalan Letjen South Parman 22, Dki Jakarta
        </p>
        <p className="my-5 text-center lg:text-left">
          Alamat surel: JelajahBudaya@gmail.com
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">300+</h1>
              <p>Galeri Budaya</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1200+</h1>
              <p>Courses</p>
            </div>
          </div>
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">60+</h1>
              <p>Workshops</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1.7k+</h1>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full lg:gap-10 lg:m-20">
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                  <Image
                    src={'/assets/images/teamwork.png'}
                    width={350}
                    height={350}
                    alt="foto"
                    className="w-[70px]"
                  />
                  <p className="text-lg text-black font-semibold">
                    JelajahBudaya memberikan akses yang mudah bagi pemilik UMKM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                  <p className="text-lg text-black font-semibold">
                    <Image
                      src={'/assets/images/msmes1.png'}
                      width={350}
                      height={350}
                      alt="foto"
                      className="w-[70px]"
                    />
                    JelajahBudaya membantu UMKM dalam mencapai pertumbuhan
                    ekonomi yang berkelanjutan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 md:my-4 my-0 lg:my-40 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y- sm:text-left">
            <div className="space-y-3 p-5">
              <Image
                src={'/assets/images/web.png'}
                width={350}
                height={350}
                alt="foto"
                className="w-[70px]"
              />
              <p className="text-lg text-black font-semibold">
                JelajahBudaya menyediakan berbagai fitur dan layanan yang saling
                terkait
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
