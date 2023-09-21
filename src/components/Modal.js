import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';




const SignupSchema = Yup.object().shape({
  username: Yup.string()
  .min(5, 'Cлишком короткое имя')
  .max(50, 'Слишком длинное имя')
  .required('Required')
  .matches(/^[aA-zZ]+$/, "Forbidden symbol"),
  password: Yup.string()
  .required('Required')
  .min(5, 'Слишком короткий пароль')
  .max(15, "Слишком длинный пароль")
  .matches(/^[aA-zZ0-9.-_--]+$/, "Forbidden symbol"),
 });
 
 

 const Modal = ({setIsAuth}) => {
  const [login,setLogin] = useState ("")
  const [password,setPassword] = useState ("")
const handlePassword = (e) => {
setPassword(e.target.value)
}
  const handleLogin =(e) =>{
setLogin(e.target.value)
  }

const handleSubmit = async () => {
const config = {
method: "POST",
url: "http://localhost:8080/test",
headers: {
"Content-Type":"application/json"
},
data:JSON.stringify({
username: login,
password: password
})
}
const {data} = await axios(config)
setIsAuth(data);
}



  return (
  
  <div>
  <div className="bg-grey-lighter min-h-screen flex flex-col ">
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
  <div className="bg-white px-6 py-8 rounded shadow-md text-black w-username">
  <i className="fa-solid fa-xmark absolute top-10 right-10 " ></i>
  <h1 className="mb-8 text-3xl text-center">Sign up</h1>
  
  <Formik
  initialValues={{
  
  username: '',
  password: '',
  }}
  validationSchema={SignupSchema}
  onSubmit={values => {
  
  console.log(values);
  }}
  >
  {({ errors, touched, values, handleChange }) => (
  <Form>
  <div className='relative'>
  <input
  type="text"
  className= {`block border border-grey-light w-full p-3 rounded mb-6 ${errors.username && touched.username ? "border border-red-500": ""}`}
  name="username"
  placeholder="Username"
  onChange={handleChange}
  onInput={handleLogin}
  />
  
  {errors.username && touched.username ? (
  <div className='modal__error'>{errors.username}</div>
  ) : null}
  </div>
  
  {/* <div className='relative'>
  <input
  type="text"
  className= {`block border border-grey-light w-full p-3 rounded mb-6 ${errors.username && touched.username ? "border border-red-500": ""}`}
  name="email"
  placeholder="Email"
  onChange={handleChange}
  />
  
  {errors.email && touched.email ? (
  <div className="modal__error">{errors.email}</div>
  ) : null}
  </div> */}
  <div className='relative'>
  <input
  type="password"
  className= {`block border border-grey-light w-full p-3 rounded mb-6 ${errors.username && touched.username ? "border border-red-500": ""}`}
  name="password"
  placeholder="Password"
  onChange={handleChange}
  onInput={handlePassword}
  />
  {errors.password && touched.password ? (
  <div className='modal__error'>{errors.password}</div>
  ) : null}
  </div>
 
  <button onClick={handleSubmit}  type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
  >Create Account</button>
  
  </Form>
  )}
  </Formik>
  
  <div className="text-center text-sm text-grey-dark mt-4">
  By signing up, you agree to the
  <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
  Terms of Service
  </a> and
  <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
  Privacy Policy
  </a>
  </div>
  </div>
  
  <div className="text-grey-dark mt-6">
  Already have an account?
  <a className="no-underline border-b border-blue text-blue" href="../login/">
  Log in
  </a>.
  </div>
  </div>
  </div></div>
  )
 }
  
 export default Modal
 
// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(5, 'Cлишком короткое имя')
//     .max(50, 'Слишком длинное имя')
//     .required('Required'),
//     lastName: Yup.string()
//      .min(2, 'Слишком короткая фамилия')
//      .max(50, 'Слишком длинная фамилия')
//      .required('Required'),
//    userName:  Yup.string().email('Invalid email').required('Required'),
//    password: Yup.string()
//    .min(5, 'Cлишком короткий пароль')
//    .max(50, 'Слишком длинный пароль')


// });
// const Modal = ({modal,setModal}) => {
// const modalClose = () => {
//     setModal(false)
// }
//   return (
    
//         <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center" >
//   <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
//     <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
//         <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
//       </svg>
//     </div>

//     <Formik
//        initialValues={{
//          firstName: '',
//          lastName: '',
//          userName: '',
//          password: '',
//        }}
//        validationSchema={SignupSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//         {({ errors, touched }) => (
//     <Form className="p-12 md:p-24">
//       <div className="flex items-center text-lg mb-6 md:mb-8">
//         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
//           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
//         </svg>
//         {errors.userName && touched.userName ? <div>{errors.userName}</div> : null}
//         <input type="email" id="userName" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
//       </div>
//       <div className="flex items-center text-lg mb-6 md:mb-8">
//         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
//           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
//         </svg>
//         {errors.firstName && touched.firstName ? (
//              <div>{errors.firstName}</div>
//            ) : null}
//         <input type="text" id="firstName" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Firstname" />
//       </div>
//       <div className="flex items-center text-lg mb-6 md:mb-8">
//         <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
//           <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
//         </svg>
//         {errors.lastName && touched.lastName ? (
//              <div>{errors.lastName}</div>
//            ) : null}
//         <input type="text" id="lastName" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Lastname" />
//       </div>
//       <div className="flex items-center text-lg mb-6 md:mb-8">
//         <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
//           <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
//         </svg>
//         {errors.password && touched.password ? <div>{errors.password}</div> : null}
//         <input type="password" id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
//       </div>
//       <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Login</button>
//     </Form>
//       )}
//       </Formik>
//   </div>
//   <p className='modal__closer' onClick={modalClose}>
//     X
//   </p>
//  </div>
   
//   )
// }

// export default Modal

