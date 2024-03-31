1. Create a FocusableInput component that renders an input tag. As soon as the component renders, the input tag should be focused automatically.
2. Using StrictMode, create a component with an effect that prints a message only when the component is mounted the first time.
3. Use a ref to keep track of whether the component is mounted or not.
4. Modify the Counter component so that whenever the value of the counter changes, the value of a ref is updated to contain the direction of the change (i.e. "up" or "down") relative to the initialValue prop.
Print the value of the ref to the console only when it's different from the previous value
