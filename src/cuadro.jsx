import { Table, Container } from 'react-bootstrap';

export const Cuadro = ({ motores }) => {
  return (
    <Container style={{ marginTop: '2em', marginBottom: '2em' }}>
      <h2 className="text-center mb-4">Comparación General de Motores y Frameworks</h2>
      <Table striped bordered hover responsive >
        <thead >
          <tr >
            <th>Motor / Framework</th>
            <th>Lenguaje principal</th>
            <th>Data Binding</th>
            <th>Filosofía</th>
            <th>Uso ideal</th>
          </tr>
        </thead>
        <tbody>
          {motores.map((motor, index) => {
            let dataBinding = '—';
            let filosofia = motor.paradigma;
            let usoIdeal = 'General';

            // Asignar Data Binding según características conocidas
            if (motor.nombre === 'React') dataBinding = 'Unidireccional';
            if (motor.nombre === 'Angular' || motor.nombre === 'Vue.js') dataBinding = 'Bidireccional';
            if (motor.nombre === 'Svelte') dataBinding = 'Reactividad';
            if (motor.nombre === 'Razor' || motor.nombre === 'Django/Jinja2') dataBinding = '—';

            // Asignar uso ideal según motor
            if (motor.nombre === 'React') usoIdeal = 'Interfaces dinámicas';
            if (motor.nombre === 'Angular') usoIdeal = 'Grandes proyectos';
            if (motor.nombre === 'Vue.js') usoIdeal = 'Proyectos medianos';
            if (motor.nombre === 'Razor') usoIdeal = 'Web con ASP.NET';
            if (motor.nombre === 'Django') usoIdeal = 'Web con Python';

            return (
              <tr key={index}>
                <td>{motor.nombre}</td>
                <td>{motor.lenguaje}</td>
                <td>{dataBinding}</td>
                <td>{filosofia}</td>
                <td>{usoIdeal}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};