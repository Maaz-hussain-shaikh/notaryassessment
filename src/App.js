import { React, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, updata] = useState([]);

  const fetchdata = async () => {
    const main = await fetch("http://demo2211087.mockable.io/mock", {
      method: 'POST',
      headers: {
        'Accept': 'name',
        'Content-Type': 'text/html',
        'Path': 'mock',

      },
      body: {}
    })
    const json = await main.json();
    updata(json.companies);
  }
  useEffect(() => {
    fetchdata();
  }, [])
  
  return (
    <>
      <nav className="nav">
        <ul>
          <div className='navdiv'>

            <li>
              <a href='/'>Client </a>
            </li>
          </div>
          <div className='navdiv'>

            <li>
              <a href='/'>Orders </a>
            </li>
          </div>
          <div className='navdiv'>

            <li>
              <a href='/'>Messages</a>
            </li>
          </div>
          <div className='navdiv'>

            <li>
              <a href='/'>User</a>
            </li>
          </div>
          <div className='navdiv'>

            <li>
              <a href='/'>settings</a>
            </li>
          </div>
        </ul>
      </nav>
      <hr />


      <div>
        <div className='namelist'>
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-responsive-xl">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Status</th>

                    <th>&nbsp;</th>
                  </tr>
                </thead>




                <tbody>

                  {data.map((elm, index) => {
                    
                    return (<>
                      <tr className="alert" role="alert">
                        <td>
                          <label className="checkbox-wrap checkbox-primary">
                            <h3>{index}</h3>
                            <span className="checkmark"></span>
                          </label>
                        </td>
                        <td className="d-flex align-items-center">

                          <div className="pl-3 email">
                            <span>{data[index].email}</span>

                          </div>
                        </td>
                        <td>{data[index].name}</td>
                        <td className="status"><span className="active">{data[index].status}</span></td>
                      </tr>
                    </>);

                  })}



                </tbody>

              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
