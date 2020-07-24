export const debounce = (func:any, delay:any) => {
    let inDebounce:any;
    return function() {
      
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(null, args), delay)
    }
}
