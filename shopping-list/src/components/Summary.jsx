export default function Summary({ itemsLength }){
  return (
    (
      <footer className="summary mt-4 text-center">
        <strong>You have {itemsLength} items in your shopping cart.</strong>
      </footer>
    )
  )
} 
  