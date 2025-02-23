import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between p-6' >
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='h2 w-10 bg-white rounded ' src={logo} alt='logo' /> */}
        <GrArchlinux className='text-4xl text-white' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/abhishek-bagdiya/' target='_blank'>
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/Abhishekbagdiya01" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/abhi_bagdiya" target="_blank">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
