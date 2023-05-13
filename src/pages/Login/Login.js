import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <div className='container mt-3'>
        <h1 className='text-center'>Login</h1>
        <form>
          <div className='row mt-3'>
            <label>
              E-mail:
              <input className='form-control' type="text" name="username" />
            </label>
          </div>

          <div className='row mt-3'>
            <label>
              Senha:
              <input className='form-control' type="password" name="password" />
            </label>
          </div>

          <div className='row mt-3'>
            <button className='btn btn-success' to="/Carros" type="submit">Logar</button>
            <Link to="/cadastro">Criar uma conta</Link>
          </div>
        </form>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </>
  );
}

export default Login;
