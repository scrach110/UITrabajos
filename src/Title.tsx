
type titleProps = {
    title: string
}


export const Title: React.FC<titleProps> = ({ title })  => {
    
    return(
    <>
    <div className="row">
         <h1>{ title }</h1>
    </div>
   

    </>
)
    
}