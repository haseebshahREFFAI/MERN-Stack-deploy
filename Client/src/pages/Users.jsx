import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const navbar = [
  { title: "Dashboard", url: "admin-dashboard" },
  { title: "Manage Jobs", url: "#" },
  { title: "Manage Scholarships", url: "scholarship" },
  { title: "Users", url: "users" },
  { title: "Roles", url: "#" },
];

export default function Users() {
  const [users, setUsers] = useState();

  const handleFetch = async () => {
    const config = {
      method: "GET",
      url: "/api/user/fetch",
    };
    const response = await axios(config);
    setUsers(response?.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <div className="bg-dark text-white">
        <div
          id="sidebar"
          style={{
            display: "flex",
            paddingBlock: ".5em",
            width: "92%",
            margin: "auto",
          }}
        >
          <h2>ED OP</h2>
          <ul
            className="list-unstyled"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {navbar?.map((item) => (
              <li style={{ marginInline: ".5em" }}>
                <Link to={`/${item?.url}`}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="content" className="container-fluid">
        {/* <div class='d-flex justify-content-end mt-5'>
          <button type='button' id='createJobsBtn' class='btn btn-success float-right' data-toggle='modal' data-target='#createJobsModal'>
            Create Jobs
          </button>
        </div>

        <div class='modal fade' id='createJobsModal' tabIndex='-1' role='dialog' aria-labelledby='createJobsModalLabel' aria-hidden='true'>
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='createJobsModalLabel'>
                  Create Jobs
                </h5>
                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>
                <form id='createJobsForm' onSubmit={handleSubmit}>
                  <div class='form-group'>
                    <label for='scholarshipTitle'>Job Title</label>
                    <input type='text' class='form-control' id='scholarshipTitle' required onChange={(e) => setTitle(e.target.value)} />
                  </div>

                  <div class='form-group'>
                    <label for='Education Type'>Salary</label>
                    <input type='number' class='form-control' id='Education Type' required onChange={(e) => setSalary(e.target.value)} />
                  </div>

                  <div class='form-group'>
                    <label for='Country'>Country</label>
                    <input type='text' class='form-control' id='Country' required onChange={(e) => setCountry(e.target.value)} />
                  </div>

                  <button type='submit' class='btn btn-primary'>
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">birthday</th>
              <th scope="col">role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="jobsTableBody">
            <tr>
              <th scope="row">1</th>
              <td>Nami</td>
              <td>1999</td>
              <td>Admin</td>
              <td>
                <button class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
