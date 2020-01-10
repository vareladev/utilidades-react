import React from 'react'
import Select from 'react-select';

class ReactSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options : [
                {value: 1, label: "rojo"},
                {value: 2, label: "amarillo"},
                {value: 3, label: "verde"},
                {value: 4, label: "azul"},
            ],
            selectedOptions: [],
        };

        this.handleSelect = this.handleSelect.bind(this);

    }

    handleSelect = (selectedOptions) => {
        this.setState({ selectedOptions });
    }

    render(){
        return (
            <div>
                <label htmlFor="select">Selecciona una o varias opciones:</label>
                <Select
                    isMulti
                    value={this.state.selectedOptions}
                    onChange={this.handleSelect}
                    options={this.state.options}
                />
            </div>
        );

    }
}

export default ReactSelect;