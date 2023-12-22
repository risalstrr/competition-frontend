import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { Wallet } from './interface'
import { Button, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'
import { type } from 'os'

export const WalletModule: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false)
  const [total, setTotal] = useState('222222')
  const [jenisTransaksi, setJenisTransaksi] = useState('')
  const [tanggalTransaksi, setTanggalTransaksi] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [chooseTypePengeluaran, setChooseTypePengeluaran] =
    useState<Boolean>(false)
  const [chooseTypePemasukan, setChooseTypePemasukan] = useState<Boolean>(false)
  const [wallets, setWallets] = useState<Wallet[]>([])

  const handleDeleteWallet = async (id: Number) => {
    await axios
      .delete(`https://growbiz-api.fly.dev/wallets/wallet/${id}/delete/`)
      .then((response) => {
        toast.success('Success delete data')
      })
      .catch((err) => {
        console.log('eror')
      })
  }

  const handleCreateWallet = async () => {
    if (
      total == '' ||
      jenisTransaksi == '' ||
      tanggalTransaksi == '' ||
      deskripsi == ''
    ) {
      toast.error('Tidak boleh ada data kosong!')
    } else {
      await axios
        .post(
          'https://growbiz-api.fly.dev/wallets/wallet/',
          {
            amount_of_money: total,
            type: jenisTransaksi,
            date: tanggalTransaksi,
            description: deskripsi,
          }
          // config
        )
        .then((response) => {
          console.log(response.data)
          setTotal('')
          setJenisTransaksi('')
          setTanggalTransaksi('')
          setDeskripsi('')
          toast.success('Success post data')
          // console.log(response.data)
        })
    }
  }

  useEffect(() => {
    axios
      .get('https://growbiz-api.fly.dev/wallets/wallet/')
      .then((response) => {
        console.log('risaaa')
        console.log(response.data)
        setWallets(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [wallets])

  return (
    <>
      <div className="flex flex-col bg-blue-light relative1 justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-32 md:pt-28 pt-24">
          <ToastContainer />
          <br />

          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col justify-center items-center">
              <h1 className="py-6 text-3xl  text-display-medium text-purple-light text-center">
                Bagikan artikel menarik!
              </h1>
              <p className="text-center lg:text-xl md:text-xl px-20 text-lg">
                Pengguna dapat menemukan dan berbagi artikel mengenai beragam
                topik, termasuk sejarah, seni, tradisi, dan kuliner Indonesia.
                Fitur ini menggabungkan wawasan mendalam dan keberagaman untuk
                memperkaya pemahaman budaya.
              </p>
              <Image
                width={350}
                height={350}
                className="pt-5 rounded-t-lg"
                src="/assets/images/wallet.svg"
                alt="vendor"
              />
            </div>
            <DialogueCard>
              {/* <TextInput
                id="phone"
                type="text"
                placeholder="Contoh: 20000"
                required={true}
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
              <br /> */}
              <h2 className="mt-2">Judul Artikel</h2>
              <div className="relative inline-block text-left">
                <TextInput
                  id="Judul Artikel"
                  type="text"
                  placeholder="Contoh: Artikel Budaya"
                  required={true}
                  value={jenisTransaksi}
                  onChange={(e) => setJenisTransaksi(e.target.value)}
                />
                <br />

                {/* <button
                  disabled={!jwt}
                  onClick={() => setOpen(!open)}
                  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                >
                  {chooseTypePengeluaran || chooseTypePemasukan
                    ? `${chooseTypePemasukan ? 'Pemasukan' : 'Pengeluaran'}`
                    : 'Jenis Transaksi'}
                </button>
                {open ? (
                  <div className="mb-5 origin-top-right right-0 mt-2 w-32 rounded-md shadow-lg">
                    <div className="rounded-md bg-white shadow-xs">
                      <a
                        onClick={() => {
                          setJenisTransaksi('Pengeluaran')
                          setChooseTypePengeluaran(!chooseTypePengeluaran)
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Pengeluaran
                      </a>
                      <a
                        onClick={() => {
                          setJenisTransaksi('Pemasukan')
                          setChooseTypePemasukan(!chooseTypePemasukan)
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Pemasukan
                      </a>
                    </div>
                  </div>
                ) : (
                  ''
                )} */}
              </div>

              <h2 className="mt-2">Tanggal Rilis Artikel</h2>
              <TextInput
                type="text"
                placeholder="Contoh: tahun-bulan-tanggal"
                required={true}
                value={tanggalTransaksi}
                onChange={(e) => setTanggalTransaksi(e.target.value)}
              />
              <br />
              <h2>Deskripsi</h2>
              <TextInput
                type="text"
                placeholder="Contoh: Transaksi ini berupa pemasukan"
                required={true}
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
              <br />

              <Button
                // disabled={!jwt}
                className="bg-indigo-500"
                onClick={() => handleCreateWallet()}
                // onClick={(e) => router.push('/auth/login')}
              >
                {/* {jwt ? '' : 'Login dulu!'} */}
                Posting Artikel
              </Button>
            </DialogueCard>
          </div>
        </div>

        <div className="w-full">
          <h1 className="pt-24 text-3xl text-display-medium text-purple-light text-center">
            Artikel Eksplor Budaya
          </h1>
          <p className="text-center lg:text-xl md:text-xl lg:px-32 px-10 text-lg mt-5">
            Melalui fitur ini, pengguna dapat menjadi agen positif dalam
            menyebarkan informasi mendalam tentang kekayaan budaya Indonesia.
            Artikel-artikel ini dapat menjadi sumber inspirasi dan edukasi bagi
            pengunjung platform.
          </p>

          <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 lg:p-10 justify-center mx-auto m-10 gap-5 lg:overflow-x-auto lg:w-10/12 md:w-10/12 w-full">
            {wallets.map((wallet) => (
              <>
                <DialogueCard key={wallet.id} className="m-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {wallet.type}
                  </h5>
                  {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-productSansBold text-purple-terong">
                      Jumlah:{' '}
                    </span>{' '}
                    {wallet.amount_of_money}
                  </p> */}
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-productSansBold text-purple-terong">
                      Tanggal transaksi:
                    </span>{' '}
                    {wallet.date}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-productSansBold text-purple-terong">
                      Deskripsi:{' '}
                    </span>
                    {wallet.description}
                  </p>
                  <Button
                    disabled={!jwt}
                    className="bg-indigo-500"
                    onClick={() => handleDeleteWallet(wallet.id)}
                    // onClick={(e) => router.push('/auth/login')}
                  >
                    {jwt ? 'Delete' : 'Login dulu!'}
                  </Button>
                </DialogueCard>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
