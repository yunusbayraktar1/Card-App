function Card({ tittle, par,ders,index }) {
    return <div className="Card">
        <h6>{tittle}</h6>
        <b>{index}</b>
        <p>{par}</p>
        {ders>20 && index===0 &&<div>İleri Düzey</div >}
        {/* ders 20 den büyükse bunu yap değilse(:)şunu yap  */}
    </div>;
}
export default Card;