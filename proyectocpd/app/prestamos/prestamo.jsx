const Prestamos = () => {
    return fetch('http://localhost:3002/api/prestamos').then(res => {
        console.log(JSON.stringify(res));
        return res.json();
    });
  }
export default async function prestamo(){
    const prestamos = await Prestamos()
    return (
        <tbody>
            {prestamos.map(prestamo => (
                <tr key={prestamo.id}>
                    <td>{prestamo.id}</td>
                    <td>{prestamo.idsucursal}</td>
                    <td>{prestamo.cantidad}</td>
                </tr>
            ))}
        </tbody>
    )
}