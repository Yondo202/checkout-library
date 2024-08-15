

 type CheckHomeProps = {
  hideButton?:boolean
}

const CheckoutHome = ({hideButton}:CheckHomeProps) => {
  return (
    <div>
      <h1 className="clib-text-red-500">home page</h1>
      {!hideButton && <button className="clib-text-blue-500 clib-border clib-border-red-500">this is Buttooon</button>}
    </div>
  )
}

export default CheckoutHome
