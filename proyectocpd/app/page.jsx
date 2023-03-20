import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <h2>Agregar una sucursal</h2>
                <div className="form-group">
                  <label htmlFor="idSucursal">Sucursal ID</label>
                  <input type="text" className="form-control" id="idSucursal" name="idSucursal" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="ciudad">Ciudad</label>
                  <input type="text" className="form-control" id="ciudad" name="ciudad" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="activos">Activos</label>
                  <input type="number" min={0} className="form-control" id="activos" name="activos" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="region">Región</label>
                  <select className="form-control" id="region" name="region" required>
                    <option value="" selected disabled>Selecciona una región</option>
                    <option value="1">Norte</option>
                    <option value="2">Sur</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Agregar sucursal</button>
              </form>
            </div>
            <div className="col-md-6">
              <form>
                <h2>Agregar préstamo</h2>
                <div className="form-group">
                  <label htmlFor="NoPrestamo">No de préstamo</label>
                  <input type="text" className="form-control" id="NoPrestamo" name="NoPrestamo" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="sucursalId">Sucursal ID</label>
                  <input type="text" className="form-control" id="sucursalId" name="sucursalId" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="cantidad">Cantidad</label>
                  <input type="number" min={0} className="form-control" id="cantidad" name="cantidad" required/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar préstamo</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Sucursales</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Sucursal Id</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Activos</th>
                    <th>Región</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S0001</td>
                    <td>Downtown</td>
                    <td>Brooklyn</td>
                    <td>900,000</td>
                    <td>Norte</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h2>Préstamos</h2>
              <table className="table">
                  <thead>
                    <tr>
                      <th>No de préstamo</th>
                      <th>Sucursal Id</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>S0001</td>
                      <td>20,000</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    </main>
  )
}
