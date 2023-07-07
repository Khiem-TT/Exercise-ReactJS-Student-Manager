import {useState} from 'react'
import './App.css'

function App() {
    const [listStudent, setListStudent] = useState([]);
    const [student, setStudent] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isValid, setIsValid] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setStudent({...student, [name]: value});
    }
    const addStudent = () => {
        const newStudent = {
            name: student.name,
            phone: student.phone,
            email: student.email
        }
        setListStudent([...listStudent, newStudent]);
    }
    const deleteStudent = (id) => {
        const newListStudent = listStudent.filter((student, index) => index !== id);
        setListStudent(newListStudent);
    }
    return (
        <div>
            <div>
                <h1>Student List</h1>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone: </label>
                    <input type="number" name="phone" onChange={handleChange}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                <button onClick={addStudent}>Submit</button>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listStudent.map((student, index) => (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => deleteStudent(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
