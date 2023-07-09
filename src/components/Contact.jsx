import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MotionConfig, motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


//91jlg7JO_9d83JXU8
//template_wlmg3zi
//service_1oibl7x

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_1oibl7x',
      'template_wlmg3zi',
      {
        from_name: form.name,
        to_name: 'Bilal',
        from_email: form.email,
        to_email: 'bilalsubhani2222@gmail.com',
        message: form.message,
      },
      '91jlg7JO_9d83JXU8'

    ).then(() => {
      setLoading(false);
      alert('Thank You. Will get back to you soon !')
      setForm({
        name: "",
        email: "",
        message: ""
      })
    },(error)=>{
      setLoading(false)
      console.log(error);
      alert('Something Went Wrong')
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h2 className={styles.sectionHeadText}
        >Contact. </h2>

        <form
          ref={formRef}
          onSubmit={hanldeSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4 ' >Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={hanldeChange}
              placeholder='What is your Name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none border-none font-medium'


            >
            </input>

          </lable>


          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4 ' >Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={hanldeChange}
              placeholder='What is your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none border-none font-medium'


            >
            </input>

          </lable>


          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4 ' >Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={hanldeChange}
              placeholder='What do you want to say...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none border-none font-medium'


            >
            </textarea>

          </lable>

          <button
            type='submit'
            className='bg-tertiary text-white py-3 px-8 
            outline-none w-fit font-bold shadow-md 
            shadow-primary rounded-2xl '
          >
            {loading ? 'Sending...' : 'Send'}
          </button>





        </form>

      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact")