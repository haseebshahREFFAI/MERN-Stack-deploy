import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectImage from './jobs_images/project.png';
import uxImage from './jobs_images/ux.png';
import { Link } from 'react-router-dom';

const navbar = [
  { title: 'Dashboard', url: '#' },
  { title: 'Manage Jobs', url: 'job' },
  { title: 'Manage Scholarships', url: 'scholarship' },
  { title: 'Users', url: '#' },
  { title: 'Roles', url: '#' },
];

const AdminDashboard = () => {
  return (
    <div>
      <div className='bg-dark text-white'>
        <div id='sidebar' style={{ display: 'flex', paddingBlock: '.5em', width: '92%', margin: 'auto' }}>
          <h2>ED OP</h2>
          <ul className='list-unstyled' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
            {navbar?.map((item) => (
              <li style={{ marginInline: '.5em' }}>
                <Link to={`/${item?.url}`}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id='jobs' className='container ml-5 p-3'>
        <h2>Jobs</h2>
        <div class='row mt-4 d-flex justify-content-center'>
          <div class='col-md-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={projectImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={uxImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={uxImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>
          <div class='col-md-4 mt-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={uxImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>
          <div class='col-md-4 mt-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={uxImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>
          <div class='col-md-4 mt-4'>
            <div class='card' style={{ width: '23rem' }}>
              <img class='card-img-top' src={uxImage} alt='Card image cap' style={{ height: '200px' }} />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p style={{ fontSize: '16px' }}>
                  Shape user experiences and interfaces through intuitive design, combining creativity with user-centric thinking to produce visually
                  striking and user-friendly digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='scholarships' className='ml-5 p-3'>
        <h2>Scholarships</h2>
        <p>Scholarships manage section.</p>
      </div>

      <div id='users' className='ml-5 p-3'>
        <h2>Users</h2>
        <p>Users section.</p>
      </div>

      <div id='roles' className='ml-5 p-3'>
        <h2>Roles</h2>
        <p>Roles section.</p>
      </div>

      <div id='profile' className='ml-5 p-3'>
        <h2>Profile</h2>
        <p>Profile section.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
