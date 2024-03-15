export default function Card(props){
    return (
        <section className="Card" style={{display:"flex", justifyContent:"space-between", margin:"20px",flexDirection:`${props.flexDirection}`}}>
            <div className="Text" style={{height:'60%'}}>
                <p style={{fontSize:'20px'}}>
                    {props.cardtext}
                </p>
            </div>
            
            <img src={`${props.imgsrc}`} alt={props.alttext} style={{width:'100%', height:"40%"}}/>
        </section>
    )
}