

const Navbar = () => {
  return (
      <div className='flex items-center justify-between h-[105px]'>
          <h1 className='text-[var(--deep-grey)] font-bold text-4xl'>{title}</h1>

          <div>
              {children}
          </div>
          
    </div>
  )
}

export default Navbar