

function Student () {
    return(
        <>
            <div style={{marginTop:'0.5em'}}>
                <div>
                    <h3 style={{textAlign:'center', marginBottom:'0.5em'}}>Student Login</h3>
                </div>
                <div>
                    <div style={{backgroundColor:'lightgray', alignItems:'center', padding:'2em', alignContent:'flex-start', display:"flex", flexDirection:'column'}}>
                        <div style={{marginBottom:'2em'}}>
                            <input type="text" placeholder="Username" style={{height:'2em', padding:'1em', border:'none'}} />
                        </div>
                        <div  style={{marginBottom:'2em'}}>
                            <input type="password"  placeholder="Password" style={{height:'2em', padding:'1em', border:'none'}}/>
                        </div>
                        <div >
                            <button style={{backgroundColor:'cyan', padding:'0.5em', border:'none', borderRadius:'.5em', width:'5em'}}>Login</button>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Student