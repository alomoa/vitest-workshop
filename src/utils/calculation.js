export function sum(){
  return Array.from(arguments).reduce((prev, current) => {
    const normalised = Number(current);
    if(isNaN(normalised)) throw new Error("Not a number", current)

    return prev + Number(current)  
  } , 0);
}