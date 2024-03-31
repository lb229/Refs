import { useEffect, useRef } from "react";

export function RandomComponent() {
  //useRef hook initializes the ref with an initial value of null by default. ref.current wil be null until it's assigned a value
  const isMounted = useRef();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      console.log("Component mounted for the first time");
    }
  });
  return (
    <>
      <p>Hello I'm Using the Ref</p>
    </>
  );
}
