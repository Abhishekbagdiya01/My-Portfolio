import { motion } from "motion/react"
import { CONTACT } from "../constants/contents"

const Contact = () => {
  return (
    <div>
      <motion.h1
        initial={{
          y: 10,
          opacity: 0
        }}
        whileInView={
          {
            y: 0,
            opacity: 1
          }}
        transition={{
          duration: 1
        }}


        className="my-20 text-center text-4xl"> Contact  <span className="text-neutral-500"> Me  </span> </motion.h1>
      <div className="text-center tracking-tight">
        <motion.p
          initial={{
            x: -100,
            opacity: 0
          }}
          whileInView={
            {
              x: 0,
              opacity: 1
            }}
          transition={{
            duration: 1
          }}
          className="my-4 ">{CONTACT.address}</motion.p>
        <motion.p
          initial={{
            x: -100,
            opacity: 0
          }}
          whileInView={
            {
              x: 0,
              opacity: 1
            }}
          transition={{
            duration: 1.5
          }}

          className="my-4 ">{CONTACT.phoneNo}</motion.p>

        <a href="#" className="my-4 border-b ">{CONTACT.email}</a>
      </div>

      <p className="contact mt-4 text-center p-4 border-t  border-neutral-900">
        Made with love. ❤️ Explore my creations! ✨
      </p>
    </div>
  )
}

export default Contact
