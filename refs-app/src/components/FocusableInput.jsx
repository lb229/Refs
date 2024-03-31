/*Create a FocusableInput component that renders an input tag. As soon as the component renders, the input tag should be focused automatically. */


import { useEffect, useRef } from "react"

export function FocusableInput (){
  const inputRef = useRef(null)

  //we use useEffect to hook perform side effects in function components. we want to focus in the input element as soon as the components mounts, we used a dependency array to ensure that the effect runs only once after the initial render
  useEffect(() => {
inputRef.current?.focus()
  }, [])
//"?" the chaining operator allows you to safely access properties and methods of an object without causing an error if the object is null or undefined 
  return (
    <>
    <input name="input" ref={inputRef} />
    </>
  )
}