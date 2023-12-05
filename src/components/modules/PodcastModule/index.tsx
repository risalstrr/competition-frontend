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

      <div className="flex bg-blue-light justify-center lg:flex-row md:flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={350}
            height={350}
            className="rounded-t-lg object-center flex justify-center relative drop-shadow-md w-[40%] lg:w-[50%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
            src="/assets/images/gapura.svg"
            alt="workshop"
          />
          <div className="flex justify-center">
            <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
              Menyediakan podcast daerah yang membahas berbagai aspek budaya
              Indonesia.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          <div className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-[80%]"
                src="/assets/images/wayang.svg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </p>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p> */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-[80%]"
                src="/assets/images/wayang.svg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </p>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p> */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-[80%]"
                src="/assets/images/wayang.svg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </p>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p> */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-[80%]"
                src="/assets/images/wayang.svg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </p>
              </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p> */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 bg-blue-light pb-20 px-10">
        {data.map((elem: PodcastInterface) => {
          return (
            <div className="bg-[#f2f3fa] flex flex-col justify-center items-center">
              <div className="bg-white w-full max-w-[768px] flex flex-row justify-start items-center p-8 relative max-h-40 shadow-sm rounded-md">
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
