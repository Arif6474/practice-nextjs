/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

function NotFound() {
    const router =useRouter()
    setTimeout(() =>{
        router.push('/')
    },5000)
  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" 
      width="100%"
      />
    </div>
  );
}

export default NotFound;
