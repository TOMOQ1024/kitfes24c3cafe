export default function Price({price, className}: {price: number, className?: string}){
  return (
    <>
      <div className={className}>
        ¥ {price.toLocaleString()}
      </div>
    </>
  );
}
