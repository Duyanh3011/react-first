import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Container, Alert, FormGroup, FormControl } from 'react-bootstrap'

export default function Vidu1() {
  const init = {
    code: '',
    name: '',
    gender: 'male'
  }
  const [student, setStudent] = useState(init)
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const [code1, setCode1] = useState()
  const handleChangeCode = (e) => {
    setCode1(e.target.value);
  }
  return (
    <div>
      <Container>
        <Alert variant='primary'>
          <FormGroup>
            <label htmlFor='code1'>Enter code 1</label>
            <FormControl value={code1}
              onChange={handleChangeCode}
              name='code1'
              type='text'
              placeholder='Enter code1'>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <label htmlFor='code'>Enter code</label>
            <FormControl value={student.code}
              onChange={handleChange}
              name='code'
              type='text'
              placeholder='Enter code'>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <label htmlFor="name">Enter name</label>
            <FormControl
              value={student.name}
              onChange={handleChange}
              name='name'
              type="text" placeholder="Enter name" />
          </FormGroup>
          <FormGroup className='d-flex flex-row'>
            <legend className='col-form-label col-sm-1 pt-2'>
              Gender:
            </legend>
            <div className='col-2 pt-2'>
              <input value="male" onChange={handleChange}
                checked={student.gender === 'male'}
                type='radio' name="gender" id='male' />
              <label htmlFor="male">Male</label>
            </div>
            <div className='col-2 pt-2'>
              <input
                value="female"
                onChange={handleChange}
                checked={student.gender === 'female'}
                type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </FormGroup>

          <Table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Code 1</th>
              </tr>
            </thead>
            <tbody className='body-item'>
              <tr>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{code1}</td>
              </tr>
            </tbody>
          </Table>
        </Alert>
      </Container>
    </div>
  )
}
