import useNavigation from "../hooks/use-navigation";


const Link = ({to, children}) => {

    const {navigate} = useNavigation();

    const handleClick = (event) => {

        if(event.metaKey || event.ctrlKey) {
          return;
        }
        event.preventDefault();

        navigate(to)

    }

  return (
    <>
        <a className='text-blue-500 mt-2 ml-4' href={to} onClick={handleClick}>{children}</a>
    </>
  )
}

export default Link