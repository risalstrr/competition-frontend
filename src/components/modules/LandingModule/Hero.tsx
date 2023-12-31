import { Button } from 'flowbite-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
// import header from 'public/assets/images/header-img.json'

const LETTER_INTERVAL_IN_MILLISECONDS = 65
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500
const KEYWORDS_LIST: string[] = ['Temukan pesona budaya Indonesia melalui...']

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1)
  const [currentKeyword, setCurrentKeyword] = useState<string>(
    'Temukan pesona budaya Indonesia melalui...'
  )

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length)
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)))
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1))
      } else {
        switchKeyword()
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1))
      if (len > 1) {
        sliceKeyword(len - 1)
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0)
      return
    }

    const len = currentKeyword.length
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len)
      }, KEYWORD_INTERVAL_IN_MILLISECONDS)
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex])
    }
  }, [keywordIndex])

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword()
    }
  }, [currentKeyword])

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[40vw] w-full">
        {/* left */}
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="flex flex-col lg:-mt-8">
            <p className="inline text-3xl text-purple-light font-productSansBold font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <h1 className="text-grey-dark lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
              JelajahBudaya Indonesia
            </h1>

            <br />
            <p className="text-left lg:text-xl md:text-xl text-lg">
              Temukan Keindahan Budaya Indonesia di sini! Rasakan pesona budaya
              dari Sabang hingga Merauke melalui pengalaman digital yang
              menarik. Setiap langkah akan membawa Anda pada petualangan
              mendalam, mengungkap kekayaan seni, tradisi, dan sejarah
              Indonesia.
            </p>
            <br />
            <br />
            <Button
              className=" bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
              href="#about"
            >
              Yuk, eksplor!
            </Button>
          </div>
          {/* <Lottie className="w-[1500px] h-[690px]" animationData={header} /> */}
          <Image
            width={350}
            height={350}
            className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 rounded-2xl"
            src="/assets/images/header-img.svg"
            alt="workshop"
          />
        </div>
      </div>
    </>
  )
}
