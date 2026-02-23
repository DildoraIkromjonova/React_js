import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  Container, Header, AddBtn, FormWrapper, Input, Select,
  ButtonGroup, CancelBtn, SaveBtn, Table, Actions, IconBtn
} from "./styled";

const Students = () => {

  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    name: "",
    sana: "",
    phone: "",
    teacher: "Azimov Foziljon",
    course: "Frontend",
  };

  const [form, setForm] = useState(initialForm);


   useEffect(()=>{
       fetch("https://692eaf5d91e00bafccd4d6a2.mockapi.io/Students")
  .then((result) => result.json())
  .then((result) =>setStudents (result))
   },[])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(students));
  }, [students]);

  const Change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (!form.name || !form.phone || !form.sana) return;

    const confirmSave = window.confirm("Saqlashni xohlaysizmi?");
    if (!confirmSave) return;

    setStudents((prev) => [
      ...prev,
      { ...form, id: Date.now() }
    ]);

    resetForm();
  };

  const handleUpdate = () => {
    const confirmUpdate = window.confirm("O‘zgarishlarni saqlamoqchimisiz?");
    if (!confirmUpdate) return;

    setStudents((prev) =>
      prev.map((s) =>
        s.id === editingId ? { ...s, ...form } : s
      )
    );

    setEditingId(null);
    setForm(initialForm);
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setForm(student);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Haqiqatan ham o'chirmoqchimisiz?");
    if (!confirmDelete) return;

    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <Container>
      <Header>
        <h2>Talabalar ro‘yxati</h2>
        <AddBtn onClick={() => {
          setShowForm(!showForm);
          setEditingId(null);
          setForm(initialForm);
        }}>
          + Talaba qo‘shish
        </AddBtn>
      </Header>

      {showForm && (
        <FormWrapper>
          <Input
            name="name"
            placeholder="Ism"
            value={form.name}
            onChange={Change}
          />
          <Input
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={Change}
          />
          <Input
            name="sana"
            type="text"
            placeholder="Sana"
            value={form.sana}
            onChange={Change}
          />
          <Select name="teacher" value={form.teacher} onChange={Change}>
            <option>Azimov Foziljon</option>
            <option>Tursunboyev Muhammadjon</option>
            <option>Donyor Umirzoqov</option>
          </Select>
          <Select name="course" value={form.course} onChange={Change}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Mobile</option>
          </Select>

          <ButtonGroup>
            <CancelBtn onClick={resetForm}>Cancel</CancelBtn>
            <SaveBtn onClick={handleAdd}>Save</SaveBtn>
          </ButtonGroup>
        </FormWrapper>
      )}

      <Table>
        <thead>
          <tr>
            <th>Ism</th>
            <th>Sana</th>
            <th>Telefon</th>
            <th>O‘qituvchi</th>
            <th>Kurs</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              {editingId === s.id ? (
                <>
                  <td>
                    <Input name="name" value={form.name} onChange={Change} />
                  </td>
                  <td>
                    <Input name="sana" value={form.sana} onChange={Change} />
                  </td>
                  <td>
                    <Input name="phone" value={form.phone} onChange={Change} />
                  </td>
                  <td>
                    <Select name="teacher" value={form.teacher} onChange={Change}>
                      <option>Azimov Foziljon</option>
                      <option>Tursunboyev Muhammadjon</option>
                      <option>Donyor Umirzoqov</option>
                    </Select>
                  </td>
                  <td>
                    <Select name="course" value={form.course} onChange={Change}>
                      <option>Frontend</option>
                      <option>Backend</option>
                      <option>Mobile</option>
                    </Select>
                  </td>
                  <td>
                    <SaveBtn onClick={handleUpdate}>Save</SaveBtn>
                    <CancelBtn onClick={() => setEditingId(null)}>Cancel</CancelBtn>
                  </td>
                </>
              ) : (
                <>
                  <td>{s.name}</td>
                  <td>{s.sana}</td>
                  <td>{s.phone}</td>
                  <td>{s.teacher}</td>
                  <td>{s.course}</td>
                  <Actions>
                    <IconBtn $edit onClick={() => handleEdit(s)}>
                      <FiEdit2 size={16} />
                    </IconBtn>
                    <IconBtn onClick={() => handleDelete(s.id)}>
                      <FiTrash2 size={16} />
                    </IconBtn>
                  </Actions>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Students;
