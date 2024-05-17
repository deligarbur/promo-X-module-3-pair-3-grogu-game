// el map trae nuevos datos de un array principal

function GoodsContainer ({ data }) {
  return (
    <section className="goods-container">
      { data.map((item, index) =>
        <div key={ index } className="goods-item">
          { item }
        </div>
      ) }
    </section>
  )
}

export default GoodsContainer
