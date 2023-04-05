export const Button1 = ({ name }) => {
  return (
    <div  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-dark transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-light group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-dark dark:bg-primary group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" color="green">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" color="green">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-light">{name}</span>
</div>
  );
};


export const Button2 =({name})=>{
return(
  <div  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-light rounded hover:bg-light group">
<span className="w-48 h-48 rounded rotate-[-40deg] bg-primaryDark absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{name}</span>
</div>
)
}
