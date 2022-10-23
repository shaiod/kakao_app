import React from 'react'
import Tab from '../components/Tab'
import '../styles/Find.scss'
import { Link } from 'react-router-dom'
import { FaAddressBook, FaEnvelope, FaMobileAlt, FaQrcode } from 'react-icons/fa'
import Header from '../components/Header'

function Find() {
  return (
    <>
    <Header className={'find'} head={'Find'} leftitem={'Edit'}/>
    <div className='find'>
    <main>
    <ul className="find_method">
        <li><Link to="#"><FaAddressBook className="ico"/>Find</Link></li>
        <li><Link to="#"><FaQrcode className="ico"/>QR Code</Link></li>
        <li><Link to="#"><FaMobileAlt className="ico"/>Shake</Link></li>
        <li><Link to="#"><FaEnvelope className="ico"/>Invite via SNS</Link></li>
    </ul>
    <section className="recommend-section">
    <div className="find-friends"><h2>Recommended Friends</h2></div>
        <ul className="rec-friends">
            <li>You Have no recommended freinds.</li>
        </ul>
    </section>
    </main>
    </div>
    <Tab />
    </>
  )
}

export default Find