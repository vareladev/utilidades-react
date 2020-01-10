import React from 'react'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

class SelectTag extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
    }
    
    render(){
        return (
            <ReactTagInput 
                {...{ placeholder: "Ingresa una etiqueta y presiona enter", maxTags: 10, removeOnBackspace: true }}
                tags={this.state.options} 
                onChange={(newTags) => {
                    this.setState({ options: newTags }, 
                        function () {
                            console.log("etiquetas: ",this.state.options);
                        }
                    )}
                }
            />
        );
    }

}

export default SelectTag;