import {} from 'react';
import {FaFacebookSquare as Face, FaLinkedin as Linkedin, FaInstagramSquare as Insta} from 'react-icons/fa'
import{MdEmail as Email} from 'react-icons/md'
import styles from '../Routes/styles/footer.module.css'



function Footer() {
  
  return (
    <>
    <footer className={styles.container}>
    <ul className={styles.icones}>
      <li><a href="#"><Face/></a></li>
      <li><a href="#"><Linkedin/></a></li>
      <li><a href="#"><Insta/></a></li>
      <li><a href="#"><Email/></a></li>
    </ul>
    </footer>
    </>
  )
}

export default Footer;