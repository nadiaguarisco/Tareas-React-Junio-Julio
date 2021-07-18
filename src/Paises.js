import React from "react";

class Paises extends React.Component {
        constructor() {
            super();
            this.state = { data: [] };
          }
        //le pasamos el url con la lista paises a la funcion componentDidMount
        //la respuesta del fetch es convertida a json
        //el json es cargado en la vareable State
          componentDidMount() {
            fetch(`https://restcountries.eu/rest/v2/all?fields=name`)
              .then(res => res.json())
              .then(json => this.setState({ data: json }));
          }
        //renderiza la lista de paises usando map
          render() {
            return (
              <div>
                <select>
                  {this.state.data.map(pais => (
                    <option>
                      {pais.name}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
}
  export default Paises;