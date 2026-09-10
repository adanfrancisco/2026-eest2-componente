import { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Table, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import argentinaStates from "../files/argentina_states.json";
import argentinaLocalities from "../files/argentina_localities.json";

const countries = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Perú",
  "Surinam",
  "Uruguay",
  "Venezuela",
];

const initialPeople = [
  { id: 1, name: "Juan Pérez", email: "juan@email.com", country: "Argentina", phone: "+54 9 11 1234-5678" },
  { id: 2, name: "María González", email: "maria@email.com", country: "Bolivia", phone: "+591 7 1234567" },
  { id: 3, name: "Carlos Silva", email: "carlos@email.com", country: "Brasil", phone: "+55 11 98765-4321" },
  { id: 4, name: "Ana Martínez", email: "ana@email.com", country: "Chile", phone: "+56 9 8765 4321" },
  { id: 5, name: "Luis Rodríguez", email: "luis@email.com", country: "Colombia", phone: "+57 300 123 4567" },
  { id: 6, name: "Sofía Fernández", email: "sofia@email.com", country: "Ecuador", phone: "+593 9 8765 4321" },
  { id: 7, name: "Pedro López", email: "pedro@email.com", country: "Guyana", phone: "+592 6 123 4567" },
  { id: 8, name: "Laura Torres", email: "laura@email.com", country: "Paraguay", phone: "+595 9 8123 4567" },
  { id: 9, name: "Diego Vargas", email: "diego@email.com", country: "Perú", phone: "+51 9 8765 4321" },
  { id: 10, name: "Carmen Ruiz", email: "carmen@email.com", country: "Uruguay", phone: "+598 9 1234 5678" },
];

const Formulario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    country: "",
    province: "",
    locality: "",
    phone: "",
    photo: null,
  });

  const [validated, setValidated] = useState(false);
  const [people, setPeople] = useState(initialPeople);
  const [searchTerm, setSearchTerm] = useState("");
  const [nextId, setNextId] = useState(11);

  const provinces = formData.country === "Argentina" ? argentinaStates : [];

  const localities = formData.province
    ? argentinaLocalities
        .filter(loc => loc.code === formData.province)
        .map(loc => loc.name)
        .sort()
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setFormData({ ...formData, [name]: value, province: "", locality: "" });
    } else if (name === "province") {
      setFormData({ ...formData, [name]: value, locality: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const newPerson = {
      id: nextId,
      name: formData.name,
      email: formData.email,
      country: formData.country,
      province: formData.province,
      locality: formData.locality,
      phone: formData.phone,
    };

    setPeople([...people, newPerson]);
    setNextId(nextId + 1);

    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      country: "",
      province: "",
      locality: "",
      phone: "",
      photo: null,
    });
    setValidated(false);
  };

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (person.province && person.province.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.locality && person.locality.toLowerCase().includes(searchTerm.toLowerCase())) ||
    person.phone.includes(searchTerm)
  );

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Registrar Persona</h2>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ejemplo@correo.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa un email válido.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Clave *</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                        placeholder="Mínimo 6 caracteres"
                      />
                      <Form.Control.Feedback type="invalid">
                        La clave debe tener al menos 6 caracteres.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirmar Clave *</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="Confirma tu clave"
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor confirma tu clave.
                    </Form.Control.Feedback>
                    {formData.password &&
                      formData.confirmPassword &&
                      formData.password !== formData.confirmPassword && (
                        <Form.Text className="text-danger">
                          Las contraseñas no coinciden
                        </Form.Text>
                      )}
                  </Form.Group>
                </Col>

                <hr className="my-4" />

                <h2 className="text-center mb-4">Datos Personales</h2>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Nombre *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa tu nombre.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formCountry">
                      <Form.Label>País *</Form.Label>
                      <Form.Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione un país</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Por favor selecciona un país.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  {formData.country === "Argentina" && (
                    <>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formProvince">
                          <Form.Label>Provincia *</Form.Label>
                          <Form.Select
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Seleccione una provincia</option>
                            {provinces.map((province) => (
                              <option key={province.code} value={province.code}>
                                {province.name}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Por favor selecciona una provincia.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formLocality">
                          <Form.Label>Localidad *</Form.Label>
                          <Form.Select
                            name="locality"
                            value={formData.locality}
                            onChange={handleChange}
                            required
                            disabled={localities.length === 0}
                          >
                            <option value="">Seleccione una localidad</option>
                            {localities.map((locality) => (
                              <option key={locality} value={locality}>
                                {locality}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Por favor selecciona una localidad.
                          </Form.Control.Feedback>
                          {localities.length === 0 && (
                            <Form.Text className="text-muted">
                              Primero seleccione una provincia
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                    </>
                  )}
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Teléfono *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+54 9 11 1234-5678"
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa un número de teléfono.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhoto">
                      <Form.Label>Foto *</Form.Label>
                      <Form.Control
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        required
                      />
                      <Form.Text className="text-muted">
                        Formatos permitidos: JPG, PNG, GIF (máximo 5MB)
                      </Form.Text>
                      {formData.photo && (
                        <Form.Text className="d-block mt-1">
                          Archivo seleccionado: {formData.photo.name}
                        </Form.Text>
                      )}
                      <Form.Control.Feedback type="invalid">
                        Por favor selecciona una foto.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button variant="primary" type="submit" size="lg">
                    Agregar Persona
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Lista de Personas</h3>

              <div className="mb-3">
                <InputGroup>
                  <InputGroup.Text>Buscar</InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Buscar por nombre, email, país, provincia, localidad o teléfono..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </div>

              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>País</th>
                      <th>Provincia</th>
                      <th>Localidad</th>
                      <th>Teléfono</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPeople.length > 0 ? (
                      filteredPeople.map((person, index) => (
                        <tr key={person.id}>
                          <td>{index + 1}</td>
                          <td>{person.name}</td>
                          <td>{person.email}</td>
                          <td>{person.country}</td>
                          <td>{person.province || "-"}</td>
                          <td>{person.locality || "-"}</td>
                          <td>{person.phone}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center">
                          No se encontraron resultados
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>

              <div className="text-muted text-center mt-2">
                Total: {filteredPeople.length} de {people.length} personas
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;