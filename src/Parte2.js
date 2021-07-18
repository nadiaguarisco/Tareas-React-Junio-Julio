import React from "react";
//la clase parte2 extiende de la clase Component  
class Parte2 extends React.Component {
        constructor() {
            super();
            this.state = { data: [] };
          }
          //Se sobre escribe la funcion componentDidMount y se pasa la url del enpoint donde se encuentra los albunes
          componentDidMount() {
            fetch(`https://jsonplaceholder.typicode.com/photos`)
            //la respuesta del fetch es convertida a json
              .then(res => res.json())
            //el json es cargado en la vareable State
              .then(json => this.setState({ data: json }));
          }
        //renderiza la tabla de albunes usando map
          render() {
            return (
                  <div>
                      <h1>Albunes</h1>
                      <p>Albunes de prueba sacados del endpoint https://jsonplaceholder.typicode.com/photos</p>
                      <p>pd: demora un poquito en cargar jeje</p>
                    <table>
                        <thead>
                            <th>Titulo</th>
                            <th>Imagen</th>
                        </thead>
                        <tbody>
                            {this.state.data.map(album => (
                            <tr>
                                <td>{album.title}</td>
                                <td><img src={album.thumbnailUrl} /></td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                  </div>
            );
          }
}
    export default Parte2;
