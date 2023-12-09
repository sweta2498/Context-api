import { CommonContext } from "./CommonContext";

function UpdateButton()
{
    return(
        <div className="App">
            <CommonContext.Consumer>
                {
                    ({updateColor,color})=>(
                        <div>
                            <button style={{backgroundColor:color}} className="btn" onClick={()=>updateColor('yellow')}>Update</button>
                            <button style={{backgroundColor:color}} className="btn" onClick={()=>updateColor('orange')}>Update</button>
                            <button style={{backgroundColor:color}} className="btn" onClick={()=>updateColor('lightblue')}>Update</button>
                            <button style={{backgroundColor:color}} className="btn" onClick={()=>updateColor('lightgreen')}>Update</button>
                        </div>
                    )
                }
            </CommonContext.Consumer>
        </div>
    )
}
export default UpdateButton;
