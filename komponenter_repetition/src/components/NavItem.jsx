
function NavItem() {
  const options = [
    'Home',
    'About',
    'Movies',
    'Log In'
  ]

  const user = false;
  
  return (
    <>
      {
        options.map((option, index) => {
          return <li key={ index }>{ option }</li>
        })
      }
    </>
  )
}
export default NavItem
