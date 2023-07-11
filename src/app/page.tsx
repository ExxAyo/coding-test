"use client"; // This is a client component 

import Image from 'next/image'
import React, { useState } from 'react'
import Layout from '@/components/Layout'
import SettingIcon from "../assets/settings-01.png"
import NotificationIcon from "../assets/bell-01.png"
import Avatar from "../assets/Avatar.png"
import Spike from "../assets/zap.png"
import { COLORS, FONTS } from '@/utils'
import Plus from "../assets/plus.png"
import Scan from "../assets/expand-03.png"
import { useCSVReader } from 'react-papaparse';
import AlertIcon from "../assets/alert-triangle.png"



export default function Home() {

  const { CSVReader } = useCSVReader();
  const [csvList, setCsvList] = useState(["0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e, 0", "0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e, 0", "0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e, 0", "0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e, 0"])
  const [steps, setSteps] = useState(1)
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("0.00")


  const handleChange = (inputtxt: any) => {
    var letters = "^[a-zA-Z0-9 ]+$";
    if(inputtxt.match(letters))
    {
     setAddress(inputtxt)
    }
  else
    {
     
    }
  }

  const walletAddress = `${address}, ${amount}`


  const handleProceed = () => {
    setSteps(steps + 1)
  }

  const handlePrev = () => {
    setSteps(steps - 1)
  }
  
  const handleSubmit = () => {
      alert(walletAddress)
  }

  const displayStepOne = () => {
    return <>
      <div className='mt'>
        <label style={{ fontWeight: 500 }}>Enter Address</label><br />
        <input className='sender-input' value={address} onChange={(e) => handleChange(e.target.value)} />

      </div>
      <div className='bal'>
        <div style={{ ...FONTS.body3, color: '#A0A0AB' }}>Token Balance </div>
        <div style={{ ...FONTS.body3, color: '#6938EF', marginLeft: '5px' }}> 0 BNB</div>
      </div>
      <div className='mt2'>
        <label style={{ fontWeight: 500 }}>List Addresses in CSV</label><br />

        <div className='csv'>
          {
            csvList?.map((data, i) => {
              return <div className='address-row' key={i}>
                <div className='index'>{i + 1}</div>
                <div className='data'>{data}</div>
                {
                  i === 0 && <div className='scan'>
                    <Image src={Scan} alt='' />
                  </div>
                }
              </div>
            })
          }
        </div>

        <div className='csv-text'>
          <div style={{ ...FONTS.body3, fontWeight: 500, color: '#6938EF' }}>Show sample CSV</div>

          <CSVReader
            onUploadAccepted={(results: any) => {
              setCsvList(results?.data[0])
            }}
          >
            {({
              getRootProps,
              acceptedFile,
              ProgressBar,
              getRemoveFileProps,
            }: any) => (
              <div className='upload-text' style={{ cursor: 'pointer' }}  {...getRootProps()}>
                <Image src={Plus} alt='' className='plus' />
                <div style={{ ...FONTS.body3, fontWeight: 500, color: '#6938EF' }}>Upload CSV</div>
              </div>
            )}
          </CSVReader>


        </div>

        <div className='mt'>

          <div>
            <label style={{ fontWeight: 500 }}>*Enter same amount for all addresses</label><br />
          </div>
          <input className='sender-input2' placeholder='0' value={amount} onChange={(e) => setAmount(e.target.value)} />

        </div>



      </div>
    </>
  }

  const displayStepTwo = () => {
    return <>
      <div className='card2'>
        <div style={{ ...FONTS.body3, color: '#70707B' }}>Total number of token to send</div>
        <div style={{ ...FONTS.largeTitle, color: '#6938EF' }}>{amount} BNB</div>
      </div>
      <div className='card2-row'>
        <div className='bal'>
          <div style={{ ...FONTS.body3, color: '#A0A0AB' }}>Token Balance </div>
          <div style={{ ...FONTS.body3, color: '#6938EF', marginLeft: '5px' }}> 0 BNB</div>
        </div>
        <div className='bal'>
          <div style={{ ...FONTS.body3, color: '#A0A0AB' }}>BNB Balance </div>
          <div style={{ ...FONTS.body3, color: '#6938EF', marginLeft: '5px' }}> 0 BNB</div>
        </div>
      </div>

      <div className='alert-card'>
        <Image src={AlertIcon} alt='' />
        <div style={{...FONTS.body2, color: '#DC6803', margin: '0px 5px', fontWeight: 400}}>Not enough token in your wallet</div>
        <div style={{...FONTS.body2, color: '#DC6803'}}>Add funds</div>
      </div>

      <div className='mt2'>
      <label style={{ fontWeight: 500 }}>List of recipients</label>

      <div style={{marginTop: '1rem'}}>
        {
          ["", "", "", "",""]?.map((data, i) => {
            return (
              <div className='list-row' key={i}>
                <div style={{...FONTS.body2, color: "#70707B"}}>0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e</div>
                <div style={{...FONTS.body2, color: '#6938EF', fontWeight: 500}}>0.0</div>
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  }



  return (
    <main>
      <Layout>
        <div className='container'>
          <div className='nav'>
            <div className='nav-row'>
              <Image src={Spike} alt='' className='nav-img' />
              <div style={{ fontWeight: 500, marginLeft: '-10px' }}>Upgrade now</div>
            </div>
            <Image src={SettingIcon} alt="" className='nav-img' />
            <Image src={NotificationIcon} alt='' className='nav-img' />
            <Image src={Avatar} alt="" />
          </div>

          <div className='component-body'>
            <div className='pg'>
              <div className='cd'>
                <div className='circle-div'><div className='circle'></div></div>
                <div style={{ color: '#6938EF', fontWeight: 500, marginTop: '1rem' }}>Progress</div>
              </div>
              <div className='line' style={{background: steps === 2 ? "#6938EF" : "gray"}}>
              </div>
              <div className='cd2'>
                <div className='circle-div2' style={{border: steps === 2 ? "1px solid #6938EF" : "1px solid #A0A0AB"}}><div className='circle2' style={{background: steps === 2 ? '#6938EF' : "#A0A0AB"}}></div></div>
                <div style={{ color: steps === 2 ? "#6938EF" : '#A0A0AB',fontWeight: 500, marginTop: '1rem' }}>Summary</div>
              </div>
            </div>

            <div className='card'>
              <div style={{ ...FONTS.largeTitle }}>Sender</div>

              {
                steps === 1 && displayStepOne()
              }

              {
                steps === 2 && displayStepTwo()
              }


              {
                steps === 1 ? <div className='button-div'>
                  <button className='btn' onClick={() => handleProceed()}>Checking for possible error</button>
                </div>
                  :
                  <div className='button-div2'>
                    <button className='btn2' onClick={() => handlePrev()}>Go back</button>
                    <button className='btn3' onClick={() => handleSubmit()}>Proceed</button>
                  </div>
              }
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
