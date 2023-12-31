import { Accordion } from 'flowbite-react'
import { faqs } from './FaqConstant'

export const FaqModule: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center text-center">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-purple-light md:text-5xl lg:text-6xl dark:text-white">
              Sejarah Kebudayaan Indonesia
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Sejarah kebudayaan Indonesia mencakup perjalanan panjang dan kaya
              akan ragam budaya, seni, dan tradisi yang tumbuh berkembang
              seiring waktu.
            </p>
          </div>
          <div>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/PA7gFnYfBqo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <div className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-20 md:py-20 py-24 lg:px-32 md:px-16 ">
        <h1 className="flex w-full justify-center lg:text-display-medium md:text-display-small text-display-small pb-3 text-purple-light leading-none mt-12 mb-5">
          Frequently Asked Questions
        </h1>
        <Accordion alwaysOpen={true}>
          {faqs.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="text-black">
                <p>{item.question}</p>
              </Accordion.Title>
              <Accordion.Content className="bg-red-300">
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  )
}
