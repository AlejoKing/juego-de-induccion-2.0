import React from "react";
import logo from "./logo.svg";
import "./adu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, tName: "Alejandro", tEmail: "email1@it-seekers.com", tPassword: "12345", roles:"Admin" },
  { id: 2, tName: "Cristina", tEmail: "email2@it-seekers.com", tPassword: "12345", roles:"Admin" },
  { id: 3, tName: "Rogelio", tEmail: "email3@it-seekers.com", tPassword: "12345", roles:"Admin" },
  { id: 4, tName: "Kevin", tEmail: "email4@it-seekers.com", tPassword: "12345", roles:"Admin" },
  { id: 5, tName: "Ricardo", tEmail: "email4@it-seekers.com", tPassword: "12345", roles:"Admin" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      tName: "",
      tEmail: "",
      tPassword:"",
      roles:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].tName = dato.tName;
        arreglo[contador].tEmail = dato.tEmail;
        arreglo[contador].tPassword = dato.tPassword;
        arreglo[contador].roles = dato.roles;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Usuario</Button>
          <br />
          <br />
          <Table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>

              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.tName}</td>
                  <td>{dato.tEmail}</td>
                  <td>{dato.roles}</td>
                  
                  

                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="tName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tName}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="tEmail"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tEmail}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contraseña: 
              </label>
              <input
                className="form-control"
                name="tPassword"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tPassword}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Rol: 
              </label>
              <input
                className="form-control"
                name="roles"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.roles}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="tName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="tEmail"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Contraseña: 
              </label>
              <input
                className="form-control"
                name="tPassword"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Rol: 
              </label>
              <input
                className="form-control"
                name="roles"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>




          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="boton1"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
