import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emaijs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handelChange = (e) => {
    console.log("this is value contact 22: ", e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("this emails submit!");

    setLoading(true);
    emaijs.send(
      'service_s7jl9hl', 
      'template_5bi7xsf', 
      {
        from_name: form.name,
        to_name: 'P&T',
        from_email: form.email,
        to_email: 'austinphan2022@gmail.com',
        message: form.message
      },
      'n2DXqgt7TsC4NAGxy'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm( {
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console(error);
        alert('Something went wrong.')
      })
  }
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handelChange} 
              placeholder='Enter name' 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handelChange} 
              placeholder='Enter email' 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea  
              rows="7"
              type="text" 
              name="message" 
              value={form.message}  
              onChange={handelChange} 
              placeholder='Enter Message' 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
          </label>
          <button 
            type="submit" 
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >Send</button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');