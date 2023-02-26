import useHasMounted from "./useHasMounted"

const OnlyOnClient: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isMounted = useHasMounted()
  
  if (!isMounted) return null

  return (
    <>
      {children}
    </>
  )
}

export default OnlyOnClient