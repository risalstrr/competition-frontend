import axios from 'axios'
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { Button } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PodcastInterface } from './interface'

export const PodcastModule: React.FC = () => {
  const { Client } = require('podcast-api')

  //
  // If apiKey is null, then we will connect to a mock server
  // that returns fake data for testing purposes.
  //
  // To get an apiKey to fetch real data, please visit:
  //     https://www.listennotes.com/api/pricing/
  //
  const client = Client({ apiKey: null })
  const [data, setData] = useState<PodcastInterface[]>([])

  client
    .search({
      q: 'star wars',
      sort_by_date: 0,
      type: 'episode',
      genre_ids: '68,82',
      only_in: 'title,description',
      language: 'English',
    })
    .then((response: { data: any }) => {
      // Get response json data here
      setData(response.data.results)
      console.log(response.data.results)
    })
    .catch((error: any) => {
      console.log(error)
    })

  // Click "▶ run" to try this code live.
  return (
    <>
      <div className="flex flex-col bg-blue-light relative justify-center items-center w-full h-full">
        {/* left */}
        <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col">
              <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                JelajahBudaya Podcast <p className="inline"></p>
              </h1>

              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                Menyediakan podcast daerah yang membahas berbagai aspek budaya
                Indonesia. Setiap episode dapat mencakup topik seperti seni,
                sejarah, tradisi, dan banyak lagi. Pengguna dapat mendengarkan
                podcast langsung melalui situs web JelajahBudaya.
              </p>
              <br />
              <br />
            </div>
            <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/podcast.svg"
              alt="workshop"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 bg-blue-light pb-20 px-10">
        {data.map((elem: PodcastInterface) => {
          return (
            <div className="bg-[#f2f3fa] rounded-xl flex flex-col justify-center items-center">
              <div className="bg-white rounded-xl w-full max-w-[768px] flex flex-row justify-start items-center p-8 relative max-h-40 shadow-sm">
                <img
                  src={elem.image}
                  className="rounded-xl w-[100px]"
                  alt={''}
                />

                <p className="pl-9 text-xl font-semibold grow">
                  {elem.title_original}
                </p>
              </div>
              <span className="clear-left rounded-full bg-[#eff0f9] p-4 cursor-pointer group [&_*]:transition-all [&_*]:duration-150 [&_*]:ease-in">
                <audio
                  controls
                  className="px-3 py-3 block bg-white w-52 rounded-full shadow-md group-hover:bg-rose-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-white group-hover:stroke-white"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#7e9cff"
                    fill="#7e9cff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4v16l13 -8z" />
                  </svg>
                  <source src={elem.audio} type="audio/mp3" />
                </audio>
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
